import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  Entypo,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";
import { TouchableOpacity } from "react-native";

const Tab = createBottomTabNavigator();
function RootNavigator() {
  const CustomTabBarButton = ({children})=> {
    return(
      <TouchableOpacity 
        style={{
          width:55,
          height:55,
          backgroundColor:'#5C3EBC',
          justifyContent: "center",
          alignItems: "center",
          borderRadius:30,
          marginTop:-8,
          borderWidth:3,
          borderColor:'white',
        }}
      >
        <Entypo name="list" size={32} color="#FFD00C"/>
      </TouchableOpacity>
    )
  }
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true, // klavye açıldığında tab bar'ın otomatik olarak gizlenmesini sağlar
        tabBarShowLabel: false, // labelların gösterilmemesini sağlar. Yalnızca simgeler gösterilir.
        tabBarActiveTintColor: "#5C3EBC", // Aktif sekmenin simgesi renk
        tabBarInactiveTintColor: "959595",
        headerShown: false,
        tabBarStyle: {
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: (props) => <CustomTabBarButton {...props}/>
        }}
      />
      <Tab.Screen
        name="Profile"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={30} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RootNavigator;
