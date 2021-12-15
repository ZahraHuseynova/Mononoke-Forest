import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainPage from './MainPage';
import Plants from './PlantPage';


const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
                <Route path="/" component={MainPage} exact/>
                <Route path="/plants" component={Plants} exact/>
            <Footer/>
            </BrowserRouter>
        </div>
    )
    
}

export default App;