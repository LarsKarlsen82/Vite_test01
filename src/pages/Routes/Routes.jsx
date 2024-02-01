import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { useBasket } from '/src/components/Basket/BasketContext';

import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import NoPage from '/src/pages/NoPage/NoPage';
import Login from '../Login/Login';
import Basket from '/src/components/Basket/Basket'; 
import Posters from '/src/pages/Posters/Posters';
import PosterList from '/src/pages/Posters/PosterList';
import PosterDetails from '/src/pages/Posters/PosterDetails';
import RandomPosters from '/src/pages/Posters/RandomPosters';
import { useAuth } from '../../Provider/AuthProvider';

import styles from './Routes.module.scss';

const ScrollToTopLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };

  return <Link to={to} onClick={handleClick} className={styles.NavLink}>{children}</Link>;
};

const AppRoutes = () => {

  const { basket } = useBasket();
  const basketCount = basket.length;

  const { loginData } = useAuth();



  return (
    <Router>
      <nav className={styles.NavBar}>
        <div className={styles.NavContainer}>
          <h2 className={styles.NavH2}>
            <span>Wallywood</span>
          </h2>
          <ul className={styles.NavList}>
            <li>
              <NavLink to="/basket" className={`${styles.NavLink} ${window.location.pathname === '/basket' ? styles.activeLink : ''}`}>
                <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
                {basketCount > 0 && <span className={styles.BasketCount}>{basketCount}</span>}
              </NavLink>
            </li>
            <li><ScrollToTopLink to="/">Home</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/plakater">Plakater</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/om">Om os</ScrollToTopLink></li>
            <li><ScrollToTopLink to="/kontakt">Kontakt</ScrollToTopLink></li>
            <li className="basketLink">
              <ScrollToTopLink to="/Login">Login</ScrollToTopLink>
            </li>
            {loginData && <div>Du er logget ind som {loginData.user.firstname}</div>}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/om" element={<About />} />
        <Route path="/kontakt" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/plakater" element={<Posters />}>
        <Route index element={<RandomPosters />} />
          <Route path=':genre' element={<PosterList/>} />
          <Route path="/plakater/:slug" element={<PosterDetails />} />
          <Route path="/plakater/:slug/:name/:image" element={<PosterDetails />} />
          <Route path=':genre/:poster' element={<PosterDetails/>} />
        </Route>
        <Route path="*" element={<NoPage />}> </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
