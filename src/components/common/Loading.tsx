import styled from "styled-components";

export default function Loading() {
  return <Spinner></Spinner>;
}

const Spinner = styled.div`
  position: absolute;
  top: 40%;
  left: 45%;
  transform: translate(-50%, -50%);

  border: 5px solid #1760fa;
  border-top: 5px solid #c9fd35;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spinner 2s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
