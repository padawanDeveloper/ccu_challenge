import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import {AuthStack, AppStack} from './MainNavigator';
import {AuthLoadingScreen} from '../screens';

export type RootStackParamList = {
  root: undefined;
  auth: undefined;
};

const AppNavigator = createNativeStackNavigator({
  screens: {
    authLoading: {
      screen: AuthLoadingScreen,
      if: () => true,
      options: {
        headerShown: false,
      },
    },
    auth: {
      screen: AuthStack,
      options: {
        headerShown: false,
      },
    },
    root: {
      screen: AppStack,
      options: {
        headerShown: false,
      },
    },
  },
});

const RootNavigation = createStaticNavigation(AppNavigator);
export default RootNavigation;
