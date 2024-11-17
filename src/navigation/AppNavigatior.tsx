import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStaticNavigation} from '@react-navigation/native';
import {AuthStack, AppStack} from './MainNavigator';

export type RootStackParamList = {
  root: undefined;
  auth: undefined;
};

const AppNavigator = createNativeStackNavigator({
  screens: {
    auth: {
      screen: AuthStack,
      if: () => true,
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
