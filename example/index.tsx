import React from "react";
import ReactDOM from "react-dom";
import { Box, Grid, Stack, VStack, Paragraph, Heading, Link } from "../packages/native-piece/src";

const root = document.getElementById("root");

ReactDOM.render(
  <Box>
    <Box as="input" />
    <Grid gridGap={100} gridTemplateColumns="1fr 1fr" gridTemplateRows="repeat(2, 1fr)">
      <Box as="input" />

      <Box as="input" placeholder="hopla" gridColumn={2} />

      <Box as="input" />

    </Grid>
    <Box
      display="grid"
      gap="2rem"
      paddingBottom="4rem"
      gridTemplateRows="1fr"
      gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
      <VStack gap="8px">
        <Paragraph className="text text-h5">
          Coding
        </Paragraph>
        <Paragraph className="text text-grey">
          Building responsive websites with a “Mobile First” approach.
          Providing the users an enriching experience that responds to
          any device and screen size.
        </Paragraph>
      </VStack>
      <VStack gap="8px">
        <Paragraph className="text text-h5">
          Coding
        </Paragraph>
        <Paragraph className="text text-grey">
          Building responsive websites with a “Mobile First” approach.
          Providing the users an enriching experience that responds to
          any device and screen size.
        </Paragraph>
      </VStack>
      <VStack gap="8px">
        <Paragraph className="text text-h5">
          Coding
        </Paragraph>
        <Paragraph className="text text-grey">
          Building responsive websites with a “Mobile First” approach.
          Providing the users an enriching experience that responds to
          any device and screen size.
        </Paragraph>
      </VStack>
    </Box>
    <Stack>
      <Link color="yellow" textDecoration="none" href="https://google.com">Home</Link>
      <Heading className="Hola" onClick={() => console.log("Holaa")}>HOOKS</Heading>
    </Stack>

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
        mediaLg={{
          backgroundColor: "tomato",
          color: "yellow",
          margin: "20px",
          maxWidth: "max-content"
        }}
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

      <VStack
        justifyContent="center"
        backgroundColor="blue"
        color="white"
        backgroundImage="url(https://i.ibb.co/yg9ptQy/logo-native-piece.png)">
        <h1>justifyContent=center</h1>
        <h1>justifyContent=center</h1>
        <h1>justifyContent=center</h1>
      </VStack>

      <Stack justifyContent="flex-end" backgroundColor="red">
        <h1>justifyContent=flex-end</h1>
      </Stack>

    </div>
  </Box>,
  root as HTMLElement
);