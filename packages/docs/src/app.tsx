import React, { useState } from "preact/hooks";
import { Box, Stack } from "native-piece";
import Header from "./layouts/Header";
export function App() {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Header />
      <Stack.V gap="1rem" marginTop={200} alignItems="center" justifyContent="center">
        <h1>Vite + Preact</h1>
        <Stack.V gap="1rem">
          <button onClick={() => setCount((count) => ++count)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/app.tsx</code> and save to test HMR
          </p>
        </Stack.V>
        <p className="read-the-docs">
          Click on the Vite and Preact logos to learn more
        </p>
      </Stack.V>
    </Box>
  );
}
