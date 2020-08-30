import {Point} from './point';
import {Color} from './color';
import {LineStyle} from './lineStyle';

export class Ellipse{
  centerPoint: Point;
  radiusX: number;
  radiusY: number;
  color: Color;
  lineStyle: LineStyle;


  constructor(centerPoint: Point, radiusX: number, radiusY: number, color: Color, lineStyle: LineStyle) {
    this.centerPoint = centerPoint;
    this.radiusX = radiusX;
    this.radiusY = radiusY;
    this.color = color;
    this.lineStyle = lineStyle;
  }
}
