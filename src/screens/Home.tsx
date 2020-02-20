import * as React from 'react';
import {Text, View, TextInput, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {RectButton} from 'react-native-gesture-handler';
import {fetchDrinks, changeInput} from '../state/actions/drinkActions';
import {connect} from 'react-redux';

import styles from '../styles/Home';

interface IProps {
  navigation: {
    navigate(screen: string, params?: any): void;
  };
  loading: boolean;
  searchInput: string;
  dispatch(action: any): any;
}

class Home extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  handleFetchDrinks = async () => {
    const {searchInput, dispatch} = this.props;
    if (searchInput === '') {
      return;
    }
    await dispatch(fetchDrinks(`search.php?${searchInput}`));
    this.props.navigation.navigate('Drinks');
  };

  render() {
    const {loading, searchInput, dispatch} = this.props;
    return (
      <LinearGradient
        colors={['#ae0eb7', '#d80091', '#ee0068', '#f40340', '#eb4812']}
        style={styles.linearGradient}>
        <View style={styles.container}>
          <FontistoIcon name="cocktail" size={48} color="#FFF" />
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
        </View>
      </LinearGradient>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    loading: state.loading,
    searchInput: state.searchInput,
  };
};
export default connect(mapStateToProps)(Home);
