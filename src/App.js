import Header from './components/header/header';
import styled from 'styled-components';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import { devices } from './other/query';

export const Container = styled.div`
  max-width: 1157px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
  @media ${devices.mobileL} {
    padding:0;
  }
`
function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
