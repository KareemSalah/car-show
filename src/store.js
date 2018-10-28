import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';


export default function configureStore(initialState: Object = {}) {
  const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);
  return createStoreWithMiddleware(rootReducer);
}
