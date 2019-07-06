import React , {Component} from 'react';

class SignUpForm extends Component{
    render(){
        return(
            <div className="FormCenter">

                <form className="FormFields" onSubmit={this.handleSubmit}>
                        <div className="Formfield">
                            <label className="FormField__Label" htmlFor="name">Full Name</label>
                            <input type="text" id="name" className="FormField__Input" placeholder="Enter your name" name="name"></input>
                        </div>

                        <div className="Formfield">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password"></input>
                        </div>

                        <div className="Formfield">
                            <label className="FormField__Label" htmlFor="email">E-mail</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email id" name="email"></input>
                        </div>

                        <div className="Formfield">
                            <label className="FormField__CheckboxLabel">

                                <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"></input>a agree all statements in <a href="#" className="FormField__TermsLink">terms od service</a>
                            
                            </label>
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign Up</button><a href="#" className="FormField__Link">
                            I'm already member</a>
                        </div>
                </form>

            </div>
        );
    }

}
export default SignUpForm;