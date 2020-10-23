import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-family: var(--font);
  background-color: var(--blue);
  color: white;
  & div {
    display: flex;
    align-items: center;
  }
  & .footer__container {
    &--logo {
      margin-right: 30px;
      font-size: 32px;
      p {
        margin-left: 10px;
        cursor: pointer;
        span {
          font-weight: bold;
        }
      }
    }
    &--nav {
      list-style: none;
      display: flex;
      align-items: center;
      & li {
        display: inline;
        margin: 0 20px;
        & a {
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
        }
      }
    }
    &--copy {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer__container--logo">
        <i className="far fa-comments"></i>
        <Link href="/">
          <p>
            doc <span>red</span>
          </p>
        </Link>
      </div>
      <ul className="footer__container--nav">
        <li>
          <Link href="/">Preguntas frecuentes</Link>
        </li>
        <li>
          <Link href="/">Contáctanos</Link>
        </li>
        <li>
          <Link href="/">Información</Link>
        </li>
      </ul>
      <div className="footer__container--copy">
        <p>DocRed © 2019. Todos los derechos reservados</p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
