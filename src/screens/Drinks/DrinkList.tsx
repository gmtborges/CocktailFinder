import * as React from 'react';
import {
  View,
  FlatList,
  TextInput,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {RectButton} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';

import styles from '../../styles/DrinkList';
import DrinkItem from './DrinkItem';
import {fetchDrinks, changeInput} from '../../state/actions/drinkActions';

interface IProps {
  navigation: {
    goBack(): void;
  };
  searchInput: string;
  loading: boolean;
  drinks: [] | null;
  dispatch(action: any): any;
}

class DrinkList extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  handleGoBack = () => {
    this.props.navigation.goBack();
  };

  handleFetchDrinks = () => {
    const {searchInput, dispatch} = this.props;
    dispatch(fetchDrinks(`search.php?${searchInput}`));
    Keyboard.dismiss();
  };

  render() {
    const {searchInput, loading, drinks, dispatch} = this.props;
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
                onChangeText={text => dispatch(changeInput(text))}
                returnKeyType="send"
                onSubmitEditing={this.handleFetchDrinks}
              />
              <RectButton
                onPress={this.handleFetchDrinks}
                style={styles.searchSubmit}>
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
                return drink.id;
              }}
              renderItem={({item}) => <DrinkItem drink={item} />}
            />
          </View>
        </SafeAreaView>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state: any) => ({
  loading: state.loading,
  searchInput: state.searchInput,
  drinks: state.drinks,
});
export default connect(mapStateToProps)(DrinkList);
