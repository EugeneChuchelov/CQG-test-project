import {Point} from './point';
import {Color} from './color';
import {LineStyle} from './lineStyle';

export class Path{
  points: Point[];
  color: Color;
  lineStyle: LineStyle;

  constructor(points: Point[], color: Color, lineStyle: LineStyle) {
    this.points = points;
    this.color = color;
    this.lineStyle = lineStyle;
  }
}
