import { useState, useLayoutEffect, useRef } from "react";

function MeasureBox() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const boxRef = useRef(null);

  useLayoutEffect(() => {
    if (boxRef.current) {
      const { clientWidth, clientHeight } = boxRef.current;
      setWidth(clientWidth);
      setHeight(clientHeight);
    }
  }, []);

  return (
    <div className="flex items-center justify-between my-20 w-full min-h-[30vh]">
      <div>
        <h1 className="text-2xl font-bold uppercase">Use Layout Effect</h1>
      </div>
      <div>
        <div
          ref={boxRef}
          style={{
            width: "200px",
            height: "200px",
            backgroundColor: "lightblue",
            padding: "10px",
            border: "1px solid blue",
          }}
        >
          <span style={{ color: "#0f0f0f" }}>Content inside the box</span>
        </div>
        <p>Box width: {width}px</p>
        <p>Box height: {height}px</p>
      </div>
    </div>
  );
}

export default MeasureBox;
