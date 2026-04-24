import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import ProfileIcon from '../assets/icons/ei_user.svg';

type Props = {
  title?: string;
};

const Header = ({title = 'StyleGO'}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Style<Text style={styles.logoItalic}>GO</Text>
      </Text>

      <ProfileIcon width={24} height={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.select({
      ios: 50,
      android: 35,
    }),
    paddingHorizontal: 20,
    paddingBottom: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    fontSize: 25,
    fontWeight: '700',
    color: '#111111',
    fontFamily: Platform.select({
      ios: 'Georgia',
      android: 'serif',
    }),
  },
  logoItalic: {
    fontStyle: 'italic',
  },
});