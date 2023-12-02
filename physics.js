import Matter from "matter-js";
import entities from "./entities";

import React from 'react'

export default function Physics(entities, {touches, time, dispatch}) {
    let engine = entities.physics.engine;

    touches.filter(t => t.type === 'press')
    .forEach(t => {
        Matter.Body.setVelocity(entities.Bird.body, {
            x: 0,
            y: -8
        })
    });

    Matter.Engine.update(engine, time.delta);

    return entities;
  
}

