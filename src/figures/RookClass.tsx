import FigureClass from "../FigureClass";
import Rook from "../models/Rook";

export default class RookClass extends FigureClass {
    constructor(figureName: string, i: number, j: number) {
        super(figureName, i, j);

        this.moves = this.setFigureMoves();
        
        this.figure = <Rook key={Math.random()} posX={this.posX} posZ={this.posZ}/>;
    }

    setFigureMoves() {
        const moves = [];
        for(let i = 0; i < 8; ++i) {
                moves.push([0, i]);
                moves.push([0, -i]);
                moves.push([i, 0]);
                moves.push([-i, 0]);
        }
        return moves;
    }
}