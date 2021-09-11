import styled from "styled-components";
import Button from "./Button";
import ContextUser from "../Context/ContextUser";
import { useContext } from "react";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = styled.nav`
width:100%;
height:40px;
background-color:#00A19D;
height:50px;
`
const User = styled.p`
margin-right: 5px;
font-size:20px;
margin:0;
margin-right:10px;
padding:0;
`
const Title = styled.h1`
font-size:20px;
margin:0;
margin-left:10px;
padding:0;
`
const Div = styled.div`
display:flex;
justify-content:space-around;`

const Nav = () => {

    const { estaLogueado } = useContext(ContextUser)
    console.log(estaLogueado)

    return (
        <Navbar>
            <Div>
                <Title>Stylegram</Title>
                {estaLogueado ?
                    <User>    <FontAwesomeIcon icon={faUser} />
                        Hola Pana Rabbit</User> :
                    <Button title='Inicia sesion' />}
            </Div>
        </Navbar>
    )
}

export default Nav
