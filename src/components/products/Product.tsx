import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
}

interface IProps {
  product: IProduct;
  onPress: () => void;
}

const ProductCard = ({product, onPress}: IProps) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{uri: product.image}} style={styles.image} />
    <View style={styles.infoContainer}>
      <Text style={styles.productName}>{product.title}</Text>
      <Text style={styles.productPrice}>${product.price}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
});

export default ProductCard;
