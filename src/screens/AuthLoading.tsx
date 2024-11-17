import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '../navigation/AppNavigatior';
import {USER_TOKEN} from '../constants';
import {ROOT, AUTH} from '../constants/screens';

export const AuthLoadingScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem(USER_TOKEN);
        if (value !== null) {
          navigation.navigate(ROOT);
        } else {
          navigation.navigate(AUTH);
        }
      } catch (e) {
        navigation.navigate(AUTH);
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.IndicatorStyle}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  IndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen;
