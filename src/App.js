import { Container, Global } from './globalStyle';
import Header from './components/Header/Header';
import Nursery from './components/Nursery/Nursery';
import Advantages from './components/Advantages/Advantages';
import TakeYourself from './components/TakeYourself/TakeYourself';
function App() {
  return (
    < >
      <Global />
      <Header />
      <Nursery />
      <Advantages/>
      {/* <TakeYourself/> */}
    </>
  );
}

export default App;
