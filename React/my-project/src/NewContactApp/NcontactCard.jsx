import React from "react";
const NcontactCard = (props) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
             <div className="card-header">
                 <img src={props.selectedContact.picture.medium} alt="profile"/>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NcontactCard;
