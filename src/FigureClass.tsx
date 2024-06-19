import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";
import { generateId } from "./utils";

export enum FigureEnum {
    step = 0.35,
}

export interface FiguresProps {
    posX: number;
    posZ: number;
    colorInt: number;
    handleClick: (id: string) => void;
    figureId: string;
}

export default class FigureClass {
    id: string;
    figure: JSX.Element = <></>;
    moves: number[][] = [];
    hasMoved: boolean = false;
    colorInt: number = 1;
    posX: number;
    posZ: number;
    color: string;

    constructor(figureName: string, i: number, j: number, color: string) {
        this.posX = 0 + i * 0.35;
        this.posZ = 0 + j * 0.35;
        this.color = color;
        this.id = generateId(12);

        if(this.color == "black") this.colorInt = -1;
    }
    
    renderFigure(): JSX.Element {
        
        if(this.figure) return this.figure;
        
        return <></>;
    }
    
    moveFigure(): void {
        this.hasMoved = true;
        this.posX += 0.35 * this.moves[0][0];
        this.posZ += 0.35 * this.moves[0][1];
        
        // this.setFigure();
    }

    setFigure(handleClick: (id: string) => void): void {}
}