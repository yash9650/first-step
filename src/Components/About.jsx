import React from "react";
import classes from "../css/about.module.css";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { useRef } from "react";

export default function About() {
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const feedbackRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (nameRef && emailRef && subjectRef && feedbackRef) {
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        subject: subjectRef.current.value,
        feedback: feedbackRef.current.value
      }
      fetch('/query',{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((response) => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        console.log(err);
      });
    }
  };

  return (
    <div>
      <div className={`${classes.about} mb-5`}>
        <div
          className="container d-flex my-auto"
          style={{ backgroundColor: "white", height: "100%" }}
        >
          <div className="row py-5">
            <div className="my-auto col-6 p-5">
              <h2>About us</h2>
              <p className="py-4">
                <b>First Step</b> is a First Aid Emergency website that helps
                people to take necessary steps to reduce damage in case of
                medical emergencies. It identifies the disease based on symptoms
                and provide accurate information. Our website also provides home
                remedies to some symptoms that can be reduced at home. It also
                helps to identify any hospitals nearby.
              </p>
            </div>
            <div className={`col-6 ${classes.aboutusImg}`}></div>
          </div>
        </div>
      </div>

      <div className="mx-5 px-5">
        <div className="row my-5 py-3">
          <h1
            className={`d-flex ${classes.contactMainHeading} pb-5 justify-content-center`}
          >
            We would like to hear from you!
          </h1>
          <div
            className={`d-flex col-3 ${classes.contactusText} justify-content-center align-content-center`}
          >
            <h1 className=" m-auto">Contact us</h1>
          </div>
          <div className="col-6 px-5">
            <form onSubmit={submitHandler}>
              <FloatingLabel
                controlId="floatingInput"
                label="Full Name"
                className="mb-3 mt-5"
              >
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  ref={nameRef}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  name="email"
                  ref={emailRef}
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Subject"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  ref={subjectRef}
                  required
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingInput" label="Feedback">
                <Form.Control
                  as="textarea"
                  style={{ height: "200px", resize: "none" }}
                  placeholder="Feedback"
                  name="feedback"
                  ref={feedbackRef}
                  required
                />
              </FloatingLabel>
              <button type="submit" className={`my-3 px-4 py-2 ${classes.feedbackButton}`}>
                Send
              </button>
            </form>
          </div>
          <div className={`col-3 ${classes.contactImg}`}></div>
        </div>
      </div>
    </div>
  );
}
