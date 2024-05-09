import { Texture } from "three";
import FigureClass from "../FigureClass";
import Pawn from "../models/Pawn";


export default class PawnClass extends FigureClass {
    constructor(figureName: string, i: number, j: number, color: string) {
        super(figureName, i, j, color);

        if(this.hasMoved) {
            this.moves = [[1 * this.colorInt, 0]];
        } else {
            this.moves = [[2 * this.colorInt, 0], [1 * this.colorInt, 0]];
        }
        this.figure = <Pawn key={Math.random()} posX={this.posX} posZ={this.posZ} colorInt={this.colorInt}/>;
    }

    setFigure() {

    }
}