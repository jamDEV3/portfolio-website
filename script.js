// --- TYPING ---

let i = 0;
let x = 0;
// Name to be typed
let name = 'Jamie Tyler';
let desc = 'Web Developer || Game Developer';
// let typename = document.getElementById("typename");
// let typedesc = document.getElementById("typedesc");

// Speed in ms
let speed = 40;

function typename() {
    if (i < name.length) {
        document.getElementById("typename").innerHTML += name.charAt(i);
        i++;
        setTimeout(typename, speed);
    }
}

function typedesc() {
    if (x < desc.length) {
        document.getElementById("typedesc").innerHTML += desc.charAt(x);
        x++;
        setTimeout(typedesc, speed);
    }
}

// --- FADE ---

let opacity =0;
let body = document.getElementById("body");
body.style.opacity = 0;

function show()
{
    opacity = Number(window.getComputedStyle(body).getPropertyValue("opacity"));
    if (opacity < 1){
        opacity=opacity+0.05;
        body.style.opacity=opacity;
        setTimeout(show, speed);
    }

}

// CIRCLE ANIMATION

function showCircle(cx, cy, radius) {
  let div = document.createElement('div');
  let head = document.getElementById('head')
  div.style.width = 0;
  div.style.height = 0;
  div.style.left = cx + 'px';
  div.style.top = cy + 'px';
  div.className = 'circle';
  head.prepend(div);

  setTimeout(() => {
    div.style.width = radius * 2 + 'px';
    div.style.height = radius * 2 + 'px';
  }, 0);
}

// --- EXECUTION ---

showCircle(500, 500, 100);

setTimeout(() => {typename();}, 1000);


setTimeout(() => {typedesc();}, 1600);

setInterval(show, 2000);