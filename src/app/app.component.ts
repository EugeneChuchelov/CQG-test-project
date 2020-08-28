import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Figure} from './figure';
import {Point} from './point';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'test-project';
  text = 'rectangle -p [50, 50] [100, 100] -c rgb(0, 255, 0) -b rgba(255, 0, 0, 0.3)';
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: any;
  x: number;
  y: number;
  color: number;

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.x = 0;
    this.y = 0;
    this.color = 1;
  }

  draw(): void{
    if (this.text != null){
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      const figures = this.parse();
      figures.forEach(figure => {
        switch (figure.type){
          case 'line': this.drawLine(figure); break;
          case 'rectangle': this.drawRectangle(figure); break;
          default: break;
        }
      });
    }
  }

  drawLine(figure: Figure): void{
    this.ctx.strokeStyle = figure.color;
    this.ctx.beginPath();
    this.ctx.moveTo(figure.points[0].x, figure.points[0].y);
    this.ctx.lineTo(figure.points[1].x, figure.points[1].y);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawRectangle(figure: Figure): void{
    this.ctx.strokeStyle = figure.color;
    this.ctx.fillStyle = figure.backcolor;
    console.log(figure);
    this.ctx.fillRect(figure.points[0].x, figure.points[0].y,
      figure.points[1].x - figure.points[0].x, figure.points[1].y - figure.points[0].y);
    this.ctx.strokeRect(figure.points[0].x, figure.points[0].y,
      figure.points[1].x - figure.points[0].x, figure.points[1].y - figure.points[0].y);
  }

  parse(): Figure[]{
    const lines: string[] = this.text.toLowerCase().split('\n');
    const figures: Figure[] = [];

    lines.forEach(line => {
      const params = line.split(' -');
      const type = params[0];
      let points: Point[];
      let color: string;
      let backcolor: string;
      console.log(params);
      for (let i = 1; i < params.length; i++){
        switch (params[i][0]) {
          case 'p': points = this.parsePoints(params[i].substr(2)); break;
          case 'c': color = params[i].substr(2); break;
          case 'b': backcolor = params[i].substr(2); break;
          default: break;
        }
      }
      figures.push(new Figure(type, points, color, backcolor));
    });

    return figures;
  }

  parsePoints(line: string): Point[]{
    const pointsStrings = line.match(/\d+, ?\d+/g);
    const points: Point[] = [];
    pointsStrings.forEach(pointString => {
      const coordinates = pointString.split(',');
      points.push(new Point(Number(coordinates[0]), Number(coordinates[1])));
    });
    return points;
  }
}
