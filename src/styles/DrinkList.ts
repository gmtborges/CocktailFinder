import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    marginTop: 6,
    marginRight: 20,
  },
  searchGoBack: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 4,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#EEE',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  searchSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EEE',
    borderRadius: 6,
    marginLeft: 4,
    paddingHorizontal: 12,
  },
  list: {
    marginHorizontal: 40,
    marginVertical: 30,
  },
});
