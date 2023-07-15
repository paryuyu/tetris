export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

//행과 열 설정
export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, 'clear'])
  )
