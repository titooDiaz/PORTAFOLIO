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
