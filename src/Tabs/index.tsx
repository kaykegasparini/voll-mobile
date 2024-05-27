import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import  Ionicons  from 'react-native-vector-icons/Ionicons';

import Principal from "./Principal";
import Consultas from "./Consultas";
import Explorar from "./Explorar";
import Perfil from "./Perfil";
import { Icon } from "native-base";

const Tab = createBottomTabNavigator()

const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851"
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#fff"
}

const tabs = [
  {
    name: "Início",
    component: Principal,
    Icon: 'home'
  },
  {
    name: "Consultas",
    component: Consultas,
    Icon: 'calendar'
  },
  {
    name: "Explorar",
    component: Explorar,
    Icon:'search'
  },
  {
    name: "Perfil",
    component: Perfil,
    Icon: 'person'
  }
]

export default function Tabs() {
    return (
        <Tab.Navigator
        screenOptions={screenOptions}
        >
        {tabs.map((tab) => (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => (
                <Ionicons name={tab.Icon} color={color} size={size} />
              )
            }}
          />
        ))}
        </Tab.Navigator>
    )
}