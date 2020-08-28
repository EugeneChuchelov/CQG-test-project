import {Point} from './point';

export class Figure{
  type: string;
  points: Point[];
  color: string;
  backcolor: string;

  constructor(type: string, points: Point[], color: string, backcolor: string) {
    this.type = type;
    this.points = points;
    this.color = color == null ? 'rgb(0, 0, 0)' : color;
    this.backcolor = backcolor == null ? 'rgba(0, 0, 0, 0)' : backcolor;
  }
}
