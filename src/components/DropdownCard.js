import { connect } from "react-redux";
import { Field,reduxForm, formValueSelector} from "redux-form";


let DropdownCard = (props)=>{
    
    const { handleSubmit,pristine,submitting,reset} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field
                    name="amount"
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

DropdownCard = reduxForm({
    form:'reduxDropdownCard'
})(DropdownCard)

    const selector = formValueSelector ('reduxDropdownCard');
    DropdownCard = connect (
        state=>{
            const feedbackValue = selector (state,'amount')
            return{feedbackValue}
        }
    )(DropdownCard)


export default DropdownCard;