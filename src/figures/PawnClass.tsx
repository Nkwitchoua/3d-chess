import FigureClass from "../FigureClass";
import Pawn from "../models/Pawn";


export default class PawnClass extends FigureClass {
    constructor(figureName: string, i: number, j: number) {
        super(figureName, i, j);

        if(this.hasMoved) {
            this.moves = [[1 * this.colorInt, 0]];
        } else {
            this.moves = [[2 * this.colorInt, 0], [1 * this.colorInt, 0]];
        }
        this.figure = <Pawn key={Math.random()} posX={this.posX} posZ={this.posZ}/>;
    }

    setFigure() {

    }
}