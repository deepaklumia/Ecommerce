export const incNumber = (id) => {
  return {
    type: 'INCREMENT',
    payload: id
  }
}
export const decNumber = (id) => {
  return {
    type: 'DECREMENT',
    payload: id
  }
}
export const addToCart = (product, add) => {
  return {
    type: add,
    payload: product,
  }
}