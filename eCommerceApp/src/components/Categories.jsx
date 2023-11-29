import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  .categories-block {
    display: flex;
    height: 80vh;
    gap: 10px;
    /* margin: 10px; */
    /* width: 100vw; */

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
      button:hover {
        background-color: #1485FE;
        color: white;
      }
    }
  }

  @media (max-width:600px) {
    .max500 {
      display: none !important;
    }
    .col {
      flex: 2 !important;
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
              src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cb2pm21-dig-coffee-tables-hero-1-1616645273.jpg"
              alt=""
            />
            <button>
              <NavLink className="link" to="/products/1">
                Living Room
              </NavLink>
            </button>
          </div>
          <div className="row">
            <img
              src="https://i.pinimg.com/564x/75/74/76/757476e8aa83427075f68289f095d6cb.jpg"
              alt=""
            />
            <button>
              <NavLink to="/products" className="link">
                Dining
              </NavLink>
            </button>
          </div>
        </div>
        <div className="col max500">
          <div className="row">
            {" "}
            <img
              src="https://www.bhg.com/thmb/FrTvU0Zr9qb5hpLoRFwdr0tVbyg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/bedroom-collection-artwork-4FmLeEFtKwO87N4LG-N1Jv-53670737d5f64fa0845d90cb3a28393d.jpg"
              alt=""
            />
            <button>
              <NavLink to="/products" className="link">
                Bedroom
              </NavLink>
            </button>
          </div>
        </div>
        <div className="col col-l">
          <div className="row">
            <div className="col max500">
              <div className="row">
                <img
                  src="https://i.ibb.co/b7Z2MV0/Screenshot-222.png"
                  alt=""
                />
                <button>
                  <NavLink to="/products" className="link">
                    Office
                  </NavLink>
                </button>
              </div>
            </div>
            <div className="col">
              <div className="row">
                {" "}
                <img
                  src="https://hips.hearstapps.com/hmg-prod/images/2-1673453547.jpg?crop=0.670xw:1.00xh;0.123xw,0&resize=1200:*"
                  alt=""
                />
                <button>
                  <NavLink to="/products" className="link">
                    Kitchen
                  </NavLink>
                </button>
              </div>
            </div>
          </div>
          <div className="row">
            <img
              src="https://www.kingliving.com.au/pub/media/wysiwyg/B-01-King-Boulevard-Hero.jpg"
              alt=""
            />
            <button>
              <NavLink to="/products" className="link">
                Free Shipping
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Categories;
