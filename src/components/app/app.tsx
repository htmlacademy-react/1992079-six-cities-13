import WelcomeScreen from '../../pages/welcome-page/welcome-page';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import OfferPage from '../../pages/offer-page/offer-page';
import PageNotFound from '../../pages/404-page/404-page';
import PrivateRoute from "./private-route";

type AppScreenProps = {
  favoritesCount: number;
  placesFound: number;
}

function App({
  favoritesCount,
  placesFound
}: AppScreenProps): JSX.Element {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<WelcomeScreen favoritesCount={favoritesCount} placesFound={placesFound}/>}></Route>
          <Route path='login' element={<LoginPage />}></Route>
          <Route path='favorites' element={<PrivateRoute elements={<FavoritesPage />} />}></Route>
          <Route path='offer/'>
            <Route path=':id' element={<OfferPage />}></Route>
          </Route>
        </Route>
        <Route path='*' element={<PageNotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
