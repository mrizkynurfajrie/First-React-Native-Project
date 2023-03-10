import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    fetch('http://dev3.dansmultipro.co.id/api/recruitment/positions.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <ScrollView>
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <Text style={styles.loading}>Loading...</Text>
        ) : (
          <View>
            <TextInput
              style={styles.input}
              placeholder="Search"
              inlineImageLeft="search_icon"
              inlineImagePadding={24}
            />
            <View style={styles.container}>
              <View style={styles.row}>
                {/* <Image source={data.company_logo} style={width: 100, height: 100}/> */}
                <Text style={styles.companyLogo}>Company Logo</Text>
                <View style={styles.column}>
                  <Text style={styles.jobtitle}>Job Position</Text>
                  <Text style={styles.text}>Company Name</Text>
                  <Text style={styles.text}>Location</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  loading: {
    alignSelf: 'center',
    marginVertical: 100,
    fontSize: 24,
    fontWeight: '500',
    color: 'black',
  },
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'black',
    width: 345,
    height: 120,
    marginTop: 30,
    marginBottom: 10,
  },
  text: {
    marginVertical: 8,
  },
  jobtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: 'black',
    marginVertical: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 24,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 20,
  },
  companyLogo: {
    marginVertical: 45,
    marginHorizontal: 16,
  },
});

export default Home;
