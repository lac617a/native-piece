import React from "react";
import { Box, Stack, Heading } from "native-piece";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

const scope = { Box, Stack, Heading };

const code = `
() => {
  return (
    <Box>
      <Stack alignItems="center" justifyContent="space-between">
        <Heading>Hello</Heading>
        <Stack gap="1rem">
          <Box as="button">Signin</Box>
          <Box as="button">Signup</Box>
        </Stack>
      </Stack>
    </Box>
  );
};`.trim() + "\n";

const themeDracula: any[] = [
  {
    types: ["prolog", "constant", "builtin"],
    style: {
      color: "rgb(189, 147, 249)",
    },
  },
  {
    types: ["inserted", "function"],
    style: {
      color: "rgb(80, 250, 123)",
    },
  },
  {
    types: ["deleted"],
    style: {
      color: "rgb(255, 85, 85)",
    },
  },
  {
    types: ["changed"],
    style: {
      color: "rgb(255, 184, 108)",
    },
  },
  {
    types: ["punctuation", "symbol"],
    style: {
      color: "rgb(248, 248, 242)",
    },
  },
  {
    types: ["string", "char", "tag", "selector"],
    style: {
      color: "rgb(255, 121, 198)",
    },
  },
  {
    types: ["keyword", "variable"],
    style: {
      color: "rgb(189, 147, 249)",
      fontStyle: "italic",
    },
  },
  {
    types: ["comment"],
    style: {
      color: "rgb(98, 114, 164)",
    },
  },
  {
    types: ["attr-name"],
    style: {
      color: "rgb(241, 250, 140)",
    },
  },
];

export const CustomEditor = () => {
  return (
    <Box position="relative" borderRadius={12} marginY={50}>
      <LiveProvider theme={{
        styles: themeDracula,
        plain: {
          backgroundColor: "var(--dark)",
        }
      }} language="jsx" scope={scope} code={code}>
        <Box
          padding={20}
          borderRadius={12}
          color="var(--primary)"
          overflow="hidden"
          marginBottom="2rem"
          backgroundColor="#f6f6ff">
          <LivePreview />
        </Box>

        <Box
          borderRadius={12}
          overflow="hidden"
          marginBottom="2rem"
          boxShadow="1px 1px 10px -1px rgba(0,0,0,.7)">
          <LiveEditor />
        </Box>
        <LiveError />
      </LiveProvider>
    </Box>
  );
};