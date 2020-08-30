# TestProject
This project draws figures based on their text description.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Commands
### line
Draws line from one point to another.
####Required parameters:
Two points: -p [x1, y1] [x2, y2]
####Optional parameters:
Line color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: black  
Line width: -lw w Default: 2  
Line caps: -lc butt or round or square Default: butt  
Line dash pattern: -ld [s1, s2, ...] Default: none
### rectangle
Draws rectangle between two points.
####Required parameters:
Two points of top-left and bottom-right corners: -p [x1, y1] [x2, y2]
####Optional parameters:
Line color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: black  
Fill color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: transparent  
Line width: -lw w Default: 2  
Line caps: -lc butt or round or square Default: butt  
Line joins: -lj bevel or round or miter Default: miter  
Line dash pattern: -ld [s1, s2, ...] Default: none
### triangle
Draws triangle between three points.
####Required parameters:
Three points: -p [x1, y1] [x2, y2] [x3, y3]
####Optional parameters:
Line color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: black  
Fill color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: transparent  
Line width: -lw w Default: 2  
Line caps: -lc butt or round or square Default: butt  
Line joins: -lj bevel or round or miter Default: miter  
Line dash pattern: -ld [s1, s2, ...] Default: none
### circle
Draws circle with center in given point and radius.
####Required parameters:
Center point: -p [x, y]  
Radius: -r rad
####Optional parameters:
Line color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: black  
Fill color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: transparent  
Line width: -lw w Default: 2  
Line caps: -lc butt or round or square Default: butt  
Line joins: -lj bevel or round or miter Default: miter  
Line dash pattern: -ld [s1, s2, ...] Default: none
### ellipse
Draws circle with center in given point and two radiuses.
####Required parameters:
Center point: -p [x, y]  
Radiuses: -rx radX -ry radY
####Optional parameters:
Line color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: black  
Fill color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: transparent  
Line width: -lw w Default: 2  
Line caps: -lc butt or round or square Default: butt  
Line joins: -lj bevel or round or miter Default: miter  
Line dash pattern: -ld [s1, s2, ...] Default: none
### path
Draws path of straight lines between points.
####Required parameters:
Two or more points: -p [x1, y1] [x2, y2] ...
####Optional parameters:
Line color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: black  
Fill color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: transparent  
Line width: -lw w Default: 2  
Line caps: -lc butt or round or square Default: butt  
Line joins: -lj bevel or round or miter Default: miter  
Line dash pattern: -ld [s1, s2, ...] Default: none
### text
Draws text starting from given point.
####Required parameters:
Starting point: -p [x, y]  
Text: -t 'text'
####Optional parameters:
Line color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: black  
Fill color in rgb, hsl or hex model: -c rgb[a](r, g, b[, a]) or hsl[a](h, s, l[, a]) or #hex. Default: transparent  
CSS font value: -tf 'font' Default: '10px sans-serif'  
Text align: -ta left or right or center or start or end Default: start  
Text baseline: -tb top or hanging or middle or alphabetic or ideographic or bottom Default: alphabetic  
Text direction: -td ltr or rtl or inherit Default: inherit  
Line width: -lw w Default: 2  
Line caps: -lc butt or round or square Default: butt  
Line joins: -lj bevel or round or miter Default: miter  
Line dash pattern: -ld [s1, s2, ...] Default: none
  
Each command must be written in one line.  
Command can be commented with '#' symbol in the start of the line.  
If required parameters are invalid line with errors automatically commented.
If optional parameters absent or invalid default values are used.  
