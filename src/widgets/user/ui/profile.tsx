'use client';

import { useQuery } from '@tanstack/react-query';
import { userOptions } from '@/entities/user';
import { Avatar, Button, Menu, Portal } from '@chakra-ui/react';
import { useLogout } from '@/features/logout';

export default function Profile() {
  const { data: user } = useQuery(userOptions());

  const handleLogout = () => {
    useLogout();
  };

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button unstyled cursor="pointer">
          <Avatar.Root variant="outline">
            <Avatar.Fallback name={user?.nickname} />
          </Avatar.Root>
        </Button>
        {/* <Button variant="outline" size="sm">
          Open
        </Button> */}
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="new-txt">마이 페이지</Menu.Item>
            <Menu.Item value="new-file" onClick={handleLogout}>
              로그아웃
            </Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
