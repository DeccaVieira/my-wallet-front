import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState , useEffect} from "react";

export default function BankingMovements(props) {
    const [info, setInfo] = useState([]);
  const { token, setToken, name } = props;
  
  useEffect(()=> {
  const URL = "http://localhost:5000/registers";

  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }};
 
  const promise = axios.get(URL, config);
  promise.then((res)=> {
    setInfo(res.data)
    console.log(res.data)
  })

  promise.catch((err) => {
      console.log(err.response.data)
  })

}, [])
return (
    <StyleBankingMovements>
      <StyleHeader>
        <h2>Olá, {name}</h2>
        <Link to="/">
          <StyleIcon>
            <ion-icon name="exit-outline"></ion-icon>
          </StyleIcon>
        </Link>
      </StyleHeader>

      <StyleMovement>

      {info.map((d) => 
        
        <Stylevalue key={d.id} >
           <h3>{d.description}</h3> <h3>{d.value}</h3>
        </Stylevalue>
        )}

       {/* {info.map((m) => 
       <Stylevalue description={m.description} value={m.value}>
        <h1>{m.description}</h1>
        </Stylevalue>)}  */}
      </StyleMovement>
      <Options>

        <Link to="/ganhos">
        <StyleOption>
          <StyleIcon>
          <ion-icon name="add-circle-outline"></ion-icon>
          </StyleIcon>
          <h3>Nova entrada</h3>
        </StyleOption>
        </Link> 

        <Link to="/gastos">
        <StyleOption>
          <StyleIcon>
          <ion-icon name="remove-circle-outline"></ion-icon>
          </StyleIcon>
          <h3>Nova saída</h3>
        </StyleOption>
        </Link> 
      </Options>
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
`;
const StyleHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 326px;
  height: 78px;
  display: flex;
  justify-content: space-between;
  margin: 24px;
  z-index: 1;
`;
const StyleIcon = styled.div`
  margin-left: 10px;
  width: 23px;
  height: 24px;
  font-size: 34px;
  color: #ffffff;
  margin-right: 24px;
`;
const StyleMovement = styled.div`
  height: 446px;
  width: 326px;
  margin-left: 25px;
  margin-top: 78px;
  border-radius: 5px;
  background-color: #ffffff;
`;
const StyleOption = styled.div`
  height: 114px;
  width: 155px;
  left: 25px;
  top: 537px;
  border-radius: 5px;
  background-color: #a328d6;

`;
const Options = styled.div`
  height: 130px;
  width: 325px;
  display:flex;
  margin-left: 24px;
  justify-content:space-around;
  
`;
const Stylevalue = styled.div`
width: 305px;
height: 20px;
margin:15px;
background-color: #FFFFFF;

display:flex;
justify-content: space-between;
h3{
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color:black;
    
`