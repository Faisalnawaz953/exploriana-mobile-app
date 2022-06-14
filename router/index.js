import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import UserRoutes from './UserRoutes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();
const AppStack = createNativeStackNavigator();

export default function Router() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <AppStack.Navigator screenOptions={{headerShown: false}}>
          <AppStack.Screen name="UserRoutes" component={UserRoutes} />
        </AppStack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}
