export class Color{
  frontcolor: string;
  backcolor: string;

  constructor(frontcolor: string, backcolor: string) {
    this.frontcolor = frontcolor === undefined ? 'rgb(0,0,0)' : frontcolor;
    this.backcolor = backcolor === undefined ? 'rgba(0,0,0,0)' : backcolor;
  }
}
