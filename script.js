const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const startButton = document.getElementById('start');
const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';
// Number of closed doors
let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;
let currentlyPlaying = true;

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator();
}

const isBot = door => {
    return door.src === botDoorPath;
}

const isClicked = door => {
    return door.src !== closedDoorPath;
}

const playDoor = door => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor == 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor == 1) {
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
        openDoor1 = spaceDoorPath;
    } else {
        openDoor3 = botDoorPath;
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
    }
}

doorImage1.onclick = event => {
    if (!isClicked(event.target) && currentlyPlaying) {
        event.target.src = openDoor1;
        playDoor(event.target);
    }
}

doorImage2.onclick = event => {
    if (!isClicked(event.target) && currentlyPlaying) {
        event.target.src = openDoor2;
        playDoor(event.target);
    }
}

doorImage3.onclick = event => {
    if (!isClicked(event.target) && currentlyPlaying) {
        event.target.src = openDoor3;
        playDoor(event.target);
    }
}

startButton.onclick = () => {
    if (!currentlyPlaying) startRound();
}

const gameOver = status => {
    if (status === 'win')
        startButton.innerHTML = 'You win! Play again?';
    else {
        startButton.innerHTML = 'Game Over! Play again?';
    }
    currentlyPlaying = false;
}

startRound()