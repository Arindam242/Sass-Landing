import styled from "styled-components";
import Group from "../Group.svg";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <h1>IONIX SASS</h1>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>Blog</li>
        </nav>
        <button>Get Free Trial</button>
      </div>
      <main className="main-content">
        <div className="left">
          <h4>IT IS A LONG ESTABLISHED</h4>
          <h1>
            The Source of <br />
            <span>
              Computing and
              <br /> technology
            </span>
          </h1>
          <h2>Established fact that a reader </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex culpa,
            quod dicta illum sit fuga error doloremque numquam eum quae quam
            delectus
          </p>
        </div>
        <div>
          <img className="hero-img" src={Group} />
        </div>
      </main>
      <div className="brand-box">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnouSMxbdlLJAw_pBUgPuTciFzlPRiY9CP3g&usqp=CAU" />
        <img src="https://i.pinimg.com/originals/1e/86/e3/1e86e3bc7cbfe84d730a36235c7a7f4b.png" />
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRWqnkcxA7MJ47oQaxlY80e9K9osjI0yNhbduCemEoWS2h1F2SBbdSm0GFrXnemy6D8NQ&usqp=CAU" />
        <img src="https://www.kindpng.com/picc/m/289-2898818_revlon-professional-revlon-logo-png-transparent-png.png" />
      </div>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  height: 100vh;
  width: 100%;
  font-family: Roboto;
  .main-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      flex-direction: column;
      h4 {
        line-height: 1.2rem;
        color: #ff4539;
        font-weight: 500;
      }
      h1 {
        font-size: 3.5rem;
        font-weight: 400;
        /* letter-spacing: 1.5px; */
        line-height: 4rem;
        span {
          font-weight: 600;
        }
      }
      h2 {
        font-size: 1.2rem;
        color: #ff4539;
        font-weight: 600;
      }
      p {
        color: gray;
        font-size: 0.9rem;
        line-height: 1.3rem;
      }
    }
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      font-size: 1.8rem;
      cursor: pointer;
      color: #ffc839;
    }
    nav {
      display: flex;
    }
    nav li {
      list-style: none;
      margin-left: 30px;
      cursor: pointer;
      font-weight: 400;
      font-size: 1.1rem;
      &:hover {
        color: #ff4539;
        font-weight: 600;
      }
    }
    button {
      padding: 1rem 2rem;
      background: transparent;
      border: 2px solid #ff4539;
      border-radius: 10px;
      font-weight: 500;
      color: #ff4539;
      font-size: 1rem;
      cursor: pointer;
      &:hover {
        background: #ff4539;
        color: white;
      }
    }
  }
  .hero-img {
    width: 600px;
    height: 700px;
  }
  .brand-box {
    display: flex;
    padding: 20px;
    width: 100%;
    height: 200px;
    margin-bottom: 120px;
    /* filter: drop-shadow(0 0 30px #333); */
    /* border: 1px solid #000; */
    border-radius: 20px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    justify-content: space-around;
    img {
      width: 200px;
    }
  }
`;

export default Header;
