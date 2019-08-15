function onKeyDown(e) {
    // Gets the maximum size of the window.
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    // creates a random point using the max windows size and the random point variable.
    var point = maxPoint * randomPoint;
    // prints the circle on the canvas
    new Path.Circle(point, 10).fillColor = 'orange';
    // console.log(maxPoint);
}