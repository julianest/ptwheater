import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/GeneralStyles.css';
import AppRoutes from './routes/AppRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import 'mapbox-gl/dist/mapbox-gl.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <AppRoutes />
    </Provider>
  </React.StrictMode>
);

