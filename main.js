
  /* Obtiene los elementos necesarios */
  var dropdown = document.getElementsByClassName("dropdown");
  var dropdownContent = document.getElementsByClassName("dropdown-content");

  /* Añade un evento al botón para que se despliegue hacia arriba */
  dropdown[0].addEventListener("click", function() {
    dropdownContent[0].classList.toggle("show");
  });

  /* Cierra el desplegable si se hace clic en cualquier lugar fuera de él */
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  const items = document.querySelectorAll('.item');

  items.forEach(item => {
    const title = item.getAttribute('title');
    const letters = title.split('');
    let index = 0;
    let timer;
  
    item.addEventListener('mouseover', () => {
      timer = setInterval(() => {
        item.setAttribute('data-title', letters.slice(0, index + 1).join(''));
        index++;
        if (index === letters.length) clearInterval(timer);
      }, 50);
    });
  
    item.addEventListener('mouseout', () => {
      clearInterval(timer);
      item.setAttribute('data-title', '');
      index = 0;
    });
  });





  let imagen = document.querySelector('.animar-imagen');
  imagen.addEventListener('mouseover', () => {
    imagen.style.transform = 'scale(1.2)';
  });
  
  imagen.addEventListener('mouseout', () => {
    imagen.style.transform = 'scale(1)';
  });
  
  
  const historias = document.querySelectorAll('.historia img');
historias.forEach(historia => {
  historia.addEventListener('click', () => {
    // Agrega aquí la lógica para mostrar la historia seleccionada en pantalla completa
  });
});









function cambiarModo() {
  var estilos = document.getElementById("estilos");
  var estilosOscuros = document.getElementById("estilos-oscuros");
  if (estilos.disabled) {
    estilos.disabled = false;
    estilosOscuros.disabled = true;
  } else {
    estilos.disabled = true;
    estilosOscuros.disabled = false;
  }
}


// Función para crear una nueva publicación y agregarla a la página
function crearPublicacion(texto) {
  var nuevaPublicacion = document.createElement('div');
  nuevaPublicacion.classList.add('publicacion');
  nuevaPublicacion.innerHTML = `
    <img class="perfilpic" src="chisme/enblanco.webp" >
    <p>${texto}</p>
  `;
  document.getElementById('publicaciones').appendChild(nuevaPublicacion);
}

// Escuchar el evento 'click' del botón de publicar
document.getElementById('btn-publicar').addEventListener('click', function() {
  var texto = document.getElementById('texto-publicacion').value;
  crearPublicacion(texto);
});



var prevScrollpos = window.pageYOffset;
		function scrollFunction() {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("barra").style.top = "0";
			} else {
				document.getElementById("barra").style.top = "-50px";
			}
			prevScrollpos = currentScrollPos;
		}

    var enlaces = document.querySelectorAll('a'); // Selecciona todos los enlaces
for (var i = 0; i < enlaces.length; i++) {
  enlaces[i].addEventListener('click', function(event) {
    event.preventDefault(); // Evita que se cargue la página inmediatamente
    var href = this.getAttribute('href'); // Obtiene la URL del enlace
    setTimeout(function() { // Agrega una pequeña demora para que la transición tenga tiempo de ejecutarse antes de cargar la página
      window.location.href = href; // Cambia la URL para cargar la página
    }, 500); // Tiempo de demora (0.5 segundos)
  });
}



document.getElementById("btn-publicar").addEventListener("click", function() {
  // Obtener el texto ingresado en el textarea
  var texto = document.getElementById("texto-publicacion").value;

  // Crear un nuevo div para la publicación
  var nuevaPublicacion = document.createElement("div");
  nuevaPublicacion.className = "publicacion";
  nuevaPublicacion.innerHTML = texto;

  // Agregar la nueva publicación al contenedor de publicaciones
  var contenedorPublicaciones = document.getElementById("publicaciones");
  contenedorPublicaciones.appendChild(nuevaPublicacion);
});


var prevScrollpos = window.pageYOffset;
		function scrollFunction() {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("barra").style.top = "0";
			} else {
				document.getElementById("barra").style.top = "-50px";
			}
			prevScrollpos = currentScrollPos;
		}