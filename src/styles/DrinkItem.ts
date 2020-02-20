import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 6,
    backgroundColor: '#EEE',
    alignItems: 'center',
    padding: 20,
    borderRadius: 6,
  },
  thumb: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
    backgroundColor: '#EEE',
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default styles;
