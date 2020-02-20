import * as React from 'react';
import {Text, View, Image} from 'react-native';

import styles from '../../styles/DrinkItem';

interface IProps {
  drink: any;
}

const DrinkItem = (props: IProps) => {
  const {name, thumb} = props.drink;
  return (
    <View style={styles.container}>
      <Image source={{uri: thumb}} style={styles.thumb} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default DrinkItem;
