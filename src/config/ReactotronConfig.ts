import Reactotron from 'reactotron-react-native';
import {reactotronRedux} from 'reactotron-redux';
declare global {
  interface Console {
    tron: any;
  }
}

if (__DEV__) {
  const tron: any = Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .connect();

  console.tron = tron;
  tron.clear();
}
