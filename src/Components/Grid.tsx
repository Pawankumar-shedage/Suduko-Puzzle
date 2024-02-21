import "./Grid.css";

export default function Grid() {
  const arr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  const boolArray = new Array(9);

  for (let i = 0; i < boolArray.length; i++) {
    boolArray[i] = new Array(9);
    boolArray[i].fill(true);
  }

  function randPositionInGrid() {
    return Math.floor(Math.random() * 8);
  }

  function randomNumForGrid() {
    return Math.floor(Math.random() * 9);
  }

  const difficultyLevel = 15;

  for (let i = 0; i < difficultyLevel; i++) {
    // Random position(0,0) to (8,8)
    const randPosition1 = randPositionInGrid();
    const randPosition2 = randPositionInGrid();

    // Random num between 1 and 9
    const randNumber = randomNumForGrid();

    // Fill if cell is empty
    if (boolArray[randPosition1][randPosition2] === true) {
      console.log("i: ", i);
      arr[randPosition1][randPosition2] = randNumber;
      boolArray[randPosition1][randPosition2] = false;
    }
  }

  console.log(arr);

  console.log("boolArray: ", boolArray);

  //   Generating grid cells
  const renderCells = (rows: number, cols: number) => {
    const cells = [];

    for (let i: number = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        cells.push(
          <div className="cell" key={`${i} - ${j}`}>
            {arr[i][j] > 0 && arr[i][j]}
          </div>
        );
      }
    }

    return cells;
  };

  const cells = renderCells(9, 9);
  console.log(cells);

  // return
  return (
    <div>
      <div className="grid-container">{renderCells(9, 9)}</div>
    </div>
  );
}
