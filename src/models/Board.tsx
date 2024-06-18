import { useLoader } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import WhiteCell from './WhiteCell';
import BoardClass from "../BoardClass.ts";
import Textures from '../Textures.tsx';
import { TextureLoader } from 'three';

const Board = () => {

  const [figTextures, setFigTextures] = useState<object>({
      fichteDunkel: null,
      fichteNatur: null
  });
  
  const board = new BoardClass();
  const boardObj = useLoader(GLTFLoader, "../public/models/chess/board.gltf");
  
  const [figures, setFigures] = useState(board.figures);
  const [cells, setCells] = useState(board.cells);

  const handleFigureClick = (id: string) => {
    console.log("CLICK!!!", board.figuresObj[id]);

    board.figuresObj[id].moveFigure()
  }

  return (
    <>
    <Suspense>

        <primitive object={boardObj.scene}>
            {
                cells.map((cellRow, i) => {
                    return cellRow.map((cell, j) => {
                        return <>{
                            cell.renderCell()
                        }</>
                    })
                })
            }
            {
                figures.map((figuresRow, i) => {

                    return figuresRow.map((figure, j) => {
                        figure.setFigure(handleFigureClick);

                        if(figure) {
                            return <>{figure.renderFigure()}</>;
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