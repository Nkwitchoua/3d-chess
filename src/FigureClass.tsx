export interface FiguresProps {
    posX: number;
    posZ: number;
}

export default class FigureClass {
    figure: JSX.Element = <></>;
    moves: number[][] = [];
    hasMoved: boolean = false;
    colorInt: number = 1;
    posX: number;
    posZ: number;

    constructor(figureName: string, i: number, j: number) {
        this.posX = 0 + i * 0.35;
        this.posZ = 0 + j * 0.35;
    }

    renderFigure(): JSX.Element {
        // console.log("This. figure -> ", this.figure)
        if(this.figure) return this.figure;

        return <></>;
    }
}