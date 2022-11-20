import styled from "styled-components";

export default function BankingMovements(props) {
  const { token, setToken, name } = props;
  console.log(token);
  console.log(name);
  return (
    <StyleBankingMovements>
      <h2>Olá, {name}</h2>
      <ion-icon name="exit-outline"></ion-icon>
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
