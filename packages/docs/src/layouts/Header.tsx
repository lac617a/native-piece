import React, { useState } from "preact/hooks";
import { Box, Heading, Stack } from "native-piece";
import IconShipWheel from "../assets/icons/icon-ship-wheel.png";
import IconFlagPirate from "../assets/icons/icon-flag-pirate.png";
function Header() {
  const [count, setCount] = useState(0);

  return (
    <Box backgroundColor="#FFFF" height={80}>
      <Stack
        as="ul"
        gap="1rem"
        width="100%"
        fontSize={30}
        color="#161616"
        justifyContent="center">

        <Box as="li" borderBottom="1px solid red">
          Guia
        </Box>
        <Box as="li">
          Documentacion
        </Box>
      </Stack>
      <Box position="absolute" top="4.7rem" right={0} left={0}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
          <path fill="#ffffff" fillOpacity="1" d="M0,32L40,42.7C80,53,160,75,240,80C320,85,400,75,480,64C560,53,640,43,720,48C800,53,880,75,960,80C1040,85,1120,75,1200,64C1280,53,1360,43,1400,37.3L1440,32L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
        </svg>
      </Box>
      <Box
        position="absolute"
        top="2rem"
        right="4rem"
        transition="300ms"
        pseudos={{
          ":hover": {
            transform: "rotate(50deg)"
          }
        }}
        transform="rotate(10deg)">
        <img src={IconShipWheel} alt="ship-wehel" />
      </Box>
    </Box>
  );
}

export default Header;