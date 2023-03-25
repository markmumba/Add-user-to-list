import React, { useState } from "react";
import Form from "./Form/Form";
import Users from "./Users/Users";
import ErrorModel from "./Modal/Modal";
import styles from './Render.module.css';



const Render = () => {

    const [dataFromForm, setDataFromForm] = useState([{ username: "mike tyson", age: 32 }])

    const [showModal, setShowModel] = useState(false)

    const [message, setMessage] = useState("")


    const getDataFromForm = (data) => {
        if (data.username.trim().length === 0 && data.age.trim().length === 0) {
            setShowModel(true);
            setMessage("Please enter correct data");
           
            return;
        }
        if (+data.age < 1) {
            setShowModel(true);
            setMessage("Please enter a valid age ");  
            return;
        }
        setDataFromForm(dataFromForm => ([data, ...dataFromForm]));

    }

    const toggleModal = () => {
        setShowModel(!showModal);
    }

    return (
        <div className="container">
            {showModal && <ErrorModel message={message}  onClick ={toggleModal}/>}
            {!showModal && <div className="content">
                <h1 className={styles.heading}>Render</h1>
                <Form getData={getDataFromForm} />
                <Users userData={dataFromForm} />
            </div>}
        </div>
    )
}

export default Render;