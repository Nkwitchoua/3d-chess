import FigureClass from "../FigureClass";
import Queen from "../models/Queen";

export default class QueenClass extends FigureClass {
    constructor(figureName: string, i: number, j: number) {
        super(figureName, i, j);

        this.moves = this.setFigureMoves();
        
        this.figure = <Queen key={Math.random()} posX={this.posX} posZ={this.posZ}/>;
    }

    setFigureMoves() {
        const moves = [];
        for(let i = 0; i < 8; ++i) {
                moves.push([0, i]);
                moves.push([0, -i]);
                moves.push([i, 0]);
                moves.push([-i, 0]);
                for(let j = 0; j < 8; ++j) {
                    moves.push([i, j]);
                    moves.push([-i, j]);
                    moves.push([i, -j]);
                    moves.push([-i, -j]);
                }
        }
        return moves;
    }
}