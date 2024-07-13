import FigureClass from "../FigureClass";
import Knight from "../models/Knight";

export default class KnightClass extends FigureClass {
    constructor(figureName: string, i: number, j: number, color: string) {
        super(figureName, i, j, color);

        this.moves = this.setFigureMoves();
        
        
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

    setFigure(handleClick: (id: string) => void, handleHover: (id: string, e: Event) => void) {
        this.figure = <Knight key={this.id} posX={this.posX} posZ={this.posZ} colorInt={this.colorInt} handleClick={handleClick} handleHover={handleHover} figureId={this.id}/>;
    }
}