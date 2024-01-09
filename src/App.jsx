
import './App.css';
import DoctorsAll from './Components/DoctorsAll';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import PageNotFound from './Components/PageNotFound';

import ViewDoctors from './Components/ViewDoctors';
import {Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App m-0 ">
      <Header/>
      <section>

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/doctors' element={<DoctorsAll/>}/> 
  <Route path='/doctors/View/:id' element={<ViewDoctors/>}/>
  <Route path='*' element={<PageNotFound/>}/>
</Routes>   

</section>
      <Footer/>
    </div>
  );
}

export default App;
