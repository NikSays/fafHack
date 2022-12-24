import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { StyleSheet, Text, Button} from 'react-native';
import CalendarView from './Calendar';
import NewTask from './NewTask';


export default function App () {
  const Stack = createNativeStackNavigator();
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Calendar"
          component={CalendarView}
          options={{title: 'Owlio', header:()=>null}}
        />
        <Stack.Screen name="New" component={NewTask}  options={{title: 'New task', headerBackVisible: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};  

const HomeScreen = ({navigation}) => {
  return (
    <Button
      title="Add new task"
      onPress={() =>
        navigation.navigate('New', {name: 'Jane'})
      }
    />
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});