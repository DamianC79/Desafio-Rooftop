export const getHome = new Promise(async (resolve, reject) => {
    const api = await fetch('https://rooftop-api-rest-frontend.herokuapp.com/');
    const home = await api.json();
      
    resolve(home.home)
  })
  
  export const getCatalogo = new Promise(async (resolve, reject) => {
    const api = await fetch('https://rooftop-api-rest-frontend.herokuapp.com/items/limit=4');
    const catalogo = await api.json();
  
    resolve(catalogo.items)
  })

  // export const getDetalles = new Promise(async (resolve, reject) => {
  //   const api = await fetch('https://rooftop-api-rest-frontend.herokuapp.com/questions');
  //   const detalles = await api.json();
  
  //   resolve(detalles.items)
  // })