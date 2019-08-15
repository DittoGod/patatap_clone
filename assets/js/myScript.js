//  // Create a Paper.js Path to draw a line into it:
//  var path = new Path();
//  // Give the stroke a color
//  path.strokeColor = 'red';
//  var start = new Point(0, 100);
//  // Move to start and draw a line from there
//  path.moveTo(start);
//  // Note the plus operator on Point objects.
//  // PaperScript does that for us, and much more!
//  path.lineTo(start + [500, -50]);

var myCircle = new Path.Circle(new Point(0, 0), 10);
myCircle.fillColor = 'orange';

var grid = [];
var x = 0;
var y = 0;

for (i = 0; i < 10; i++) {
    for (j = 0; j < 10; j++) {
        new Path.Circle(new Point(x, y), 10).fillColor = 'orange';
        console.log(x + " " + y);
        y += 100;
    }
    y = 0;
    x += 100;
}