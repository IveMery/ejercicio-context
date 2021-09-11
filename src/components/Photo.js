import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { useContext, useState } from 'react'
import ContextUser from '../Context/ContextUser'
import Modal from './Modal'
import useModal from '../hooks/useModal'

const DivCard = styled.div`
width:250px;
height:200px;
margin:30px;
`
const Img = styled.img`
width:100%;
height:100%;
`
const Photo = ({ image, likes }) => {
    const { estaLogueado } = useContext(ContextUser)
    const { handleModal, handleCloseModal, modal } = useModal()
    let number = parseInt(likes)
    const [count, setCount] = useState(number)

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <DivCard>
            <div><Img src={image} /></div>
            <p>{estaLogueado &&
                `${count} likes`}</p>
            {estaLogueado ? <Button handleClick={handleClick}
                title='Dar like' /> :
                <Button handleModal={handleModal} title='Dar like' />}
            {modal &&
                <Modal handleCloseModal={handleCloseModal} />}
        </DivCard>
    )
}

export default Photo
