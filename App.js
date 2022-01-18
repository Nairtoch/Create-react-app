import './App.css';
import { Header } from './components/partials/Header/Header';
import { Main } from './components/partials/Main/Main';
import { Footer } from './components/partials/Footer/Footer';
import { Nav } from './components/partials/Navigation/Navigation'

const arrNav = [
  "Home",
  "Products",
  "About",
  "Jobs",
  "Contact"
]

function App() {
  return (
    <div className="sitewrapper">
      <Header />
      <Nav data={arrNav} />
      <Main />
      <Footer data={arrNav} />
    </div>
  );
}

export default App;
