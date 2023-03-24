import React from "react";

import styles from "./User.module.css";

const Users = (props) => {

    

    console.log (props.userData)
    return (
        <div>
            <h1 className={styles.heading}>User list </h1>
            {props.userData.map(user => {
                return (
                    <div class="list-group">
                        <a href="#home" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                                <h5 class="mb-1">{user.username}</h5>
                                <small class="text-muted">{user.age > 30 ? `You are an old person ` : `Life bado changa `}</small>
                            </div>
                            <p class="mb-1">Age is : {user.age}  </p>
                            
                        </a>
                    </div>
                )
            })}

        </div>
    )
}


export default Users;