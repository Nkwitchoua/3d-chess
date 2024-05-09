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

    const loadTextures = async() => {
        const [blackTexture, whiteTexture] = await useLoader(TextureLoader, 
            ["../public/models/chess/textures/Fichte_dunkel_baseColor.jpeg",
            "../public/models/chess/textures/Fichte_Natur_baseColor.jpeg"]);
        return { blackTexture, whiteTexture };
    }
    
    const board = new BoardClass();
    const boardObj = useLoader(GLTFLoader, "../public/models/chess/board.gltf");

    const textures = loadTextures();
    console.log("TEXTUERS ", textures)

  return (
    <>
    <Suspense>

        <primitive object={boardObj.scene}>
            {/* <Textures setTextures={setFigTextures}/> */}
            {
                board.cells.map((cellRow, i) => {
                    return cellRow.map((cell, j) => {
                        return <>{
                            cell.renderCell()
                        }</>
                    })
                })
            }
            {
                board.figures.map((figuresRow, i) => {
                    return figuresRow.map((figure, j) => {
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