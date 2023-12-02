import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <GameEngine 
        entities={entities()}
        style={{position:'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
        <Text>Open up App.js to start working on your app!</Text>
      </GameEngine>
      
      <StatusBar style="auto" hidden />
    </View>
  );
}


