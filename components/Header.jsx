import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Link from "next/link";

const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0;
  padding: 0 20px;
  background-color: var(--blue);
  font-family: var(--font);
  color: #fff;
  -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.1);
  .nav__container,
  .option__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & div {
      display: flex;
      align-items: center;
    }
  }
  .nav__container {
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
    &--form {
      font-size: 24px;
      margin-right: 30px;
      i {
        color: var(--green);
        background-color: #fff;
        padding: 4.5px;
        border-radius: 5px 0 0 0;
        margin-right: 2px;
      }
      input {
        width: 15vw;
        padding: 9px;
        border: none;
        border-radius: 0 0 5px 0;
        &:placeholder {
          color: var(--white);
          font-size: 24px;
        }
      }
    }
    &--menu {
      font-size: 24px;
      i {
        margin: 0 5px;
        &:last-of-type {
          cursor: pointer;
        }
      }
    }
  }
  .option__container {
    &--line {
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      hr {
        height: 40px;
        border: 1px solid rgba(255, 255, 255, 0.5);
      }
    }
    &--notification {
      font-size: 24px;
      margin-right: 30px;
      i {
        position: relative;
        span {
          font-size: 12px;
          padding: 2px 5px;
          position: absolute;
          background-color: var(--green);
          border-radius: 20px;
          top: -5px;
          right: -10px;
        }
      }
    }
    &--user {
      margin-right: 10px;
      img {
        margin-right: 5px;
        width: 30px;
        height: 30px;
        border-radius: 160px;
        border: 2px solid white;
      }
    }
    & button {
      background-color: transparent;
      border: none;
      outline: none;
      & i {
        cursor: pointer;
        font-size: 24px;
        color: white;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div className="nav__container">
        <div className="nav__container--logo">
          <i className="far fa-comments"></i>
          <Link href="/">
            <p>
              doc <span>red</span>
            </p>
          </Link>
        </div>
        <div className="nav__container--form">
          <i className="fas fa-search"></i>
          <input type="text" placeholder="¿Qué estás buscando?" />
        </div>
        <div className="nav__container--menu">
          <i className="fas fa-home"></i>
          <p>Inicio</p>
          <Link href="/">
            <i className="fas fa-caret-down"></i>
          </Link>
        </div>
      </div>
      <div className="option__container">
        <div className="option__container--line">
          <hr />
        </div>
        <div className="option__container--notification">
          <i className="far fa-bell">
            <span>1</span>
          </i>
        </div>
        <div className="option__container--user">
          <img src="/static/profile.jpeg" alt="" />
          <button>
            <i className="fas fa-caret-down"></i>
          </button>
        </div>
        <button>
          <i className="fas fa-cog"></i>
        </button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
