import { useState } from "react";
import ToastMessage from "../../components/ToastMessage/ToastMessage";
import { useModal } from "../../hooks/useModal";
import { useToastMessage } from "../../hooks/useToastMessage";
import AddUserFormModal from "./components/AddUserFormModal";
import UserList from "./components/UserList"

const UserMainPage = () => {
    const { isOpen, openModal, closeModal } = useModal(false);
    const { message: toastMessage, isVisible: toastMessageIsVisible, showToastMessage, closeToastMessage} = useToastMessage('', false);
    const [reloadKey, setReloadKey] = useState(0);

    const handleUserAdded = (message: string) => {
        showToastMessage(message);
        setReloadKey((prev) => prev + 1);
        closeModal();
    };

    return (
        <>
        <ToastMessage  message={toastMessage} isVisible={toastMessageIsVisible} onClose={closeToastMessage}/>
            <AddUserFormModal onUserAdded={handleUserAdded} isOpen={isOpen} onClose={closeModal} />
            <UserList onAddUser={openModal} reloadKey={reloadKey} />
        </>
    );
};

export default UserMainPage