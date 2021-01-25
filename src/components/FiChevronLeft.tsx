import React from "react";

// lib
import { IconType } from "../lib/types";

const FiChevronLeft: IconType = ({ ...svgProps }) => (
  <svg
    className="feather feather-chevron-left"
    fill="none"
    height="24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
    width="24"
    xmlns="http://www.w3.org/2000/svg"
    {...svgProps}
  >
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

export default FiChevronLeft;
