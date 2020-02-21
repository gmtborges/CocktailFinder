# CocktailFinder

An app to find your loved drinks. Use with moderation.

## Usage

This app was developed with React Native version v0.61 using the React Native CLI. The best way to start is following the instrutions to configure your environment on the official documentation at https://facebook.github.io/react-native/docs/getting-started

## TLDR

In the root directory:

`yarn install`

or

`npm install`

iOS

`npx react-native run-ios`

Android

`npx react-native run-android`

## 3rd Libraries

- redux - Control global state.
- axios - Make API calls.
- react-navigation - Routing and navigation.
- react-linear-gradient - Linear gradient styles.
- react-native-vector-icons - Library of icons.

### List Performance issues.

The `FlatList` have had a big improvement to handle performance issues compare to the deprecated `ListView`. In the app, for instance, it's only using the `keyExtractor` props. But if the list grow big, there are some other props to help us, like the `extraData`, `initialNumToRender`, `shouldComponentUpdate`. Refactor the render to a more simple and light component is also a good practice.
