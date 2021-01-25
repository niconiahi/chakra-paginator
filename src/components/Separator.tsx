import React, { FC, useCallback, useContext, useMemo } from "react";
import { Flex, FlexProps, Icon } from "@chakra-ui/react";

// components
import FiMoreHorizontal from "./FiMoreHorizontal";

// lib
import { IconType } from "../lib/types";
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

type Props = {
  separatorIcon?: IconType;
  hoverIcon: IconType;
  separatorStyles: FlexProps;
  separatorPosition: "left" | "right";
};

const Separator: FC<Props> = ({
  separatorIcon,
  hoverIcon,
  separatorStyles,
  separatorPosition,
}) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);
  const { canJumpBack, canJumpForward, innerLimit, currentPage } = state;
  const { setCurrentPage } = actions;

  const canJump = useMemo(() => {
    if (separatorPosition === "left" && canJumpBack) return true;
    if (separatorPosition === "right" && canJumpForward) return true;
    return false;
  }, [separatorPosition, canJumpBack, canJumpForward]);

  const pageToJump = useMemo(() => {
    if (separatorPosition === "left") return currentPage - innerLimit;
    if (separatorPosition === "right") return currentPage + innerLimit;
  }, [separatorPosition, innerLimit, currentPage]);

  // handlers
  const handleJumpClick = useCallback(() => {
    if (pageToJump) {
      setCurrentPage(pageToJump);
    }
  }, [pageToJump]);

  return (
    <Flex
      align="center"
      bg="transparent"
      borderRadius="md"
      cursor={canJump ? "pointer" : "default"}
      h={10}
      justify="center"
      onClick={handleJumpClick}
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
};

export default Separator;
