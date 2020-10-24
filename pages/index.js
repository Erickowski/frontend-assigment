import Layout from "../components/Layout";
import styled from "@emotion/styled";

import Sidebar from "../components/Sidebar";

const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 10px 20px;
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
        <h1>Hola mundo</h1>
        <Sidebar />
      </HomeContainer>
    </Layout>
  );
}
