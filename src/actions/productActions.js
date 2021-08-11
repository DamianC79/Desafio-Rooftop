import { GET_PRODUCTS, GET_QUESTIONS } from '../types'
import { getProducts, getQuestions, saveQuestion } from '../services'

export function getProductsAction(quantity) {
  return (dispatch) => {
    getProducts(quantity)
    .then(data => {
      console.log(data.items)
      dispatch({type: GET_PRODUCTS, payload: data.items})
    })
    .catch(error => console.log(error))
  }
}

export function getQuestionsAction(id) {
  return (dispatch) => {
    getQuestions(id)
    .then(data => {
      dispatch({type: GET_QUESTIONS, payload: data})
    })
    .catch(error => console.log(error))
  }
}

export function saveQuestionAction(data) {
  return (dispatch) => {
    saveQuestion(data)
    .then(data => {
      console.log(data)
    })
    .catch(error => console.log(error))
  }
}