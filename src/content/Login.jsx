import { useRef, useState, useEffect, useContext } from 'react';
import './Login.scss';

const Login = () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [sucess, setSucess] = useState (false);

  useEffect(() =>{
    userRef.current.focus();
  }, [])

  useEffect(() =>{
    setErrorMessage('');
  }, [user, password])

  const handleSubmit = async (event) => {
    event.preventDefault();

  }

return (
  <section>
    <p ref={errorRef} className={errorMessage ? 'errorMessage' : 'offscreen'}
      aria-live="assertive">{errorMessage}</p>
  <h1>Войти</h1>
<form onSubmit={handleSubmit}>
        <label htmlFor="username">Логин:</label>
        <input
            type="text"
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(event) => setUser(event.target.value)}
            value={user}
            required
        />

      <label htmlFor="password">Пароль:</label>
        <input
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
        />
      <button>Войти</button>
    </form>
    <p>
        Нет регистрации?<br />
        <span className="line">
            {/*put router link here*/}
            <a href="#">Войти</a>
        </span>
    </p>
  </section>
)}



export default Login;
