import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainPage from './MainPage';
import Plants from './PlantPage';
import SalePage from './SalePage';
import SubPage from './SubPage';


const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
                <Route path="/" component={MainPage} exact/>
                <Route path="/plants" component={Plants} exact/>
                <Route path="/sale" component={SalePage} exact/>
                <Route path="/subscription" component={SubPage} exact/>
            <Footer/>
            </BrowserRouter>
        </div>
    )
    
}

export default App;