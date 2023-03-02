import React from "react";
import { Box, Stack, Paragraph, Heading } from "../../src/index";

export const App = () => {
  return (
    <Box>
      <Heading>Soy un h2</Heading>
      <Paragraph color="red">
        Hola
      </Paragraph>
      <div>
        <Stack></Stack>
        <Stack maxWidth="10%" margin={30} padding={20} backgroundColor="crimson"
          // mediaMinLg={{
          //   backgroundColor: "tomato"
          // }}
          mediaMd={{
            backgroundColor: "yellow"
          }}
          mediaLg={{
            backgroundColor: "tomato"
          }}
          
        // mediaMinMd={{
        //   backgroundColor: "blue"
        // }}
        >
          <h1>justifyContent=flex-start</h1>
        </Stack>
        <Stack justifyContent="center" backgroundColor="blue">
          <h1>justifyContent=center</h1>
        </Stack>
        <Stack justifyContent="flex-end" backgroundColor="red">
          <h1>justifyContent=flex-end</h1>
        </Stack>

      </div>
    </Box>
  );
};
