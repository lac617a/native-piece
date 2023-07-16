import React, {
  memo,
  useRef,
  useState,
  useLayoutEffect
} from "react";
import ReactDOM from "react-dom";
import { Box, Stack, Button, VStack, Heading, Link, Typography } from "../packages/native-piece/src";

const root = document.getElementById("root");

const Collapse = memo((props: any) => {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [childHeight, setChildHeight] = useState<string>("0rem");

  useLayoutEffect(() => {
    const childHeightRaw = nodeRef.current?.clientHeight;
    const childHeight = `${(childHeightRaw as number) / 14}rem`;
    setChildHeight(childHeight);
  }, []);

  return (
    <Box
      display="block"
      width="100%"
      overflowX="hidden"
      height={childHeight}
      willChange="min-height"
      transition="ease 0.4s min-height"
      minHeight={props.in ? childHeight : 0}
      maxHeight={0}
      overflowY={props.in ? "auto" : "hidden"}>
      <Box
        ref={nodeRef}
        width="100%"
        overflowX="hidden"
        overflowY={props.in ? "auto" : "hidden"}>
        {props.children}
      </Box>
    </Box>
  );
});

const App = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  return (
    <Box>
      <Button
        padding={30}
        transition="300ms"
        onClick={() => setShow(prev => !prev)}
        pseudos={{
          ":hover": {
            backgroundColor: "#1d3557",
            transform: "scale(1.02)"
          },
          ":focus": {
            color: "red"
          }
        }}
      >Hola</Button>
      <Collapse in={show}>
        <Typography
          color="red"
          fontSize={70}
          transition="1000ms"
          fontFamily="fantasy"
          mediaMd={{ color: 'yellow' }}
          pseudos={{ ":hover": { color: 'blue' } }}>
          Typography-test
        </Typography>
      </Collapse>
      <Box as="input" onChange={(e: any) => setText(e.target.value)} />
      <Box
        display="grid"
        gap="2rem"
        paddingBottom="4rem"
        gridTemplateRows="1fr"
        gridTemplateColumns="repeat(auto-fit, minmax(200px, 1fr))">
        <VStack gap="8px">
          <Typography className="text text-h5">
            {text || "Coding"}
          </Typography>
          <Typography className="text text-grey">
            Building responsive websites with a “Mobile First” approach.
            Providing the users an enriching experience that responds to
            any device and screen size.
          </Typography>
        </VStack>
        <VStack gap="8px">
          <Typography className="text text-h5">
            Coding
          </Typography>
          <Typography className="text text-grey">
            Building responsive websites with a “Mobile First” approach.
            Providing the users an enriching experience that responds to
            any device and screen size.
          </Typography>
        </VStack>
        <VStack gap={8}>
          <Typography className="text text-h5">
            Coding
          </Typography>
          <Typography className="text text-grey">
            Building responsive websites with a “Mobile First” approach.
            Providing the users an enriching experience that responds to
            any device and screen size.
          </Typography>
        </VStack>
      </Box>
      <Stack>
        <Link color="yellow" textDecoration="none" href="https://google.com">Home</Link>
        <Heading className="Hola">HOOKS</Heading>
      </Stack>

      <Heading>CSS-COMPONENTS</Heading>
      <Heading>Soy un h2</Heading>
      <Typography color="red">
        Hola
      </Typography>
      <Box>
        <Stack
          gap="1rem"
          maxWidth="10%"
          marginX={30}
          padding={20}
          fontSize={20}
          transition="300ms"
          fontFamily="Serif"
          flexWrap="wrap"
          backgroundColor="crimson"
          mediaMd={{
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
          <Heading>justifyContent=flex-start</Heading>
          <Heading>justifyContent=flex-start</Heading>
          <Heading>justifyContent=flex-start</Heading>
          <Heading>justifyContent=flex-start</Heading>
        </Stack>

        <VStack
          color="white"
          backgroundColor="blue"
          justifyContent="center"
          backgroundImage="url(https://i.ibb.co/yg9ptQy/logo-native-piece.png)">
          <Heading>VStack</Heading>
          <Heading>justifyContent=center</Heading>
          <Heading>justifyContent=center</Heading>
          <Heading>justifyContent=center</Heading>
        </VStack>

        <Stack justifyContent="flex-end" backgroundColor="red">
          <Heading>justifyContent=flex-end</Heading>
        </Stack>
      </Box>
    </Box>
  )
}

ReactDOM.render(
  <App />,
  root
);