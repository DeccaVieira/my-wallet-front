import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import react, { useState } from "react";

export default function Login(props) {
  const [form, setForm] = useState({ email: "", password: "" });
  const { token, setToken } = props;
  const navigate = useNavigate();

  function handleForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form);
  function loginApp(Event) {
    Event.preventDefault();
  }

  function login() {

    const URL = "http://localhost:5000/sign-in";

    const promise = axios.post(URL, form);
    promise.then((res) => {
      setToken(res.data);
      console.log(res.data);
      
      console.log(res);
      navigate("/movimentos");
    });

    promise.catch((err) => {
      alert(err.response.data.message);
    });
  }

  return (
    <StyleLogin>
      <h1>MyWallet</h1>
      <StyleForm>
        <form onSubmit={loginApp}>
          <input
            name="email"
            value={form.email}
            onChange={handleForm}
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            name="password"
            value={form.password}
            onChange={handleForm}
            type="password"
            placeholder="Senha"
            required
          />
          <button onClick={login} type="submit">
            <h2>Entrar</h2>
          </button>
        </form>
      </StyleForm>
      <Link to="/cadastrar">
        <StyleLink>
          <h3>Primeira vez? Cadastre-se!</h3>
        </StyleLink>
      </Link>
    </StyleLogin>
  );
}
const StyleLogin = styled.main`
  width: 375px;
  height: 667px;
  background-color: #8C11BE;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 159px 180px 24px 113px;
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    line-height: 50px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
  }
`;
const StyleLink = styled.div`
  h3 {
    font-family: Raleway;
    font-size: 15px;
    font-weight: 700;
    text-align: left;
    color: #ffffff;
    margin: 32px 92px;
  }
`;
const StyleForm = styled.div`
width: 303px;
heigth: 147px;
display:flex;
justify-content:center;
margin-left:36px;
flex-direction:column;
align-items:center;
input{
    height: 58px;
    width: 326px;
    border-radius: 5px;
    border:none;
    margin-bottom:13px;
 
  }
}
button{
    width:326px;
    height: 46px;
    background-color:#BA55D3;
    border-radius: 4.64px;
    border:none;
   }
h2{
    font-family: Raleway;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
color:#ffffff;     
}

`;
