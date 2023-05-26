import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    StyleSheet,
    Text, TouchableOpacity, View
} from 'react-native';
import { COLORS } from '../constants';


const AuthButton = (props) => {

    return (
        <View style={styles.loginBtnWrapper}>
            <LinearGradient
                colors={[COLORS.gradientForm, COLORS.primary]}
                style={styles.linearGradient}>
                <TouchableOpacity
                disabled={props.disabled ?? props.disabled}
                onPress={props.onPress}
                activeOpacity={0.7}
                style={styles.loginBtn}>
                <Text style={styles.loginText}>{props.txt}</Text>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    loginBtnWrapper: {
        height: 55,
        marginTop: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
      },
      linearGradient: {
        width: '100%',
        borderRadius: 50,
      },
      loginBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
      },
      loginText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '400',
      },
});

export default AuthButton;
