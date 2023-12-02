import Matter from 'matter-js';
import { View } from 'react-native';

const Bird = props => {
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;

    const xBody = props.body.position.s - widthBody / 2;
    const yBody = props.body.position.s - heightBody / 2;

    return (
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }} />
    )
}

export default (world, color, pos, size) => {
    const initialBird = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {label: 'Bird'}
    )
    Matter.Composite.add(world, initialBird)

    return {
        body: initialBird,
        color,
        pos,
        renderer: <Bird />
    }
  
}
