import { useMemo } from 'react';
import { Text } from 'react-native';
import { HoldItem } from 'react-native-hold-menu';
import { MenuItemProps } from 'react-native-hold-menu/lib/typescript/components/menu/types';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';

import { styles } from './styles';

type Props = {
  title: string;
  onRemove: () => void;
};

export function Tag({ title, onRemove }: Props) {
  const MenuItems = useMemo(() => [
    { text: title, isTitle: true },
    { 
      text: 'Remover', 
      isDestructive: true, 
      onPress: () => onRemove(), 
      icon: 'trash',
    }
  ] as MenuItemProps[], []);

  return (
    <Animated.View
      style={styles.container}
      layout={Layout}
      entering={FadeIn}
      exiting={FadeOut}
    >
      <HoldItem items={MenuItems}>
        <Text style={styles.title}>#{title}</Text>
      </HoldItem>
    </Animated.View>
  );
}
