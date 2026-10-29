# rn-background-image-gradient-parsing

React Native's `backgroundImage` string parser drops a gradient whose colour stop is at a unitless `0`, and keeps the valid layers of a declaration that holds an invalid one. This repository is [React Native's reproducer template](https://github.com/react-native-community/reproducer-react-native) (React Native 0.88.1) with one change, `ReproducerApp/App.tsx`: four 96×96 boxes on a white screen, with `backgroundImage` set to `'linear-gradient(red 0, blue 100%)'`, `'linear-gradient(red 0%, blue 100%)'`, `'linear-gradient(red, blue), linear-gradient(notacolor, blue)'`, and the same two layers as objects.

## Steps

1. Clone and install:
   ```sh
   git clone https://github.com/YevheniiKotyrlo/rn-background-image-gradient-parsing
   cd rn-background-image-gradient-parsing/ReproducerApp
   yarn install
   ```
2. Build and install the app on an Android device: `yarn android`, or `cd android && ./gradlew assembleRelease` and `adb install -r app/build/outputs/apk/release/app-release.apk`.
3. Open it and compare the boxes.

Expected: the first two boxes the same red-to-blue gradient; the last two the same, and with an invalid layer, as in CSS, no gradient at all.

What I see on a Galaxy S23 (Android 14): the first box is not painted while the second is (`#7f0080` at its centre), and the string with the invalid layer paints its first gradient while the same layers as objects paint nothing.
