import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles.ts'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> i love shira!!!! </Text>
      <StatusBar style="auto" />
    </View>
  );
}


