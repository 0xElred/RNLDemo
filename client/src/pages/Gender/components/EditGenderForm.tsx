import BackButton from "../../../components/buttons/BackButton"
import SubmitButton from "../../../components/buttons/SubmitButton"
import FloatingLabelInput from "../../../components/inputs/FloatingLabelInput"

const EditGenderForm = () => {
    return (
        <>
            <form >
                <div>
                    <FloatingLabelInput label="Gender" type="text" name="gender" />
                </div>
                <div className="flex justify-end mt-4 gap-4">
                    <BackButton label="Back" path="/" />
                    <SubmitButton label="Save Gender" />
                </div>
            </form>

        </>
    )
}

export default EditGenderForm