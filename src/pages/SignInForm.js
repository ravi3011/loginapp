import React ,{Component} from 'react';

class SignInForm extends Component{
    render(){
        return(
            <div className="FormCenter">

            <form className="FormFields" onSubmit={this.handleSubmit}>
                    
                    <div className="Formfield">
                        <label className="FormField__Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField__Input" placeholder="Enter your Password" name="password"></input>
                    </div>

                    <div className="Formfield">
                        <label className="FormField__Label" htmlFor="email">E-mail</label>
                        <input type="email" id="email" className="FormField__Input" placeholder="Enter your email id" name="email"></input>
                    </div>

                    

                    <div className="FormField">
                        <button className="FormField__Button mr-20">Sign In</button>
                        <a href="#" className="FormField__Link">
                        Create a account</a>
                    </div>
            </form>

        </div>
        );
    }

}
export default SignInForm;