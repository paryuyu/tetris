import React from "react";
import { styledCell } from "./styles/styledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => {
  return <styledCell type={type} color={TETROMINOS[type]}>Cell</styledCell>;
};

export default Cell;
