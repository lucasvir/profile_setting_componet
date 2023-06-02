import styled from "styled-components";

export const Container = styled.div`
  max-width: 37.5rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  border-radius: 0.8rem;
  padding: 2.4rem;

  margin: 0 auto;
  margin-top: 7.2rem;

  svg {
    width: 2rem;
    height: 2rem;
  }

  menu {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    border-top: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
    padding: 1.6rem 0;

    svg:nth-child(2) {
      border: 1px solid red;
    }
  }

  p {
    font: ${({ theme }) => theme.FONTS.TEXT_XM};
    letter-spacing: 0.04em;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    text-transform: uppercase;
  }

  li {
    display: flex;
    align-items: center;
    list-style: none;

    gap: 0.8rem;

    svg:nth-child(3) {
      margin-left: auto;
    }

    a {
      font: ${({ theme }) => theme.FONTS.TEXT_MD};
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  #head-menu {
    display: flex;
    align-items: center;
    gap: 1.6rem;

    margin-bottom: 2.4rem;

    > div {
      h1 {
        font: ${({ theme }) => theme.FONTS.TITLE};
      }

      span {
        font: ${({ theme }) => theme.FONTS.TEXT_SM};
        color: ${({ theme }) => theme.COLORS.GRAY_200};
      }
    }
  }

  #acc-menu {
  }

  #pref-menu {
  }

  #priv-menu {
  }

  #signout-menu {
    li:nth-child(2) {
      a {
        color: ${({ theme }) => theme.COLORS.RED_100};
      }

      svg {
        color: ${({ theme }) => theme.COLORS.RED_100};
      }
    }
  }
`;
