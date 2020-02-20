import * as React from 'react';
import {View, FlatList, Text, TextInput, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontistoIcon from 'react-native-vector-icons/Fontisto';

import styles from '../../styles/DrinkList';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import DrinkItem from './DrinkItem';

interface IProps {
  navigation: {
    goBack(): void;
  };
  route: {
    params: {
      searchInput: string;
      loading: boolean;
      drinks: [] | null;
    };
  };
}
interface IState {
  searchInput: string;
  loading: boolean;
  drinks: [] | null;
}
export default class DrinkList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchInput: props.route.params.searchInput,
      loading: props.route.params.loading,
      drinks: props.route.params.drinks,
    };
  }
  handleGoBack = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {searchInput, loading} = this.state;
    const {drinks} = this.props.route.params;
    return (
      <LinearGradient
        colors={['#ae0eb7', '#d80091', '#ee0068', '#f40340', '#eb4812']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <View style={styles.searchContainer}>
              <RectButton
                onPress={this.handleGoBack}
                style={styles.searchGoBack}>
                {loading ? (
                  <ActivityIndicator color="#D80091" />
                ) : (
                  <FontistoIcon name="arrow-left" size={24} color="#EEE" />
                )}
              </RectButton>
              <TextInput
                style={styles.searchInput}
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search your favorite cocktail"
                placeholderTextColor="#555"
                value={searchInput}
                onChangeText={text => this.setState({searchInput: text})}
                returnKeyType="send"
                onSubmitEditing={() => {}}
              />
              <RectButton onPress={() => {}} style={styles.searchSubmit}>
                {loading ? (
                  <ActivityIndicator color="#D80091" />
                ) : (
                  <FontistoIcon name="search" size={24} color="#D80091" />
                )}
              </RectButton>
            </View>
            <FlatList
              data={drinks}
              showsVerticalScrollIndicator={false}
              style={styles.list}
              keyExtractor={(drink: any) => {
                return drink.idDrink;
              }}
              renderItem={({item}) => <DrinkItem drink={item} />}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}
