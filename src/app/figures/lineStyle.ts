export class LineStyle{
  private static validCaps = ['butt', 'round', 'square'];
  private static validJoins = ['bevel', 'round', 'miter'];

  lineWidth: number;
  lineCap: string;
  lineJoin: string;
  lineDash: number[];

  constructor(lineWidth: number, lineCap: string, lineJoin: string, lineDash: number[]) {
    this.lineWidth = isNaN(lineWidth) || lineWidth < 0 ? 2 : lineWidth;
    if (lineCap === undefined || !LineStyle.validCaps.includes(lineCap)){
      this.lineCap = 'butt';
    } else {
      this.lineCap = lineCap;
    }
    if (lineJoin === undefined || !LineStyle.validJoins.includes(lineJoin)){
      this.lineJoin = 'miter';
    } else {
      this.lineJoin = lineJoin;
    }
    this.lineDash = lineDash === undefined ? [] : lineDash;
  }
}
