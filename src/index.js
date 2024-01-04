import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStoreWithPreloadedState from './redux/store';
import App from './components/App';

const initializeApp = async () => {
  try {
    const store = await createStoreWithPreloadedState();

    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  } catch (error) {
    console.error('Error while initializing the app:', error);
  }
};

initializeApp();
