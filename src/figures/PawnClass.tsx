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
        // this.figure = <Pawn key={Math.random()} posX={this.posX} posZ={this.posZ} colorInt={this.colorInt}/>;

        // console.log("from pawn class", this.id)
    }

    setFigure(handleClick: (id: string) => void, handleHover: (id: string, e: Event) => void) {
        // console.log(this.id, " ", this.posX, " ", this.posZ, " ", this.colorInt, " ", handleClick, " ");
        this.figure = <Pawn 
            key={this.id} 
            posX={this.posX} 
            posZ={this.posZ} 
            colorInt={this.colorInt} 
            handleClick={handleClick} 
            handleHover={handleHover} 
            figureId={this.id}
        />;
    }
}