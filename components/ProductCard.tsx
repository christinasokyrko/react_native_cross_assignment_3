import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import HeartIcon from '../assets/icons/mdi-light_heart.svg';

type Props = {
  title: string;
  price: string;
  image: any;
};

const {width} = Dimensions.get('window');
const cardWidth = width / 2 - 30;

const ProductCard = ({title, price, image}: Props) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <LinearGradient
          colors={['#E8EEEA', '#F7F4ED', '#DADADA']}
          locations={[0, 0.5, 1]}
          style={styles.imageContainer}>
          <Image source={image} style={styles.image} resizeMode="contain" />
        </LinearGradient>

        <TouchableOpacity
          style={styles.heartButton}
          onPress={() => setLiked(!liked)}
          activeOpacity={0.7}>
          <HeartIcon
            width={22}
            height={22}
            fill={liked ? '#1F3D2B' : 'none'}
          />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    width: cardWidth,
    margin: 10,
  },

  imageWrapper: {
    position: 'relative',
  },

  imageContainer: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: '80%',
    height: '80%',
  },

  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    padding: 4,
  },

  title: {
    marginTop: 10,
    fontSize: 14,
    color: '#1C1C1C',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },

  price: {
    marginTop: 4,
    fontSize: 14,
    color: '#6F6F6F',
    fontFamily: 'PlusJakartaSans-SemiBold',
  },
});