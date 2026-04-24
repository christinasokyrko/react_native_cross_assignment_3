import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import HomeIcon from '../assets/icons/stash_home-light.svg';
import ExploreIcon from '../assets/icons/explore.svg';
import CartIcon from '../assets/icons/stash_home-light.svg';

type Props = {
  activeTab?: 'Home' | 'Explore' | 'Cart';
};

const BottomNavigation = ({activeTab = 'Home'}: Props) => {
  const tabs = [
    {label: 'Home', Icon: HomeIcon},
    {label: 'Explore', Icon: ExploreIcon},
    {label: 'Cart', Icon: CartIcon},
  ] as const;

  return (
    <View style={styles.container}>
      {tabs.map(({label, Icon}) => {
        const isActive = activeTab === label;

        return (
          <TouchableOpacity key={label} style={styles.item}>
            <Icon width={24} height={24} />
            <Text style={[styles.label, isActive && styles.activeLabel]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    height: 72,
    borderTopWidth: 1,
    borderTopColor: '#D9D9D9',
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  label: {
    fontSize: 13,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
  activeLabel: {
    color: '#1C1C1C',
  },
});