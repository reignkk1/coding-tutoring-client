import styled from "styled-components";

export default function Loading({ className }: { className?: string }) {
  return <Spinner className={className}></Spinner>;
}

const Spinner = styled.div`
  position: absolute;
  top: 50%;
  left: 45%;
  transform: translate(-50%, -50%);

  border: 3px solid #1760fa;
  border-top: 3px solid #c9fd35;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spinner 2s linear infinite;

  &.note {
    left: 47%;
    border: 3px solid #bbbbbbfd;
    border-top: 3px solid #0e1620;
  }

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
