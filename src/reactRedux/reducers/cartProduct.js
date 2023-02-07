
export const addProductInCart = (state = [], action) => {

  if (action.type === 'add') {
    if (state.length === 0) {
      action.payload["quantity"] = 1;
      return state.concat([action.payload]);
    } else {
      let id = true;
      state.forEach((data) => {
        if (data.id === action.payload.id) {
          id = false;
        }
      })
      if (id) {
        action.payload["quantity"] = 1;
        return state.concat([action.payload])
      } else {
        return state;
      }
    }
  } else if (action.type === 'remove') {
    return state.filter(item => item.id !== action.payload.id);
  } else if (action.type === 'INCREMENT') {
    state.forEach((data) => {
      if (action.payload === data.id) {
        data['quantity'] += 1;
      }
    })
    return [...state];
  } else if(action.type==='DECREMENT'){
     state.forEach((data) => {
      if (action.payload === data.id) {
        if(data.quantity>1){
          data['quantity'] -= 1;
        }
      }
    })
    return [...state];
  }
  else {
    return state;
  }
}