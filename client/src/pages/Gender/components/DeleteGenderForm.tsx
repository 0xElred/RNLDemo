import { useEffect, useState, type FormEvent } from "react";
import BackButton from "../../../components/buttons/BackButton"
import SubmitButton from "../../../components/buttons/SubmitButton"
import FloatingLabelInput from "../../../components/inputs/FloatingLabelInput"
import { useNavigate, useParams } from "react-router-dom";
import GenderService from "../../../services/GenderService";
import Spinner from "../../../components/Spinner/Spinner";



const DeleteGenderForm = () => {
    const [loadingGet, setLoadingGet] =  useState (false)
    const [loadingDestroy, setLoadingDestroy] = useState(false)
    const [gender, setGender] = useState('')

    const {gender_id} = useParams()
    const navigate = useNavigate()
    
    const handleGetGender = async (genderId: string | number) => {
        try {
            setLoadingGet(true)

            const res = await GenderService.getGender(genderId)

            if (res.status === 200 ) {
                setGender(res.data.gender.gender)
            } else {
                console.error('Unexpected status error occured during getting gender: ', res.status)
            }
        } catch (error) {
            console.error('Unexpected server error occured during getting gender: ', error)
        } finally {
            setLoadingGet(false)
        }
    };

    const handleDestroyGender = async (e: FormEvent) => {
        try {
            e.preventDefault()
            setLoadingDestroy(true)

            const res =  await GenderService.destroyGender(gender_id!)

            if(res.status === 200 ){
                navigate('/', {state: {message: res.data.message}})
            } else {
                console.error('Unexpected status error occured during deleting gender: ', res.status)
            }
        } catch (error) {
            console.error('Unexpected server error occured during deleting gender: ', error)
        } finally {

        }
    }

    useEffect( () => {
    if (gender_id) {
        const parseGenderId = parseInt(gender_id)
        handleGetGender(parseGenderId)
    } else {
        console.error('Unexpected Parameter error occured during getting gender:', gender_id )
    }
}, [gender_id]);

    return (
        <>
        {loadingGet ? (
            <div className="flex justify-center items-center mt-52" >
            <Spinner size="lg" />
            </div>
        ) : (

            <form onSubmit={handleDestroyGender} >
                <div>
                    <FloatingLabelInput label="Gender" type="text" name="gender" value={gender} readonly />
                </div>
                <div className="flex justify-end mt-4 gap-4">
                    <BackButton label="Back" path="/" />
                    <SubmitButton label="Delete Gender" className="bg-red-500 hover:bg-red-700"
                    loading={loadingDestroy}
                    loadingLabel="Deleting Gender..."
                    />
                </div>
            </form>
            )}
        </>
    )
}
export default DeleteGenderForm;