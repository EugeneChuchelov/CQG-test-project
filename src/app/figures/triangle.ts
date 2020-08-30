import {Point} from './point';
import {Color} from './color';
import {LineStyle} from './lineStyle';

export class Triangle{
  firstPoint: Point;
  secondPoint: Point;
  thirdPoint: Point;
  color: Color;
  lineStyle: LineStyle;

  constructor(firstPoint: Point, secondPoint: Point, thirdPoint: Point, color: Color, lineStyle: LineStyle) {
    this.firstPoint = firstPoint;
    this.secondPoint = secondPoint;
    this.thirdPoint = thirdPoint;
    this.color = color;
    this.lineStyle = lineStyle;
  }
}
