import { FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";
import styled from "styled-components";
import { useForm, ValidationError } from "@formspree/react";

const Wrapper = styled.section`
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
    width: 300px;
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
  }

  .contact-title {
    text-transform: uppercase;
    font-size: 0.9rem;
  }
  .mail-label {
    margin: 0 20px;
    display: flex;
    align-items: center;
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
          color: "green",
        }}
      >
        Thanks for joining!
      </p>
    );
  }
  return (
    <Wrapper>
      <div className="contact-block">
        <div className="contact-container">
          <div className="contact-title">Be in touch with us:</div>

          <form onSubmit={handleSubmit} className="mail">
            {/* <label htmlFor="email" className="mail-label">Email Address</label> */}
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
