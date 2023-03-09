import React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Login = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.fbContainer}
        onPress={() => {
          navigation.navigate('MainPage', {screen: 'Account'});
        }}>
        <View style={styles.row}>
          <Image
            source={{
              uri: 'https://cdn.pixabay.com/photo/2015/05/17/10/51/facebook-770688_1280.png',
            }}
            style={styles.fbImg}
          />
          <Text style={styles.fbText}>Continue with Facebook</Text>
        </View>
      </TouchableOpacity>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: 'bold',
          color: 'black',
          marginVertical: 36,
        }}>
        OR
      </Text>
      <TouchableOpacity
        style={styles.googleContainer}
        onPress={() => {
          navigation.navigate('MainPage', {screen: 'Account'});
        }}>
        <View style={styles.row}>
          <Image
            source={{
              uri: 'https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png',
            }}
            style={styles.googleImg}
          />
          <Text style={styles.googleText}>Sign in with Google</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
  },

  fbContainer: {
    width: 345,
    paddingVertical: 6,
    backgroundColor: 'blue',
    alignSelf: 'center',
    borderRadius: 8,
    marginTop: 200,
  },

  fbText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },

  fbImg: {
    width: 24,
    height: 24,
    marginVertical: 8,
    marginRight: 16,
    borderRadius: 4,
  },

  googleContainer: {
    width: 345,
    paddingVertical: 6,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 8,
    elevation: 2,
  },

  googleText: {
    fontSize: 12,
    fontWeight: '400',
    color: 'black',
    alignSelf: 'center',
  },

  googleImg: {
    width: 24,
    height: 24,
    marginVertical: 8,
    marginRight: 16,
    borderRadius: 4,
  },
});

export default Login;
