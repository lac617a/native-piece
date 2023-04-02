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
      <Stack maxWidth="10%" gap="1rem" margin={30} padding={20} backgroundColor="crimson"
        mediaLg={{ backgroundColor: "tomato" }}
        mediaMd={{ backgroundColor: "yellow" }}
        transition="300ms"
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