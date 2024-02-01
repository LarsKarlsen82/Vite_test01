// App.jsx
import React from 'react';
import { BasketProvider } from './components/Basket/BasketContext';
import './App.scss';
import AppRoutes from './pages/Routes/Routes';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BasketProvider>
      <div>
        <AppRoutes />
        {/* <Main /> */}
        <Footer />
      </div>
    </BasketProvider>
  );
}

export default App;
