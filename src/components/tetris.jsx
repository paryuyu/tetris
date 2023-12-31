

import { useState } from "react";
import { checkCollision, createStage } from "../gameHelpers";

import { usePlayer } from "../hooks/usePlayer";
import { useStage } from "../hooks/useStage";

import Display from "./display";
import Stage from "./stage";
import StartButton from "./startButton";

import { StyledTetris, StyledTetrisWrapper } from "./style/StyledTetris";

const Tetris = () => {

  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage] = useStage(player, resetPlayer);

  console.log('re-render');

  const movePlayer = dir => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }

  }

  const startGame = () => {
    setStage(createStage());
    resetPlayer();
    setGameOver(false);
  }

  const drop = () => {
    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false })
    } else {

      if (player.pos.y < 1) {
        console.log('GAME OVER!@');
        setGameOver(true);
        setDropTime(null)
      }

      updatePlayerPos({ x: 0, y: 0, collided: true })

    }
  }

  const dropPlayer = () => {
    drop();
  }

  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        //왼쪽 화살표 키
        movePlayer(-1);
      } else if (keyCode === 39) {
        //오른쪽 화살표 키
        movePlayer(1);
      } else if (keyCode === 40) {
        //아래 화살표 키
        dropPlayer();
      } else if( keyCode === 38){ 
        playerRotate(stage, 1);
      }
    }
  }

  return (
    <StyledTetrisWrapper role={"button"} tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
            <div>
              <Display text="Score" />
              <Display text="Rows" />
              <Display text="Level" />
            </div>

          )}

          <StartButton callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  )
};

export default Tetris;
