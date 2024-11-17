import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

interface IProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  description?: string;
}

interface IProps {
  product: IProduct;
}

const ProductDetail = ({product}: IProps) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={{uri: product.image}} style={styles.productImage} />
      <View style={styles.infoContainer}>
        <Text style={styles.productName}>{product.title}</Text>
        <Text style={styles.productPrice}>${product.price}</Text>
        <Text style={styles.productDescription}>{product.description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -10, // Para solapar un poco con la imagen
    elevation: 5,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  productPrice: {
    fontSize: 18,
    color: '#888',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 16,
    color: '#444',
    marginTop: 15,
    lineHeight: 22,
  },
});

export default ProductDetail;
