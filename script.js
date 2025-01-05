    
        let cards = document.querySelectorAll('.card');
        let background = document.body;
        let cityName = document.getElementById('city-name');
        let cityinfo= document.getElementById('city-info');

     
     function rotateCards(direction) {
            if (direction === 'right') {
                // Mover la última carta al inicio
                const lastCard = cards[cards.length - 1];
                lastCard.parentNode.insertBefore(lastCard, cards[0]);
                
            } else if (direction === 'left') {
                // Mover la primera carta al final
                const firstCard = cards[0];
                firstCard.parentNode.appendChild(firstCard);
            }

            // Actualizar las referencias de las cartas
            cards = document.querySelectorAll('.card');

            // Cambiar el fondo y el nombre de la ciudad
            updateBackgroundAndCityNameAndcityinfo();
        }

        function updateBackgroundAndCityNameAndcityinfo() {
            // Obtener el fondo y el nombre de la primera carta
            const firstCard = cards[0];
            const city = firstCard.getAttribute('data-city');
            const info = firstCard.getAttribute('data-info');
            const backgroundImage = getComputedStyle(firstCard).backgroundImage;

            // Cambiar el fondo y el nombre de la ciudad
            background.style.backgroundImage = backgroundImage;
            cityName.textContent = city;
            cityinfo.textContent = info;
        }

        // Inicializar el nombre de la ciudad y el fondo
        updateBackgroundAndCityNameAndcityinfo();
        
  // document.getElementById("sigue").addEventListener("click", function () {
//    const opacidad = document.getElementById("city-name");
  //  opacidad.classList.add("opacidad");});
  
  document.getElementById("sigue").addEventListener("click", function() {
    const opacidad = document.getElementById("city-info","city-name","h1");
    opacidad.classList.toggle("opacidad"); // Agrega o quita la clase
});
document.getElementById("atras").addEventListener("click", function() {
    const opacidad = document.getElementById("city-info", "city-name","h1" );
    opacidad.classList.toggle("opacidad"); // Agrega o quita la clase
});