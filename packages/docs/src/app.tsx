import React, { useState } from "preact/hooks";
import { Box, Heading, Paragraph, Stack } from "native-piece";
import Header from "./layouts/Header";
import IconDashed from "./assets/icons/dashed-treasure.svg";
import IconSniper from "./assets/icons/icon-sniper.svg";
import CustomSandpack from "./components/CustomSandpack";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <Box position="relative">
      <Header />
      <Box as="article" marginX={50} position="relative" zIndex={1}>
        <Box as="section" height="70vh">
          <Stack marginTop={150} gap="10%" alignItems="center">
            <Box height={200} width={200} backgroundColor="var(--secundary)" />
            <Stack.V maxWidth={430}>
              <Box position="relative">
                <Heading
                  as="h1"
                  fontSize={100}
                  color="var(--secundary)"
                  textShadow="1px 1px white"
                  fontFamily="Pirata One, cursive">Native piece</Heading>
                <Box className="title-lines" />
                <Box
                  className="title-lines"
                  bottom={5} right={-30}
                  height={4} width={180} />
                <Box position="absolute" right={-28} bottom={-20} width={40}>
                  <img src={IconSniper} alt="icon-sniper" />
                </Box>
              </Box>
              <Paragraph>
                Componentes primitivos de React. Usa la mejor parte de ES6 y CSS para diseñar tus aplicaciones sin estrés
              </Paragraph>
            </Stack.V>
          </Stack>
        </Box>
        <Box
          as="section"
          position="relative"
          backgroundColor="#FFFFFF"
          borderRadius={12}
          padding="1em"
          color="var(--primary)"
          pseudos={{
            "::after": {
              content: "''",
              position: "absolute",
              right: 10,
              bottom: 10,
              width: 20,
              height: 20,
              borderRadius: 100,
              border: "10px solid var(--primary)",
              backgroundColor: "white",
            }
          }}>
          <Stack as="ul" marginBottom={30}>
            <Box as="li">
              <a href="https://flat.badgen.net/npm/dw/native-piece" target="_blank" rel="noopener noreferrer">
                <img src="https://flat.badgen.net/github/stars/lac617a/native-piece?icon=github" alt="stars" />
              </a>
            </Box>
            <Box as="li">
              <a href="https://github.com/lac617a/native-piece" target="_blank" rel="noopener noreferrer">
                <img src="https://flat.badgen.net/npm/dm/native-piece?color=fbad34" alt="download" />
              </a>
            </Box>
            <Box as="li">
              <a href="https://github.com/lac617a/native-piece" target="_blank" rel="noopener noreferrer">
                <img src="https://flat.badgen.net/npm/v/native-piece?color=fbad34" alt="download" />
              </a>
            </Box>
          </Stack>
          <Box
            as="ul"
            gap="1rem"
            display="grid"
            fontWeight={500}
            gridTemplateColumns="repeat(3, 1fr)">
            <Box as="li">
              Inicie su sistema de diseño sin hervir el océano
            </Box>
            <Box as="li">
              Cree una interfaz de usuario consistente con restricciones de diseño y escalas definidas por el usuario
            </Box>
            <Box as="li">
              La mejor ergonomía para desarrolladores de su clase con accesorios CSS puros
            </Box>
            <Box as="li">
              Diseño de Flexbox con los componentes Box y Flex
            </Box>
            <Box as="li">
              Flexibilidad incorporada para una alta velocidad de diseño y desarrollo
            </Box>
            <Box as="li">
              Huella mínima
            </Box>
          </Box>
        </Box>
        <Box as="section" position="relative">
          <CustomSandpack />
        </Box>
      </Box>
      <Box
        position="absolute"
        top={300}
        left={0}
        height={900}
        zIndex={-1}
        transform="scaleX(-1)">
        <img style={{ width: "100%", height: "100%" }} src={IconDashed} alt="dashed-treasure" />
      </Box>
    </Box>
  );
}
