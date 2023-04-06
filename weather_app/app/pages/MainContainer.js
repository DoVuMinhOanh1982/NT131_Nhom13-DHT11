import * as React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import Home from "./Home";
import About from "./About";
import Detail from "./Detail";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName={"Home"}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === "Detail") {
              iconName = focused ? "cloudy-night" : "cloudy-night-outline";
            } else if (rn === "About") {
              iconName = focused ? "people" : "people-outline";
            } 
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          showLabel: false,
          activeTintColor: "#7F5DF0",
          inactiveTintColor: "gray",
          style: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevantion: 0,
            backgroundColor: "#FFFFFF",
            borderRadius: 15,
            height: 150,
            ...styles.shadow,
          },
        }}
      >
        <Tab.Screen
          name={"Home"}
          component={Home}
          options={{ title: null, headerShown: false }}
        />
        <Tab.Screen
          name={"Detail"}
          component={Detail}
          options={{ title: null, headerShown: false }}
        />
        <Tab.Screen
          name={"About"}
          component={About}
          options={{ title: null, headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default MainContainer;
