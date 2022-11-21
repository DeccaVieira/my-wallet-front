import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function BankingMovements(props) {
  const { token, setToken, name } = props;
  console.log(token);
  console.log(name);
const URL = "http://localhost:5000/registers";
const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
}
const promise = axios.get(URL, config)

  return (
    <StyleBankingMovements>
        <StyleHeader>
      <h2>Olá, {name}</h2> 
      <Link to="/">
      <StyleIcon><ion-icon name="exit-outline"></ion-icon></StyleIcon>
             </Link>
      </StyleHeader>
    </StyleBankingMovements>
  );
}
const StyleBankingMovements = styled.main`
  width: 375px;
  height: 667px;
  background-color: purple;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
  }
`
const StyleHeader = styled.div`
position: fixed;
top:0;
left:0;
width: 326px;
height: 78px;
display:flex;
justify-content: space-between;
margin:24px;
`
const StyleIcon = styled.div`
margin-left:10px;
width:23px;
height:24px;
font-size:34px;
color:#FFFFFF;
margin-right:24px;
`
