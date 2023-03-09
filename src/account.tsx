import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const Account = ({navigation}: {navigation: any}) => {
  return (
    <View>
      <View style={styles.picContainer}>
        <Image
          source={{
            uri: 'https://www.pngfind.com/pngs/m/62-626956_profile-man-icon-hd-png-download.png',
          }}
          style={styles.pic}
        />
      </View>
      <Text style={styles.name}>Muhammad Rizky Nur Fajrie</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.textButton}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  picContainer: {
    width: 120,
    height: 120,
    borderRadius: 90,
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 48,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  pic: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },

  name: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'black',
    marginBottom: 48,
  },

  button: {
    width: 200,
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#eeeee4',
  },

  textButton: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'center',
    color: 'black',
  },
});

export default Account;
