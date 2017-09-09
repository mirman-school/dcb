var sub;
var seaFloor;
var subImg;
var foreBallast = 2;
var aftBallast = 2;
var maxBallast = 6;
var minBallast = 0;
var neutral = 4;
var subRotationSpeed = .1;
var ceiling;
var floor;

function preload() {
    subImg = loadImage("assets/img/sub-sprite.png");
}

function setup() {
    ceiling = windowHeight * .25;
    floor = windowHeight - 100
    createCanvas(windowWidth, windowHeight);
    sub = createSprite(500, windowHeight * .5);
    sub.addImage("sub", subImg);
}

function ballastLabel(label, x, y) {
    textSize(32);
    fill(255,255,255);
    text(label, x, y);
}

function draw() {
    noStroke();
    fill(170, 229, 255);
    // Sky
    rect(0, 0, windowWidth, windowHeight);
    fill(0,46,173);
    // Water
    rect(0, windowHeight * 0.25, windowWidth, windowHeight * 0.75);
    fill(0,0,0);
    // Floor
    rect(0, floor, windowWidth, 100);


    ballastLabel("Fore Ballast: " + foreBallast, 10, 50);
    ballastLabel("Aft Ballast: " + aftBallast, 10, 100);
    text("Spacebar to get off bottom/below surface", windowHeight / 2, 100);

    sub.setVelocity(0);


    if (sub.position.y > ceiling && sub.position.y < floor - 80) {
        sub.setVelocity(0, Math.abs((foreBallast + aftBallast)) - neutral);
    } else {
        sub.setVelocity(0,0);
    }

    // The code you need to implement
    if (foreBallast > aftBallast && sub.rotation <= 10) {
        // Set sub's rotationSpeed to subRotationSpeed
        sub.rotationSpeed = subRotationSpeed;
    } else if (foreBallast < aftBallast && sub.rotation >= -10) {
        // Set sub's rotationSpeed to the negative value of subRotationSpeed
        sub.rotationSpeed = subRotationSpeed * -1;
    } else {
        // If the ballast is even, stop rotation
        sub.rotationSpeed = 0;
    }

    if (keyWentDown("f")) {
        // Add fore ballast, but only when there's room left in the tank
        if (foreBallast < maxBallast ) {
            foreBallast++;
        }
    }

    if (keyWentDown("r")) {
        // Dump fore ballast, but only when it isn't empty
        if (foreBallast > minBallast) {
            foreBallast--;
        }
    }

    if (keyWentDown("a")) {
        // Add aft ballast, but only when there's room left in the tank
        if (aftBallast < maxBallast) {
            aftBallast++;
        }
    }

    if (keyWentDown("q")) {
        // Dump aft ballast, but only when it isn't empty
        if (aftBallast > minBallast) {
            aftBallast--;
        }
    }

    if (keyWentDown("space")) {
        // This is a little hack to get the sub off the floor and surface. Don't mess with it!
        if (sub.position.y >= floor - 80) {
            sub.position.y -= 100;
        }

        if (sub.position.y <= ceiling) {
            sub.position.y += 100;
        }
    }

    drawSprites();
}
