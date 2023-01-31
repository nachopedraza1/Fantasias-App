import { useState } from 'react';

export const useModal = () => {

    const [openModal, setOpenModal] = useState(true);

    return {
        openModal,
        setOpenModal
    }
}
