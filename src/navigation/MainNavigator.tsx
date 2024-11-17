import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SigninScreen, Products, ProductDetail} from '../screens';
import {IProduct} from '../state/features/products/productsSlice';

interface IPdoductScreen {
  product: IProduct;
}

export type RootStackParamList = {
  Home: undefined;
  Product: IPdoductScreen;
};

export const AppStack = createNativeStackNavigator({
  screens: {
    Home: Products,
    Product: {
      screen: ProductDetail,
      options: {
        headerBackTitle: 'Atras',
      },
    },
  },
});

export const AuthStack = createNativeStackNavigator({
  screens: {
    Signin: SigninScreen,
  },
});
