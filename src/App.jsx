import './App.css';
import { useState, useEffect } from "react";

function App() {
    //задаем констаны и состояние
      const initValues = { username: "", email: "", password: "" };
      const [formValues, setValues] = useState(initValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
    //константа смены состояния по клику 
      const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...formValues, [name]: value });
      };
    //константа подтверждения смены состояния по килку
      const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
    //задаем определение ошибки
      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {}}, [formErrors]);
  
      //проверка на корректность введенных данных
      const validate = (values) => {
        const errors = {};
      //регулярные выражения для проверки значения поля
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Логин не введен";
        }
        if (!values.email) {
          errors.email = "Email не введен";
        } else if (!regex.test(values.email)) {
          errors.email = "Неверный формат email";
        }
        if (!values.password) {
          errors.password = "Пароль не введен";
        } else if (values.password.length < 4) {
          errors.password = "Пароль должен состоять не менее, чем из четырех символов";
        } else if (values.password.length > 10) {
          errors.password = "Пароль должен состоять не более, чем из 10 символов";
        }
        return errors;
      };
      
      //отрисовываем форму
      return (
        
        <div className="loginForm">
        <h1>Форма входа</h1>
          {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="successForm">Успешный вход</div>
          ) : (
          <></>
          )}
    
          <form onSubmit={handleSubmit}>
            <div className="containerValue">
              <div className="container">
                <label>Логин</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Логин"
                  value={formValues.username}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.username}</p>
              <div className="container">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formValues.email}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>
              <div className="container">
                <label>Пароль</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Пароль"
                  value={formValues.password}
                  onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>
              <button className="SubBtn">Вход</button>
            </div>
          </form>
        </div>
      );
    }
    
export default App;
