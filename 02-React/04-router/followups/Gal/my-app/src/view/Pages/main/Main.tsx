import Nav from "../../nav/Nav";
import {Outlet} from "react-router-dom";

function Main() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default Main;
