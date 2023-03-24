import React , {useState}from "react";
import Form from "./Form/Form";
import Users from "./Users/Users";

import styles from './Render.module.css';



const Render = () => {

    const [dataFromForm,setDataFromForm] = useState ([{username : "mike tyson",age: 32}])

    console.log (dataFromForm)

    const getDataFromForm = (data) => {
        setDataFromForm(dataFromForm => ([data,...dataFromForm]))
      
    }
    
    return (
        <div className="container">
            <h1 className={styles.heading}>Render</h1>
            <Form getData = {getDataFromForm}/>
         
            <Users />
        </div>
    )
}

export default Render;