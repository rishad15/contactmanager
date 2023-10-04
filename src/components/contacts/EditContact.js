import React, { Component } from 'react';
import { Consumer } from '../../context';
import axios from 'axios';
import TextInputGroup from '../layout/TextInputGroup';

// import { useNavigate } from 'react-router-dom';
class EditContact extends Component {
    state={
        name:'',
        email:'',
        phone:'',
        errors:{},
    }
    async componentDidMount(){
        // const {id}=this.props.match.params.id;
        // const res= await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        // const contact=res.data;
        // this.setState({
        //     name:contact.name,
        //     email:contact.email,
        //     phone:contact.phone
        // });
    }
    onSubmit= async (dispatch,e)=>{
        // const navigate = useNavigate();
        e.preventDefault();
        const {name,email,phone}=this.state;
        //check for errors
        if(name===''){
            this.setState({errors:{name:'Name is required'}}); 
            return;
        }
        if(email===''){
            this.setState({errors:{email:'Email is required'}}); 
            return;
        }
        if(phone===''){
            this.setState({errors:{phone:'Phone is required'}}); 
            return;
        }
        
        // navigate("/");
    };
    onChange=e=>{this.setState({[e.target.name]:e.target.value})};
  render() {
    const {name, email, phone,errors}=this.state;


    return(
        <Consumer>
        {value=>{
            const {dispatch}=value;
            return(
                <div className='card mb-3'>
            <div className='card-header'>
                Edit Contact
            </div>
            <div className='card-body'>
                <form onSubmit={this.onSubmit.bind(this,dispatch)}>
                    <TextInputGroup
                        label="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange}
                        error={errors.name}
                    />
                    <TextInputGroup
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={this.onChange}
                        error={errors.email}
                    />
                    <TextInputGroup
                        label="Phone"
                        name="phone"
                        placeholder="Enter Phone"
                        value={phone}
                        onChange={this.onChange}
                        error={errors.phone}
                    />
                     <input 
                     type='submit' 
                     value='Update' 
                     className='btn btn-success col-12 mt-2'/>
                </form>
            </div>
        </div>
        
            )
        }
        }
    </Consumer>
    )
  }
}
export default EditContact;