import { useState } from "react";
import ToastMessage from "../../components/ToastMessage/ToastMessage";
import { useModal } from "../../hooks/useModal";
import { useToastMessage } from "../../hooks/useToastMessage";
import AddUserFormModal from "./components/AddUserFormModal";
import UserList from "./components/UserList"
import EditUserFormModal from "./components/EditUserFormModal";
import DeleteUserFormModal from "./components/DeleteUserFormModel";
import { useRefresh } from "../../hooks/useRefresh";

const UserMainPage = () => {
    const [addOpen, setAddOpen] = useState(false);
    const { isOpen: editOpen, selectedUser: selectedUserForEdit, openModal: openEditModal, closeModal: closeEditModal } = useModal(false);
    const { isOpen: isDeleteUserFormModalOpen, selectedUser: selectedUserForDelete, openModal: openDeleteUserFormModal, closeModal: closeDeleteUserFormModal } = useModal(false);
    const { message: toastMessage, isVisible: toastMessageIsVisible, showToastMessage, closeToastMessage} = useToastMessage('', false, false);


    const {refresh, handleRefresh} = useRefresh(false);

    return (
        <>
        <ToastMessage  message={toastMessage} isVisible={toastMessageIsVisible} onClose={closeToastMessage}/>
            <AddUserFormModal onUserAdded={showToastMessage} refreshKey={handleRefresh} isOpen={addOpen} onClose={() => setAddOpen(false)} />
            <EditUserFormModal user={selectedUserForEdit} onUserUpdated={showToastMessage} refreshKey={handleRefresh} isOpen={editOpen} onClose={closeEditModal} />
            <DeleteUserFormModal user={selectedUserForDelete} onUserDeleted={showToastMessage} refreshKey={handleRefresh} isOpen={isDeleteUserFormModalOpen} onClose={closeDeleteUserFormModal} />
            <UserList onAddUser={() => setAddOpen(true)} onEditUser={(user) => openEditModal(user)} onDeleteUser={(user) => openDeleteUserFormModal(user)} refreshKey={refresh} />
        </>
    );
};

export default UserMainPage