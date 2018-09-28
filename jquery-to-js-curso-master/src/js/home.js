/**************************************VARIABLES*********************************************/
console.log('hola mundo!');
const noCambia = "Leonidas"; // Const variable que no cambia
//var = "Kathy" // variable hasta ECMA2015
let cambia = "@LeonidasEsteban" // let definir variable en ECMA6
/**************************************FUNCIONES*********************************************/
//funciones aquellas que se pueden reutilizar
// (nuevoNombre) // Parametro o argumeto de la funcion (variable)
function cambiarNombre(nuevoNombre) { 
  cambia = nuevoNombre
}
// cambiarNombre = (nuevoNombre) => { /*******FUNCION EN ECMA6*********/
//       cambia = nuevoNombre;
//     }
cambiarNombre('KATHY NUEVO NOMBRE'); //Se pasa lo que se quiere asignar llamando la funcion
// cambia sera igual a  'KATHY NUEVO NOMBRE'

function suma () {
  let a = 5;
  let b = 2;
   c = (a + b);
}
suma();
console.log(c);
/****************************************PROMESAS***********************************************/
const getUserAll = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo');
  }, 5000)
})

const getUser = new Promise(function(todoBien, todoMal) {
  // llamar a un api
  setTimeout(function() {
    // luego de 3 segundos
    todoBien('se acabó el tiempo 3');
  }, 3000)
})

// getUser
//   .then(function() {
//     console.log('todo está bien en la vida')
//   })
//   .catch(function(message) {
//     console.log(message)
//   })

/**********************************DECLARANDO VARIAS PROMESAS*********************************************/
//Promise.race significa carrera de promesas se ejecuta la tenga menor tiempo
Promise.race([
  getUser,
  getUserAll,
])
//Esta bien
.then(function(message) {
  console.log(message);
})
//Esta mal error message puede se cualquier palabra como mess
.catch(function(mess) {
  console.log(mess)
})

/************************************************AJAX CON JQeRY******************************************* */
$.ajax('https://randomuser.me/api/sdfdsfdsfs', {
  method: 'GET',
  success: function(data) {
    console.log(data)
  },
  error: function(error) {
    console.log(error)
  }
})
/************************************************AJAX CON JavaScript********************************************/
//fetch funcion de traer datos extenos
fetch('https://randomuser.me/api/')
  .then(function (response) {
    // console.log(response)
    return response.json()
  })
  //Promesa dentro de otra promesa
  .then(function (user) {
//imprime 1 usuario nombre
    console.log('user', user.results[0].name.first + " " + user.results[0].name.last)
  })
  .catch(function() {
    console.log('algo falló')
  });
/**********************************Ejemplo de Funciones asincronas*****************************************************/
// (async function load() {
//   // await funciona solo usando  funciones asyncronas
//   async function getData(url) {
//     const response = await fetch(url);
//     const data = await response.json()
//     return data;
//   }

//   const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action')
//   const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama')
//   const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation')
//   console.log(actionList, dramaList, animationList)
/********************************************CREACION DE TEMPLATES***********************************************************************/
// function videoItemTemplate(movie) {
//   return (
//     `<div class="primaryPlaylistItem">
//         <div class="primaryPlaylistItem-image">
//           <img src="${movie.medium_cover_image}">
//         </div>
//         <h4 class="primaryPlaylistItem-title">
//           ${movie.title}
//         </h4>
//       </div>`
//   )
// }
/********************************************CREACION DE DOM***********************************************************************/

// function createTemplate(HTMLString) {
//   const html = document.implementation.createHTMLDocument();
//   html.body.innerHTML = HTMLString;
//   return html.body.children[0];
// }
/***********************************************EVENTOS***************************************** */
// const $body = document.getElementById('body')
// function addEvent($element) {
//   $element.addEventListener('click', () => {
//     alert('click')
//     console.log($body)
    // showModal()
//   })
// }
// addEvent($body);

  // const $form = document.getElementById('form');

  // $form.addEventListener('submit', (event) => {
    //evento aplicado para evitar recargar la page
  //   event.preventDefault();
  //agrgar feature cuando se hace una busqueda
//$home.classList.add('search-active')
  // })
/*******************************************REUTILIZACION FUNCIONES**************************************************************/
// function renderMovieList(list, $container) {
//   // actionList.data.movies
//   $container.children[0].remove();
//   list.forEach((movie) => {
//     const HTMLString = videoItemTemplate(movie);
//     const movieElement = createTemplate(HTMLString);
//     $container.append(movieElement);
//        addEventClick(movieElement);
//   })
// }
/************************************************************************************************************* */
// // console.log(videoItemTemplate('src/images/covers/bitcoin.jpg', 'bitcoin'));
// actionList.data.movies.forEach((movie) => {
//   // debugger
//   const HTMLString = videoItemTemplate(movie);
//   console.log(HTMLString);
// })
/********************************************SELECTORES***********************************************************************/
// const $actionContainer = document.querySelector('#action');
// const $dramaContainer = document.getElementById('#drama');
// const $animationContainer = document.getElementById('#animation');


// const $featuringContainer = document.getElementById('#featuring');
// const $form = document.getElementById('#form');
// const $home = document.getElementById('#home');


// // const $home = $('.home .list #item');
// const $modal = document.getElementById('modal');
// const $overlay = document.getElementById('overlay');
// const $hideModal = document.getElementById('hide-modal');
// const $modalTitle = $modal.querySelector('h1');
// const $modalImage = $modal.querySelector('img');
// const $modalDescription = $modal.querySelector('p');
/***********************************************MODAL**************************************/
  // function showModal() {
  //   $overlay.classList.add('active');
  //   $modal.style.animation = 'modalIn .8s forwards';
  // }

  // $hideModal.addEventListener('click', hideModal);

  // function hideModal() {
  //   $overlay.classList.remove('active');
  //   $modal.style.animation = 'modalOut .8s forwards';

  // }

// })()

/*******************************************************************************************************************/
(async function load() {
  // await
  // action
  // terror
  // animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    if (data.data.movie_count > 0) {
      // aquí se acaba
      return data;
    }
    // si no hay pelis aquí continua
    throw new Error('No se encontró ningun resultado');
  }
  const $form = document.getElementById('form');
  const $home = document.getElementById('home');
  const $featuringContainer = document.getElementById('featuring');


  function setAttributes($element, attributes) {
    for (const attribute in attributes) {
      $element.setAttribute(attribute, attributes[attribute]);
    }
  }
  const BASE_API = 'https://yts.am/api/v2/';

/*********************************CREANDO TEMPLATE DE LA PELI ENCONTRADA***************************************** */
  function featuringTemplate(peli) {
    return (
      `
      <div class="featuring">
        <div class="featuring-image">
          <img src="${peli.medium_cover_image}" width="70" height="100" alt="">
        </div>
        <div class="featuring-content">
          <p class="featuring-title">Pelicula encontrada</p>
          <p class="featuring-album">${peli.title}</p>
        </div>
      </div>
      `
    )
  }
/****************************************form BUSCADOR****************************************************/
  $form.addEventListener('submit', async (event) => {
    event.preventDefault();
    $home.classList.add('search-active')
    //Creacion de elementos y asignacion de atributos
    const $loader = document.createElement('img');
    setAttributes($loader, {
      src: 'src/images/loader.gif',
      height: 50,
      width: 50,
    })
    //Fin comment
    $featuringContainer.append($loader);
/***********************************FORMULARIOS*********************************************** */
    const data = new FormData($form);
    try {
      const {
        data: {
          movies: pelis
        }
      } = await getData(`${BASE_API}list_movies.json?limit=1&query_term=${data.get('name')}`)

      const HTMLString = featuringTemplate(pelis[0]);
      $featuringContainer.innerHTML = HTMLString;
    } catch(error) {
      alert(error.message);
      $loader.remove();
      $home.classList.remove('search-active');
    }
  })
/****************************CREAR TEMPLATE DE LAS PELICULAS***************************************** */
  function videoItemTemplate(movie, category) {
    return (
      `<div class="primaryPlaylistItem" data-id="${movie.id}" data-category=${category}>
        <div class="primaryPlaylistItem-image">
          <img src="${movie.medium_cover_image}">
        </div>
        <h4 class="primaryPlaylistItem-title">
          ${movie.title}
        </h4>
      </div>`
    )
  }
  /*******creacion mostrar template en html.********************************************/
  function createTemplate(HTMLString) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLString;
    return html.body.children[0];
  }
  /********************************************************************************** */
  function addEventClick($element) {
    $element.addEventListener('click', () => {
      // alert('click')
      showModal($element)
    })
  }
  function renderMovieList(list, $container, category) {
    // actionList.data.movies
    $container.children[0].remove();
    list.forEach((movie) => {
      const HTMLString = videoItemTemplate(movie, category);
      const movieElement = createTemplate(HTMLString);
      $container.append(movieElement);
      const image = movieElement.querySelector('img');
      image.addEventListener('load', (event) => {
        event.srcElement.classList.add('fadeIn');
      })
      addEventClick(movieElement);
    })
  }

  async function cacheExist(category) {
    const listName = `${category}List`;
    const cacheList = window.localStorage.getItem(listName);

    if (cacheList) {
      return JSON.parse(cacheList);
    }
    const { data: { movies: data } } = await getData(`${BASE_API}list_movies.json?genre=${category}`)
    window.localStorage.setItem(listName, JSON.stringify(data))

    return data;
  }
/**********************************************REUTILIZANDO FUNCIONES****************************************** */
  // const { data: { movies: actionList} } = await getData(`${BASE_API}list_movies.json?genre=action`)
  const actionList = await cacheExist('action');
  // window.localStorage.setItem('actionList', JSON.stringify(actionList))
  const $actionContainer = document.querySelector('#action');
  renderMovieList(actionList, $actionContainer, 'action');

  const dramaList = await await cacheExist('drama');
  const $dramaContainer = document.getElementById('drama');
  renderMovieList(dramaList, $dramaContainer, 'drama');

  const animationList = await await cacheExist('animation');
  const $animationContainer = document.getElementById('animation');
  renderMovieList(animationList, $animationContainer, 'animation');
/********************************************************************************************************* */


  // const $home = $('.home .list #item');
  const $modal = document.getElementById('modal');
  const $overlay = document.getElementById('overlay');
  const $hideModal = document.getElementById('hide-modal');

  const $modalTitle = $modal.querySelector('h1');
  const $modalImage = $modal.querySelector('img');
  const $modalDescription = $modal.querySelector('p');

  /*Funcion find para encontrar el primer elemento de acuerdo a su condicion**/
  function findById(list, id) {
    //convertir id en entero en base decimal(10)
    return list.find(movie => movie.id === parseInt(id, 10))
  }

  function findMovie(id, category) {
    switch (category) {
      case 'action' : {
        return findById(actionList, id)
      }
      case 'drama' : {
        return findById(dramaList, id)
      }
      default: {
        return findById(animationList, id)
      }
    }
  }

  function showModal($element) {
    $overlay.classList.add('active');
    $modal.style.animation = 'modalIn .8s forwards';
    //DataSet
    const id = $element.dataset.id;
    const category = $element.dataset.category;
    const data = findMovie(id, category);

    $modalTitle.textContent = data.title;
    $modalImage.setAttribute('src', data.medium_cover_image);
    $modalDescription.textContent = data.description_full
  }

  $hideModal.addEventListener('click', hideModal);
  function hideModal() {
    $overlay.classList.remove('active');
    $modal.style.animation = 'modalOut .8s forwards';

  }
})()
