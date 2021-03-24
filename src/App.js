import './App.css';

import Students from './components/Students';
import Header from './components/Header';
import NotFound from "./components/NotFound";
import Student from './components/Student';

import {BrowserRouter , Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div className="App">

<div>
      <BrowserRouter>
        <Header />
       <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/Students" component={Students} />
          <Route exact path="/students/:id" component={Student} />
          <Route component={NotFound} />
          </Switch >
      </BrowserRouter>
    
      </div>

    </div>
  );
}

export default App;
