let myCanvas = document.getElementById("my-canvas");

const WIDTH = myCanvas.width;
const HEIGHT = myCanvas.height;

let pen = myCanvas.getContext("2d");

// set stroke color
let body = document.getElementsByTagName("body")[0]
body.onclick = function () {
    moMat = !moMat
}
// pen.moveTo(WIDTH / 2 -60, HEIGHT / 2+10);
// pen.lineTo(100, 200);
// pen.stroke();

// pen.moveTo(300, 265);
// pen.lineTo(100, 300);
// pen.stroke();



// pen.beginPath();
// pen.strokeStyle = "black";

// pen.moveTo(WIDTH / 2 - 200, HEIGHT / 2);
// pen.lineTo(WIDTH / 2 + 200, HEIGHT / 2);
// pen.stroke();

// pen.beginPath();
// pen.fillStyle = "blue";

// pen.fillRect(WIDTH / 2 - 100, HEIGHT / 2 - 100, 200, 50);

function drawFace(mat) {


    if (mat == true) {
        pen.beginPath();
        pen.strokeStyle = "black";
        pen.arc(WIDTH / 2 + 100, HEIGHT / 2 - 80, 30, 0, Math.PI * 2); // Tọa độ tâm (500,100), bán kính 90
        // pen.strokeStyle = 'seagreen'; // Màu của đường
        pen.fillStyle = "green";
        pen.fill();
        pen.lineWidth = 5; //Độ rộng
        pen.stroke();

        pen.beginPath();
        pen.strokeStyle = "black";
        pen.arc(WIDTH / 2 - 100, HEIGHT / 2 - 80, 30, 0, Math.PI * 2); // Tọa độ tâm (500,100), bán kính 90
        // pen.strokeStyle = 'seagreen'; // Màu của đường
        pen.fillStyle = "green";
        pen.fill();
        pen.lineWidth = 5; //Độ rộng
        pen.stroke();
    } else {
        // Mat nham
        pen.beginPath();
        pen.lineWidth = 5;
        pen.arc(WIDTH / 2 + 100, HEIGHT / 2 - 80, 40, 0.8 * Math.PI, 0.2 * Math.PI, true);
        pen.stroke();

        // Mat nham
        pen.beginPath();
        pen.lineWidth = 5;
        pen.arc(WIDTH / 2 - 100, HEIGHT / 2 - 80, 40, 0.8 * Math.PI, 0.2 * Math.PI, true);
        pen.stroke();
    }
}

let fps = 60;
let moMat = true;
let lengthOfRau = 0;
let lengthOfRauPhai = 0;
function loop() {
    pen.clearRect(0, 0, WIDTH, HEIGHT)
    pen.strokeStyle = "black";

    pen.beginPath();
    pen.arc(WIDTH / 2, HEIGHT / 2, 200, 0, Math.PI * 2);
    pen.fillStyle = "yellow";
    pen.fill();
    pen.lineWidth = 7;
    pen.stroke();

    pen.beginPath();
    pen.strokeStyle = "black";
    pen.arc(WIDTH / 2 - 60, HEIGHT / 1.6, 60, 6.3, Math.PI); // Tọa độ tâm (500,100), bán kính 90
    // pen.strokeStyle = 'seagreen'; // Màu của đường
    pen.lineWidth = 5; //Độ rộng
    pen.stroke();

    pen.beginPath();
    pen.strokeStyle = "black";
    pen.arc(WIDTH / 2 + 60, HEIGHT / 1.6, 60, 220, Math.PI); // Tọa độ tâm (500,100), bán kính 90
    // pen.strokeStyle = 'seagreen'; // Màu của đường
    pen.lineWidth = 5; //Độ rộng
    pen.stroke();

    // pen.beginPath();
    // pen.strokeStyle = "black";
    // pen.arc(WIDTH / 2 - 100, HEIGHT / 2 - 80, 30, 0, Math.PI * 2); // Tọa độ tâm (500,100), bán kính 90
    // // pen.strokeStyle = 'seagreen'; // Màu của đường
    // pen.fillStyle = "green";
    // pen.fill();
    // pen.lineWidth = 5; //Độ rộng
    // pen.stroke();

    // pen.beginPath();
    // pen.strokeStyle = "black";
    // pen.arc(WIDTH / 2 + 120, HEIGHT / 2 - 80, 30, 0, Math.PI * 2); // Tọa độ tâm (500,100), bán kính 90
    // // pen.strokeStyle = 'seagreen'; // Màu của đường
    // pen.lineWidth = 5; //Độ rộng
    // pen.stroke();

    //Râu bên trái
    pen.moveTo(WIDTH / 2 - 60, WIDTH / 2 - 120);
    pen.lineTo(WIDTH / 2 - 60 + lengthOfRauPhai, 150);
    pen.stroke();

    //Râu bên trái
    pen.moveTo(WIDTH / 2 - 60, WIDTH / 2 - 107);
    pen.lineTo(WIDTH / 2 - 60 + lengthOfRauPhai, 190);
    pen.stroke();

    //Râu bên trái
    pen.moveTo(WIDTH / 2 - 60, WIDTH / 2 - 88);
    pen.lineTo(WIDTH / 2 - 60 + lengthOfRauPhai, 290);
    pen.stroke();

    if (WIDTH / 2 - 60 + lengthOfRauPhai < 110) {
        lengthOfRauPhai += 5
    } else {
        lengthOfRauPhai -= 10
    }

    //Râu bên phải
    pen.moveTo(WIDTH / 2 + 60, WIDTH / 2 - 120);
    pen.lineTo(WIDTH / 2 + 60 + lengthOfRau, 150);
    pen.stroke();

    //Râu bên phải
    pen.moveTo(WIDTH / 2 + 60, WIDTH / 2 - 107);
    pen.lineTo(WIDTH / 2 + 60 + lengthOfRau, 195);
    pen.stroke();

    //Râu bên phải
    pen.moveTo(WIDTH / 2 + 60, WIDTH / 2 - 88);
    pen.lineTo(WIDTH / 2 + 60 + lengthOfRau, 295);
    pen.stroke();
    if (WIDTH / 2 + 60 + lengthOfRau < 620) {
        lengthOfRau += 5
    } else {
        lengthOfRau -= 10
    }

    drawFace(moMat)


}
setInterval(loop, 1000 / 5)