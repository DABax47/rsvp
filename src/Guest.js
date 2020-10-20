import React from 'react';
import GuestName from './GuestName'
const Guest=(props)=>
     <li >
      <GuestName isEditing={props.isEditing} handleNameEdits={(e)=>{props.setName(e.target.value)}}>{props.name}</GuestName>
      <label>
        <input checked = {props.hand} onChange ={props.handleConfirmation} type="checkbox"/> Confirmed
      </label>
      <button onClick={props.handleToggleEditing}>
{props.isEditing ? 'save' : 'edit'}

      </button>
      <button onClick={props.handleRemoveGuest}>remove</button>
    </li>

export default Guest;
