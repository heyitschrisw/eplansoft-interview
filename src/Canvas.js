import React, { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';

function Canvas() {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({
    x: 50,
    y: 50
  });

  return (
    <div style={{position: "absolute", top: "0px", left: "0px", zIndex: 2}} >
      <Stage width={window.innerWidth} height={window.innerHeight} >
        <Layer >
          <Rect
            width={300}
            height={300}
            stroke="red"
            strokeWidth={4}
            draggable
            x={position.x}
            y={position.y}
            onDragStart={() => {
              setIsDragging(true);
            }}
            onDragEnd={e => {
              setPosition({
                ...position,
                x: e.target.x(),
                y: e.target.y()
              });
            }}
          />
        </Layer>
      </Stage>

    </div>
  )
}

export default Canvas;