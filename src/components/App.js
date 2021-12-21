import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainPage from './MainPage';
import Plants from './PlantPage';
import SalePage from './SalePage';
import SubPage from './SubPage';
import StoreLoc from './StoreLoc';
import GiftCard from './GiftCard';


const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
                <Route path="/" component={MainPage} exact/>
                <Route path="/plants" component={Plants} exact/>
                <Route path="/sale" component={SalePage} exact/>
                <Route path="/subscription" component={SubPage} exact/>
                <Route path="/stores" component={StoreLoc} exact/>
                <Route path="/gift" component={GiftCard} exact/>
            <Footer/>
            </BrowserRouter>
        </div>
    )
    
}

export default App;