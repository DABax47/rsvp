import React from "react";
import Guestlist from "./Guestlist";
import Counter from "./Counter";
import Form from "./Form";
class App extends React.Component {
  state = {
    pendingGuest: "",
    isFiltered: false,
    guest: [
    ],
  };

  toggleGuestPropertyAt = (property, indexToChange) =>
    this.setState({
      guest: this.state.guest.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            [property]: !guest[property],
          };
        }
        return guest;
      }),
    });

  toggleConfirmationAt = (index) => {
    this.toggleGuestPropertyAt("isConfirmed", index);
  };
  toggleEditingAt = (index) => {
    this.toggleGuestPropertyAt("isEditing", index);
  };

  setNameAt = (name, indexToChange) =>
    this.setState({
      guest: this.state.guest.map((guest, index) => {
        if (index === indexToChange) {
          return {
            ...guest,
            name,
          };
        }
        return guest;
      }),
    });

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered,
    });
  };
  getTotalInvited = () => this.state.guest.length;
  handleGuestInput = (e) => {
    this.setState({
      pendingGuest: e.target.value,
    });
  };
  addNewGuest = (e) => {
    e.preventDefault();
    this.setState({
      guest: [
        { name: this.state.pendingGuest, isConfirmed: false, isEditing: false },
        ...this.state.guest,
      ],
      pendingGuest: "",
    });
  };
  handleRemoveGuest = (indexToRemove) =>
    this.setState({
      guest: this.state.guest.filter((guest, index) => index !== indexToRemove),
    });
  ;
  //need to calc the totla number of confirmed guests
  //loop through the guests and add the number of confimed
  //get unattending Total
  // take total guests minus the confirmed guests to get unattending/unconfirmed guests
  getAttendingGuests = () =>
    this.state.guest.reduce(
      (total, guest) =>guest.isConfirmed ? total +1 : total,0);
  getTotalInvited = () => this.state.guest.length;
  render() {
    const totalInvited = this.getTotalInvited();
    const numberAttending = this.getAttendingGuests();
    const numberUnconfirmed = totalInvited - numberAttending;

    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <p>Demonstrate React Fundementals</p>
        <Form addNewGuest={this.addNewGuest} handleGuestInput={this.handleGuestInput} pendingGuest={this.state.pendingGuest}/>
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
          
          </div>
          <Counter
            totalInvited={totalInvited}
            numberAttending={numberAttending}
            numberUnconfirmed={numberUnconfirmed}
          />
          <Guestlist
            pendingGuest={this.state.pendingGuest}
            handleRemoveGuest={this.handleRemoveGuest}
            isFiltered={this.state.isFiltered}
            guest={this.state.guest}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
            setNameAt={this.setNameAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
