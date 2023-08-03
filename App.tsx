import React from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/store";
import { BaseProvider } from "@telus-uds/components-base";
import alliumTheme from "@telus-uds/theme-allium";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { setAuthenticated } from "./store/store";
import { persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";

import LoginScreen from "./src/LoginScreen";
import PokemonScreen from "./src/PokemonScreen";
import CustomDrawerContent from "./src/CustomDrawerContent";
import TestScreen from "./src/TestScreen";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const AuthenticatedStack = ({ onLogout }: { onLogout: () => void }) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <CustomDrawerContent {...props} onLogout={onLogout} />
      )}
      screenOptions={{
        headerShown: true,
        headerTitle: "Pokedex",
      }}
    >
      <Drawer.Screen name="Main" component={MainTabs} />
    </Drawer.Navigator>
  );
};

const Navigation = () => {
  const isAuth = useSelector((state: any) => state.isAuthenticated);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(setAuthenticated(false));
  };

  return (
    <NavigationContainer>
      {!isAuth && <AuthStack />}
      {isAuth && <AuthenticatedStack onLogout={onLogout} />}
    </NavigationContainer>
  );
};

const app = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BaseProvider defaultTheme={alliumTheme}>
          <Navigation />
          <StatusBar style="auto" />
        </BaseProvider>
      </PersistGate>
    </Provider>
  );
};

const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="pokemon-go"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Trainer"
        component={TestScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gym"
        component={TestScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default app;
