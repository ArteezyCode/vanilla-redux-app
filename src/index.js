import { createStore } from 'redux';
import './styles.scss';


// ------------ HTML Entities ------------ //
const likesCounter = document.getElementById("like");
const dislikeCounter = document.getElementById("dislike");


// ------------ Initial state for reducer ------------ //
const initState = {
  like: 0,
  dislike: 0,
}


// ------------ Let's init counters with reducer initial state ------------ //
likesCounter.innerHTML = `Likes: ${initState.like}`;
dislikeCounter.innerHTML = `Dislikes: ${initState.dislike}`;


// ------------ Reducer ------------ //
const counterReducer = (state=initState, action) => {
  switch(action.type) {
    case 'LIKE':
      return { ...state, like: state.like + 1 };
    case 'DISLIKE':
      return { ...state, dislike: state.dislike + 1 };
    case 'RESET':
      return initState;
    default:
      return state
  }
}


// ------------ Store creating ------------ //
const store = createStore(counterReducer);


// ------------ Event listeners ------------ //
likesCounter.addEventListener('click', (e) => {
  store.dispatch({ type: 'LIKE' });
  likesCounter.innerHTML = `Likes: ${store.getState().like}`;

  console.log(store.getState());
});

dislikeCounter.addEventListener('click', (e) => {
  store.dispatch({ type: 'DISLIKE' });
  dislikeCounter.innerHTML = `Dislikes: ${store.getState().dislike}`;

  console.log(store.getState());
});
