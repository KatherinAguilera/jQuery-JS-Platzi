/**********************************Ejemplo de Funciones asincronas*****************************************************/
(async function load() {
  // await funciona solo usando  funciones asyncronas
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }

  const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
  const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
  const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
  console.log(actionList, dramaList, animationList)
/********************************************CREACION DE TEMPLATES***********************************************************************/
function videoItemTemplate(movie) {
  return (
    `<div class="primaryPlaylistItem">
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
  )
}
/********************************************CREACION DE DOM***********************************************************************/

function createTemplate(HTMLString) {
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = HTMLString;
  return html.body.children[0];
}
/***********************************************EVENTOS***************************************** */
const $body = document.getElementById('body')
function addEvent($element) {
  $element.addEventListener('click', () => {
    alert('click')
    console.log($body)
  })
}
addEvent($body);

const $form = document.getElementById('form');

$form.addEventListener('submit', (event) => {
//evento aplicado para evitar recargar la page
  event.preventDefault();
//agrgar feature cuando se hace una busqueda
$home.classList.add('search-active')
})
/*******************************************REUTILIZACION FUNCIONES**************************************************************/
function renderMovieList(list, $container) {
  // actionList.data.movies
  $container.children[0].remove();
  list.forEach((movie) => {
    const HTMLString = videoItemTemplate(movie);
    const movieElement = createTemplate(HTMLString);
    $container.append(movieElement);
       addEventClick(movieElement);
  })
}
/************************************************************************************************************* */
// console.log(videoItemTemplate('src/images/covers/bitcoin.jpg', 'bitcoin'));
actionList.data.movies.forEach((movie) => {
  // debugger
  const HTMLString = videoItemTemplate(movie);
  console.log(HTMLString);
})
/*************************************CREACION DE ELEMETOS Y ASIGNACION DE ATRIBUTOS******************************************** */
function setAttributes($element, attributes) {
  for (const attribute in attributes) {
    $element.setAttribute(attribute, attributes[attribute]);
  }
}
$form.addEventListener('submit', (event) => {
  event.preventDefault();
  $home.classList.add('search-active')
  const $loader = document.createElement('img');
  setAttributes($loader, {
    src: 'src/images/loader.gif',
    height: 50,
    width: 50,
  })
  $featuringContainer.append($loader);
})
/********************************************FORMULARIOS***********************************************************************/
//FormData va a abstraerr todos los valores de los elementos del formulario que cuenten con un atributo 'name' asignado y los va a setear en un objeto de tipo FormData.
const data = new FormData($form);

//retorna el valor del elemento con el atributo name="nombre"
data.get("nombre");

//setea el valor avengers en la key pelicula 
data.set("pelicula", "avengers");
/********************************************SELECTORES***********************************************************************/
const $actionContainer = document.querySelector('#action');
const $dramaContainer = document.getElementById('#drama');
const $animationContainer = document.getElementById('#animation');


const $featuringContainer = document.getElementById('#featuring');
const $form = document.getElementById('#form');
const $home = document.getElementById('#home');


// const $home = $('.home .list #item');
const $modal = document.getElementById('modal');
const $overlay = document.getElementById('overlay');
const $hideModal = document.getElementById('hide-modal');
const $modalTitle = $modal.querySelector('h1');
const $modalImage = $modal.querySelector('img');
const $modalDescription = $modal.querySelector('p');
})()