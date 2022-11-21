import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BankingMovements(props) {
  const [info, setInfo] = useState([]);
  const { token, setToken, name, setName } = props;
  const [infoReverse, setInfoReverse] = useState([]);
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  if (infoReverse.length > 0) {
    calculateAmount();
  }

  useEffect(() => {

    
    if (token === "") {
      navigate("/");
    }
  }, []);
  useEffect(() => {
    const URL = "http://localhost:5000/registers";

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const promise = axios.get(URL, config);
  (async ()=>{
    promise.then((res) => {
    console.log("a")
    setInfo(res.data);
    setInfoReverse([...info.reverse()]);
  });
  promise.catch((err) => {
    console.log(err.response.data);
  });
  
})();
console.log("b")
  }, []);

  function calculateAmount() {
    let soma = 0;
    info.forEach(({ value, type }) => {
      console.log(value, typeof(value))
      if (type === "deposit") {
        soma += +value * 100;
      } else {
        soma -= +value * 100;
      }
    });
    setAmount((soma / 100).toFixed(2));
    console.log(soma, "soma");
  }

  console.log(amount);
  return (
    <StyleBankingMovements>
      <StyleHeader>
        <h2>Olá, {name}</h2>

        <StyleIcon
          onClick={() => {
            setToken("");
            navigate("/");
          }}
        >
          <ion-icon name="exit-outline"></ion-icon>
        </StyleIcon>
      </StyleHeader>
      <StyleMovement>
        {info.reverse().map((d) => (
          <Stylevalue key={d._id}>
            <StyleData>{d.day}</StyleData>
            <h3>{d.description}</h3>
            {d.type === "deposit" ? (
              <StyleValueDeposit>{d.value}</StyleValueDeposit>
            ) : (
              <StyleValueOutflow>{d.value}</StyleValueOutflow>
            )}
          </Stylevalue>
        ))}
      </StyleMovement>

      <StyleAmount>
        <h1>Saldo</h1>

        {amount < 0 ? (
          <StyleValueOutflow>{amount}</StyleValueOutflow>
        ) : (
          <StyleValueDeposit>{amount}</StyleValueDeposit>
        )}
      </StyleAmount>

      <Options>
        <Link to="/ganhos">
          <StyleOption>
            <StyleIcon>
              <ion-icon name="add-circle-outline"></ion-icon>
            </StyleIcon>
            <h4>Nova</h4>
            <h4>entrada</h4>
          </StyleOption>
        </Link>

        <Link to="/gastos">
          <StyleOption>
            <StyleIcon>
              <ion-icon name="remove-circle-outline"></ion-icon>
            </StyleIcon>
            <h4>Nova</h4>
            <h4>saída</h4>
          </StyleOption>
        </Link>
      </Options>
    </StyleBankingMovements>
  );
}
const StyleBankingMovements = styled.main`
  width: 375px;
  height: 667px;
  background-color: #8c11be;
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
  width: 326px;
  height: 78px;
  display: flex;
  justify-content: space-between;
  margin: 24px;
  z-index: 1;
`;
const StyleIcon = styled.div`
  ion-icon {
    font-size: 34px;
    color: #ffffff;
    weight: 20px;
    margin: 9px;
  }
`;
const StyleMovement = styled.div`
  height: 446px;
  width: 326px;
  margin-left: 25px;
  margin-top: 78px;
  border-radius: 3px;
  background-color: #ffffff;
  overflow-y: scroll;
`;
const StyleOption = styled.div`
  height: 114px;
  width: 140px;
  left: 17px;
  margin-top: 9px;
  top: 537px;
  border-radius: 9px;
  background-color: #a328d6;
  h4 {
    font-family: Raleway;
    font-size: 17px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    margin-left: 9px;
    text-decoration: none;
    color: #ffffff;
  }
`;
const Options = styled.div`
  height: 130px;
  width: 375px;
  display: flex;
  background-color: purple;
  justify-content: space-around;
`;
const Stylevalue = styled.div`
width: 270px;
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
 display:flex;
 justify-content: center;
    
`;
const StyleData = styled.span`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #c6c6c6;
`;
const StyleValueDeposit = styled.span`
  font-family: Raleway;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  color: #03ac00;
`;
const StyleValueOutflow = styled(StyleValueDeposit)`
  color: #c70000;
`;
const StyleAmount = styled.div`
  left: 0;
  background-color: #ffffff;
  width: 326px;
  margin-left: 25px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  h1 {
    font-family: Raleway;
    font-size: 25px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;
    color: #000000;
  }
`;
