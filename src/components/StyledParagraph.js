import Styled from "styled-components";

export const StyledParagraph = Styled.p`
  background-color: green;
  font-size: ${(props) => (props.bigger ? `3rem` : `1rem`)};
  color: ${(props) => props.myColor};

`;
export const StyledContainer = Styled.div`
  background: #2b2e39;
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 14px;
  border-radius: 14px;
  margin-top: 14px;
`;

// https://ianlunn.github.io/Hover/  Sweep To Rrright oraz Icon Wobble Horizontal
// https://stackoverflow.com/questions/45871439/before-and-after-pseudo-classes-used-with-styled-components
// https://cssanimation.rocks/pl/pseudo-elements/
// https://stackoverflow.com/questions/16989585/css-3-slide-in-from-left-transition
// https://codepen.io/fcalderan/pen/bmpYRW
// https://codepen.io/alianmorales/pen/GyrgjO
// https://styled-components.com/docs/api#typescript
// export const StyledButton = Styled.button`
//   border-radius: 0;
//   font-size: 22px;
//   padding: 15px 15px;
//   cursor: pointer;
// `;

export const StyledButton = Styled.button`
  {
    padding: .75em;
    padding-right: 0.95em;
    font-size: 22px;
    border: 1px #677 solid;
    background-color: #E8E8E8 !important;
    background: linear-gradient(to right, #7FBFFF, #7FBFFF);
    background-repeat: no-repeat;
    background-size: 0 100%;
    // transition: background-size 1.2s;
    overflow: hidden;
    transition: background 0.3s ease, color 0.3s 0.2s ease;
  }
  &:hover{
    // transform lepiej
    background-size: 100% 100%;
    color: white;
  }

  .arrow1{
    margin-left: 9px
  }

  &:hover .arrow1 {
    animation: slide1 1s 0.25s ease-in-out infinite;
  }

  @keyframes slide1 {
    0%,
    100% {
      transform: translate(0, 0);
    }
  
    50% {
      transform: translate(10px, 0);
    }
  }
`;

export const StyledHeader = Styled.h1`
  color: #fff;
`;

export const StyledButtonForm = Styled.button`
  background: #232632;
  color: #00a7fa;
  width: 80px;
  height: 32px;
  font-size: 1.7rem;
  border: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledTextInput = Styled.input`
  padding: 5px;
  font-size: .7em;
  background: #232632;
  color: #d3d4d6;
  width: 100%;
  margin-right: 7px;
  border: 0px;
`;

export const StyledContainerr = Styled.div`
  display: flex;
  justify-content: space-between;
  border: 2px solid #343744;
  background: #232632;
  border-radius: 10px;
  padding: 5px;
`;

export const DestroyButton = Styled.button`
  border-radius: 10px;
  background: red;
  padding: 5px;
  color: #fff;
  margin-bottom: 10px;
`;
