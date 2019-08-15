var circle = [];

var keyData = {
    a: {
        sound: new Howl({
            src: ['assets/sounds/bubbles.mp3']
        })
    },
    s: {
        sound: new Howl({
            src: ['assets/sounds/clay.mp3']
        })
    },
    d: {
        sound: new Howl({
            src: ['assets/sounds/confetti.mp3']
        })
    },
    f: {
        sound: new Howl({
            src: ['assets/sounds/corona.mp3']
        })
    },
    g: {
        sound: new Howl({
            src: ['assets/sounds/dotted-spiral.mp3']
        })
    },
    h: {
        sound: new Howl({
            src: ['assets/sounds/flash-1.mp3']
        })
    },
    j: {
        sound: new Howl({
            src: ['assets/sounds/flash-2.mp3']
        })
    },
    k: {
        sound: new Howl({
            src: ['assets/sounds/flash-3.mp3']
        })
    },
    l: {
        sound: new Howl({
            src: ['assets/sounds/glimmer.mp3']
        })
    },
    z: {
        sound: new Howl({
            src: ['assets/sounds/moon.mp3']
        })
    },
    x: {
        sound: new Howl({
            src: ['assets/sounds/pinwheel.mp3']
        })
    },
    c: {
        sound: new Howl({
            src: ['assets/sounds/piston-1.mp3']
        })
    },
    v: {
        sound: new Howl({
            src: ['assets/sounds/piston-2.mp3']
        })
    },
    b: {
        sound: new Howl({
            src: ['assets/sounds/piston-3.mp3']
        })
    },
    n: {
        sound: new Howl({
            src: ['assets/sounds/prism-1.mp3']
        })
    },
    m: {
        sound: new Howl({
            src: ['assets/sounds/prism-2.mp3']
        })
    },
    q: {
        sound: new Howl({
            src: ['assets/sounds/prism-3.mp3']
        })
    },
    w: {
        sound: new Howl({
            src: ['assets/sounds/splits.mp3']
        })
    },
    e: {
        sound: new Howl({
            src: ['assets/sounds/squiggle.mp3']
        })
    },
    r: {
        sound: new Howl({
            src: ['assets/sounds/strike.mp3']
        })
    },
    t: {
        sound: new Howl({
            src: ['assets/sounds/suspension.mp3']
        })
    },
    y: {
        sound: new Howl({
            src: ['assets/sounds/timer.mp3']
        })
    },
    u: {
        sound: new Howl({
            src: ['assets/sounds/ufo.mp3']
        })
    },
    i: {
        sound: new Howl({
            src: ['assets/sounds/veil.mp3']
        })
    },
    o: {
        sound: new Howl({
            src: ['assets/sounds/wipe.mp3']
        })
    },
    p: {
        sound: new Howl({
            src: ['assets/sounds/zig-zag.mp3']
        })
    },
}

function onKeyDown(e) {
    if (keyData[e.key]) {
        // Gets the maximum size of the window.
        var maxPoint = new Point(view.size.width, view.size.height);
        var randomPoint = Point.random();
        // creates a random point using the max windows size and the random point variable.
        var point = maxPoint * randomPoint;
        // prints the circle on the canvas
        var newCircle = new Path.Circle(point, 200);
        // fill the circle with a random color.
        newCircle.fillColor = randomColor();
        // play the sound
        keyData[e.key].sound.play();
        // add circle to array.
        circle.push(newCircle);
    }
}

// var animatedCircle = new Path.Circle(new Point(300, 300), 100);
// animatedCircle.fillColor = 'red';

function onFrame(e) {
    for (i = 0; i < circle.length; i++) {
        circle[i].fillColor.hue += 1;
        circle[i].scale(.9);
        if (circle[i].area < 1) {
            circle[i].remove(); // remove the circle from the canvas
            circle.splice(i, 1); // remove the circle from the array
            // console.log(circle);
        }
    }
}

function randomColor() {
    //Pick red between 0 - 255
    var red = Math.floor(Math.random() * 256);
    //Pick green between 0 - 255
    var green = Math.floor(Math.random() * 256);
    //Pick blue between 0 - 255
    var blue = Math.floor(Math.random() * 256);

    //return the random color.  
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}