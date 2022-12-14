// method 1
// export default class SignUpForm extends Component {

//  state is always an object with a property for each "piece" of state
//   constructor() {
//     this.state = {
//       name: '',
//       email: '',
//       password: '',
//       confirm: '',
//       error: ''
//     };
// }

import { Component } from "react";
import { signUp } from '../utilities/users-service';

export default class SignUpForm extends Component {
    // METHOD 2- preferred method:
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: ''
    }

    handleChange = (event) => {
        // everytime the input changes we are going to update the state with what the user is typing
        this.setState({
            [event.target.name]: event.target.value,
            error: ""
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // alert(JSON.stringify(this.state))
        try {
            //  we don't want to send the error or cofnrim property
            // so let's make a copy of the state object, then delete them
            const formData = { ...this.state }
            delete formData.error;
            delete formData.confirm
            // The promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            const user = await signUp(formData)
            console.log(user);
        } catch {
            this.setState({ error: "Sign Up Failed- Try Again" })
        }
    }
    render() {
        // making disable variable so the user cannot hit sign up button if requred fields do not match
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                        <label>Email</label>
                        <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                        <label>Confirm</label>
                        <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                        <button type="submit" disabled={disable}>SIGN UP</button>
                    </form>
                </div>
                <p className="error" >&nbsp;{this.state.error}</p>
            </div>
        )
    }
}