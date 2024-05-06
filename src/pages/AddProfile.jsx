import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";
import { UserAuth } from '../context/Context';
import { db } from '../firebase-config';
import styles from '../Style/Global.module.css';

const AddProfile = () => {
    const [name, setName] = useState('');



    const [error, setError] = useState('');
    const navigate = useNavigate()
    const { user } = UserAuth();

    const handleSubmit = async (e) => {
      navigate('/Account')
      try {
        await addDoc(collection(db, "users", user.uid, "dataUser"),{
          vorname: name
        });
      }
      catch (e) {
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