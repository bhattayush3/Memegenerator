import React, { useRef, useState } from 'react';
import Draggable from 'react-draggable';

function Text() {
  const nodeRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");

  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef}>
        {editMode ? (
          <input
            value={val}
            autoFocus
            onChange={(e) => setVal(e.target.value)}
            onBlur={() => setEditMode(false)} // 👈 exit on blur instead of double-click
          />
        ) : (
          <h1 onDoubleClick={() => setEditMode(true)}>{val}</h1>
        )}
      </div>
    </Draggable>
  );
}

export default Text;
