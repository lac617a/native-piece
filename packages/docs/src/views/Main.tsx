import React from "preact";
import { Box, Heading, Paragraph, Stack } from "native-piece";

import IconSniper from "../assets/icons/icon-sniper.svg";
import IconDashed from "../assets/icons/dashed-treasure.svg";
import Footer from "../layouts/Footer/Footer";
import { FragmentCode, CustomEditor } from "../components";

const NPM = "npm i native-piece";
export function Main() {

  return (
    <Box position="relative">
      <Box as="article" position="relative" zIndex={1}>
        <Box as="section" height="70vh" marginX={50} marginBottom={70}>
          <Stack gap="10%" alignItems="center">
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
              <Stack.V gap="1rem" marginTop={10}>
                <Paragraph>
                  Componentes primitivos de React. Usa la mejor parte de ES6 y CSS para diseñar tus aplicaciones sin estrés
                </Paragraph>
                <FragmentCode value={NPM} />
              </Stack.V>
            </Stack.V>
          </Stack>
        </Box>
        <Box
          as="section"
          position="relative"
          backgroundColor="var(--secundary)"
          padding={40}
          color="var(--title)"
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
              backgroundColor: "var(--secundary)",
            }
          }}>
          <Box position="absolute" right={0} left={0} zIndex={-1} top={-290}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--secundary)" fillOpacity="1" d="M0,160L6.2,144C12.3,128,25,96,37,101.3C49.2,107,62,149,74,186.7C86.2,224,98,256,111,250.7C123.1,245,135,203,148,160C160,117,172,75,185,80C196.9,85,209,139,222,154.7C233.8,171,246,149,258,160C270.8,171,283,213,295,229.3C307.7,245,320,235,332,218.7C344.6,203,357,181,369,192C381.5,203,394,245,406,250.7C418.5,256,431,224,443,197.3C455.4,171,468,149,480,170.7C492.3,192,505,256,517,250.7C529.2,245,542,171,554,122.7C566.2,75,578,53,591,58.7C603.1,64,615,96,628,138.7C640,181,652,235,665,213.3C676.9,192,689,96,702,58.7C713.8,21,726,43,738,80C750.8,117,763,171,775,197.3C787.7,224,800,224,812,240C824.6,256,837,288,849,288C861.5,288,874,256,886,224C898.5,192,911,160,923,144C935.4,128,948,128,960,112C972.3,96,985,64,997,64C1009.2,64,1022,96,1034,117.3C1046.2,139,1058,149,1071,176C1083.1,203,1095,245,1108,250.7C1120,256,1132,224,1145,192C1156.9,160,1169,128,1182,122.7C1193.8,117,1206,139,1218,160C1230.8,181,1243,203,1255,229.3C1267.7,256,1280,288,1292,250.7C1304.6,213,1317,107,1329,64C1341.5,21,1354,43,1366,80C1378.5,117,1391,171,1403,208C1415.4,245,1428,267,1434,277.3L1440,288L1440,320L1433.8,320C1427.7,320,1415,320,1403,320C1390.8,320,1378,320,1366,320C1353.8,320,1342,320,1329,320C1316.9,320,1305,320,1292,320C1280,320,1268,320,1255,320C1243.1,320,1231,320,1218,320C1206.2,320,1194,320,1182,320C1169.2,320,1157,320,1145,320C1132.3,320,1120,320,1108,320C1095.4,320,1083,320,1071,320C1058.5,320,1046,320,1034,320C1021.5,320,1009,320,997,320C984.6,320,972,320,960,320C947.7,320,935,320,923,320C910.8,320,898,320,886,320C873.8,320,862,320,849,320C836.9,320,825,320,812,320C800,320,788,320,775,320C763.1,320,751,320,738,320C726.2,320,714,320,702,320C689.2,320,677,320,665,320C652.3,320,640,320,628,320C615.4,320,603,320,591,320C578.5,320,566,320,554,320C541.5,320,529,320,517,320C504.6,320,492,320,480,320C467.7,320,455,320,443,320C430.8,320,418,320,406,320C393.8,320,382,320,369,320C356.9,320,345,320,332,320C320,320,308,320,295,320C283.1,320,271,320,258,320C246.2,320,234,320,222,320C209.2,320,197,320,185,320C172.3,320,160,320,148,320C135.4,320,123,320,111,320C98.5,320,86,320,74,320C61.5,320,49,320,37,320C24.6,320,12,320,6,320L0,320Z"></path></svg>
          </Box>
          <Stack as="ul" marginBottom={30}>
            <Box as="li">
              <a href="https://flat.badgen.net/npm/dw/native-piece" target="_blank" rel="noopener noreferrer">
                <img src="https://flat.badgen.net/github/stars/lac617a/native-piece?icon=github" alt="stars" />
              </a>
            </Box>
            <Box as="li">
              <a href="https://github.com/lac617a/native-piece" target="_blank" rel="noopener noreferrer">
                <img src="https://flat.badgen.net/npm/dm/native-piece" alt="download" />
              </a>
            </Box>
            <Box as="li">
              <a href="https://github.com/lac617a/native-piece" target="_blank" rel="noopener noreferrer">
                <img src="https://flat.badgen.net/npm/v/native-piece" alt="version" />
              </a>
            </Box>
          </Stack>
          <Box width="max-content" marginBottom={10}>
            <Heading fontFamily="Sora">Características</Heading>
            <Box height={2} width="90%" backgroundColor="var(--text)" />
          </Box>
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
          </Box>
          <Box position="absolute" inset="0 0 0 0" zIndex={-1} top={330}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="var(--secundary)" fillOpacity="1" d="M0,192L6.2,197.3C12.3,203,25,213,37,213.3C49.2,213,62,203,74,192C86.2,181,98,171,111,176C123.1,181,135,203,148,229.3C160,256,172,288,185,298.7C196.9,309,209,299,222,250.7C233.8,203,246,117,258,112C270.8,107,283,181,295,202.7C307.7,224,320,192,332,186.7C344.6,181,357,203,369,181.3C381.5,160,394,96,406,112C418.5,128,431,224,443,256C455.4,288,468,256,480,240C492.3,224,505,224,517,213.3C529.2,203,542,181,554,176C566.2,171,578,181,591,208C603.1,235,615,277,628,261.3C640,245,652,171,665,154.7C676.9,139,689,181,702,218.7C713.8,256,726,288,738,293.3C750.8,299,763,277,775,245.3C787.7,213,800,171,812,149.3C824.6,128,837,128,849,144C861.5,160,874,192,886,218.7C898.5,245,911,267,923,282.7C935.4,299,948,309,960,277.3C972.3,245,985,171,997,122.7C1009.2,75,1022,53,1034,48C1046.2,43,1058,53,1071,58.7C1083.1,64,1095,64,1108,69.3C1120,75,1132,85,1145,112C1156.9,139,1169,181,1182,197.3C1193.8,213,1206,203,1218,192C1230.8,181,1243,171,1255,181.3C1267.7,192,1280,224,1292,229.3C1304.6,235,1317,213,1329,186.7C1341.5,160,1354,128,1366,106.7C1378.5,85,1391,75,1403,64C1415.4,53,1428,43,1434,37.3L1440,32L1440,0L1433.8,0C1427.7,0,1415,0,1403,0C1390.8,0,1378,0,1366,0C1353.8,0,1342,0,1329,0C1316.9,0,1305,0,1292,0C1280,0,1268,0,1255,0C1243.1,0,1231,0,1218,0C1206.2,0,1194,0,1182,0C1169.2,0,1157,0,1145,0C1132.3,0,1120,0,1108,0C1095.4,0,1083,0,1071,0C1058.5,0,1046,0,1034,0C1021.5,0,1009,0,997,0C984.6,0,972,0,960,0C947.7,0,935,0,923,0C910.8,0,898,0,886,0C873.8,0,862,0,849,0C836.9,0,825,0,812,0C800,0,788,0,775,0C763.1,0,751,0,738,0C726.2,0,714,0,702,0C689.2,0,677,0,665,0C652.3,0,640,0,628,0C615.4,0,603,0,591,0C578.5,0,566,0,554,0C541.5,0,529,0,517,0C504.6,0,492,0,480,0C467.7,0,455,0,443,0C430.8,0,418,0,406,0C393.8,0,382,0,369,0C356.9,0,345,0,332,0C320,0,308,0,295,0C283.1,0,271,0,258,0C246.2,0,234,0,222,0C209.2,0,197,0,185,0C172.3,0,160,0,148,0C135.4,0,123,0,111,0C98.5,0,86,0,74,0C61.5,0,49,0,37,0C24.6,0,12,0,6,0L0,0Z"></path></svg>
          </Box>
        </Box>
        <Box as="section" position="relative" marginX={50}>
          <CustomEditor />
        </Box>
      </Box>
      <Box
        position="absolute"
        top={50}
        left={0}
        height={900}
        zIndex={-1}
        transform="scaleX(-1)">
        <img style={{ width: "100%", height: "100%" }} src={IconDashed} alt="dashed-treasure" />
      </Box>
      <Footer />
    </Box>
  );
}
