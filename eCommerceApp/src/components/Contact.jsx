import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const Wrapper = styled.section`

 @media (max-width: 600px) {
         width: 100vw;
  }

  .contact-block {
    background-color: #2879fe;
    padding: 15px;
    color: white;
    display: flex;
    justify-content: center;
  }

  .contact-container {
    width: 70%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  input {
    padding: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
    outline: none;
    width: 80%;
  }

  button {
    padding: 10px;
    color: white;
    background: #333;
    border-radius: 0 5px 5px 0;
    border: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .icons {
    display: flex;
    gap: 10px;
  }

  .mail {
    display: flex;
    flex-wrap: nowrap;
    width: 450px;
    height: 35px;
  }

  .contact-title {
    text-transform: uppercase;
    font-size: 0.8rem;
  }
  .mail-label {
    margin: 0 20px;
    display: flex;
    align-items: center;
  }

  @media (max-width: 1085px) {
    .mail {
      width: 300px;
    }
  }
  @media (max-width: 870px) {
    .mail {
      width: 240px;
    }
    .contact-title {
      font-size: 11px;
    }
  }
  @media (max-width: 630px) {
    .contact-container {
      flex-wrap: wrap !important;
      justify-content: center;
    }
  }
`;

export default function Contact() {
  const [state, handleSubmit] = useForm("xyyqlyoz");
  if (state.succeeded) {
    return (
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          height: "65px",
          backgroundColor: "#2879fe"  
          }}
      >
        Thanks for joining! :)
      </p>
    );
  }
  return (
    <Wrapper>
      <div className="contact-block">
        <div className="contact-container">
          <div className="contact-title">Be in touch with us:</div>

          <form onSubmit={handleSubmit} className="mail">
            <input id="email" type="email" name="email"  placeholder="Your Email"/>
            <button type="submit" disabled={state.submitting}>Submit</button>
            <ValidationError className="mail-label" prefix="Email" field="email" errors={state.errors} />
          </form>
          <div className="icons"> <FaFacebook /> <FaInstagram /> <FaTwitter /> <FaGoogle />  </div> 

        </div>
      </div>
    </Wrapper>
  );
}
