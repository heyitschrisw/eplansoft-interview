import React, { useState } from 'react';
import { Stage, Layer } from 'react-konva';
import Rectangle from './Rectangle';

function Canvas() {
  const [rectangles, setRectangles] = useState([]);
  const [selectedId, selectShape] = useState(null);

  const generateTriangle = () => {
    setRectangles(rectangles.concat({
      x: 10,
      y: 10,
      width: 50,
      height: 50,
      stroke: 'red',
      strokeWidth: 4,
      id: 'rect' + (rectangles.length + 1),
    }))
  }

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <div style={{position: "absolute", top: "0px", left: "0px", zIndex: 2}} >
      <button onClick={generateTriangle}>New</button>
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={checkDeselect}
        onTouchStart={checkDeselect}
      >
        <Layer>
          {rectangles.map((rect, i) => {
            return (
              <Rectangle
                key={i}
                shapeProps={rect}
                isSelected={rect.id === selectedId}
                onSelect={() => {
                  selectShape(rect.id);
                }}
                onChange={(newAttrs) => {
                  const rects = rectangles.slice();
                  rects[i] = newAttrs;
                  setRectangles(rects);
                }}
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default Canvas;
