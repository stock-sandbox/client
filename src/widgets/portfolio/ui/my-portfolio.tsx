'use client';

import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useQuery } from '@tanstack/react-query';
import { userOptions } from '@/entities/user';
import { LoggedInPortfolio } from './logged-in-portfolio';
import { PortfolioLoginPrompt } from './portfolio-login-prompt';

export const MyPortfolio = () => {
  const { data: user } = useQuery(userOptions());

  return (
    <Box
      bg="white"
      shadow="md"
      borderRadius="md"
      p={6}
      _dark={{ bg: 'gray.800' }}
    >
      {user ? <LoggedInPortfolio user={user} /> : <PortfolioLoginPrompt />}
    </Box>
  );
};
