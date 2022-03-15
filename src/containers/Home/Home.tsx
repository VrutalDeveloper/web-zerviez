import { FC } from "react";
import Layout from "../../components/common/Layout/Layout";
import HomeHeader from "../../components/HomeHeader/HomeHeader";

const Home: FC = () => {
  return (
    <Layout data-testid="layout">
      <HomeHeader data-testid="header" />
    </Layout>
  );
};

export default Home;
