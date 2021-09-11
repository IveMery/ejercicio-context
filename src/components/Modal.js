import styled from 'styled-components'
import Button from './Button'

const DivModal = styled.div`
width: 500px;
max-width: 100%;
height: 300px;
background-color: #F8F0DF;
border-radius: 5px;
position: absolute;
right: 50%;
left: 35%;
top: 20%;  
z-index: 5;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.5);
`
const Modal = ({ handleCloseModal }) => {

    return (
        <Overlay>
            < DivModal>
                <p>"Para dar like, iniciá sesión"</p>
                <Button handleCloseModal={handleCloseModal}
                    title='Cerrar' />
            </ DivModal>
        </Overlay>
    )
}

export default Modal
