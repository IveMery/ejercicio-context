import styled from "styled-components"
import { useContext } from 'react'
import ContextUser from "../Context/ContextUser"

const ButtonLike = styled.button`
width:100px;
height:30px;
background-color:${({ estaLogueado }) => (estaLogueado ? "#E05D5D" : "green")};
padding-bottom:5px;
color:white;
border-radius:10px;
border:none;
cursor:pointer;
margin:2px;
`
const Button = ({ title, handleClick, handleModal, handleCloseModal }) => {

    const { estaLogueado } = useContext(ContextUser)

    return (
        <ButtonLike estaLogueado={estaLogueado} onClick={handleClick || handleModal || handleCloseModal} >{title}</ButtonLike>
    )
}

export default Button
