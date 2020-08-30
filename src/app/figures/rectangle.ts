import {Point} from './point';
import {Color} from './color';
import {LineStyle} from './lineStyle';

export class Rectangle{
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
