import {Button, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {RootStackParamList} from '../navigation/AppNavigatior';

function SigninScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Auth Screen</Text>
      <Button title="go home" onPress={() => navigation.navigate('root')} />
    </View>
  );
}

export default SigninScreen;
