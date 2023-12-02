import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import entities from './entities';
import Physics from './physics';
import { useEffect, useState } from 'react';

export default function App() {
  const [running, setRunning] = useState(false);
  const [gameEngine, setGameEngine] = useState(null)
  const [currentPoints, setCurrentPoints] = useState(0)

  useEffect(() => {
    setRunning(true)
  }, [])

  return (
    <View style={{flex: 1}}>

      <GameEngine 
        ref={(ref) => { setGameEngine(ref) }}
        systems={[Physics]}
        entities={entities()}
        running={running}
        onEvent={(e) =>{switch (e.type) {
          case 'game_over':
            setRunning(false)
            gameEngine.stop()
            break;
        
          case 'new_point':
            setCurrentPoints(currentPoints + 1)
            break;
        }}}
        style={{position:'absolute', top: 0, right: 0, bottom: 0, left: 0}}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 40, margin: 20}}>{currentPoints}</Text>
        <StatusBar style="auto" hidden />
      </GameEngine>

      { 
        !running ?
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity style={{paddingHorizontal: 30, paddingVertical: 10, borderRadius: 20, backgroundColor: 'black'}}
          onPress={() => {
            setCurrentPoints(0)
            setRunning(true)
            gameEngine.swap(entities())
          }}>
            <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold'}}>
              START GAME
            </Text>
          </TouchableOpacity>
        </View>
        :
        null
      }
    
    </View>
  );
}


