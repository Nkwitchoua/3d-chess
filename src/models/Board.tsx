import { useLoader } from '@react-three/fiber'
import React from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import WhiteCell from './WhiteCell';
import BoardClass from "../BoardClass.ts";

const Board = () => {

    const board = new BoardClass();
    const boardObj = useLoader(GLTFLoader, "../public/models/chess/board.gltf");

  return (
    <>
        <primitive object={boardObj.scene}>
            {
                board.cells.map((cellRow, i) => {
                    return cellRow.map((cell, j) => {
                        console.log("CELL -> ", cell.cell);
                        
                        return <>{
                            cell.renderCell()
                        }</>
                    })
                })
            }
        </primitive>
    </>
  )
}

export default Board