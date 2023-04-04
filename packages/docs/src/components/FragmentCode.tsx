import React, { FC } from "react";
import { useEffect, useState } from "preact/hooks";
import { Box, Paragraph, Stack } from "native-piece";
import { IoCopyOutline } from "react-icons/io5";
import { BsCheckLg } from "react-icons/bs";
interface IFragmentCodeProps {
  value: string;
}

export const FragmentCode: FC<IFragmentCodeProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);
  const [copie, setCopie] = useState<boolean>(false);

  useEffect(() => {
    if (copie) {
      setTimeout(() => setCopie(false), 2000);
    }
  }, [copie]);

  return (
    <Stack
      padding={10}
      borderRadius={8}
      position="relative"
      backgroundColor="var(--title)"
      onMouseEnter={() => !copie && setShow(true)}
      onMouseLeave={() => !copie && setShow(false)}>
      <code>
        <Paragraph
          color="var(--secundary)"
          fontFamily="Sora"
          fontWeight={600}>
          {props.value}
        </Paragraph>
      </code>
      <Box position="absolute" right={10} cursor="pointer">
        {show && !copie && (
          <IoCopyOutline
            color="var(--secundary)"
            onClick={() => navigator.clipboard
              .writeText(props.value)
              .then(
                () => setTimeout(() => setCopie(true), 1000),
                () => {
                  setShow(false);
                  setCopie(false);
                }
              )}
          />
        )}
        {copie && (<BsCheckLg color="var(--secundary)" />)}
      </Box>
    </Stack>
  );
};