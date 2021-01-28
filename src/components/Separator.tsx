import React, { FC, useCallback, useContext, useMemo } from "react";
import { Button, Flex, ButtonProps, Icon } from "@chakra-ui/react";

// components
import FiMoreHorizontal from "./FiMoreHorizontal";

// lib
import { IconType } from "../lib/types";
import { PaginatorContext } from "../lib/providers/PaginatorProvider";

type SeparatorProps = {
  separatorIcon?: IconType;
  hoverIcon: IconType;
  separatorStyles: ButtonProps;
  separatorPosition: "left" | "right";
  isDisabled: boolean;
};

export const Separator: FC<SeparatorProps> = ({
  hoverIcon,
  isDisabled,
  separatorIcon,
  separatorStyles,
  separatorPosition,
}) => {
  // react hooks
  const { actions, state } = useContext(PaginatorContext);
  const { innerLimit, currentPage } = state;
  const { setCurrentPage } = actions;

  const pageToJump = useMemo(() => {
    if (separatorPosition === "left") return currentPage - innerLimit;
    if (separatorPosition === "right") return currentPage + innerLimit;
  }, [separatorPosition, innerLimit, currentPage]);

  // constants
  const jumpingDirection =
    separatorPosition === "left" ? "backwards" : "forward";

  // handlers
  const handleJumpClick = useCallback(() => {
    if (isDisabled) return;

    if (pageToJump) {
      setCurrentPage(pageToJump);
    }
  }, [pageToJump, isDisabled, setCurrentPage]);

  return (
    <Flex as="li">
      <Button
        align="center"
        aria-label={`Jump pages ${jumpingDirection}`}
        bg="transparent"
        cursor="pointer"
        justify="center"
        minW="auto"
        onClick={handleJumpClick}
        pointerEvents={isDisabled ? "none" : "auto"}
        pos="relative"
        px={1}
        sx={{
          _hover: {
            ".call-to-action": {
              opacity: 1,
            },
          },
        }}
        {...(isDisabled ? { "aria-disabled": true } : {})}
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
      </Button>
    </Flex>
  );
};
