import FigureClass from "../FigureClass";
import Rook from "../models/Rook";

export default class RookClass extends FigureClass {
    constructor(figureName: string, i: number, j: number, color: string) {
        super(figureName, i, j, color);

        this.moves = this.setFigureMoves();
        
        this.figure = <Rook key={Math.random()} posX={this.posX} posZ={this.posZ} colorInt={this.colorInt}/>;
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