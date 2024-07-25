import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../assets/munch.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    function onLoginPressed () {
        // backend stuff for validating user
        navigation.navigate('HomeScreen');
    }

    function onForgotPasswordPressed () {
        console.warn("Forgot password");
    }

    function onSignInFacebook () {
        console.warn("Facebook");
    }

    function onSignInGoogle () {
        console.warn("Facebook");
    }

    function onSignInApple () {
        console.warn("Facebook");
    }

    function onSignUpPress () {
        navigation.navigate('SignUpScreen');
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.root}>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode='contain' 
                />
                
                <CustomInput 
                    label="Username"
                    placeholder="Username" 
                    value={username} 
                    setValue={setUsername} 
                />
                <CustomInput 
                    label="Password"
                    placeholder="Password" 
                    value={password} 
                    setValue={setPassword} 
                    secureTextEntry={true} 
                />
                
                <CustomButton 
                    text="Login" 
                    onPress={onLoginPressed} 
                />
                <CustomButton 
                    text="Forgot Password" 
                    onPress={onForgotPasswordPressed}
                    type="tertiary"
                />
                {/* <CustomButton 
                    text="Sign In with Facebook" 
                    onPress={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                />
                <CustomButton 
                    text="Sign In with Google" 
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                />
                <CustomButton 
                    text="Sign In with Apple" 
                    onPress={onSignInApple}
                    bgColor="#E3E3E3"
                    fgColor="#363636"
                /> */}
                <CustomButton 
                    text="Don't have an account? Create one" 
                    onPress={onSignUpPress}
                    type="tertiary"
                />

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create ({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'F9FBFC',
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default LoginScreen