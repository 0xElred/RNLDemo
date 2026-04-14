import SubmitButton from "../../../components/buttons/SubmitButton"
import FloatingLabelInput from "../../../components/inputs/FloatingLabelInput"


const AddGender = () => {
    return (
        <>
            <form >
                <div className="mb-4">
                    <FloatingLabelInput label="Gender" type="text" name="gender" />
                </div>
                <div>
                    <SubmitButton label="Save Gender" />
                </div>
            </form>
        </>
    )
}

export default AddGender