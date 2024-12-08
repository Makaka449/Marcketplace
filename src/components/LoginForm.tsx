import React, { useState } from "react";
import "./LoginForm.css";

interface LoginFormProps {
  onClose: () => void; 
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    
    setEmail("");
    setPassword("");
    setPasswordVisible(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="modal-overlay">
      <div className="login-container">
        {/* Close Button with SVG */}
        <button className="burger-btn" onClick={onClose}>
          <svg width="32px" height="35px" viewBox="0 0 32 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25.5 17.1838C25.5 22.7785 21.2467 27.3139 16 27.3139C10.7533 27.3139 6.5 22.7785 6.5 17.1838C6.5 11.5891 10.7533 7.05371 16 7.05371C21.2467 7.05371 25.5 11.5891 25.5 17.1838Z" stroke="black"/>
            <path d="M19.6993 13.2876L16 17.2322M16 17.2322L12.3007 21.1769M16 17.2322L19.6993 21.1769M16 17.2322L12.3007 13.2876" stroke="black" strokeLinecap="round"/>
          </svg>
        </button>

        <h1>Log in</h1>
        
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-container">
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={togglePasswordVisibility}
            >
              {isPasswordVisible ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    d="M16 9C20.9706 9 25.0808 11.6242 27 15.6448C25.0808 19.6654 20.9706 22.2896 16 22.2896C11.0294 22.2896 6.91922 19.6654 5 15.6448C6.91922 11.6242 11.0294 9 16 9Z"
                    stroke="black"
                    strokeWidth="1.5"
                  />
                  <circle cx="16" cy="15.6448" r="4" fill="black" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    d="M19.2143 22.6499C18.1284 23.1541 16.9231 23.4823 15.654 23.4823C10.8747 23.4823 7.00024 18.8276 7.00024 17.6448C7.00024 16.9744 8.24511 15.1884 10.194 13.7669M23.2693 19.5156C23.9317 18.7188 24.3077 18.0133 24.3077 17.6448C24.3077 16.4621 20.4333 11.8073 15.654 11.8073C17.7569 11.8073 19.4616 13.4984 19.4616 15.5845M15.654 19.3617C13.5511 19.3617 11.8463 17.6706 11.8463 15.5845M25.0001 11.8074C22.3642 9.626 19.287 8.3736 16.0001 8.3736C14.8155 8.3736 13.658 8.5363 12.5386 8.84655M7.00024 11.8074C7.24457 11.6052 7.49269 11.411 7.74441 11.225M7.00002 7L23.7141 23.8748"
                    stroke="black"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <button className="button-Next" type="submit" disabled={!email || !password}>
            Next
          </button>
        </form>

        <div className="links">
          <a href="#" className="forgot-password">
            Forgot password?
          </a>
          <a href="#" className="sign-up">
            Not registered yet? <span>Sign up</span>
          </a>
        </div>

        <div className="separator">
          <span>Or with the help of</span>
        </div>
        <div className="social-buttons">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
          <button className="apple">Apple</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
