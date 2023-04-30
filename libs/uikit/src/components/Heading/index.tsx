import { Card, Flex, Text } from '@saibase/uikit';
import { PropsWithChildren, ReactNode } from 'react';

type Props = PropsWithChildren<{ rightContent?: ReactNode }>;

export const Heading = ({ children, rightContent = null }: Props) => (
  <Card border p={5} justify="between">
    <Text color="text-white" size="4xl" weight="bold">
      {children}
    </Text>

    <Flex align="center">{rightContent}</Flex>
  </Card>
);
