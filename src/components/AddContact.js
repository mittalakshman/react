import React from 'react';


function AddContact() {
  return (

<div>
<div className="ui-main">
               <h3>Detailes</h3>
               <form className="ui form">
               <div className="field">
               <label>FirstName</label>
               <input type="text" name='name' placeholder="name"></input>
               </div>
               <div className="field">
               <label>LastName</label>
               <input type="text" name='name' placeholder="name"></input>
               </div>
              <div className="field">
                  <label>email</label>
               <input type="text" name="email" placeholder="email"></input>   
              </div>
              <div className="field">
                  <label>phonenumber</label>
                  <input type="number" name="number"></input>
              </div>
              <div className="field">
                  <label>gender</label>
                  <input type="radio" name="male"></input>
                  <input type="radio" name="female"></input>
              </div>
              <button className="ui button blue">submit</button>
               </form>
               <button>submit</button>
           </div>
  
</div>

  );
}

export default AddContact;