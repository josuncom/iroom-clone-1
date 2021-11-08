import { Link } from "react-router-dom";
import React from "react";

export default function Navigation() {
  return (
    <div>
      <Link to="/">홈</Link>
      <Link to="/intro">공간소개</Link>
      <Link to="/reservation">예약하기</Link>
      <Link to="/login">로그인</Link>
      <Link to="/profile">마이페이지</Link>
    </div>
  );
}
