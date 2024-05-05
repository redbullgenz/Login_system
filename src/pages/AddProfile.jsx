import React, { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import { UserAuth } from '../context/Context';
import { db } from '../firebase-config';
import styles from '../Style/Global.module.css';

const AddProfile = () => {
    const [name, setName] = useState('');



    const [error, setError] = useState('');
    const navigate = useNavigate()
    const { user } = UserAuth();

    const [userid, setUserId] = useState('');

    const [currentUser, setCurrentUser] = useState();
    const [data, setData] = useState('');

    const refUser = doc(db, "users", user.uid, "userData");


    // react firestore, get uid and add in collection?


    const handleSubmit = async (e) => {
        e.preventDefault();
          setDoc(refUser, 
            { capital: true },
            { merge: true },
            {name: name});
          try {
            navigate('/Account')
          } catch (e) {
            setError(e.message)
            console.log(e.message)
          }
    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Profil erstellen</h1>
                    <label >Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type='text'
                    />
                    <button>
                    Weiter
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProfile;