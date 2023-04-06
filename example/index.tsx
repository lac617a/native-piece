import React from "react";
import ReactDOM from "react-dom";
import { Box, Stack, Paragraph, Heading, Link } from "../packages/native-piece/src";

const root = document.getElementById("root");

ReactDOM.render(
  <Box>
    <Box
      display="grid"
      gap="2rem"
      paddingBottom="4rem"
      gridTemplateRows="1fr"
      gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
      <Stack.V gap="8px">
        <Paragraph className="text text-h5">
          Coding
        </Paragraph>
        <Paragraph className="text text-grey">
          Building responsive websites with a “Mobile First” approach.
          Providing the users an enriching experience that responds to
          any device and screen size.
        </Paragraph>
      </Stack.V>
      <Stack.V gap="8px">
        <Paragraph className="text text-h5">
          Coding
        </Paragraph>
        <Paragraph className="text text-grey">
          Building responsive websites with a “Mobile First” approach.
          Providing the users an enriching experience that responds to
          any device and screen size.
        </Paragraph>
      </Stack.V>
      <Stack.V gap="8px">
        <Paragraph className="text text-h5">
          Coding
        </Paragraph>
        <Paragraph className="text text-grey">
          Building responsive websites with a “Mobile First” approach.
          Providing the users an enriching experience that responds to
          any device and screen size.
        </Paragraph>
      </Stack.V>
    </Box>
    <Link color="yellow" textDecoration="none" href="https://google.com">Home</Link>
    <Heading className="Hola" onClick={() => console.log("Holaa")}>HOOKS</Heading>

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

      <Stack.V
        justifyContent="center"
        backgroundColor="blue"
        color="white"
        backgroundImage="url(https://i.ibb.co/yg9ptQy/logo-native-piece.png)">
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