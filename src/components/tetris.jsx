import React from "react";
import { createStage } from "../gameHelpers";
import Display from "./display";
import Stage from "./stage";
import StartButton from "./startButton";

const Tetris = () => {
  return (
    <div>
      <Stage stage={createStage()}/>
      <aside>
        <div>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level" />
        </div>
        <StartButton />
      </aside>
    </div>
  )
};

export default Tetris;
