import * as React from 'react';
import {Text, View, TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';

import styles from '../styles/Home';

const Home = () => {
  return (
    <LinearGradient
      colors={['#ae0eb7', '#d80091', '#ee0068', '#f40340', '#eb4812']}
      style={styles.linearGradient}>
      <View style={styles.container}>
        <Icon name="cocktail" size={48} color="#FFF" />
        <View style={styles.titleContainer}>
          <Text style={styles.titlePrimary}>CockTail</Text>
          <Text style={styles.titleSecondary}>Finder</Text>
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search your favorite cocktail"
            placeholderTextColor="#555"
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default Home;
