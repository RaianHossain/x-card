import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView, StyleSheet,
  Text, TextInput, View
} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
// import DropDownPicker from 'react-native-dropdown-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AuthButton from '../../components/AuthButton';
import { COLORS } from '../../constants';


const Register = props => {
  const navigation = useNavigation();
  const [emailInput, setEmailInput] = useState('');  
  const [nameInput, setInput] = useState('');
  const [phoneInput, setPhoneInput] = useState('');

//   const [open, setOpen] = useState(false);
//   const [value, setValue] = useState(null);
//   const [items, setItems] = useState([
//     {label: 'Apple', value: 'apple'},
//     {label: 'Banana', value: 'banana'}
//   ]);

const data = [
    { label: 'Organization', value: 'organization' },
    { label: 'Personal', value: 'personal' },
  ];
const [value, setValue] = useState(null);
const [isFocus, setIsFocus] = useState(false);

  return (
      <SafeAreaView style={styles.main}>
      <View style={styles.container}>
        <KeyboardAwareScrollView style={styles.wFull}>
        <View>
          <View style={styles.row}>
            <Text style={styles.brandName}>X-Card</Text>
          </View>
          <Text style={styles.loginContinueTxt}>Become A Member</Text>
          <TextInput style={styles.input} placeholder="Name" placeholderTextColor={COLORS.placeholderText}  onChangeText={(txt) => setEmailInput(txt)}/>
          <TextInput style={styles.input} placeholder="Phone" keyboardType='number-pad' placeholderTextColor={COLORS.placeholderText} onChangeText={(txt) => setEmailInput(txt)}/>
          <TextInput style={styles.input} placeholder="Email" autoCapitalize='none' placeholderTextColor={COLORS.placeholderText} onChangeText={(txt) => setEmailInput(txt)}/>         

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }, styles.input]}
          placeholderStyle={[styles.placeholderStyle, {color: COLORS.placeholderText, fontSize: 14}]}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
        //   search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select Type' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          
        />
          <AuthButton txt="Register" onPress={()=>alert("check")}></AuthButton>
          
          </View>
        </KeyboardAwareScrollView>
      </View>
      </SafeAreaView>
      
  );
};

export default Register;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 30
  },
  container: {
    padding: 15,
    width: '100%',
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  brandName: {
    fontSize: 42,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    opacity: 0.9,
  },
  loginContinueTxt: {
    fontSize: 21,
    textAlign: 'center',
    color: COLORS.gray,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.grayLight,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    height: 55,
    paddingVertical: 0,
  },
  // Login Btn Styles
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
  forgotPassText: {
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  // footer
  footer: {
    position: 'absolute',
    bottom: 20,
    textAlign: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: COLORS.gray,
    fontWeight: 'bold',
  },
  signupBtn: {
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  // utils
  wFull: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  mr7: {
    marginRight: 7,
  },
});
