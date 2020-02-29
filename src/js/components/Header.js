import React from "react";
const Header = ({ title, location, phone, email }) => (
  <header className="main-header flex row container afc jfsb">
    <aside id="title">
      <h1>{title}</h1>
    </aside>
    <aside className="flex col" id="contact">
      <div>
        {location} | {phone}
      </div>
      <div>{email}</div>
    </aside>
  </header>
);
export default Header;
