import PropTypes from "prop-types";
import { MainFooter } from "./MainFooter";
import MainNavbar from "./MainNavbar";

MainLayout.propTypes = {
  children: PropTypes.node
};

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      <div>{children}</div>
      <MainFooter />
    </>
  );
}
