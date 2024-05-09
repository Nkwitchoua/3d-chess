import FigureClass from "../FigureClass";
import Knight from "../models/Knight";

export default class KnightClass extends FigureClass {
    constructor(figureName: string, i: number, j: number, color: string) {
        super(figureName, i, j, color);

        this.moves = this.setFigureMoves();
        
        this.figure = <Knight key={Math.random()} posX={this.posX} posZ={this.posZ} texture={this.texture}/>;
    }

    setFigureMoves() {
        const moves = [];
        
        moves.push([2, 1]);
        moves.push([-2, 1]);
        moves.push([2, -1]);
        moves.push([-2, -1]);
        moves.push([1, 2]);
        moves.push([-1, 2]);
        moves.push([1, -2]);
        moves.push([-1, -2]);
                
        return moves;
    }
}