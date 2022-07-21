import React from "react";

const footerStyle = {
  with: "100vw",
  height: "6vh",
  backgroundColor: "#121214",
  color: "white",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Footer() {
  return (
    <div style={footerStyle}>
      <h4>
        Made with 💜 by{" "}
        <a
          href="https://github.com/ChrisCoy"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "var(--purple-effect)" }}
        >
          Christopher Lee
        </a>
      </h4>
    </div>
  );
}
