import styled from "styled-components";
import logo from "../../assets/images/logo.jpg";

function Footer() {
  return (
    <FooterStyle>
      <h1 className="logo">
        <img src={logo} alt="book store" />
      </h1>
      <div className="coptright">
        <p>copyright(c) 2024, Book Store</p>
      </div>
    </FooterStyle>
  );
}

const FooterStyle = styled.footer`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  border-top: 1px solid ${({ theme }) => theme.color.border};
  padding: 20px;

  display: flex;
  justify-content: space-between;

  .logo {
    img {
      width: 70px;
    }
  }
  .copyright {
    p {
      font-size: 0.75rem;
      color: ${({ theme }) => theme.color.text};
    }
  }
`;

export default Footer;
