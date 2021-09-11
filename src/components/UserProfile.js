import React from 'react'

import styled from 'styled-components'
import  user from '../assets/user.jpg'


const DivContainerPhoto = styled.div`
width:100px;
height:100px;;
display:flex;
justify-content:start;
border:2px solid black;
border-radius:50px;
margin-left:30px;
margin-top:10px;
`
const Img =styled.img`
border-radius:50px;
`

const UserProfile = () => {
    return (
        <DivContainerPhoto>
         <Img src={user}/>
        </DivContainerPhoto>
    )
}

export default UserProfile
