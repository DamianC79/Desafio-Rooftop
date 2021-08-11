export const getProducts = (limit?:number) => new Promise ((resolve, reject) => {
    const url = limit ?
    `https://rooftop-api-rest-frontend.herokuapp.com/items?limit=${limit}`
    :
    'https://rooftop-api-rest-frontend.herokuapp.com/items'
  
    fetch(url)
    .then(data => resolve(data.json()))
    .catch(error => reject(error))
  })
  
  export const getQuestions = (id:string) => new Promise((resolve, reject) => {
    const url = `https://rooftop-api-rest-frontend.herokuapp.com/questions?item_id=${id}`
  
    fetch(url)
    .then(data => resolve(data.json()))
    .catch(error => reject(error))
  })
  
  export const saveQuestion = (data:any) => new Promise((resolve, reject) => {
    const url = 'https://rooftop-api-rest-frontend.herokuapp.com/questions'
  
    fetch(url, {
        method: 'POST',
        body: data
    })
    .then(data => resolve(data.json()))
    .catch(error => reject(error))
  })