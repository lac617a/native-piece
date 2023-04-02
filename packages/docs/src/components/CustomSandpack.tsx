import React from "react";
import { Box } from "native-piece";
import {
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackCodeEditor,
} from "@codesandbox/sandpack-react";

const files = {
  "/App.tsx": {
    code:
      `
import { Box } from 'native-piece'

export default function App () {
  return (
    <Box color="red">
      Look at this text!!
    </Box>
  )
}`.trim() + "\n"
  },
};

const dependencies = {
  "native-piece": "0.1.25"
};

const CustomSandpack = () => {
  return (
    <Box borderRadius={12} overflow="hidden" marginY={20}>
      <SandpackProvider template="react-ts" files={files} customSetup={{dependencies}}>
        <SandpackLayout>
          <SandpackPreview
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
            style={{ marginBottom: "2rem" }}
          />
          <SandpackCodeEditor initMode="lazy" />
        </SandpackLayout>
      </SandpackProvider>
    </Box>
  );
};

export default CustomSandpack;