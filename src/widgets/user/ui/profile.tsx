'use client';

import { useQuery } from '@tanstack/react-query';
import { userOptions } from '@/entities/user';
import { Avatar } from '@chakra-ui/react';

export default function Profile() {
  const { data: user } = useQuery(userOptions());
  return (
    <Avatar.Root variant="outline">
      <Avatar.Fallback name={user?.nickname} />
    </Avatar.Root>
  );
}
