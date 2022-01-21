import {Router,Route,Switch} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainPage from './MainPage';
import Plants from './PlantPage';
import SalePage from './SalePage';
import SubPage from './SubPage';
import StoreLoc from './StoreLoc';
import GiftCard from './GiftCard';
import Shipping from './Shipping';
import Contact from './Contact';
import AboutUs from './AboutUs';
import ShowPage from './ShowPage';
import adminPage from './Admin/adminPage';
import history from '../history';
import DeletePage from './Admin/deletePage';


const App=()=>{
    return(
        <div>
            <Router history={history}>
            <Header/>
                <Route path="/" component={MainPage} exact/>
                <Route path="/plants" component={Plants} exact/>
                <Route path="/sale" component={SalePage} exact/>
                <Route path="/subscription" component={SubPage} exact/>
                <Route path="/stores" component={StoreLoc} exact/>
                <Route path="/gift" component={GiftCard} exact/>
                <Route path="/shipping" component={Shipping} exact/>
                <Route path="/contact" component={Contact} exact/>
                <Route path="/about" component={AboutUs} exact/>
                <Route path="/showpage" component={ShowPage} exact/>
                <Route path="/contactadmin/" component={adminPage}/>
                <Route path="/deletepage/:id" component={DeletePage}/>
            <Footer/>
            </Router>
        </div>
    )
    
}

export default App;