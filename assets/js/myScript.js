var circle = [];

function onKeyDown(e) {
    // Gets the maximum size of the window.
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    // creates a random point using the max windows size and the random point variable.
    var point = maxPoint * randomPoint;
    // prints the circle on the canvas
    var newCircle = new Path.Circle(point, 200);
    newCircle.fillColor = "orange";
    circle.push(newCircle);
    console.log(circle.length);
}

// var animatedCircle = new Path.Circle(new Point(300, 300), 100);
// animatedCircle.fillColor = 'red';

function onFrame(e) {
    for (i = 0; i < circle.length; i++) {
        circle[i].fillColor.hue += 1;
        circle[i].scale(.9);
    }
}