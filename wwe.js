const wwe = document.getElementById('wwe');
const logo = wwe.getContext('2d');
const redLine = wwe.getContext('2d');

const c = window.innerWidth/2;

//logo red line
redLine.beginPath();
redLine.fillStyle = '#D81125';
redLine.lineWidth = '10';

redLine.moveTo(c-200, 450);
redLine.lineTo(c+250, 400);
redLine.lineTo(c+240, 380);

redLine.fill();
redLine.closePath();

//logo W
logo.beginPath();
logo.fillStyle = '#fff';

logo.moveTo(c-200, 150);
logo.lineTo(c-80, 350);
logo.lineTo(c, 200);
logo.lineTo(c+80, 350);
logo.lineTo(c+200, 150);

logo.lineTo(c+80, 300);
logo.lineTo(c, 150);
logo.lineTo(c-80, 300);

logo.moveTo(c-250, 150);
logo.lineTo(c-80, 400);
logo.lineTo(c, 250);
logo.lineTo(c+80, 400);
logo.lineTo(c+250, 150);

logo.lineTo(c+80, 450);
logo.lineTo(c, 300);
logo.lineTo(c-80, 450);

logo.fill();
logo.closePath();

