import React, {useState, useEffect} from 'react'
import Header from './Header'
import Emission from './Emission';
import { BrowserRouter as Router, Routes, Route, Link, Redirect, } from "react-router-dom";

function Page () {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<p>This is the HomePage</p>} />
                    <Route path='/header' element={<Header />}></Route>
                </Routes>
            </Router>
        </>
	);
}
export default Page;