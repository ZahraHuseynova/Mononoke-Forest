import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import MainPage from './MainPage';


const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Header/>
                <Route path="/" component={MainPage}/>
            <Footer/>
            </BrowserRouter>
        </div>
    )
    
}

export default App;