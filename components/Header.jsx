import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  width: 100vw;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <div>
        <div>
          <i className="far fa-comments"></i>
          <p>
            doc <span>red</span>
          </p>
        </div>
        <div>
          <i className="fas fa-search"></i>
          <input type="text" placeholder="¿Qué estás buscando?" />
        </div>
        <div>
          <i className="fas fa-home"></i>
          <p>Inicio</p>
          <i className="fas fa-caret-down"></i>
        </div>
      </div>
      <div>
        <hr />
        <div>
          <i className="far fa-bell">
            <span>1</span>
          </i>
        </div>
        <div>
          <img src="" alt="" />
          <i className="fas fa-caret-down"></i>
        </div>
        <i className="fas fa-cog"></i>
      </div>
    </HeaderContainer>
  );
};

export default Header;
