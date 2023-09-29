document.getElementById('LunaEnlace').addEventListener('click', function(event) {
    event.preventDefault();

    var objeto = document.getElementById('miObjeto');
    var title = document.getElementById('title');
    var titleTravel = document.getElementById('titleTravel');
    var overlay = document.getElementById('overlay');
    var rocket = document.getElementById('rocket');
    objeto.style.display = 'block';
    titleTravel.style.display = 'block';
    title.style.display = 'none';
    overlay.style.display = 'none';
    rocket.style.display = 'none';

    setTimeout(function() {
        //window.location.href = 'templates/contact.html';
        window.location.href = 'https://github.com/titooUvU';
    }, 4600);
});