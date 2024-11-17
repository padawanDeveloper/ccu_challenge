import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import ProductCard from '../components/products/Product';
import {fetchProducts} from '../state/features/products/productsSlice';
import {AppDispatch} from '../state/store';
import {
  IState,
  setCurrentProduct,
  IProduct,
} from '../state/features/products/productsSlice';
import {RootStackParamList} from '../navigation/MainNavigator';

interface IMyState {
  product: IState;
}

const ProductList = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const products = useSelector((state: IMyState) => state.product.products);
  const isLoading = useSelector((state: IMyState) => state.product.loading);
  const error = useSelector((state: IMyState) => state.product.error);

  const handleSetCurrentProduct = (item: IProduct) => {
    dispatch(setCurrentProduct(item));
    navigation.navigate('Product', {product: item});
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListEmptyComponent={
          isLoading ? (
            <View style={styles.empty}>
              <ActivityIndicator animating={true} />
            </View>
          ) : (
            <View style={styles.empty}>
              <Text>0 results</Text>
            </View>
          )
        }
        data={products}
        renderItem={({item}) => (
          <ProductCard
            product={item}
            onPress={() => handleSetCurrentProduct(item)}
          />
        )}
        keyExtractor={(item: any) => item.id}
        contentContainerStyle={{flexGrow: 1, justifyContent: 'center'}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default ProductList;
