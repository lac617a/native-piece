import React from "react";
import { Box } from "native-piece";
import {
  SandpackLayout,
  SandpackPreview,
  SandpackProvider,
  SandpackCodeEditor,
  SandpackFileExplorer,
} from "@codesandbox/sandpack-react";
import IconCadena from "../assets/icons/icon-cadena.png";

const files = {
  "/App.tsx": {
    code:
      `
import { Box, Stack, Heading } from 'native-piece'

export default function App () {
  return (
    <Box backgroundColor="#f6f6ff">
      <Stack alignItem="center" justifyContent="space-between">
        <Heading>Hello</Heading>
        <Stack alignItem="center">
          <Box>Signin</Box>
          <Box>Signup</Box>
        </Stack>
      </Stack>
    </Box>
  )
}`.trim() + "\n"
  },
};

const dependencies = {
  "native-piece": "0.1.59",
};

const CustomSandpack = () => {
  return (
    <Box position="relative" borderRadius={12} marginY={50}>
      <Box position="absolute" top={160} transform="rotate(-44deg)">
        <img src={IconCadena} alt="cadena" />
      </Box>
      <Box position="absolute" top={160} right={0} transform="rotate(-44deg)">
        <img src={IconCadena} alt="cadena" />
      </Box>
      <SandpackProvider template="react-ts" files={files} customSetup={{ dependencies }}>
        {/* <SandpackFileExplorer/> */}
        <Box borderRadius={12} overflow="hidden" marginBottom="2rem">
          <SandpackPreview
            showRefreshButton={false}
            showOpenInCodeSandbox={false}
          />
        </Box>

        <SandpackLayout hidden unselectable="off">
          <SandpackCodeEditor style={{ height: "330px", overflow: "hidden" }} initMode="lazy" />
        </SandpackLayout>

      </SandpackProvider>
    </Box>
  );
};

export default CustomSandpack;