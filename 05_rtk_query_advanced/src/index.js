import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { extendedApiSlice } from './redux/postsSlice';
import { usersApiSlice } from './redux/usersSlice';

store.dispatch(extendedApiSlice.endpoints.getPosts.initiate());
store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>
);


