import { FC, ReactNode, createContext, useContext, useState } from "react"
import { Modal } from "../Modal/Modal"

interface IModalProvider {
    children: React.ReactNode
}

interface IModalContext {
    isModalOpened: boolean
    openModal: () => void
    closeModal: () => void
    content: ReactNode | null
    handleModal: (children: ReactNode) => void
}

const ModalContext = createContext<IModalContext>({
    isModalOpened: false,
    openModal: () => { return null },
    closeModal: () => { return null },
    content: null,
    handleModal: (children: ReactNode) => { return null }
})
export const useModalContext = () => {
    return useContext(ModalContext)
}

export const ModalProvider: FC<IModalProvider> = ({ children }) => {
    const [isModalOpened, seIsModalOpened] = useState<boolean>(false)
    const [content, setContent] = useState<ReactNode | null>(null)

    const openModal = () => { seIsModalOpened(true) }

    const closeModal = () => {
        setContent(null)
        seIsModalOpened(false)
    }

    const handleModal = (children: ReactNode) => {
        openModal()
        setContent(children)
    }

    return (
        <ModalContext.Provider value={{ closeModal, isModalOpened, openModal, content, handleModal }}>
            <Modal />
            {children}
            {content}
        </ModalContext.Provider>
    )
}