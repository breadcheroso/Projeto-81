import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const BottomTabNavigator = () => {
    return (
<Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Feed') {
            iconName = focused
                ? 'book'
                : 'book-outline';
        } else if (route.name === 'CratePost') {
            iconName = focused ? 'create' : 'create-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
    },
})}
tabBarOptions={{
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
}}
>
<Tab.Screen name="Feed" component={Feed} options={{headerShown:false}}/>
      <Tab.Screen name="Criar Post" component={CreatePost} options={{headerShown:false}}/>
    </Tab.Navigator>
)}
