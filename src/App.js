import React, {useEffect, useState} from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import indexRoutes from './routes/index'
import Preloader from './components/preloader';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {setLoading(false);}, 5000);
      }, []);
  return (
      <>
      { loading ? 
        (<Preloader />) 
        : 
        (
            <Router>
            <Routes>
                {indexRoutes.map((prop, key) => {
                    return (
                        <Route
                            path={prop.path}
                            key={key}
                            element={prop.component}
                        ></Route>
                    )
                })}
            </Routes>
        </Router>
        ) 
    }
      </>
  );
}

export default App;
