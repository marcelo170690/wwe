const wwe = document.getElementById('wwe');
const logo = wwe.getContext('2d');
const redLine = wwe.getContext('2d');

//logo red line
redLine.beginPath();
redLine.fillStyle = '#D81125';
redLine.lineWidth = '10';

redLine.moveTo(300, 450);
redLine.lineTo(750, 400);
redLine.lineTo(740, 380);

redLine.fill();
redLine.closePath();

//logo W
logo.beginPath();
logo.fillStyle = '#fff';

logo.moveTo(300, 150);
logo.lineTo(420, 350);
logo.lineTo(500, 200);
logo.lineTo(580, 350);
logo.lineTo(700, 150);

logo.lineTo(580, 300);
logo.lineTo(500, 150);
logo.lineTo(420, 300);

logo.moveTo(250, 150);
logo.lineTo(420, 400);
logo.lineTo(500, 250);
logo.lineTo(580, 400);
logo.lineTo(750, 150);

logo.lineTo(580, 450);
logo.lineTo(500, 300);
logo.lineTo(420, 450);

logo.fill();
logo.closePath();

