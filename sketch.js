var car, car2, car3, car4, wall, wall2, wall3, wall4, wall5, wall6, wall7;
var speed, weight;

function setup() {
    var canvas = createCanvas(600, 480);


    speed = random(15, 30);
    weight = random(400, 1500);

    car = createSprite(50, 50, 15, 15);
    car.shapeColor = "white"

    car2 = createSprite(50, 170, 15, 15);
    car2.shapeColor = "white"

    car3 = createSprite(50, 290, 15, 15);
    car3.shapeColor = "white"

    car4 = createSprite(50, 410, 15, 15);
    car4.shapeColor = "white"


    wall = createSprite(550, 50, 15, 60);
    wall.shapeColor = color(80, 80, 80);
    wall.shapeColor = "gray"

    wall2 = createSprite(200, 110, 850, 5);
    wall2.shapeColor = "white"

    wall3 = createSprite(550, 170, 15, 60);
    wall3.shapeColor = color(80, 80, 80);
    wall3.shapeColor = "gray"

    wall4 = createSprite(200, 230, 850, 5);
    wall4.shapeColor = "white"

    wall5 = createSprite(550, 290, 15, 60);
    wall5.shapeColor = color(80, 80, 80);
    wall5.shapeColor = "gray"

    wall6 = createSprite(200, 350, 850, 5);
    wall6.shapeColor = "white"

    wall7 = createSprite(550, 410, 15, 60);
    wall7.shapeColor = color(80, 80, 80);
    wall7.shapeColor = "gray"
}


function draw() {
    background(80, 80, 80);

    car.velocityX = speed;

    if (wall.x - car.x < wall.width / 2 + car.width / 2) {
        car.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22500;
        if (deformation > 180) {
            car.shapeColor = color(255, 0, 0);
            car.shapeColor = "lightpink"
        }
        if (deformation < 180 && deformation > 100) {
            car.shapeColor = color(230, 230, 0);
            car.shapeColor = "lightpink"
        }
        if (deformation < 100) {
            car.shapeColor = color(0, 255, 0);
            car.shapeColor = "lightpink"
        }
    }

    car2.velocityX = speed;
    if (wall3.x - car2.x < wall3.width / 2 + car2.width / 2) {
        car2.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22500;
        if (deformation > 180) {
            car2.shapeColor = color(25, 0, 0);
            car2.shapeColor = "yellow"
        }
        if (deformation < 180 && deformation > 100) {
            car2.shapeColor = color(230, 230, 0);
            car2.shapeColor = "yellow"
        }
        if (deformation < 100) {
            car2.shapeColor = color(0, 255, 0);
            car2.shapeColor = "yellow"
        }
    }

    car3.velocityX = speed;
    if (wall5.x - car3.x < wall5.width / 2 + car3.width / 2) {
        car3.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22500;
        if (deformation > 180) {
            car3.shapeColor = color(25, 0, 0);
            car3.shapeColor = "red"
        }
        if (deformation < 180 && deformation > 100) {
            car3.shapeColor = color(230, 230, 0);
            car3.shapeColor = "red"
        }
        if (deformation < 100) {
            car3.shapeColor = color(0, 255, 0);
            car3.shapeColor = "red"
        }
    }

    car4.velocityX = speed;
    if (wall7.x - car4.x < wall7.width / 2 + car4.width / 2) {
        car4.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22500;
        if (deformation > 180) {
            car4.shapeColor = color(25, 0, 0);

        }
        if (deformation < 180 && deformation > 100) {
            car4.shapeColor = color(230, 230, 0);

        }
        if (deformation < 100) {
            car4.shapeColor = color(0, 255, 0);

        }
    }




    drawSprites();
}