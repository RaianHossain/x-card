import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, ROUTES } from '../constants';
import { CameraScan, CardHolder, MyCard } from '../screens';

const Tab = createBottomTabNavigator();

// create a component
const HomeTabNavigator = () => {
    return (
        <Tab.Navigator
        // tabBar={props => <CustomTabBar {...props} />}
        initialRouteName={ROUTES.CARD_HOLDER}
        screenOptions={{
          tabBarActiveTintColor: COLORS.primary,
          // tabBarActiveBackgroundColor: COLORS.primary,
          headerShown: false,   
          tabBarStyle: {
            height: 80,
            paddingHorizontal: 5,
            paddingTop: 3,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderTopWidth: 1,
        },
        tabBarLabelStyle: {
            fontSize: 13,
            paddingBottom: 5
        },
        tabBarIconStyle: {
            color: COLORS.grayLight
        },
        tabBarShowLabel: false
        }}
        
      >
        <Tab.Screen
          name={ROUTES.CARD_HOLDER}
          component={CardHolder}
          options={{
            tabBarLabel: 'Wallet',
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="albums" size={27} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name={ROUTES.CAMERASCAN}
          component={CameraScan}
          options={{
            headerShwn: true,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="qrcode-scan" color={color} size={40} />
            ),
            // tabBarIconStyle: {
            //   paddingBottom: 10
            // }
          }}
        />
        <Tab.Screen
          name={ROUTES.MY_CARD}
          component={MyCard}
          options={{
            // tabBarLabel: 'Updates',
            tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    );
};


export default HomeTabNavigator;
