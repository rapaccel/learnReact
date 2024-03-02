import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
      setSearchQuery(""); // Mengosongkan input setelah navigasi
    }
  };

  return (
    <nav className="navbar">
      <h1>Cronoz Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn">Search</button>
      </form>
    </nav>
  );
};

export default Navbar;
