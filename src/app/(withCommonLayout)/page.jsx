import Articles from "../../components/Articles";
import Category from "../../components/Category";
import CompanyLogo from "../../components/CompanyLogo";
import CustomerService from "../../components/CustomerService";
import MoreExplore from "../../components/MoreExplore";
import NewArrivals from "../../components/NewArrivals";
import TopCategory from "../../components/TopCategory";
import TopSeller from "../../components/TopSeller";
import Banner from "../../components/banner/Banner";

const page = () => {
  return (
    <div>
      <Banner />
      <Category />
      <NewArrivals />
      <TopCategory />
      <MoreExplore />
      <CompanyLogo />
      <TopSeller />
      <Articles />
      <CustomerService />
    </div>
  );
};

export default page;
