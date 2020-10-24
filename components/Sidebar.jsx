import React from "react";
import styled from "@emotion/styled";
import Notice from "./Notice";

const SidebarContainer = styled.aside`
  font-family: var(--font);
  .sidebar__container {
    &--title {
      display: flex;
      align-items: center;
      & h2 {
        color: var(--blue);
        font-size: 20px;
      }
      & hr {
        width: 250px;
        border-color: var(--blue);
      }
    }
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <div className="sidebar__container--title">
        <h2>Noticias relacionadas</h2>
        <hr />
      </div>
      <div className="notices__container">
        {[1, 2, 3, 4].map((notice) => {
          return <Notice key={notice} number={notice} />;
        })}
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
