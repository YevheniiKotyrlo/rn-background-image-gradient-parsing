import { ScrollView, StyleSheet, Text, View } from 'react-native';
import type { ViewStyle } from 'react-native';

const backgrounds: ReadonlyArray<{
  readonly testID: string;
  readonly label: string;
  readonly backgroundImage: ViewStyle['backgroundImage'];
}> = [
  {
    testID: 'unitless-zero-stop',
    label: "'linear-gradient(red 0, blue 100%)'",
    backgroundImage: 'linear-gradient(red 0, blue 100%)',
  },
  {
    testID: 'percentage-zero-stop',
    label: "'linear-gradient(red 0%, blue 100%)'",
    backgroundImage: 'linear-gradient(red 0%, blue 100%)',
  },
  {
    testID: 'invalid-second-layer-string',
    label: "'linear-gradient(red, blue), linear-gradient(notacolor, blue)'",
    backgroundImage: 'linear-gradient(red, blue), linear-gradient(notacolor, blue)',
  },
  {
    testID: 'invalid-second-layer-array',
    label: 'the same two layers as objects',
    backgroundImage: [
      {
        type: 'linear-gradient',
        colorStops: [{ color: 'red' }, { color: 'blue' }],
      },
      {
        type: 'linear-gradient',
        colorStops: [{ color: 'notacolor' }, { color: 'blue' }],
      },
    ],
  },
];

function App() {
  return (
    <ScrollView contentContainerStyle={styles.screen}>
      {backgrounds.map(({ testID, label, backgroundImage }) => (
        <View key={testID} style={styles.row}>
          <View testID={testID} style={[styles.box, { backgroundImage }]} />
          <Text style={styles.label}>{label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 48,
    gap: 16,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  box: {
    width: 96,
    height: 96,
  },
  label: {
    flex: 1,
    color: '#000000',
  },
});

export default App;
