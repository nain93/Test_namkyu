import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav() {
  const location = useLocation();

  return (
    <section className="header">
      <div className="header-top">
        <div className="header-title">
          <div>Logo</div>
          <h1>인어교주해적단</h1>
        </div>
        <span>로그인 / 가입</span>
      </div>
      <ul className="header-list">
        <li>
          <Link
            to="/홈"
            style={
              location.pathname === "/홈"
                ? { color: "#1C79BC" }
                : { color: "inherit" }
            }
          >
            홈
          </Link>
        </li>
        <li>
          <Link
            to="/시장"
            style={
              location.pathname === "/시장"
                ? { color: "#1C79BC" }
                : { color: "inherit" }
            }
          >
            시장
          </Link>
        </li>
        <li>
          <Link
            to="/쇼핑"
            style={
              location.pathname === "/쇼핑"
                ? { color: "#1C79BC" }
                : { color: "inherit" }
            }
          >
            쇼핑
          </Link>
        </li>
        <li>
          <Link
            to="/콘텐츠"
            style={
              location.pathname === "/콘텐츠"
                ? { color: "#1C79BC" }
                : { color: "inherit" }
            }
          >
            콘텐츠
          </Link>
        </li>
        <li>
          <Link
            to="/시세"
            style={
              location.pathname === "/시세"
                ? { color: "#1C79BC" }
                : { color: "inherit" }
            }
          >
            시세
          </Link>
        </li>
        <li>
          <Link
            to="/도매"
            style={
              location.pathname === "/도매"
                ? { color: "#1C79BC" }
                : { color: "inherit" }
            }
          >
            도매
          </Link>
        </li>
        <li>
          <Link
            to="/후기"
            style={
              location.pathname === "/후기"
                ? { color: "#1C79BC" }
                : { color: "inherit" }
            }
          >
            후기
          </Link>
        </li>
        <li>
          <Link
            to="/문의"
            style={
              location.pathname === "/문의"
                ? { color: "#1C79BC" }
                : { color: "inherit" }
            }
          >
            문의
          </Link>
        </li>
      </ul>
    </section>
  );
}
