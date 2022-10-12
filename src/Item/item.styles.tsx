import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  justify-content: "space-between";
  width: 100%;
  flex-direction: column;
  border:1px solid lightblue;
  border-radius:10px;
  height:100%;

  button{
    border-radiusL 0 0 20px 20px;

  }
  img{
    max-height:250px;
    object-fit:cover;
    border-radius: 20px 20px 0 0;
  }
  div{
    font-family: Arial,Helvetica,sans-serif;
    padding:1rem;
    height:100%;
  }

`;
