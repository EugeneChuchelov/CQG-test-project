import {Point} from './point';
import {Color} from './color';
import {LineStyle} from './lineStyle';
import {TextStyle} from './textStyle';

export class Text{
  startPoint: Point;
  text: string;
  textStyle: TextStyle;
  color: Color;
  lineStyle: LineStyle;


  constructor(startPoint: Point, text: string, textStyle: TextStyle, color: Color, lineStyle: LineStyle) {
    this.startPoint = startPoint;
    this.text = text;
    this.textStyle = textStyle;
    this.color = color;
    this.lineStyle = lineStyle;
  }
}
