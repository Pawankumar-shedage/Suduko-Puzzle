import { useEffect, useState } from "react";
import "./Grid.css";

export default function Grid() {
  // initializing grid[][]
  const grid = Array(9)
    .fill(0)
    .map(() => Array(9).fill(0));

  const [arr, setArr] = useState(grid);

  console.log("og arr", arr[5][4]);

  function randPositionInGrid() {
    return Math.floor(Math.random() * 8);
  }

  function randomNumForGrid() {
    return Math.floor(Math.random() * 9);
  }

  const generateIntialGrid = (difficultyLevel: number) => {
    for (let i = 0; i < difficultyLevel; i++) {
      // Random position(0,0) to (8,8)
      const randPosition1 = randPositionInGrid();
      const randPosition2 = randPositionInGrid();

      // Random num between 1 and 9
      const randNumber = randomNumForGrid();

      console.log(
        "Position of cell: ",
        randPosition1,
        randPosition2,
        " at i:",
        i
      );

      // Fill if cell is empty ***
      if (arr[randPosition1][randPosition2] === 0) {
        // checking is that number valid at entire row and col.

        arr[randPosition1][randPosition2] = randNumber;
      }
    }

    // Updating State [0] => numbers(initial based on diff level.)
    setArr((prevState) => {
      const newArray: number[][] = [...prevState];
      return newArray;
    });
    console.log("generated grid", arr);
  };

  //   Generating grid <div> for each cell
  const renderCells = () => {
    const cells = [];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        cells.push(
          <div className="cell" key={`${i} - ${j}`}>
            {arr[i][j] > 0 && arr[i][j]}
          </div>
        );
      }
    }

    return cells;
  };

  // Load initial grid(backend)
  useEffect(() => {
    console.log("Called");

    generateIntialGrid(15);
  }, []);
  // const cells = renderCells(9, 9);
  // console.log(cells);

  // return
  return (
    <div>
      <div className="grid-container">{renderCells()}</div>
    </div>
  );
}
