import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Contact extends Component {
    state={
        showContactInfo: false
    };
     onDeleteClick=async (id,dispatch)=>{
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type:'DELETE_CONTACT',payload:id});

      
    }
  render() {
    const {id,name, email, phone}=this.props.contact;
    const {showContactInfo}=this.state;
    return (

      <Consumer>
        {value=>{
          const {dispatch}=value;
          return(
            <div className='card card-body mb-3 text-dark'>
            <h4>{name} <i onClick={()=>this.setState({showContactInfo:!this.state.showContactInfo})}
             className='fas fa-sort-down' style={{cursor:"pointer"}}></i>

            <i className="fa-regular fa-trash-can" 
            style={{cursor:'pointer', float:'right'}}
             onClick={this.onDeleteClick.bind(this,id,dispatch)}></i>

             <Link to={`contact/edit/${id}`}><i className="fa-regular fa-pen-to-square" 
             style={{cursor:'pointer', float:'right',color:'black', marginRight:'1rem'}}></i></Link>
             
             </h4>
             {showContactInfo? <ul className='list-group'>
                <li className='list-group-item'>Email-{email}</li>
                <li className='list-group-item'>Phone-{phone}</li>
            </ul>:null}
            
          </div>
          )
        }
         }
      </Consumer>
    )
  }
}
export default Contact;