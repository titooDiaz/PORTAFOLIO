window.onmousemove = (event) => {
    document.querySelectorAll('.move').forEach(element => {
        const data = element.getAttribute('data-value')
        const x = (window.innerWidth - event.pageX * data) / 100
        const y = (window.innerHeight - event.pageY * data) / 100
        element.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}


document.getElementById('rocket').addEventListener('mouseout', function() {
  document.body.style.cursor = 'none';
});

const rocket = document.getElementById('rocket');
const rocketImage = rocket.querySelector('img');

document.addEventListener('mousemove', (e) => {
  const rocketRect = rocket.getBoundingClientRect();

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaX = (mouseX - rocketRect.left);
  const deltaY = (mouseY - rocketRect.top);

  const targetRocketX = rocketRect.left + deltaX;
  const targetRocketY = rocketRect.top + deltaY;

  // Aplicar efecto de amortiguamiento para suavizar el movimiento
  const rocketX = rocket.offsetLeft + (targetRocketX - rocket.offsetLeft);
  const rocketY = rocket.offsetTop + (targetRocketY - rocket.offsetTop);


  rocket.style.left = `${rocketX}px`;
  rocket.style.top = `${rocketY}px`;

  const angle = Math.atan2(mouseY - rocketRect.top, mouseX - rocketRect.left);
  const rotation = angle * (180 / Math.PI) + 90;

  rocketImage.style.transform = `rotate(${rotation}deg) scaleY(1)`;
});



///OVERLAY
const overlay = document.getElementById('overlay');


///INICIO DE HOVER DE PLANETAS///
const lunaImg = document.querySelector('.luna img');

lunaImg.addEventListener('mouseover', () => {
  overlay.style.display = 'flex';
});

lunaImg.addEventListener('mouseout', () => {
  overlay.style.display = 'none';
});

  ///SATURNO
const saturnoImg = document.querySelector('.saturno img');

saturnoImg.addEventListener('mouseover', () => {
  overlay.style.display = 'flex';
});

saturnoImg.addEventListener('mouseout', () => {
  overlay.style.display = 'none';
});

  ///MARTE
const marteImg = document.querySelector('.marte img');

marteImg.addEventListener('mouseover', () => {
  overlay.style.display = 'flex';
});

marteImg.addEventListener('mouseout', () => {
  overlay.style.display = 'none';
});

  ///JUPITER
const jupiterImg = document.querySelector('.jupiter img');

jupiterImg.addEventListener('mouseover', () => {
  overlay.style.display = 'flex';
});

jupiterImg.addEventListener('mouseout', () => {
  overlay.style.display = 'none';
});

  ///NEPTUNO
const neptunoImg = document.querySelector('.neptuno img');

neptunoImg.addEventListener('mouseover', () => {
  overlay.style.display = 'flex';
});

neptunoImg.addEventListener('mouseout', () => {
  overlay.style.display = 'none';
});
///FIN DE HOVER DE PLANETAS///
