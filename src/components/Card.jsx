import React from "react";
import Biodata from "./Biodata";
import Header from "./Header";
import Highlight from "./Highlight";
import Identitiy from "./Identitiy";

export default function Card() {
  return (
    <div className="card">
      <div className="top">
        <Header />
        <Identitiy />
      </div>
      <div className="bottom">
        <Biodata />
        <Highlight />
      </div>
    </div>
  );
}
