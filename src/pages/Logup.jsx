import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore";
import { UserAuth } from '../context/Context';
import { db } from '../firebase-config';
import styles from '../Style/Global.module.css';

const Logup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');



    const [error, setError] = useState('');
    const navigate = useNavigate()
    const { createUser } = UserAuth();
    const { user } = UserAuth();

    const [userid, setUserId] = useState('');

    const [currentUser, setCurrentUser] = useState();
    const [data, setData] = useState('');



    // react firestore, get uid and add in collection?


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const res = await createUser(email, password);
            navigate('/profil-erstellen')
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
            });
        }
        catch (e) {
            setError(e.message);
            console.log(e.message);
        }

    };

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Ihre Daten</h1>

                    <label >E-Mail</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type='email'
                        placeholder='Die E-Mail-Adresse muss nicht existieren'
                    />



                    <label >Password</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type='password'
                        placeholder='zb: 123456'
                    />
                    <button>
                        Registrieren
                    </button>

                    <p>
                        Sind Sie schon bei uns registriert?{' '}
                        <Link to='/Login'>
                            Anmelden
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Logup;
