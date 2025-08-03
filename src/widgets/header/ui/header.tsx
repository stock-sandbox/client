'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  Button,
  Stack,
  useBreakpointValue,
  HStack,
  Drawer,
  Portal,
  CloseButton,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { IoIosMenu } from 'react-icons/io';
import { userOptions } from '@/entities/user';
import { useQuery } from '@tanstack/react-query';
import { Profile } from '@/widgets/user';
import { useLogout } from '@/features/logout';

/**
 * 모의투자 사이트 헤더 위젯
 * 네비게이션 및 로고를 포함합니다.
 */
export const Header = () => {
  const router = useRouter();
  const { data: user } = useQuery(userOptions());
  const isMobile = useBreakpointValue({ base: true, md: false });
  const { logout } = useLogout();

  console.log(user, 'user');
  return (
    <Box
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
      shadow="sm"
      _dark={{ bg: 'gray.800' }}
    >
      <Container maxW="1200px" py={4}>
        <HStack justify="space-between">
          {isMobile ? (
            <Drawer.Root placement="start" size="full">
              <Drawer.Trigger asChild>
                <Button unstyled cursor="pointer">
                  <IoIosMenu size={24} />
                </Button>
              </Drawer.Trigger>
              <Portal>
                <Drawer.Backdrop />
                <Drawer.Positioner>
                  <Drawer.Content>
                    <Drawer.Header>
                      {/* <Drawer.Title>Drawer Title</Drawer.Title> */}
                      <Heading
                        size="lg"
                        color="blue.500"
                        _dark={{ color: 'blue.300' }}
                      >
                        📈 모의투자 아카데미
                      </Heading>
                    </Drawer.Header>
                    <Drawer.Body>
                      <Flex flexDirection="column" alignItems="start" gap={2}>
                        {NAV_ITEMS.map((item) => (
                          <Button
                            key={item.href}
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push(item.href)}
                          >
                            {item.label}
                          </Button>
                        ))}
                        {user ? (
                          <Button variant="ghost" size="sm" onClick={logout}>
                            로그아웃
                          </Button>
                        ) : (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => router.push('/login')}
                          >
                            로그인
                          </Button>
                        )}
                      </Flex>
                    </Drawer.Body>
                    <Drawer.CloseTrigger asChild>
                      <CloseButton size="sm" />
                    </Drawer.CloseTrigger>
                  </Drawer.Content>
                </Drawer.Positioner>
              </Portal>
            </Drawer.Root>
          ) : (
            <>
              <Heading size="lg" color="blue.500" _dark={{ color: 'blue.300' }}>
                📈 모의투자 아카데미
              </Heading>
              <Stack direction="row" gap={4}>
                {NAV_ITEMS.map((item) => (
                  <Button
                    key={item.href}
                    variant="ghost"
                    size="sm"
                    onClick={() => router.push(item.href)}
                  >
                    {item.label}
                  </Button>
                ))}

                {user ? (
                  <Profile />
                ) : (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => router.push('/login')}
                  >
                    로그인
                  </Button>
                )}
              </Stack>
            </>
          )}
        </HStack>
      </Container>
    </Box>
  );
};

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  {
    label: '국내',
    href: '/domestic',
  },
  {
    label: '해외',
    href: '/overseas',
  },
  {
    label: '포트폴리오',
    href: '/portfolio',
  },
  {
    label: '랭킹',
    href: '/ranking',
  },
  {
    label: '커뮤니티',
    href: '/community',
  },
];
