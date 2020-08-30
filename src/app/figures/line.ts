import {Point} from './point';
import {LineStyle} from './lineStyle';
import {Color} from './color';

export class Line{
  startPoint: Point;
  endPoint: Point;
  color: Color;
  lineStyle: LineStyle;

  constructor(startPoint: Point, endPoint: Point, color: Color, lineStyle: LineStyle) {
    this.startPoint = startPoint;
    this.endPoint = endPoint;
    this.color = color;
    this.lineStyle = lineStyle;
  }
}
