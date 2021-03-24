import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import AllCampgrounds from './views/campgrounds/AllCampgrounds'
import ShowCampground from './views/campgrounds/Show'
import FormCampground from './views/campgrounds/FormCrud'
import AllProducts from './views/products/AllProducts'
import ShowProducts from './views/products/Show'
import Register from './views/Register'
import Login from './views/Login'
import AboutUs from './views/AboutUs'
import ContactUs from './views/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ShowCampground />
      <Footer />
    </div>
  );
}

export default App;
