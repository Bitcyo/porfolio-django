"use strict";
 
//croll href in class="divs"
const enlaces = document.querySelectorAll("a[href^='#inicio'],a[href^='#cuadros'],a[href^='#experiencias'],a[href^='#contactos']");

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", function(event) {
    event.preventDefault();
    const target = document.querySelector(enlace.getAttribute("href"));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// scroll animation in "about me"//
window.addEventListener('scroll', function() {
  const contenidos = document.querySelectorAll('.presentacion');
  const screenPosition = window.innerHeight / 1.3;

  contenidos.forEach(function(contenido) {
    const contenidoPosition = contenido.getBoundingClientRect();
    if (contenidoPosition.top < screenPosition && contenidoPosition.bottom > .20) {
      contenido.classList.add('show');
    } else {
      contenido.classList.remove('show');
    }
  });
});

///remove menu desktop//
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY || window.pageYOffset;
  var scrollAnimation = document.querySelector('.Menu');
  
  if (scrollAnimation) {
    if (scrollPosition > 200) {
      scrollAnimation.classList.add('active');
    } else {
      scrollAnimation.classList.remove('active');
    }
  } else {
    console.error('xd,remove element no avaliable');
  }
});

window.addEventListener('scroll', function() {
  const cuadros = document.querySelectorAll('.cuadro');

  cuadros.forEach(function(cuadro) {
    if (cuadro) {
      const cuadroPosition = cuadro.getBoundingClientRect().top;
      if (cuadroPosition < 785) {
        cuadro.classList.add('expanded');
      } else {
        cuadro.classList.remove('expanded');
      }
    } else {
      console.error('Elemento .cuadro no encontrado');
    }
  });
});






// open window of networks//

const redireccion = (url) => {
  window.open(url);
}


const github = document.querySelector('.github');
const linkend = document.querySelector(`.linkend`);
const mail = document.querySelector(`.mail`);
const ig = document.querySelector(`.ig`)
const wsp = document.querySelector('.wsp');

github.addEventListener('click', function() {
  redireccion('https://github.com/Bitcyo');
});

linkend.addEventListener('click', function() {
  redireccion('https://www.linkedin.com/in/luis-sanchez-j');
});


mail.addEventListener('click', function() {
  window.location.href = 'https://mail.google.com/mail/u/0/#sent?compose=new';
});

wsp.addEventListener('click', function() {
  window.location.href = 'https://wa.me/51955335798';
});
 
//ig.addEventListener('click', function() {
//  window.location.href = 'https://www.instagram.com/luis_an_s28/';
//})

const github2 = document.querySelector('.github2');
const linkend2 = document.querySelector(`.linkend2`);
const mail2 = document.querySelector(`.mail2`);
const ig2 = document.querySelector(`.ig2`)
const wsp2 = document.querySelector('.wsp2');

github2.addEventListener('click', function() {
  redireccion('https://github.com/Bitcyo');
});

linkend2.addEventListener('click', function() {
  redireccion('https://www.linkedin.com/in/luis-sanchez-j');
});

mail2.addEventListener('click', function() {
  window.location.href = 'https://mail.google.com/mail/u/0/#sent?compose=new';
});

wsp2.addEventListener('click', function() {
  window.location.href = 'https://wa.me/51955335798';
});
 
//ig2.addEventListener('click', function() {
//  window.location.href = 'https://www.instagram.com/luis_an_s28/';
//});



//responsive //





if (window.matchMedia("(max-width: 868px)").matches) {
  const menu = document.querySelector(".menu-list") 
  if (menu) {
    menu.parentNode.removeChild(menu);
  }
}

if (window.matchMedia("(max-width: 868px)").matches) {
  const Menu = document.querySelector(".Menu") 
  if (Menu) {
    Menu.parentNode.removeChild(Menu);
  }
}


// ANIMACIONES DE SCROLL/

var retratoDiv = document.querySelector('.retrato');
var seccion1 = document.querySelector('#inicio');
var seccion2 = document.querySelector('#cuadros');
var seccion3 = document.querySelector('#experiencias');
var seccion4 = document.querySelector('#contactos');

// Obtener la posición de cada sección en relación al inicio del documento
var seccion1OffsetTop = seccion1.offsetTop;
var seccion2OffsetTop = seccion2.offsetTop;
var seccion3OffsetTop = seccion3.offsetTop;
var seccion4OffsetTop = seccion4.offsetTop;

function cambiarImagen(src) {
  retratoDiv.style.backgroundImage = `url(${src})`;
}

if (window.innerWidth < 768) {
  console.error('Función no apta para móviles');
} else {
  console.error("mobile version")
}



// Función para verificar la posición de desplazamiento y cambiar la imagen en consecuencia
function verificarPosicionScroll() {
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= seccion1OffsetTop && scrollPosition < seccion2OffsetTop) {
    cambiarImagen('static/multimedia/sobremi.png');
  } else if (scrollPosition >= seccion2OffsetTop && scrollPosition < seccion3OffsetTop) {
    cambiarImagen('static/multimedia/skill.png');
  } else if (scrollPosition >= seccion3OffsetTop && scrollPosition < seccion4OffsetTop) {
    cambiarImagen('static/multimedia/meta.png');
  } else if (scrollPosition >= seccion4OffsetTop) {
    cambiarImagen('static/multimedia/contacto.png');
  }
}

window.addEventListener('scroll', verificarPosicionScroll);
verificarPosicionScroll();
 




// Crear el botón de copiar
const btnCopiar = document.createElement("button");
btnCopiar.id = "btnCopiar";
btnCopiar.innerHTML = '<i class="fa-regular fa-clipboard"></i>Copiar E-mail';

// Obtener el contenedor y agregar el botón
const btnCopiarContainer = document.getElementById("btnCopiarContainer");
btnCopiarContainer.appendChild(btnCopiar);

// Obtener referencia al botón copiar
const btnCopiarElement = document.getElementById("btnCopiar");

// Agregar evento click al botón
btnCopiarElement.addEventListener("click", copiarTexto);

function copiarTexto() {
  const textoACopiar = "luchite05@gmail.com"; // Reemplaza con el texto que deseas copiar

  const elementoTemporal = document.createElement("textarea");
  elementoTemporal.value = textoACopiar;
  document.body.appendChild(elementoTemporal);
  elementoTemporal.select();
  document.execCommand("copy");
  document.body.removeChild(elementoTemporal);

  // Cambiar el contenido del botón por un texto
  btnCopiarElement.innerHTML = "E-mail copiado";
}

