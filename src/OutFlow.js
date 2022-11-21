import styled from "styled-components";
import axios from "axios";
import { useState, useEffect  } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Outflow(props) {
  const { token, setToken } = props;
    const [valueOutFlow, setValueOutFlow] = useState({
    value: "",
    description: "",
  });
  const navigate = useNavigate();
  useEffect(()=>{
    if(token ===""){
      navigate("/")
    }
  },[])
  function handleForm(e) {
    setValueOutFlow({ ...valueOutFlow, [e.target.name]: e.target.value });
  }
  function OutFlow(Event) {
    Event.preventDefault();
  }
  function addOutFlow() {
 
    const URL = "http://localhost:5000/registers";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const request = axios.post(
      URL,
      { ...valueOutFlow, type: "outflow" },
      config
    );
    request.then((res) => {
     
      setValueOutFlow(res.data);
      navigate("/movimentos");
    });
    request.catch((err) => {
      console.log(err);
    });
  }
  return (
    <StyleBankingMovements>
      <StyleHeader>
        <h3>Nova saída</h3>
        <Link to="/movimentos">
          <ion-icon name="return-up-back-outline"></ion-icon>
        </Link>
      </StyleHeader>
      <StyleForm>
        <form onSubmit={OutFlow}>
          <input
            name="value"
            value={valueOutFlow.value}
            onChange={handleForm}
            type="number"
            placeholder="Valor"
            required
          />
          <input
            name="description"
            value={valueOutFlow.description}
            onChange={handleForm}
            type="text"
            placeholder="Descrição"
            required
          />
          <button onClick={addOutFlow} type="submit">
            <h3>Salvar saída</h3>
          </button>
        </form>
      </StyleForm>
    </StyleBankingMovements>
  );
}
const StyleBankingMovements = styled.main`
  width: 375px;
  height: 667px;
  background-color: #8C11BE;
  display: flex;
  flex-direction: column;

  h2 {
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
  }
`;
const StyleForm = styled.div`
width: 303px;
heigth: 147px;
display:flex;
margin-top:40px;
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
   }`;

const StyleHeader = styled.div`
  width: 375px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ion-icon {
    font-size: 35px;
    color: #ffffff;
    margin-right: 20px;
  }
  h3 {
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    line-height: 31px;
    letter-spacing: 0em;
    text-align: left;
    color: #ffffff;
    margin: 24px;
  }
`;
