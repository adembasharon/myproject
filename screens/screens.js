import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Homepage" component={Homepage} />     
    </Stack.Navigator>
  );
} 