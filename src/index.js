import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStoreWithPreloadedState from './redux/store';
import App from './components/App';

const initializeApp = async () => {
  try {
    const store = await createStoreWithPreloadedState();

    const rootElement = document.getElementById('root');
    const root = ReactDOM.createRoot(rootElement);

    root.render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    );
  } catch (error) {
    console.error('Error while initializing the app:', error);
  }
};

initializeApp();
