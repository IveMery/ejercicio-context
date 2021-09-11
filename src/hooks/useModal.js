import { useState } from 'react';

const useModal = () => {

    const [modal, setModal] = useState(false)

    const handleModal = () => {
        setModal(true)
    }

    const handleCloseModal = () => {
        setModal(false)
    }
    return  {
        handleModal,
        handleCloseModal,
        modal
    }
}

export default useModal
