let i = 0;
let x = 0;
// Name to be typed
let name = 'Jamie Tyler';
let desc = 'Web Developer || Game Developer';

// Speed in ms
let typeSpeed = 50;

function typename() {
    if (i < name.length) {
        document.getElementById("typename").innerHTML += name.charAt(i);
        i++;
        setTimeout(typename, typeSpeed);
    }
}

function typedesc() {
    if (x < desc.length) {
        document.getElementById("typedesc").innerHTML += desc.charAt(x);
        x++;
        setTimeout(typedesc, typeSpeed);
    }
}

setTimeout(() => {typename();}, 500)


setTimeout(() => {typedesc();}, 1500);