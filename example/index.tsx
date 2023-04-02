import React from "react";
import ReactDOM from "react-dom";
import { Box, Stack, Paragraph, Heading } from "../src/index";

const root = document.getElementById("root");

ReactDOM.render(
  <Box>
    <Heading>HOOKS</Heading>

    <Heading>CSS-COMPONENTS</Heading>
    <Heading>Soy un h2</Heading>
    <Paragraph color="red">
      Hola
    </Paragraph>
    <div>
      <Stack
        gap="1rem"
        maxWidth="10%"
        marginX={30}
        padding={20}
        fontSize={20}
        transition="300ms"
        fontFamily="Serif"
        backgroundColor="crimson"
        mediaLg={{ backgroundColor: "tomato" }}
        mediaMd={{ backgroundColor: "yellow" }}
        pseudos={{
          ":hover": {
            color: "red"
          }
        }}
      >
        <h1>justifyContent=flex-start</h1>
        <h1>justifyContent=flex-start</h1>
        <h1>justifyContent=flex-start</h1>
        <h1>justifyContent=flex-start</h1>
      </Stack>

      <Stack.V justifyContent="center" backgroundColor="blue">
        <h1>justifyContent=center</h1>
        <h1>justifyContent=center</h1>
        <h1>justifyContent=center</h1>
      </Stack.V>

      <Stack justifyContent="flex-end" backgroundColor="red">
        <h1>justifyContent=flex-end</h1>
      </Stack>

    </div>
  </Box>,
  root as HTMLElement
);