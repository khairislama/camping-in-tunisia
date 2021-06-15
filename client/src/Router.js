import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar               from './components/Navbar'
import LandingPage          from './views/Landing'
import AllCampgrounds       from './views/campgrounds/AllCampgrounds'
import ShowCampground       from './views/campgrounds/Show'
import FormAddCampground    from './views/campgrounds/FormAdd'
import FormEditCampground   from './views/campgrounds/FormEdit'
import Bookmarks            from './views/campgrounds/Bookmarks'
import AllProducts          from './views/products/AllProducts'
import ShowProducts         from './views/products/Show'
import ShowUser             from './views/users/Show' 
import EditUser             from './views/users/FromEdit'  
import Register             from './views/Register'
import Login                from './views/Login'
import AboutUs              from './views/AboutUs'
import ContactUs            from './views/ContactUs'
import Footer               from './components/Footer'
import AuthConext           from './context/AuthContext';
function Router() {

    const {loggedIn} = useContext(AuthConext);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
            <LandingPage />
        </Route>
        <Route path="/campgrounds" exact>
            <Navbar />
            <AllCampgrounds />
            <Footer />
        </Route>
        <Route path="/bookmarks" exact>
            <Navbar />
            <Bookmarks />
            <Footer />
        </Route>
        <Route path="/campgrounds/:campgroundID" exact>
            <Navbar />
            <ShowCampground />
            <Footer />
        </Route>
        <Route path="/campgrounds/:campgroundID/edit" exact>
            <Navbar />
            <FormEditCampground />
            <Footer />
        </Route>
        <Route path="/products" exact>
            <Navbar />
            <AllProducts />
            <Footer />
        </Route>
        <Route path="/aboutus" exact>
            <Navbar />
            <AboutUs />
            <Footer />
        </Route>
        <Route path="/contactus" exact>
            <Navbar />
            <ContactUs />
            <Footer />
        </Route>
        <Route path="/user/:userID" exact>
            <Navbar />
            <ShowUser />
            <Footer />
        </Route>
        <Route path="/user/:userID/edit" exact>
            <Navbar />
            <EditUser />
            <Footer />
        </Route>
        {
            loggedIn?.success === false && (
                <>
                    <Route path="/login" exact>
                        <Navbar />
                        <Login />
                        <Footer />
                    </Route>
                    <Route path="/register" exact>
                        <Navbar />
                        <Register />
                        <Footer />
                    </Route>
                </>                
            )
        }
        {
            loggedIn?.success === true && (
                <>
                <Route path="/campground/new" exact>
                    <Navbar />
                    <FormAddCampground />
                    <Footer />
                </Route>
                </>
            )
        }
      </Switch>
    </BrowserRouter>
  )
}


export default Router;