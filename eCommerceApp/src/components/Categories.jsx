import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  .categories-block {
    display: flex;
    height: 80vh;
    gap: 10px;
    margin: 10px;

    .col {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .col-l {
      flex: 2;
    }

    .row {
      flex: 1;
      display: flex;
      gap: 10px;
      position: relative;
      overflow: hidden;

      button {
        position: absolute;
        min-width: 100px;
        width: fit-content;
        height: 50px;
        padding: 10px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        cursor: pointer;
        border: none;
        background-color: white;
        text-transform: uppercase;
        font-weight: 500;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const Categories = () => {
  return (
    <Wrapper>
      <div className="categories-block">
        <div className="col">
          <div className="row">
            <img
              src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <NavLink className="link" to="/products/1">
                Sale
              </NavLink>
            </button>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <NavLink to="/products/1" className="link">
                Women
              </NavLink>
            </button>
          </div>
        </div>
        <div className="col">
          <div className="row">
            {" "}
            <img
              src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <NavLink to="/products/1" className="link">
                New Season
              </NavLink>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col">
              <div className="row">
                <img
                  src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <NavLink to="/products/1" className="link">
                    Men
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                {" "}
                <img
                  src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <button>
                  <NavLink to="/products/1" className="link">
                    Accessories
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <button>
              <NavLink to="/products/1" className="link">
                Shoes
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Categories;
