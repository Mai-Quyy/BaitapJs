function turnOnRed() {
    resetLights();
    document.getElementById('red').classList.add('active');
}

function turnOnYellow() {
    resetLights();
    document.getElementById('yellow').classList.add('active');
}

function turnOnGreen() {
    resetLights();
    document.getElementById('green').classList.add('active');
}

function resetLights() {
    const lights = document.querySelectorAll('.light');
    lights.forEach(light => {
        light.classList.remove('active');
    });
}
