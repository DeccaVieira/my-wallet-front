import styled from "styled-components";
import axios from "axios";
import { useState } from "react";


export default function Deposit() {
    const [valueDeposit, setValueDeposit] = useState({value:"", description:""})

    function handleForm(e) {
        setValueDeposit({...setValueDeposit,  [e.target.name]: e.target.value });
      }
      function Deposit(Event) {
        Event.preventDefault();
      }
   function addDeposit(props){ 
    const {token} = props;
const URL = "http://localhost:5000/registers"
const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

    const request = axios.post(URL, { ...valueDeposit, type: "deposit" },config)
    request.then((res)=> {
   console.log(res.data);
   setValueDeposit(res.data);
})
request.catch((err) => {
    alert(err.response.data.message);
  });
}
    return(<StyleBankingMovements>
        <StyleHeader>
    <h2>Nova entrada</h2>
        </StyleHeader>
        
    <StyleForm>
    <form onSubmit={Deposit}>
    <input
            name="value"
            value={valueDeposit.value}
            onChange={handleForm}
            type="text"
            placeholder="Valor"
            required
          />
          <input
            name="description"
            value={valueDeposit.description}
            onChange={handleForm}
            type="text"
            placeholder="Descrição"
            required
          />
           <button onClick={addDeposit} type="submit">
            <h2>Salvar entrada</h2>
          </button> </form>
    </StyleForm>
    </StyleBankingMovements>)
}
const StyleBankingMovements = styled.main`
  width: 375px;
  height: 667px;
  background-color: purple;
  display: flex;
  flex-direction: column;

  h2 {
    margin: 95px 180px 24px 113px;
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
  }
`
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
   }`

   const StyleHeader = styled.div`

  width: 326px;
  height: 78px;
  display: flex;
  justify-content: space-between;
 

  h2 {
    font-family: Saira Stencil One;
    font-size: 32px;
    font-weight: 400;
    color: #ffffff;
  }
`;