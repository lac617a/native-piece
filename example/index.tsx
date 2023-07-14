import React, {
  FC,
  memo,
  useRef,
  useState,
  ReactNode,
  useLayoutEffect
} from "react";
import ReactDOM from "react-dom";
import { Box, Grid, Stack, Button, VStack, Heading, Link, Typography } from "../packages/native-piece/src";

const root = document.getElementById("root");
interface ICollapseProps {
  in?: boolean;
  button?: ReactNode;
  children?: ReactNode;
}

const Collapse: FC<ICollapseProps> = memo(props => {
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
      overflowY="auto"
      overflowX="hidden"
      height={childHeight}
      willChange="max-height"
      transition="ease 0.4s max-height"
      maxHeight={props.in ? childHeight : 0}>
      <Box ref={nodeRef} overflowY="auto" overflowX="hidden" width="100%">
        {props.children}
      </Box>
    </Box>
  );
});

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <Box>
      <Button
        padding={30}
        onClick={(e) => setShow(prev => !prev)}
      >Hola</Button>
      <Collapse in={show}>
        <Typography
          color="red"
          fontSize={70}
          fontFamily="fantasy"
          mediaMd={{ color: 'yellow' }}
          pseudos={{ ":hover": { color: 'blue' } }}>
          Typography-test
        </Typography>
      </Collapse>
      <Grid
        gridGap={100}
        gridTemplateColumns="1fr 1fr"
        gridTemplateRows="repeat(2, 1fr)">
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
          <Typography className="text text-h5">
            Coding
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
  root as HTMLElement
);