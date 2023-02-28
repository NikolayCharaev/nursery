import {Global } from './globalStyle';
import Header from './components/Header/Header';
import Nursery from './components/Nursery/Nursery';
import Advantages from './components/Advantages/Advantages';
import TakeYourself from './components/TakeYourself/TakeYourself';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
    <>
      <Global />
      <Header />
      <Nursery />
      <Advantages />
      <TakeYourself/>
      <Reviews/>

    </>
  );
}

export default App;
