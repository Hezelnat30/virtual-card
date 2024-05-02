import React from "react";
import Header from "./Header";
import Identitiy from "./Identitiy";

export default function Card() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identitiy />
      </div>
      <div className="bottom"></div>
    </div>
  );
}
