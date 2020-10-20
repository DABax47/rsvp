import React from 'react';
const Form=({addNewGuest, handleGuestInput, pendingGuest})=>
<form onSubmit={addNewGuest}>
  <input
    type="text"
    onChange={handleGuestInput}
    value={pendingGuest}
    placeholder="Invite Someone"
  />
  <button type="submit" name="submit" value="submit">
    Submit
  </button>
</form>

export default Form;
