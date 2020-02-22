import styled from "styled-components";
import React from "react";
import Button from '@material-ui/core/Button';


const ButtonCostum = ({ name, onClick, full = false }) => {
    const fullBackground = full ? "contained" : "";

    const ButtonStyle = styled(Button)`
        border: 2px solid white !important;
        color: ${!full ? "white !important" : "#7D8260 !important"};
        border-radius: 0 !important;
        background-color: ${!full ? "" : "white !important"};
        &:focus{
            outline: none;
        }
    `;
    return (
        <>
            <ButtonStyle onClick={onClick} value={fullBackground}>
                {name}
            </ButtonStyle>
        </>
    )
}


export default ButtonCostum
