import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Baskara from './src/baskara';


//aqui se coloca a ordem que os compontentes vao ser apresentados na tela
export default function App() {
  return (
    <View style={styles.container}>
      <Baskara />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
