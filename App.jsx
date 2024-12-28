import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Button,
  } from "react-native";
import { Home, Portofolio, Prices, Settings, Transaction } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const screenOptions = {
    tabBarShowLabel:false,
    headerShown:false,
    tabBarStyle: {
        position: "absolute",
        bottom:0,
        right:0,
        left:0,
        elevation:0,
        height:60,
        background: "#fff"
    }
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={screenOptions}>
                <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{ 
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                <Entypo name="home" size={24} color={focused ? "#162247d" : "#111"} />
                                <Text style={{ fontSize: 12, color: "#16247d"}}>HOME</Text>
                            </View>
                        )
                    }
                }}
                />
                <Tab.Screen name="Portofolio" component={Portofolio} 
                options={{ 
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                <Entypo name="home" size={24} color={focused ? "#162247d" : "#111"} />
                                <Text style={{ fontSize: 12, color: "#16247d"}}>WALLET</Text>
                            </View>
                        )
                    }
                }}
                />
                <Tab.Screen name="Transaction" component={Transaction} 
                options={{ 
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                <MaterialIcons name="stacked-line-chart" size={24} color={focused ? "#162247d" : "#111"} />
                                <Text style={{ fontSize: 12, color: "#16247d"}}>TRANSACTION</Text>
                            </View>
                        )
                    }
                }}
                />
                <Tab.Screen name="Prices" component={Prices} 
                options={{ 
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                <Entypo name="home" size={24} color={focused ? "#162247d" : "#111"} />
                                <Text style={{ fontSize: 12, color: "#16247d"}}>PRICES</Text>
                            </View>
                        )
                    }
                }}
                />
                <Tab.Screen name="Settings" component={Settings} 
                options={{ 
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={{alignItems: "center", justifyContent: "center"}}>
                                <Ionicons name="settings" size={24} color={focused ? "#162247d" : "#111"} />
                                <Text style={{ fontSize: 12, color: "#16247d"}}>SETTINGS</Text>
                            </View>
                        )
                    }
                }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

