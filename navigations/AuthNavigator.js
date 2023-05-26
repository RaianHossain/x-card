import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from '../constants';
import { Login, Otp, Register } from '../screens';

const Stack = createNativeStackNavigator();



const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{}} initialRouteName={ROUTES.LOGIN}>
        {/* <Stack.Screen
            name={ROUTES.FORGOT_PASSWORD}
            component={ForgotPassword}
            options={({route}) => ({
            headerTintColor: COLORS.white,
            // headerBackTitle: 'Back',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            title: route.params.userId,
            })}
        /> */}
        <Stack.Screen
            name={ROUTES.LOGIN}
            component={Login}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name={ROUTES.OTP}
            component={Otp}
            options={{headerShown: false}}
        />
        <Stack.Screen name={ROUTES.REGISTER} component={Register} options={{headerShown: false}}/>
        {/* <Stack.Screen
            name={ROUTES.HOME}
            component={DrawerNavigator}
            options={{headerShown: false}}
        /> */}
        </Stack.Navigator>
    );
};

export default AuthNavigator;
