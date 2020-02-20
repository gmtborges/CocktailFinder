import * as React from 'react';
import {Text, View, TextInput, Keyboard, ActivityIndicator} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import {RectButton} from 'react-native-gesture-handler';

import styles from '../styles/Home';
import api from '../services/api';
import {AxiosResponse} from 'axios';

interface IProps {
  navigation: {
    navigate(screen: string, params?: any): void;
  };
}
interface IState {
  searchInput: string;
  loading: boolean;
}
export default class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      searchInput: '',
      loading: false,
    };
  }

  handleSearchInput = async () => {
    const {searchInput, loading} = this.state;
    this.setState({loading: true});
    if (searchInput === '') {
      this.setState({loading: false});
      return;
    }
    const response: AxiosResponse<any> = await api.get(
      `search.php?s=${searchInput}`,
    );
    interface IResponseData {
      drinks: [] | null;
    }
    const data: IResponseData = {
      drinks: response.data.drinks,
    };

    this.setState({loading: false, searchInput: ''});
    this.props.navigation.navigate('Drinks', {
      searchInput,
      drinks: data.drinks,
      loading,
    });
    Keyboard.dismiss();
  };
  render() {
    const {searchInput, loading} = this.state;
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
              onChangeText={text => this.setState({searchInput: text})}
              returnKeyType="send"
              onSubmitEditing={this.handleSearchInput}
            />
            <RectButton
              onPress={this.handleSearchInput}
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
