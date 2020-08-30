import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Line} from './figures/line';
import {Rectangle} from './figures/rectangle';
import {Triangle} from './figures/triangle';
import {Parser} from './parser';
import {Ellipse} from './figures/ellipse';
import {LineStyle} from './figures/lineStyle';
import {Path} from './figures/path';
import {Text} from './figures/text';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'test-project';
  text = 'rectangle -p [50, 50] [100, 100] -c rgb(0, 0, 255) -b rgba(255, 0, 0, 0.3)\n' +
    'line -p [50, 50] [100, 100] -c rgb(255, 0, 0)\n' +
    'triangle -p [50, 50] [50, 100] [100, 100] -c rgb(0, 0, 255) -b rgba(255, 0, 0, 0.3)';
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: any;

  ngOnInit(): void {
    // console.log(window.innerWidth + ' | ' + window.innerHeight);
    // this.canvas.nativeElement.width = window.innerWidth * 0.96;
    // this.canvas.nativeElement.height = window.innerHeight * 0.847;
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

  run(): void{
    if (this.text != null){
      this.ctx.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
      const lines: string[] = this.text.toLowerCase().split('\n');
      const parser = new Parser();
      lines.forEach(line => {
        if (line[0] !== '#') {
          try{
            switch (parser.parseType(line)){
              case 'line': this.drawLine(parser.parseLine(line)); break;
              case 'rectangle': this.drawRectangle(parser.parseRectangle(line)); break;
              case 'triangle': this.drawTriangle(parser.parseTriangle(line)); break;
              case 'circle': this.drawEllipse(parser.parseCircle(line)); break;
              case 'ellipse': this.drawEllipse(parser.parseEllipse(line)); break;
              case 'path': this.drawPath(parser.parsePath(line)); break;
              case 'text': this.drawText(parser.parseText(line)); break;
            }
          } catch (TypeError){
            this.text = this.insert(this.text, this.text.indexOf(line), '#');
          }
        }
      });
    }
  }

  insert(str: string, index: number, value: string): string {
    return str.substr(0, index) + value + str.substr(index);
  }

  drawLine(line: Line): void{
    this.ctx.strokeStyle = line.color.frontcolor;
    this.setLineStyle(line.lineStyle);
    this.ctx.beginPath();
    this.ctx.moveTo(line.startPoint.x, line.startPoint.y);
    this.ctx.lineTo(line.endPoint.x, line.endPoint.y);
    this.ctx.closePath();
    this.ctx.stroke();
  }

  drawRectangle(rectangle: Rectangle): void{
    console.log(rectangle.color);
    this.ctx.strokeStyle = rectangle.color.frontcolor;
    this.ctx.fillStyle = rectangle.color.backcolor;
    this.setLineStyle(rectangle.lineStyle);
    this.ctx.fillRect(rectangle.startPoint.x, rectangle.startPoint.y,
      rectangle.endPoint.x - rectangle.startPoint.x, rectangle.endPoint.y - rectangle.startPoint.y);
    this.ctx.strokeRect(rectangle.startPoint.x, rectangle.startPoint.y,
      rectangle.endPoint.x - rectangle.startPoint.x, rectangle.endPoint.y - rectangle.startPoint.y);
  }

  drawTriangle(triangle: Triangle): void{
    this.ctx.strokeStyle = triangle.color.frontcolor;
    this.ctx.fillStyle = triangle.color.backcolor;
    this.setLineStyle(triangle.lineStyle);
    this.ctx.beginPath();
    this.ctx.moveTo(triangle.firstPoint.x, triangle.firstPoint.y);
    this.ctx.lineTo(triangle.secondPoint.x, triangle.secondPoint.y);
    this.ctx.lineTo(triangle.thirdPoint.x, triangle.thirdPoint.y);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.stroke();
  }

  drawEllipse(ellipse: Ellipse): void{
    this.ctx.strokeStyle = ellipse.color.frontcolor;
    this.ctx.fillStyle = ellipse.color.backcolor;
    this.setLineStyle(ellipse.lineStyle);

    const ratio = ellipse.radiusX / ellipse.radiusY;
    const radius = Math.min(ellipse.radiusX, ellipse.radiusY);
    const increment = 1 / radius;

    this.ctx.beginPath();
    let x = ellipse.centerPoint.x + radius * Math.cos(0);
    let y = ellipse.centerPoint.y - ratio * radius * Math.sin(0);
    this.ctx.moveTo(x, y);

    for (let radians = increment; radians < Math.PI * 2; radians += increment){
      x = ellipse.centerPoint.x + radius * Math.cos(radians);
      y = ellipse.centerPoint.y - ratio * radius * Math.sin(radians);
      this.ctx.lineTo(x, y);
    }

    this.ctx.closePath();
    this.ctx.stroke();
    this.ctx.fill();
  }

  drawPath(path: Path): void{
    this.ctx.strokeStyle = path.color.frontcolor;
    this.ctx.fillStyle = path.color.backcolor;
    this.setLineStyle(path.lineStyle);

    this.ctx.beginPath();
    path.points.forEach(point => {
      this.ctx.lineTo(point.x, point.y);
    });

    this.ctx.stroke();
    this.ctx.fill();
  }

  drawText(text: Text): void{
    this.ctx.strokeStyle = text.color.frontcolor;
    this.ctx.fillStyle = text.color.backcolor;
    this.setLineStyle(text.lineStyle);
    this.ctx.font = text.textStyle.font;
    this.ctx.textAlign = text.textStyle.textAlign;
    this.ctx.textBaseline = text.textStyle.textBaseline;
    this.ctx.direction = text.textStyle.direction;
    this.ctx.fillText(text.text, text.startPoint.x, text.startPoint.y);
    this.ctx.strokeText(text.text, text.startPoint.x, text.startPoint.y);
  }

  setLineStyle(lineStyle: LineStyle): void{
    this.ctx.lineWidth = lineStyle.lineWidth;
    this.ctx.lineCap = lineStyle.lineCap;
    this.ctx.lineJoin = lineStyle.lineJoin;
    this.ctx.setLineDash(lineStyle.lineDash);
  }
}
