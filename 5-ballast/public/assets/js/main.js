// You don't need to edit this code! Keep going until you see a comment
// indicating you should change code.

var sub; // The sub Sprite
var subImg; // The image for the sub
var foreBallast = 2; // Starting ballast in the front of the sub
var aftBallast = 2; // Starting ballast in the back of the sub
var maxBallast = 6; // The max ballast for each tank
var minBallast = 0; // The min ballast
var neutral = 4; // The ballast value that makes the sub neutrally buoyant
var subRotationSpeed = .1; // Used to spin the sub when ballasts are uneven
var ceiling; // The y coordinate for the top of the water
var floor; // The y coordinate for the sea floor

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

    // Moves the sub up or down depending on buoyancy. DON'T TOUCH
    if (sub.position.y > ceiling && sub.position.y < floor - 80) {
        sub.setVelocity(0, Math.abs((foreBallast + aftBallast)) - neutral);
    } else {
        sub.setVelocity(0,0);
    }

    // ===
    // THIS IS THE CODE YOU NEED TO IMPLEMENT
    // ===

    if (foreBallast > aftBallast && sub.rotation <= 10) {
        // Set sub's rotationSpeed to subRotationSpeed
        
    } else if (foreBallast < aftBallast && sub.rotation >= -10) {
        // Set sub's rotationSpeed to the negative value of subRotationSpeed
        
    } else {
        // If the ballast is even, stop rotation
        
    }

    if (keyWentDown("f")) {
        // Add fore ballast, but only when there's room left in the tank
        
    }

    if (keyWentDown("r")) {
        // Dump fore ballast, but only when it isn't empty
        
    }

    if (keyWentDown("a")) {
        // Add aft ballast, but only when there's room left in the tank
        
    }

    if (keyWentDown("q")) {
        // Dump aft ballast, but only when it isn't empty
        
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
