
import './App.scss';
import WebFontLoader from 'webfontloader'

import { HashRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts/layouts.tsx';
import { DailyPage, GreetPage, NamePage, Error404Page } from './pages/pages.tsx'



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

      <HashRouter>
      
        <Routes>
          <Route path='/' Component={ GreetPage } />
          <Route path='/name' Component={ NamePage } />
          <Route path='/daily' Component={ DailyPage } />
          <Route path='*' Component={ Error404Page } />
        </Routes>
      </HashRouter>
      </DefaultLayout>
    

      </div>
  );
}
