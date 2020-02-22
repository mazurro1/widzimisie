import React from "react"
// import { Link } from "gatsby"
// import styled from "styled-components";
// import Image from "../components/image"
import SEO from "../components/seo"
import Header from '../components/header';
import Banner from '../components/Banner/Banner';
import AboutUs from '../content/AboutUs';
import OurJob from '../content/OurJob';
import OurSuppliers from '../content/OurSuppliers';
import Services from '../content/Services';
import Gallery from '../content/Gallery'

// const StyledDiv = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: red;
//   height: calc(100vh - 80px); //kalkulacja
// `;

const IndexPage = (props) => (
  <>
    <SEO title="Home" />
    <Header />
    <Banner />
    <AboutUs />
    <OurJob />
    <OurSuppliers history={props} />
    <Services />
    <Gallery />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </>
)

export default IndexPage
