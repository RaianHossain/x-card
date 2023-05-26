import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { COLORS, ROUTES } from "../constants";
import { CardProfile, MyQRCode } from '../screens';
import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const HomeStack = () => {
    const navigation = useNavigation();
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown:false,
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0,
            }}
        >
            <Stack.Screen name={ROUTES.HOME} component={HomeTabNavigator} />
            <Stack.Screen name={ROUTES.QRCODE} component={MyQRCode} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: COLORS.offwhiteBackground
                },
                headerTitleStyle: {
                    fontWeight: "800",
                    fontSize: 23
                },
                headerTintColor: COLORS.dark
            }} />     
            <Stack.Screen name={ROUTES.CARDPROFILE} component={CardProfile} options={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: COLORS.primary
                },
                headerTitleStyle: {
                    fontWeight: "800",
                    fontSize: 23,
                    color: COLORS.white
                },
                headerTintColor: COLORS.white,
            }} />        
        </Stack.Navigator>
    );
};

export default HomeStack;
