import React, { useState } from "react";
import "./Header.css";
import LoginForm from "./LoginForm";

const Header: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="container header-container">
          <div className="header-logo">Marketplace</div>
          <nav className="header-nav">
            <a href="/">Home</a>
            <a href="/cart">Cart</a>
            <button className="get-started-btn" onClick={handleOpenModal}>
              Get Started
            </button>
          </nav>
        </div>
      </header>

      {/* Відкриття модального вікна з формою входу */}
      {isModalOpen && <LoginForm onClose={handleCloseModal} />}
    </>
  );
};

export default Header;
