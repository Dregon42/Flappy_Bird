import Matter from "matter-js";
import Bird from "../components/Bird";
import Floor from "../components/Floor";

import { Dimensions } from "react-native";
import Obstacle from "../components/Obstacle";
import { getPipeSizePosPair } from "../utils/random";

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;


export default restart => {
    let engine = Matter.Engine.create({enableSleeping: false});

    let world = engine.world

    world.gravity.y = 0.4;

    const pipeSizePosA = getPipeSizePosPair()
    
    return {
        physics: {engine, world},
        Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width: 40}),
        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'blue', {x: 50, y: 300}, {height: 40, width: 40}),
        Floor: Floor(world, 'red', {x: windowWidth / 2, y: windowHeight}, {height: 40, width: windowWidth}),
        
    }
}