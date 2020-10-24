import React from "react";
import styled from "@emotion/styled";

const NoticeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: white;
  margin-bottom: 2px;
  border-radius: ${(props) => props.number === 1 && "10px 10px 0 0"};
  border-radius: ${(props) => props.number === 5 && "0 0 10px 10px"};
  .notice__container {
    &--image {
      position: relative;
      margin-right: 15px;
      img {
        border-radius: 10px;
        width: 150px;
        height: 150px;
      }
      p {
        position: absolute;
        top: 0;
        padding: 5px 15px 5px 20px;
        border-radius: 0 5px 5px 0;
        text-transform: uppercase;
        font-weight: 700;
        color: white;
        background-color: var(--blue);
      }
    }
    &--info {
      display: flex;
      padding: 0 30px;
      flex-direction: column;
      align-items: baseline;
      justify-content: center;
      & div:first-of-type {
        border-bottom: 1px solid var(--white);
        margin-bottom: 20px;
        h3 {
          font-size: 24px;
          margin: 0;
        }
        p {
          color: gray;
          margin-bottom: 0;
        }
      }
      & div:last-of-type {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        i {
          font-size: 18px;
          margin: 0 10px;
          color: var(--blue);
          span {
            margin-left: 5px;
            color: gray;
          }
          &:last-of-type {
            color: gray;
          }
        }
      }
    }
  }
`;

const Notice = ({ number }) => {
  return (
    <NoticeContainer number={number}>
      <div className="notice__container--image">
        <img src="/static/notice.jpeg" alt="" />
        <p>Noticia</p>
      </div>
      <div className="notice__container--info">
        <div>
          <h3>Lorem ipsim dolor: Volutpat consequat</h3>
          <p>Por: Lorem Ipsum Dolor</p>
        </div>
        <div>
          <i className="far fa-star">
            <span>50</span>
          </i>
          <i className="far fa-comment-alt">
            <span>40</span>
          </i>
          <i className="far fa-eye">
            <span>75</span>
          </i>
        </div>
      </div>
    </NoticeContainer>
  );
};

export default Notice;
