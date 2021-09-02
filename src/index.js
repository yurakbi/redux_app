import {createStore} from 'redux';

const reducer = (state=0, action) => {
  switch(action.type) {
    case 'INC':
      return state + 1;
      case 'DEC':
        return state - 1;
      case 'RES' :
        return state = 0;
      default:
        return state;

  }
}

const store = createStore(reducer);
const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const rnd = () => ({type: 'RES'});

document.getElementById('inc').addEventListener('click', () => {
    store.dispatch(inc())
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec())
});
document.getElementById('res').addEventListener('click', () => {
  store.dispatch(rnd())
});

const update = () => {
  document.getElementById('count').textContent=store.getState();
};

store.subscribe(update);


