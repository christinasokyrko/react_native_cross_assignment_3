import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  title: string;
  onPress?: () => void;
};

const CustomButton = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1F3D2B',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});