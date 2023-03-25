import React, { useState } from "react";
                                
import styles from './Form.module.css';


const Form = (props) => {

    const [formData, setFormData] = useState({
        username: "",
        age: ""
    });




    const handleChange = (e) => {
        const {id,value} = e.target;
        setFormData(formData => (
            {
                ...formData,
                [id]:value,
                id : Math.floor(Math.random()*(100-1)+1)
            }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getData (formData);
        setFormData({
            username: "",
            age: ""
        });
    }

    return (
        <form onSubmit={handleSubmit} className={styles.formsize}>
            <div className="row mb-3">
                <label htmFor="username" className="col-sm-2 col-form-label">User Name</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        onChange={handleChange}
                        value={formData.username}
                    />
                </div>
            </div>
            <div className="row mb-3">
                <label htmFor="age" className="col-sm-2 col-form-label">Age</label>
                <div className="col-sm-10">
                    <input
                        type="text"
                        className="form-control"
                        id="age"
                        onChange={handleChange}
                        value={formData.age}
                    />
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Add user</button>
        </form>
    )
}

export default Form;