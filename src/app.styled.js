import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 15px;
  height: 500px;
`;

export const Board = styled.div`
  position: relative;
  margin: 30px auto;
  height: 600px;
  width: 500px;
  border: 1px black solid;
  padding: 15px;
`;

export const Card = styled.img`
  width: 55px;
  height: 55px;
`;

export const SelectedContainer = styled.div`
  width: 385px;
  height: 55px;
  border: 1px red solid;
  top: -10px;
  display: flex;
`;
