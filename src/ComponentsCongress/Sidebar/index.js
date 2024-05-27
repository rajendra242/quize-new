import styled, { keyframes } from "styled-components";

const SIDEBAR_BACKGROUNDS = {
  default: "rgba(31, 31, 30, 0.9)",
  alternate: "#C04C1C",
};

export default function Sidebar({ isOpen, children, background = "default" }) {
  return isOpen ? (
    <Wrapper background={background} id="sidebar">
      {children}
    </Wrapper>
  ) : null;
}

const slideIn = keyframes`
  0% {
    transform: translateX(100%); 
  }
  100% { 
    transform: translateX(0%); 
  }
`;

const Wrapper = styled.div`
  flex-grow: 1;
  background: grey;
  z-index: 3;
  background: ${({ background }) => `${SIDEBAR_BACKGROUNDS[background]}`};
  backdrop-filter: blur(24px);
  color: #ffffff;
  padding: 120px 80px 60px;
  animation: ${slideIn} 0.2s linear;
  transform: translateX(0%);
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    color: ${({ background }) =>
      background == "alternate" ? "white" : "#c8a85d;"};
    font-size: 28px;
    line-height: 36px;
  }

  > div {
    flex-grow: 1;
  }

  > button {
    align-self: center;
    width: 312px;

    span {
      flex-grow: 1;
      text-align: center;
    }
  }
`;

export const Content = styled.div`
  padding-top: 24px;

  p {
    font-size: 18px;
    line-height: 26px;

    sub {
      vertical-align: bottom;
      font-size: 0.6em;
      position: relative;
      bottom: -8px;
    }
  }
  ol {
    list-style: decimal;
    margin-left: 25px;
    font-size: 18px;
    line-height: 26px;

    li {
      font-weight: 300;
    }
  }

  ol:not(:first-child) {
    margin-top: 30px;
  }
`;