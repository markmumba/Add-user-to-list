import React from "react";

const ErrorModel = (props) => {
    return (
    <div style={{paddingTop:'3rem'}}>
        <div class="card" >
            <div class="card-header">
                Featured
            </div>
            <div class="card-body">
                <h5 class="card-title">Error message </h5>
                <p class="card-text">{props.message}</p>
                <button onClick={props.onClick} className="btn btn-primary">Okay I understand </button>
            </div>
        </div>
        </div>
    )
}

export default ErrorModel;