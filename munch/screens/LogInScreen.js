import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Button, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [showButtons, setShowButtons] = useState(false);
  const bounceValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  useEffect(() => {
    Animated.spring(bounceValue, {
      toValue: 1,
      friction: 5,
      tension: 30,
      useNativeDriver: true, // this makes animation run smoother, useful for when I put images instead of text
    }).start(() => {
      setTimeout(() => {
        setShowButtons(true);
      }, 500);
    });
  }, [bounceValue]);

  const animatedStyle = {
    transform: [
      { translateY: bounceValue.interpolate({
          inputRange: [0, 1],
          outputRange: [0, -50]
        })
      }
    ]
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.animatedText, animatedStyle]}>
        <Text style={styles.title}>Munch</Text>
      </Animated.View>
      {showButtons && (
        <View style={styles.buttonContainer}>
          <Button title="Sign Up" onPress={() => navigation.navigate('SignUpScreen')} />
          <TouchableOpacity onPress={() => navigation.navigate('LoginDetailScreen')}>
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  animatedText: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  loginText: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;