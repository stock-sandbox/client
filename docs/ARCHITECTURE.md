# Feature-Sliced Design (FSD) 아키텍처 가이드

FSD는 복잡한 프론트엔드 애플리케이션을 위한 확장 가능하고 유지보수하기 쉬운 아키텍처 방법론입니다. 이 가이드는 FSD의 핵심 원칙과 실제 프로젝트에 적용하는 방법을 설명합니다.

## 1\. FSD의 핵심 원칙

FSD는 두 가지 핵심 원칙을 기반으로 합니다.

### 가. 계층(Layer) 구조

코드는 역할에 따라 명확한 계층으로 나뉩니다. 상위 레이어는 비즈니스 로직에 더 가깝고, 하위 레이어는 재사용 가능한 기술 코드에 더 가깝습니다.

### 나. 의존성 규칙

의존성은 항상 **상위 레이어에서 하위 레이어로, 한 방향으로만** 흐릅니다. 즉, 하위 레이어는 절대 상위 레이어를 `import` 할 수 없습니다.

**`Pages` → `Widgets` → `Features` → `Entities` → `Shared`**

## 2\. 레이어 상세 설명

### 🦴 `shared` (가장 기초적인 부품)

- **역할**: 애플리케이션의 특정 **비즈니스 로직을 전혀 모르는**, 완전히 재사용 가능한 코드를 모아두는 곳입니다.
- **내용물**: 범용 UI 컴포넌트(Button, Input), API 클라이언트(axios 인스턴스), 유틸리티 함수(formatDate), 범용 커스텀 훅(useDebounce), 상수, 타입 등.
- **규칙**: 다른 어떤 레이어에도 의존하지 않습니다.

### 📦 `entities` (명사: Noun)

- **역할**: 애플리케이션의 핵심 비즈니스 데이터(명사)와 그 데이터를 표현하는 기본 UI를 한 세트로 묶어 관리합니다.
- **내용물**:
  - **`ui/`**: 데이터를 표현하는 가장 작은 UI 단위 (`PostCard`, `UserAvatar`).
  - **`model/`**: 데이터 타입(`type Post`), 데이터를 가져오는 훅(`useQuery`), 쿼리 키, 상태 관리 로직.
  - **`api/`**: 해당 데이터를 조회(`GET`)하는 API 함수.
- **규칙**: `shared` 레이어만 사용할 수 있습니다.

### ✨ `features` (동사: Verb)

- **역할**: 사용자의 구체적인 행동(동사)이나 기능을 캡슐화한 덩어리입니다.
- **내용물**:
  - **`ui/`**: 기능을 실행하기 위한 UI (`LikeButton`, `WriteCommentForm`).
  - **`model/`**: 기능을 실행하는 훅(`useMutation`).
  - **`api/`**: 데이터를 변경(`POST`, `PATCH`, `DELETE`)하는 API 함수.
- **규칙**: `entities`와 `shared` 레이어를 사용할 수 있습니다.

### ⚙️ `widgets` (조립된 모듈)

- **역할**: 여러 `entities`와 `features`를 조합하여 특정 목적을 가진 독립적인 UI 블록을 만듭니다. 페이지의 한 섹션을 담당합니다.
- **내용물**: `LatestPostsWidget`, `UserProfileHeader` 등. 자체적으로 데이터를 불러올 수도 있습니다.
- **규칙**: `features`, `entities`, `shared` 레이어를 사용할 수 있습니다.

### 📄 `app` (완성된 페이지)

- **역할**: 여러 `widgets`과 `features`, `entities`를 최종적으로 조립하여 사용자에게 보여줄 완전한 페이지를 구성합니다.
- **내용물**: 라우팅의 단위가 되는 컴포넌트. 페이지 자체의 상태 관리 외에 복잡한 로직은 갖지 않는 것이 좋습니다.
- **규칙**: `widgets`, `features`, `entities`, `shared` 레이어를 모두 사용할 수 있습니다.

## 3\. 슬라이스와 Public API

### 가. 슬라이스(Slice)

- 각 레이어는 비즈니스 개념에 따라 수평적으로 나뉘는데, 이 각각의 폴더를 **슬라이스**라고 부릅니다.
- 예: `features` 레이어의 `like-post`, `entities` 레이어의 `user`.

### 나. 수평 의존 금지

- **같은 레이어의 슬라이스끼리는 절대 서로를 `import` 할 수 없습니다.**
- **해결책**: 만약 두 슬라이스에 공통 로직이 필요하다면, 그 로직을 더 낮은 레이어(`entities` 또는 `shared`)로 추출해야 합니다.

### 다. Public API (`index.ts`)

- 각 슬라이스는 반드시 최상위에 `index.ts` 파일을 두어 외부에서 사용할 코드만 명시적으로 `export` 해야 합니다.
- 이를 통해 슬라이스 내부의 복잡한 구조를 숨기고(캡슐화), 외부에서는 일관된 방식으로만 슬라이스를 사용하도록 강제합니다.
- **내보낼 대상**: UI 컴포넌트, 커스텀 훅, 그리고 **타입(Type)**.

<!-- end list -->

```ts
// entities/post/index.ts - Public API 예시

// UI 컴포넌트 공개
export { PostCard } from './ui/post-card';

// 쿼리 훅 공개
export { usePost } from './model/hooks';

// 타입 공개
export type { Post } from './model/types';
```

```ts
// 외부에서의 올바른 사용법
import { PostCard, usePost, type Post } from '@/entities/post';

// 잘못된 사용법 (내부 경로에 직접 접근)
// import { PostCard } from '@/entities/post/ui/PostCard';
```

## 4\. Q\&A 및 실용 가이드

- **CRUD 기능은 어떻게 나누나요?**

  - `Create`, `Update`, `Delete`는 각각 사용자의 별도 행동이므로, `features/create-post`, `features/update-post`처럼 별개의 `feature`로 만드는 것이 원칙입니다.

- **`useQuery`와 API 로직은 어디에 두나요?**

  - **데이터 모델 자체**를 조회(`GET`)하는 로직은 \*\*`entities`\*\*에 둡니다.
    - ex) useQuery
  - 데이터를 **변경**(`POST`, `PATCH`)하는 행동과 관련된 로직은 \*\*`features`\*\*에 둡니다.
    - ex) useMutation
  - **특정 위젯**만을 위한 복합 데이터 조회 로직은 \*\*`widgets`\*\*에 둘 수 있습니다.
    - useQuery는 사용가능하나, useMutation(기능에 관한) 로직은 `features` 레이어에 있어야 한다.

- **정렬처럼 UI 상태만 바꾸는 로직은요?**

  - "목록을 정렬한다" 역시 명백한 사용자 기능이므로 \*\*`feature`\*\*로 만듭니다. 이 `feature`는 URL 쿼리 파라미터를 변경하고, `entities`의 `useQuery` 훅이 변경된 URL을 감지하여 데이터를 다시 가져오는 흐름으로 동작합니다.
