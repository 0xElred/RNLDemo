import { useEffect } from "react"
import EditGenderForm from "./components/EditGenderForm"

const EditGenderPage = () => {
    useEffect(() => {
        document.title = 'Edit Gender Page'
    }, [])
    return (
        <>
            <EditGenderForm />
        </>
    )
}

export default EditGenderPage