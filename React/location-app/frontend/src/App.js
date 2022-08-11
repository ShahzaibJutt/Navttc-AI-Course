import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import { Main } from './pages/posts/main';
import MainNavigation from './components/header/MainNavigation';

function App() {
  return <Router>
    <MainNavigation />
    <Switch>
      <main>
        <Route path={ '/' } exact>
          <Main />
        </Route>
        <Redirect to={ '/' }/>
      </main>  
    </Switch>
    </Router>;
}

export default App;
