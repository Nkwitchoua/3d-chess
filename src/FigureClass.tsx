import { useLoader } from "@react-three/fiber";
import { Texture, TextureLoader } from "three";

export interface FiguresProps {
    posX: number;
    posZ: number;
    colorInt: number;
}

export default class FigureClass {
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
        if(this.color == "black") this.colorInt = -1;

    }

    renderFigure(): JSX.Element {
        
        if(this.figure) return this.figure;

        return <></>;
    }
}