import React from "react"
import { Link } from "gatsby"
import styled from "styled-components";
import '../layout.css';
import MessangerChat from '../messangerChat/MessangerChat';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import RoomIcon from '@material-ui/icons/Room';

const NavStyled = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1000;
  font-family: Montserrat;
  background-color: #27211E;
  color: white;
  box-shadow: 1px 20px 20px -20px black;
`;

const DivUpStyled = styled.div`
  position: relative;
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;

  .iconsContentLeft{
    position: absolute;
    left: 0;
    top: 0px;
    padding-left: 30px;

    svg{
        position: absolute;
        left: 0;
    }
  }

  .iconsContentRight{
    position: absolute;
    top: 0px;
    right: 0;
    padding-left: 30px;

    svg{
        position: absolute;
        left: 0;
    }
  }

  .container{
      position: relative;
  }
`;

const DivDownStyled = styled.div`
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
  ul{
      margin: 0;
      padding: 5px;
      border-top: 1px solid white;
      max-width: 600px;
      margin: 0 auto;
      a{
          color: white;

      }
    li{
        margin: 0;
        padding: 0;
        display: inline-block;
        padding: 5px 10px;
        margin: 0 5px;
        border-radius: 5px;
        cursor: pointer;
        transition-property: background-color;
        transition-duration: 0.3s;
        transition-timing-function: ease;
        &:hover{
            background-color: #161312
        }
     }
  }
`;

const IndexPage = () => (
    <>
        <NavStyled>
            <DivUpStyled>
                <div className="container">
                    <div className="iconsContentLeft">
                        <PhoneIphoneIcon />796 000 777
                    </div>
                    Zdrowie · Optyk · Optometrysta
                    <div className="iconsContentRight">
                        <RoomIcon />
                    </div>
                </div>
            </DivUpStyled>
            <DivDownStyled>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/visit"><li>Umow Wizyte</li></Link>
                    <Link to="/shop"><li>Sklep</li></Link>
                    <Link to="/promotion"><li>Promocje</li></Link>
                    <Link to="/eyeglass"><li>Szkla okularowe</li></Link>
                </ul>
            </DivDownStyled>
        </NavStyled>
        {/* <MessangerChat /> */}
    </>
)

export default IndexPage
