import React from "react";
import { Box, Heading, Link, Stack } from "native-piece";
import { useLocation } from "wouter";

import { ImNpm } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import IconBoat from "../../assets/icons/icon-boat.png";
import "./Footer.css";

const circle: any = {
  content: "''",
  position: "absolute",
  bottom: 10,
  right: 150,
  width: 200,
  height: 200,
  borderRadius: "100%",
  borderWidth: "30px",
  borderStyle: "solid",
  borderColor: "var(--dark)",
};

const Footer = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, navigate] = useLocation();

  return (
    <Box
      as="footer"
      marginTop={100}
      position="relative"
      backgroundColor="var(--secundary)">
      <Box position="absolute" zIndex={1} top={10} right={100}>
        <img src={IconBoat} alt="icon-boat" />
      </Box>
      <Box
        padding={50}
        overflow="hidden"
        pseudos={{
          "::after": {
            ...circle,
          }
        }}>
        <Box width="max-content" marginBottom={10}>
          <Heading fontFamily="Sora">Empezar</Heading>
          <Box height={2} width="90%" backgroundColor="var(--text)" />
        </Box>
        <button onClick={() => navigate("/docs")}>Leer los documentos</button>
      </Box>
      <Box
        className="footer"
        overflow="hidden"
        position="relative"
        pseudos={{
          "::after": {
            ...circle,
            borderColor: "var(--secundary)",
          }
        }}>
        <Stack as="ul" gap="1rem">
          <Stack as="li" className="footer-item">
            <ImNpm />
            <Link
              className="footer-link"
              href="https://www.npmjs.com/package/native-piece"
              target="_blank"
              rel="noopener noreferrer">NPM</Link>
          </Stack>
          <Stack as="li" className="footer-item">
            <BsGithub />
            <Link
              className="footer-link"
              href="https://github.com/lac617a/native-piece"
              target="_blank"
              rel="noopener noreferrer">GitHub</Link>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;