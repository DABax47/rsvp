import React from 'react';
import Guest from './Guest'
import PendingGuest from './PendingGuest'
const Guestlist=(props)=>
  <ul>
  <PendingGuest name={props.pendingGuest}/>
  { props.guest
    .filter((guest, index)=>!guest.isFiltered || guest.isConfirmed )
    .map((guest, index)=>
  <Guest handleRemoveGuest={()=>props.handleRemoveGuest(index)}handleConfirmation={()=>{props.toggleConfirmationAt(index)}} handleToggleEditing={()=>{props.toggleEditingAt(index)}} name={guest.name} isEditing={guest.isEditing} isConfirmed={guest.isConfirmed} setName={text=>props.setNameAt(text,index)}/>)
  }
  </ul>;

export default Guestlist;
