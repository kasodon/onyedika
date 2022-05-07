import React, { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../pages/Header/header'
import Footer from '../pages/Footer/footer'
import './main.scss'

import mainRoutes from '../routes/main'

function MainLayout() {
    return (
        <div className="main">
            <Header />
            <Suspense fallback={<p>Loading...</p>}>
                <Routes>
                    {mainRoutes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.path}
                                key={key}
                                element={prop.component}
                            ></Route>
                        )
                    })}
                </Routes>
            </Suspense>
            <Footer />
        </div>
    );
}

export default MainLayout