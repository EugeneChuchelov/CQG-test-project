import {Point} from './figures/point';
import {Line} from './figures/line';
import {Rectangle} from './figures/rectangle';
import {Triangle} from './figures/triangle';
import {Ellipse} from './figures/ellipse';
import {LineStyle} from './figures/lineStyle';
import {Color} from './figures/color';
import {Path} from './figures/path';
import {Text} from './figures/text';
import {TextStyle} from './figures/textStyle';

export class Parser{

  parseType(line: string): string{
    return line.substring(0, line.indexOf(' '));
  }

  parseLine(line: string): Line{
    const points = this.parsePoints(line);
    const color = this.parseColor(line);
    const lineStyle = this.parseLineStyle(line);
    return new Line(points[0], points[1], color, lineStyle);
  }

  parseRectangle(line: string): Rectangle{
    const points = this.parsePoints(line);
    const color = this.parseColor(line);
    const lineStyle = this.parseLineStyle(line);
    return new Rectangle(points[0], points[1], color, lineStyle);
  }

  parseTriangle(line: string): Triangle{
    const points = this.parsePoints(line);
    const color = this.parseColor(line);
    const lineStyle = this.parseLineStyle(line);
    return new Triangle(points[0], points[1], points[2], color, lineStyle);
  }

  parseEllipse(line: string): Ellipse{
    const points = this.parsePoints(line);
    const radiuses = this.parseRadiuses(line);
    const color = this.parseColor(line);
    const lineStyle = this.parseLineStyle(line);
    return new Ellipse(points[0], radiuses[0], radiuses[1], color, lineStyle);
  }

  parseCircle(line: string): Ellipse{
    const points = this.parsePoints(line);
    const radiuses = this.parseSingleRadius(line);
    const color = this.parseColor(line);
    const lineStyle = this.parseLineStyle(line);
    return new Ellipse(points[0], radiuses, radiuses, color, lineStyle);
  }

  parsePath(line: string): Path{
    const points = this.parsePoints(line);
    const color = this.parseColor(line);
    const lineStyle = this.parseLineStyle(line);
    return new Path(points, color, lineStyle);
  }

  parseText(line: string): Text{
    const points = this.parsePoints(line);
    const text = this.parseTextString(line);
    const textStyle = this.parseTextStyle(line);
    const color = this.parseColor(line);
    const lineStyle = this.parseLineStyle(line);
    return new Text(points[0], text, textStyle, color, lineStyle);
  }

  private parsePoints(line: string): Point[]{
    let pointsStrings = line.match(/-p (?:\[\d+, ?\d+\] ?)+/);
    pointsStrings = pointsStrings[0].match(/\d+, ?\d+/g);
    const points: Point[] = [];
    pointsStrings.forEach(pointString => {
      const coordinates = pointString.split(',');
      points.push(new Point(Number(coordinates[0]), Number(coordinates[1])));
    });
    return points;
  }

  private parseRadiuses(line: string): number[]{
    let radiusString = line.match(/-rx \d+/);
    const radiuses: number[] = [];
    radiuses.push(Number(radiusString[0].substring(radiusString[0].indexOf(' '))));
    radiusString = line.match(/-ry \d+/);
    radiuses.push(Number(radiusString[0].substring(radiusString[0].indexOf(' '))));
    return radiuses;
  }

  private parseSingleRadius(line: string): number{
    const radiusString = line.match(/-r \d+/);
    return Number(radiusString[0].substring(radiusString[0].indexOf(' ')));
  }

  private parseColor(line: string): Color{
    const frontcolor = this.matchIfPresent(line, /-c (rgba?\(\d{0,3}, ?\d{0,3}, ?\d{0,3},? ?[01]?\.?\d*\)|hsla?\(\d{0,3}, ?\d{0,3}%, ?\d{0,3}%,? ?[01]?\.?\d*\)|#[0-9a-fA-F]{3,8})/);
    const backcolor = this.matchIfPresent(line, /-b (rgba?\(\d{0,3}, ?\d{0,3}, ?\d{0,3},? ?[01]?\.?\d*\)|hsla?\(\d{0,3}, ?\d{0,3}%, ?\d{0,3}%,? ?[01]?\.?\d*\)|#[0-9a-fA-F]{3,8})/);
    console.log(backcolor);
    return new Color(frontcolor, backcolor);
  }

  private parseLineStyle(line: string): LineStyle{
    const width = Number(this.matchIfPresent(line, /-lw \d+/));
    const cap = this.matchIfPresent(line, /-lc \w+/);
    const join = this.matchIfPresent(line, /-lj \w+/);
    const dashString = this.matchIfPresent(line, /-ld \[(?:\d+,? ?)+\]/);

    let dash;
    if (dashString !== undefined){
      dash = JSON.parse(dashString);
    }

    return new LineStyle(width, cap, join, dash);
  }

  private parseTextString(line: string): string{
    const text = line.match(/-t '(.*?)'/)[0];
    return text.substring(4, text.length - 1);
  }

  private parseTextStyle(line: string): TextStyle{
    let font = this.matchIfPresent(line, /-tf '(.*?)'/);
    font = font.substring(1, font.length - 1);
    const textAlign = this.matchIfPresent(line, /-ta \w+/);
    const textBaseline = this.matchIfPresent(line, /-tb \w+/);
    const direction = this.matchIfPresent(line, /-td \w+/);

    return new TextStyle(font, textAlign, textBaseline, direction);
  }

  private matchIfPresent(line: string, matcher: RegExp): string{
    let value;
    const valueMatch = line.match(matcher);
    if (valueMatch != null){
      value = valueMatch[0].substring(valueMatch[0].indexOf(' ') + 1);
    }
    return value;
  }
}
