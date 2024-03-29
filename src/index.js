import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Section from './components/Section'
import Works from './components/Works'
import Main from './components/Main'

ReactDOM.render(
    <Router>
        <Routes>
          <Route path='/' element={<App/>}/>
          <Route path='/section' element={<Section/>}/>
          <Route path='/works' element={<Works/>}/>
          <Route path='/main' element={<Main/>}/>
        </Routes>
    </Router>,
  document.getElementById('root')
);

