import "./layout.scss";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="d-flex-row">
      <Navbar />

      <div className="page-display">
        <span className="top-tags">
          <span className="tag html-tag">&lt;html&gt;</span>
          <br />
          <span className="tag">&lt;body&gt;</span>
        </span>

        <Outlet />

        <span className="bottom-tags">
          <span className="tag">&lt;/body&gt;</span>
          <br />
          <span className="tag html-tag">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
}