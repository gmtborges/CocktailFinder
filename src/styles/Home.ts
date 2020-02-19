import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  titlePrimary: {
    fontSize: 24,
    fontWeight: '700',
    color: '#FFF',
  },
  titleSecondary: {
    fontSize: 24,
    color: '#FFF',
  },
  searchContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#EEE',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
});
