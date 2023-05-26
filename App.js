import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { COLORS } from "./constants";
import AppNavigator from "./navigations/AppNavigator";
import AuthNavigator from "./navigations/AuthNavigator";
import { store } from './store';
import { Init } from './store/auth/actions';


const RootNavigation = () => {  
  const token = useSelector(state => state.AuthReducer.authToken);
  console.log(token);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const init = async () => {
    await dispatch(Init());
    setLoading(false);
  }

  useEffect(() => {
    init()
  }, [])

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    )
  }

  return (
    <NavigationContainer>
      <StatusBar backgroundColor='black' barStyle="light-content" />
      {
        token === null ?
          <AuthNavigator /> : <AppNavigator />
      }
      {/* <AppNavigator /> */}
      {/* <AuthNavigator /> */}
    </NavigationContainer>
    
  );

}

export default function App() {
  return (
      <Provider store={store}>
        <RootNavigation />
      </Provider>
  )
}

