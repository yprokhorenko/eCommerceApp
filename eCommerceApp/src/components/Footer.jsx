import { NavLink, useLocation } from "react-router-dom";
import * as React from "react";
import facebook from "../images/facebook.png";
import payments from "../images/payments.png";
import styled from "styled-components";

const Wrapper = styled.section`
  .footer {
    background-color: #f2f2f2;
    padding: 20px 30px;

    .footer-container {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 1200px;
      margin: 0 auto;

      .upper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 30px;
        margin-bottom: 40px;

        .categories {
          list-style: none;

          .footer__menu-title {
            font-weight: bold;
            margin-bottom: 10px;
          }

          .footer__menu-item {
            margin-bottom: 5px;
            font-size: 14px;
            padding: 3px;

            .footer__menu-link {
              color: #333;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        .about {
          flex: 1;
          max-width: 300px;
          margin-right: 30px;

          h3 {
            font-weight: bold;
            margin-bottom: 10px;
          }

          p {
            color: #666;
            font-size: 14px;
          }
        }

        .contact {
          flex: 1;
          max-width: 300px;

          h3 {
            font-weight: bold;
            margin-bottom: 10px;
          }

          p {
            color: #666;
            font-size: 14px;
          }
        }
      }

      @media (max-width: 800px) {
        .about p {
          font-size: 12px !important;
        }
        .contact p {
          font-size: 12px !important;
        }
      }
      @media (max-width: 600px) {
        .footer-container {
        }
        .upper {
          width: 50% !important;
          justify-content: center !important;
          margin: 0 auto !important;
        }

        .about,
        .contact {
          flex: initial !important;
          max-width: none !important; 
          margin-right: 0 !important; 
        }
        .categories,
        .links {
          flex: 1;
        }
        .lower {
          margin-top: 35px;
          justify-content: center !important;
        }
        .reserved {
          font-size: 12px;
        }
      }

      .lower {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 20px;

        .copyright {
          display: flex;
          justify-content: space-between;
          gap: 30px;
          align-items: center;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer-container">
          <div className="upper">
            {footerData.map((item, index) => {
              const { titleMain, info } = item;
              return (
                <ul key={index} className="categories">
                  <h3 className="footer__menu-title">{titleMain}</h3>
                  {Object.values(info).map((item, index) => {
                    return (
                      <li className="footer__menu-item" key={index}>
                        <NavLink className="footer__menu-link" href="#">
                          {item}
                        </NavLink>
                      </li>
                    );
                  })}
                </ul>
              );
            })}
            <div className="links"></div>
            <div className="about">
              <h3>About</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
                laborum nulla magnam labore fuga culpa amet consectetur
                adipisicing elit amet consectetur adipisicing elit. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Et explicabo eos
                quos aliquam provident quam odio consectetur facilis libero
                quibusdam.
              </p>
            </div>
            <div className="contact">
              <h3>Contact</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
                laborum nulla magnam labore fuga culpa. Beatae in quibusdam ipsa
                vero sunt nihil velit aperiam!
              </p>
            </div>
          </div>
          <div className="lower">
            <div className="copyright">
              <div className="copyright-img">
                <img
                  className="copyright-img-link"
                  src={facebook}
                  alt="facebook-logo"
                  style={{ width: "120px" }}
                />
              </div>
              <p className="reserved">@Copyright 2023. All rights reserved.</p>
            </div>
            <div className="payments">
              <div className="payments-img">
                <img
                  className="payments-img-link"
                  src={payments}
                  alt="site-paymants"
                  style={{ width: "240px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
}

export const footerData = [
  {
    titleMain: "Categories",
    info: {
      title1: "Woman",
      title2: "Man",
      title3: "Shoes",
      title4: "Accessories",
      title5: "New Arrivals",
    },
  },
  {
    titleMain: "Links",
    info: {
      title1: "FAQ",
      title2: "Pages",
      title3: "Stores",
      title4: "Compare",
      title5: "Cookies",
    },
  },
];
