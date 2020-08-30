export class TextStyle{
  private static validAlign = ['left', 'right', 'center', 'start', 'end'];
  private static validBaseline = ['top', 'hanging', 'middle', 'alphabetic', 'ideographic', 'bottom'];
  private static validDirection = ['ltr', 'rtl', 'inherit'];

  font: string;
  textAlign: string;
  textBaseline: string;
  direction: string;

  constructor(font: string, textAlign: string, textBaseline: string, direction: string) {
    if (font === undefined){
      this.font = '10px sans-serif';
    } else {
      this.font = font;
    }
    if (textAlign === undefined || !TextStyle.validAlign.includes(textAlign)){
      this.textAlign = 'start';
    } else {
      this.textAlign = textAlign;
    }
    if (textBaseline === undefined || !TextStyle.validBaseline.includes(textBaseline)){
      this.textBaseline = 'alphabetic';
    } else {
      this.textBaseline = textBaseline;
    }
    if (direction === undefined || !TextStyle.validDirection.includes(direction)){
      this.direction = 'inherit';
    } else {
      this.direction = direction;
    }
  }
}
