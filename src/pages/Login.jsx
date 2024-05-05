import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Style/Global.module.css';
import { UserAuth } from '../context/Context';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await signIn(email, password)
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
            <label>E-Mail</label>
            <input  type="email" onChange={(e) => setEmail(e.target.value)}></input>
            <label  >Password</label>
            <input type="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button >Einloggen</button>
            <Link to='/Logup' className={styles.link}>Kein account? <span> Jetzt Anmelden</span></Link>
           {/*  <p>oder</p>
            <a>
                With google
            </a> */}
            </form>
        </div>
    </div>
  )
}

export default Login