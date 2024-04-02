import Header from "@components/common/Header";
import { block } from "million/react";
import HomeBanner from "./components/Banner";
import HomeAccess from "./components/Access";
import DeepInsights from "./components/DeepInsights";
import HomeWorkspaces from "./components/Workspaces";
import HomeBlog from "./components/Blog";
import HomeContact from "./components/Contact";
import Footer from "../../components/common/Footer";

const Home = block(() => (
  <div className="overflow-x-hidden">
    <Header />
    <HomeBanner />
    <HomeAccess />
    <DeepInsights />
    <HomeWorkspaces />
    <HomeBlog />
    <HomeContact />
    <Footer />
  </div>
));

export default Home;