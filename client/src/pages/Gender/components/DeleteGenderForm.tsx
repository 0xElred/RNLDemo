import BackButton from "../../../components/buttons/BackButton"
import SubmitButton from "../../../components/buttons/SubmitButton"
import FloatingLabelInput from "../../../components/inputs/FloatingLabelInput"

const DeleteGenderForm = () => {
    return (
        <>
            <form >
                <div>
                    <FloatingLabelInput label="Gender" type="text" name="gender" />
                </div>
                <div className="flex justify-end mt-4 gap-4">
                    <BackButton label="Back" path="/" />
                    <SubmitButton label="Delete Gender" className="bg-red-500 hover:bg-red-700" />
                </div>
            </form>
        </>
    )
}
export default DeleteGenderForm;