import React, { FC } from "react";
import { Flex, FlexProps, Icon } from "@chakra-ui/react";

// components
import FiMoreHorizontal from "./FiMoreHorizontal";

// lib
import { IconType } from "../lib/types";

type Props = {
  separatorIcon?: IconType;
  hoverIcon: IconType;
  separatorStyles: FlexProps;
};

const Separator: FC<Props> = ({
  separatorIcon,
  hoverIcon,
  separatorStyles,
}) => (
  <Flex
    align="center"
    bg="transparent"
    borderRadius="md"
    cursor="pointer"
    h={10}
    justify="center"
    pos="relative"
    px={1}
    sx={{
      _hover: {
        ".call-to-action": {
          opacity: 1,
        },
      },
    }}
    {...separatorStyles}
  >
    <Icon
      as={separatorIcon ?? FiMoreHorizontal}
      bg="inherit"
      color="inherit"
      h={4}
      w={4}
    />
    <Icon
      as={hoverIcon}
      bg="inherit"
      bottom={0}
      className="call-to-action"
      color="inherit"
      h={4}
      left={0}
      m="auto"
      opacity={0}
      pos="absolute"
      right={0}
      top={0}
      transition="all  cubic-bezier(0.4, 1, 0.9, 0.6) 0.3s"
      w={4}
    />
  </Flex>
);

export default Separator;
