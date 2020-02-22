import React from "react"
import styled from "styled-components";
import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';
import '../components/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import GlobalStyle from '../assets/globalStyles';


const MainLayout = ({ children }) => {
    return (
        <>
            <Navigation />
            {children}
            <Footer />
        </>
    )
}
export default MainLayout
