import React, { useState, useEffect } from 'react'
import { db } from '../firebase-config';
import { collection, getDocs, FieldPath} from "firebase/firestore";
import { UserAuth } from '../context/Context';
import { useNavigate } from 'react-router-dom';
import styles from '../Style/Account.module.css';

const Account = () => {
    const { user, logout } = UserAuth();
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();
    const usersCollectionRef = collection(db, "users", user.uid, "data")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        }
        getUsers()
    }, [])

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/Login');
            console.log('du hast dich ausgeloggt')
        } catch (e) {
            console.log(e.message);
        }
    };
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.menu_main}>
                <button onClick={handleLogout}>
                    Logout
                </button>
                {users.map((userData) => {
                    return (
                        <div>
                        <h4>Profile</h4>
                        <p>{userData.name}</p>
                        <p>E-Mail benutz: <span>{userData.email}</span></p>
                        <p>Erste Login: {userData.date}</p>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Account