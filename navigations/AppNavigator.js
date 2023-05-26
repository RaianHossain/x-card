import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButton
} from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import CustomDrawer from '../components/CustomDrawer';
import { COLORS, ROUTES } from '../constants';
import HomeStack from './HomeStack';



const Drawer = createDrawerNavigator();

const IoniconsHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const AppNavigator = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const searchBarStatus = useSelector(state => state.AppReducer.searchBarStatus);
    const operQRCode = () => {
        navigation.navigate(ROUTES.QRCODE);
          // if(searchBarStatus == false) dispatch(SearchBarToggle(true))
          // else dispatch(SearchBarToggle(false));
    }
    return (
        <Drawer.Navigator
        drawerContent={props => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
          headerTintColor: 'white',
        //   drawerActiveBackgroundColor: '#aa18ea',
          drawerActiveBackgroundColor: COLORS.primary,
          drawerActiveTintColor: '#fff',
          drawerInactiveTintColor: '#333',
          drawerLabelStyle: {
            marginLeft: -25,
            // fontFamily: 'Roboto-Medium',
            fontSize: 15,
          },
          // headerStyle: {
          //   backgroundColor: COLORS.primary,
          //   height: 70,
          //   elevation: 0,
          //   shadowOpacity: 0,
          //   borderBottomWidth: 0,
          // },
          // headerTitleStyle: {
          //   fontWeight: "300",
          //   fontSize: 20
          // }
        }}>
        <Drawer.Screen
          name={ROUTES.CARD_HOLDER}
          component={HomeStack}
          options={{
            drawerIcon: ({color}) => (
              <Ionicons name="home-outline" size={22} color={color} />
            ),
            // headerRight: () => (
            //   <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            //     <Item title="barcode" color={COLORS.white} size={30} iconName="barcode-outline" onPress={operQRCode} />                
            //   </HeaderButtons>
            // ),
          }}
        />
      </Drawer.Navigator>
    );
};



export default AppNavigator;
