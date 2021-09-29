import React from "react";
import styled from "styled-components";

const Features = () => {
  return (
    <FeatureSection>
      <div className="top">
        <h1>Features For You</h1>
        <div className="top-content">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et dolore
            id culpa quis blanditiis, iure itaque minima quidem neque fugiat
            rerum autem numquam dolorem minus consequatur? Ea quis, voluptatum
            culpa officia id, sapiente nesciunt adipisci a, incidunt fugiat
            harum qui.
          </p>
          <button>View All</button>
        </div>
      </div>
      <div className="bottom"></div>
    </FeatureSection>
  );
};

const FeatureSection = styled.section`
  padding: 5rem 0;
  .top {
    h1 {
      font-size: 2.5rem;
      color: #4c5454;
      font-weight: 600;
    }

    .top-content {
      display: flex;
      justify-content: space-around;
      p {
        font-size: 1rem;
        color: #4c5454;
      }
      button {
        padding: 1rem 3rem;
        background: transparent;
        border: 2px solid #ff4539;
        border-radius: 10px;
        color: #ff4539;
        font-size: 1rem;
        cursor: pointer;
        &:hover {
          background: #ff4539;
          color: white;
        }
      }
    }
  }
`;

export default Features;
