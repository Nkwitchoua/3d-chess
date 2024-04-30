import WhiteCell from "./models/WhiteCell";
import BlackCell from "./models/BlackCell";
import { Object3D } from "three";
import { Component, ComponentType, ReactElement } from "react";

export interface CellProps {
    posX: number;
    posZ: number;
}

export default class CellClass {
    i: number;
    j: number;
    sum: number;
    posX: number;
    posZ: number;
    cell: ReactElement;

    constructor(i: number, j: number) {
        this.i = i;
        this.j = j;

        this.sum = i + j;
        this.posX = 0 + this.j * 0.35;
        this.posZ = 0 + this.i * 0.35;
        this.cell = this.sum % 2 == 0 ? 
        <WhiteCell posX={this.posX} posZ={this.posZ} key={this.sum}/> :
        <BlackCell posX={this.posX} posZ={this.posZ} key={this.sum}/>;
    }
    
    renderCell(): JSX.Element {
        if(this.cell) return this.cell;

        return <></>;
    }
}