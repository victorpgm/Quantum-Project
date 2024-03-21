import { atoms } from "./atom.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const x = canvas.width / 2;
const y = canvas.height / 2;
const p = 110 // proton number
const d = 75

const N = atoms[p].eletrons

var ang = 1;

function createAtom(){

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2, false);
    
    ctx.fillStyle = "#2F84EA"
    
    ctx.fill();

    for (var i = 0; i < N.length; i++) {

        ctx.beginPath();
        ctx.arc(x, y, d * (i + 1), 0, 2 * Math.PI, false);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = 'grey';
        ctx.stroke();

        ang+=0.0001

        for (var j = 0; j <= N[i]; j++) {

            const angle = (j / N[i]) * Math.PI * 2 + ang*(N.length-i);
            const circleX = x + (i+1) * d * Math.cos(angle);
            const circleY = y + (i+1) * d * Math.sin(angle);

            ctx.beginPath();
            ctx.arc(circleX, circleY, 5, 0, Math.PI * 2, false);
            ctx.fillStyle = "#fff";
            ctx.fillText(atoms[p].simbolo, x-7,y+4)
            ctx.fill();
            ctx.closePath();

            

        }
    }

}

setInterval(createAtom, 0)