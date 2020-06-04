const wwe = document.getElementById('wwe');
const logo = wwe.getContext('2d');
const redLine = wwe.getContext('2d');

const c = 500;

document.addEventListener('keyup', selectKey)


function redLineDraw(){
  redLine.fillStyle = '#ff0000';
  redLine.beginPath();

  redLine.moveTo(c-250, 400);
  redLine.lineTo(c+250, 350);
  redLine.lineTo(c+245, 325);

  redLine.fill();
  redLine.closePath();
}

function logoDraw(){
  logo.fillStyle = '#fff';
  logo.beginPath();

  logo.moveTo(c-200, 100);
  logo.lineTo(c-80, 300);
  logo.lineTo(c, 150);
  logo.lineTo(c+80, 300);
  logo.lineTo(c+200, 100);

  logo.lineTo(c+80, 250);
  logo.lineTo(c, 100);
  logo.lineTo(c-80, 250);

  logo.moveTo(c-250, 100);
  logo.lineTo(c-80, 350);
  logo.lineTo(c, 200);
  logo.lineTo(c+80, 350);
  logo.lineTo(c+250, 100);

  logo.lineTo(c+80, 400);
  logo.lineTo(c, 250);
  logo.lineTo(c-80, 400);

  logo.fill();
  logo.closePath();
}

function clearLogo(x){
  x.clearRect(0,0,1000,1000);
}

function selectKey(evento){
  switch (evento.keyCode) {
    case 87:
      redLineDraw();
      break;
    case 69:
      logoDraw();
      break;
    case 67:
      clearLogo(logo);
      clearLogo(redLine);
      break;
  };
}
