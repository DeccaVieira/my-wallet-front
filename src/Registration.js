import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Registration(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [ name, setName ] = useState("");
  const [validatePass, setValidatePass] = useState("");
  const navigate = useNavigate();

  function registerUser(e) {
    e.preventDefault();
    const URL = "http://localhost:5000/sign-up";

    const body = {
      name,
      email,
      password,
      validatePass,
    };
    const promise = axios.post(URL, body);

    promise.then(() => {
      navigate("/");
    });

    promise.catch((err) => {
      console.log(err.response.data.message);
    });
  }

  return (
    <StyleRegistration>
      <h1>MyWallet</h1>
      <StyleForm>
        <form onSubmit={registerUser}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            required
          />
          <input
            value={validatePass}
            onChange={(e) => setValidatePass(e.target.value)}
            type="password"
            placeholder="Confirme a senha"
            required
          />
          <button type="submit">
            <h2>Cadastrar</h2>
          </button>
        </form>
      </StyleForm>
      <Link to="/">
        <StyleLink>
          <h3>Já tem uma conta? Entre agora!</h3>
        </StyleLink>
      </Link>
    </StyleRegistration>
  );
}
const StyleRegistration = styled.main`
  width: 375px;
  height: 667px;
  background-color: #8C11BE;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 95px 180px 24px 113px;
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
    color: #ffffff;
    margin: 32px 74px;
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
