const wwe = document.getElementById('wwe');
const logo = wwe.getContext('2d');
const redLine = wwe.getContext('2d');

const h = window.innerWidth;
const c = h/2;

redLine.fillStyle = '#ff0000';
redLine.beginPath();

redLine.moveTo(c-250, 450);
redLine.lineTo(c+250, 400);
redLine.lineTo(c+245, 375);

redLine.fill();
redLine.closePath();

logo.fillStyle = '#fff';
logo.beginPath();

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
