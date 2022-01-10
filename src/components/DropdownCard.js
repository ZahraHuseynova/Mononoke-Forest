import { connect } from "react-redux";
import { Field,reduxForm, formValueSelector} from "redux-form";


let Dropdown = (props)=>{
    
    const { handleSubmit,pristine,submitting,reset} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="feedback"
                    component="select"
                >
                    <option value="">Select option</option>
                    <option value="25">$25</option>
                    <option value="35">$35</option>
                    <option value="50">$50</option>
                </Field>
            </div>
            <div>
                <button className="ui button" type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )

}

Dropdown = reduxForm({
    form:'reduxDropdown'
})(Dropdown)

    const selector = formValueSelector ('reduxDropdown');
    Dropdown = connect (
        state=>{
            const feedbackValue = selector (state,'feedback')
            return{feedbackValue}
        }
    )(Dropdown)


export default Dropdown;