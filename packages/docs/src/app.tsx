import React, { useState } from "preact/hooks";
import { Box, Stack } from "native-piece";
import Header from "./layouts/Header";
export function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Header />
      <Stack.V marginTop={30}>
        <h1>Vite + Preact</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
      </Stack.V>
    </Box>
  );
}
