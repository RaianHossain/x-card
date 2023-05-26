//import liraries
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch } from 'react-redux';
import AuthButton from '../../components/AuthButton';
import { COLORS } from '../../constants';
import { Login } from '../../store/auth/actions';

// create a component
const Otp = ({ route }) => {
    const rf1 = useRef();
    const rf2 = useRef();
    const rf3 = useRef();
    const rf4 = useRef();
    const [f1, setF1] = useState('');
    const [f2, setF2] = useState('');
    const [f3, setF3] = useState('');
    const [f4, setF4] = useState('');
    const [count, setCount] = useState(0);
    const [wrongCode, setWrongCode] = useState(false);
    const { emailInput } = route.params;

    useEffect(() => {
        const interval = setInterval(() => {
            if(count === 0) {
                clearInterval(interval);
            } else {
                setCount(count - 1);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [count])

    const dispatch = useDispatch();
    const submit = () => {
        const code = f1+f2+f3+f4;
        
        if(code == '1234') {
            const userInfo = {
                token: code,
                userEmail: emailInput
            };
            dispatch(Login(userInfo))
        }
        // else setWrongCode(true);
        else alert("Wrong Code!");
    }

    return (
        <KeyboardAwareScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>OTP Verification</Text>
            <View style={styles.infoView}>
                <Text style={styles.infoText}>Please enter the OTP you've</Text>
                <Text style={styles.infoText}>got in <Text style={styles.infoEmail}>{emailInput}</Text></Text>
            </View>
            <View style={styles.otpView}>
                <TextInput 
                    ref={rf1} 
                    value={f1}
                    style={[styles.inputView, {borderColor: f1.length < 1 ? COLORS.gray : COLORS.dark}]} 
                    keyboardType="number-pad" 
                    maxLength={1} 
                    onChangeText={(txt) => 
                        {
                            setF1(txt);
                            if(txt.length >= 1) rf2.current.focus();
                        }
                    }
                ></TextInput>
                <TextInput 
                    ref={rf2} 
                    style={[styles.inputView, styles.mgnLft, {borderColor: f2.length < 1 ? COLORS.gray : COLORS.dark}]} 
                    keyboardType="number-pad" 
                    maxLength={1}
                    onChangeText={(txt) => 
                        {
                            setF2(txt);
                            if(txt.length >= 1) rf3.current.focus();
                            else if(txt.length < 1) rf1.current.focus();
                        }
                    }
                ></TextInput>
                <TextInput 
                    ref={rf3} 
                    style={[styles.inputView, styles.mgnLft, {borderColor: f3.length < 1 ? COLORS.gray : COLORS.dark}]} 
                    keyboardType="number-pad" 
                    maxLength={1}
                    onChangeText={(txt) => 
                        {
                            setF3(txt);
                            if(txt.length >= 1) rf4.current.focus();
                            else if(txt.length < 1) rf2.current.focus();
                        }
                    }
                ></TextInput>
                <TextInput 
                    ref={rf4} 
                    style={[styles.inputView, styles.mgnLft, {borderColor: f4.length < 1 ? COLORS.gray : COLORS.dark}]} 
                    keyboardType="number-pad" 
                    maxLength={1}
                    onChangeText={(txt) => 
                        {
                            setF4(txt);
                            if(txt.length < 1) rf3.current.focus();
                        }
                    }
                ></TextInput>
            </View>

            {wrongCode != false && (
                <Text style={styles.errorMessage}>Wrong code!</Text>
            )}            
            <View style={styles.resendView}>
                <Text
                    style={[styles.resendText, {color: count == 0 ? COLORS.primary : 'gray'}]}
                    onPress={() => count == 0 ? setCount(10) : ''}
                >Resend</Text>
                {count !== 0 && (
                    <Text style={[styles.resendText, {marginLeft: 20, color: 'gray'}]}>{count + " seconds"}</Text>
                )}
            </View>
            <View style={styles.btnContainer}>
                {/* <AuthButton onPress={() => navigation.navigate(ROUTES.OTP)} txt="Verify OTP"></AuthButton> */}
                <AuthButton 
                    onPress={submit} 
                    txt="Verify OTP" 
                    disabled={f1 != '' && f2 != '' && f3 != '' && f4 != '' ? false : true}
                ></AuthButton>
            </View>
        </SafeAreaView>          
        </KeyboardAwareScrollView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 15
        // marginTop: 300,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        marginTop: 100,
        color: COLORS.gray,
    },
    otpView: {
        width: '100%',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 60
    },
    inputView: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    mgnLft: {
        marginLeft: 15,
    },
    btnContainer: {
        width: 240,
        marginTop: 50
    },
    resendView: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 30
    },
    resendText: {
        fontSize: 20,
        fontWeight: '700',
    },
    errorMessage: {
        marginTop: 10,
        color: "red",
        fontSize: 15,
        fontWeight: '700',
    },
    infoView: {
        marginTop: 20,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 17,
        color: COLORS.gray
    },
    infoEmail: {
        fontWeight: '700',
    }
});

export default Otp;
