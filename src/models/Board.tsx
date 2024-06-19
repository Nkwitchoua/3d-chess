import { useLoader } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import WhiteCell from './WhiteCell';
import BoardClass from "../BoardClass.ts";
import Textures from '../Textures.tsx';
import { TextureLoader } from 'three';

const Board = () => {
  const boardObj = useLoader(GLTFLoader, "../public/models/chess/board.gltf");
  
  const [board, setBoard] = useState(new BoardClass());
  const [figuresArr, setFiguresArr] = useState(board.figures);
  const [cells, setCells] = useState(board.cells);

  console.log("Board started")
  const handleFigureClick = (id: string) => {

    const figure = board.figuresObj[id];
    
    console.log("CLICK!!!", figure);

    figure.moveFigure();
    // figure.setFigure(handleFigureClick);
    

    setFiguresArr([...board.figures]);
  }

  return (
    <>
    <Suspense>
        <primitive object={boardObj.scene}>
            {
                cells.map((cellRow, i) => {
                    return cellRow.map((cell, j) => {
                        return cell.renderCell()
                    })
                })
            }
            {
                figuresArr.map((figuresRow, i) => {
                    console.log("MAP START")

                    return figuresRow.map((figure, j) => {
                        figure.setFigure(handleFigureClick);

                        if(figure) {
                            return figure.renderFigure();
                        }
                    })
                })
            }
        </primitive>
    </Suspense>
    </>
  )
}

export default Board