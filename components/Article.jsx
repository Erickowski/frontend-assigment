import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

import ArticleInfo from "../mockup/article.json";

const ArticleContainer = styled.div`
  font-family: var(--font);
  margin: 15px;
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  .article {
    &__image {
      background: rgb(26, 128, 199);
      background: linear-gradient(
        45deg,
        rgba(26, 128, 199, 1) 0%,
        #15bec9 100%
      );
      width: 100%;
      height: 500px;
      position: relative;
      p {
        color: white;
        text-transform: uppercase;
        position: absolute;
        top: 10px;
        left: 0;
        background-color: var(--blue);
        padding: 5px 20px 5px 30px;
        border-radius: 0 10px 10px 0;
      }
    }

    &__title {
      display: flex;
      margin-top: 20px;
      align-items: center;
      h1 {
        font-size: 24px;
        margin: 0 40px 0 0;
      }
      button {
        color: white;
        background-color: var(--green);
        padding: 5px 20px;
        border: none;
        border-radius: 10px 0 10px 0;
        cursor: pointer;
      }
    }
    &__info {
      margin: 20px 0;
      display: flex;
      align-items: center;
      i {
        font-size: 32px;
        color: var(--blue);
      }
      div {
        h2 {
          font-size: 16px;
          padding-left: 10px;
          margin: 0 0 5px;
        }
        div {
          padding-left: 10px;
          display: flex;
          font-size: 14px;
          color: gray;
          p {
            padding-right: 15px;
            margin: 0 10px 0 0;
            border-right: 1px solid gray;
            &:first-of-type {
              margin-left: 0;
            }
            &:last-of-type {
              border-right: none;
            }
          }
        }
      }
    }
    &__tags {
      display: flex;
      justify-content: flex-start;
      p {
        padding: 10px;
        background-color: var(--white);
        color: var(--blue);
        margin: 10px;
        &:first-of-type {
          margin-left: 0;
        }
      }
    }
    &__content {
      font-size: 16px;
      text-align: justify;
      p {
        margin-bottom: 20px;
      }
    }
    &__actions {
      width: 70%;
      padding: 10px 5px;
      margin: 0 auto 10px;
      display: flex;
      justify-content: center;
      border: 1px solid var(--blue);
      border-radius: 10px 0 10px 0;
      i {
        color: var(--blue);
        cursor: pointer;
        &:nth-child(2) {
          margin: 0 75px;
        }
        &:last-of-type,
        span {
          color: gray;
        }
        span {
          font-weight: 400;
          margin-left: 5px;
        }
      }
    }
  }
`;

const Article = () => {
  return (
    <ArticleContainer>
      <div className="article__image">
        <p>Noticia</p>
      </div>
      <div className="article__title">
        <h1 dangerouslySetInnerHTML={{ __html: ArticleInfo.title }} />
        <button type="button">Guardar</button>
      </div>
      <div className="article__info">
        <i className="fas fa-cloud-moon"></i>
        <div>
          <h2>Noticias DocRed</h2>
          <div>
            <p>hace 12 h</p>
            <p>Publicado: 17/01/18</p>
            <p>Lectura: 3 min.</p>
          </div>
        </div>
      </div>
      <div className="article__tags">
        <p>Medicina interna</p>
        <p>Pediatría</p>
        <p>Obstreticia</p>
      </div>
      <div
        className="article__content"
        dangerouslySetInnerHTML={{
          __html: ArticleInfo.content.slice(187, 3352),
        }}
      />
      <div className="article__actions">
        <Link href="/">
          <i className="far fa-star">
            <span>Destacar</span>
          </i>
        </Link>
        <Link href="/">
          <i className="far fa-comment-alt">
            <span>Comentar</span>
          </i>
        </Link>
        <Link href="/">
          <i className="fas fa-external-link-alt">
            <span>Compartir</span>
          </i>
        </Link>
      </div>
    </ArticleContainer>
  );
};

export default Article;
