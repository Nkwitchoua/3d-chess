import { useLoader } from '@react-three/fiber'
import React, { Suspense, useEffect, useState } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import WhiteCell from './WhiteCell';
import BoardClass from "../BoardClass.ts";
import Textures from '../Textures.tsx';
import { SphereGeometry, TextureLoader } from 'three';
import { EffectComposer, Outline, Select, Selection } from '@react-three/postprocessing';

const Board = () => {
  const boardObj = useLoader(GLTFLoader, "../public/models/chess/board.gltf");
  const [hovered, setHovered] = useState("");
  
  const [board, setBoard] = useState(new BoardClass());
  const [figuresArr, setFiguresArr] = useState(board.figures);
  const [cells, setCells] = useState(board.cells);

  console.log("Board started")

  const handleFigureClick = (id: string) => {

    const figure = board.figuresObj[id];
    
    console.log("before")
    board.showPossibleMoves(figure);
    console.log("after")
    
    // figure.moveFigure();
    // figure.setFigure(handleFigureClick);

    setCells([...board.cells]);
  }

  const handleFigureHover = (id: string, e: Event) => {
    e.stopPropagation();
    setHovered(id);
  }

  return (
    <>
        <Suspense>
            <Selection enabled>
                <EffectComposer autoClear={false}>
                    <Outline hiddenEdgeColor={0x000000} edgeStrength={100} resolutionScale={1980/720} xRay={false} visibleEdgeColor={0xffffff}/>
                    
                </EffectComposer>

                <primitive object={boardObj.scene}>
                    {
                        cells.map((cellRow, i) => {
                            return cellRow.map((cell, j) => {
                                return cell.renderCell();
                            })
                        })
                    }
                    {
                        figuresArr.map((figuresRow, i) => {
                            // console.log("MAP START")
                            
                            return figuresRow.map((figure, j) => {
                                figure.setFigure(handleFigureClick, handleFigureHover);
                                
                                if(figure) {
                                    return <Select key={i * 10 + j} enabled={figure.id === hovered}>{
                                        figure.renderFigure()
                                    }</Select>
                                }
                            })
                        })
                    }
                </primitive>
            </Selection>
        </Suspense>
    </>
  )
}

export default Board