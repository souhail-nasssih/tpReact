import React, { useRef, useState } from "react";

export default function FormValide() {
  const firstNameRef = useRef("");
  const lastNameRef = useRef("");
  const emailRef = useRef("");
  const termsRef = useRef(false);
  const messageRef = useRef("");

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let formErrors = {};

    if (!firstNameRef.current.value.trim())
      formErrors.firstName = "Le prénom est requis.";
    if (!lastNameRef.current.value.trim())
      formErrors.lastName = "Le nom est requis.";
    if (!messageRef.current.value) {
      formErrors.message = "Le message est requis.";
    }
    if (!emailRef.current.value.trim()) {
      formErrors.email = "L'email est requis.";
    } else if (!/\S+@\S+\.\S+/.test(emailRef.current.value)) {
      formErrors.email = "L'adresse email n'est pas valide.";
    }
    if (!termsRef.current.checked) {
      formErrors.terms = "Vous devez accepter les conditions.";
    }

    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      // Clear the form fields
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      termsRef.current.checked = false;
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="container mt-5">
      {submitted && (
        <div className="alert alert-success" role="alert">
          Formulaire soumis avec succès!
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            Prénom
          </label>
          <input
            type="text"
            className={`form-control ${errors.firstName ? "is-invalid" : ""}`}
            id="firstName"
            ref={firstNameRef}
          />
          {errors.firstName && (
            <div className="invalid-feedback">{errors.firstName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Nom
          </label>
          <input
            type="text"
            className={`form-control ${errors.lastName ? "is-invalid" : ""}`}
            id="lastName"
            ref={lastNameRef}
          />
          {errors.lastName && (
            <div className="invalid-feedback">{errors.lastName}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            ref={emailRef}
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email}</div>
          )}
        </div>
        {/*  */}
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className={`form-control ${errors.message ? "is-invalid" : ""}`}
            id="message"
            ref={messageRef}
            rows="4"
            aria-label="Message"
          ></textarea>
          {errors.message && (
            <div className="invalid-feedback">{errors.message}</div>
          )}
        </div>
        {/*  */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            className={`form-check-input ${errors.terms ? "is-invalid" : ""}`}
            id="terms"
            ref={termsRef}
          />
          <label className="form-check-label" htmlFor="terms">
            J'accepte les conditions
          </label>
          {errors.terms && (
            <div className="invalid-feedback">{errors.terms}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary">
          Valider
        </button>
      </form>
    </div>
  );
}
