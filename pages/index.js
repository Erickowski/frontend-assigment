import Layout from "../components/Layout";
import styled from "@emotion/styled";

import Sidebar from "../components/Sidebar";
import Article from "../components/Article";

const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 10px 20px;
  margin-top: 40px;
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <Article />
        <Sidebar />
      </HomeContainer>
    </Layout>
  );
}
