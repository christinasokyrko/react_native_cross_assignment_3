import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

const SectionHeader = ({title, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>See all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SectionHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  link: {
    fontSize: 14,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});