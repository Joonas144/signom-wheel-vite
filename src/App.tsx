
import './App.scss';
import WebFontLoader from 'webfontloader'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/layouts.tsx';
import GreetPage from './pages/greet.tsx';
import NamePage from './pages/name.tsx';

const fonts = {
  google: {
    families: ['Signika:400,700']
  }
}
WebFontLoader.load(fonts);
export default function App() {

  return (
    <div>
      
      <DefaultLayout>
      <BrowserRouter basename='/signom-wheel-vite'>
        <Routes>
          <Route path='/' Component={GreetPage}></Route>
          <Route path='/name' Component={NamePage}></Route>
        </Routes>
      </BrowserRouter>
      </DefaultLayout>
    

      </div>
  );
}
