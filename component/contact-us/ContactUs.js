import React, { useState } from "react";

export default function ContactUs() {
  const [selectedOption, setSelectedOption] = useState("Commetcial Video");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className='contact-us-section'>
      <div className='base-container w-container'>
        <div className='contact-us-content'>
          <div className='contact-us-info'>
            <div className='have-an-idea-wrapper'>
              <div className='text-title'>Have an idea?</div>
              <h1 className='contact-us-title'>Let’s work together</h1>
            </div>
            <div className='contact-us-links-wrapper desctop'>
              <div className='location-text-block'>
                2715 Ash Dr. San Jose, <br />
                South Dakota 83475{" "}
              </div>
              <a href='tel:(217)555-0113'>(217) 555-0113</a>
              <a href='tel:(307)555-0133'>(307) 555-0133</a>
            </div>
          </div>
          <div className='contact-form-wrapper'>
            <div className='text-title'>I’m interested in...</div>
            <div className='contact-us-form-block w-form'>
              <form
                id='email-form'
                name='email-form'
                data-name='Email Form'
                method='get'
                className='contact-us-form'
                data-wf-page-id='636e23edf118dfb46d7a2af2'
                data-wf-element-id='7bd04275-e74f-4ab0-6e69-eddcc7bf8bc4'
                aria-label='Email Form'>
                <div className='radio-buttons-wrapper'>
                  <label className='radio-button-field w-radio'>
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input ${
                        selectedOption === "Commetcial Video"
                          ? "w--redirected-checked"
                          : ""
                      }`}
                    />
                    <input
                      type='radio'
                      data-name='Interested in'
                      id='Commetcial-Video'
                      name='Interested-in'
                      defaultValue='Commetcial Video'
                      onChange={() => handleOptionChange("Commetcial Video")}
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      className='radio-button-lable-contact-form w-form-label'
                      htmlFor='Commetcial-Video'>
                      Commetcial Video
                    </span>
                  </label>
                  <label className='radio-button-field w-radio'>
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input ${
                        selectedOption === "Presentation"
                          ? "w--redirected-checked"
                          : ""
                      }`}
                    />
                    <input
                      type='radio'
                      data-name='Interested in'
                      id='Presentation'
                      name='Interested-in'
                      defaultValue='Presentation'
                      onChange={() => handleOptionChange("Presentation")}
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      className='radio-button-lable-contact-form w-form-label'
                      htmlFor='Presentation'>
                      Presentation
                    </span>
                  </label>
                  <label className='radio-button-field w-radio'>
                    <div
                      className={`w-form-formradioinput w-form-formradioinput--inputType-custom radio-button w-radio-input ${
                        selectedOption === "Other"
                          ? "w--redirected-checked"
                          : ""
                      }`}
                    />
                    <input
                      type='radio'
                      data-name='Interested in'
                      id='Other-2'
                      name='Interested-in'
                      defaultValue='Other'
                      onChange={() => handleOptionChange("Other")}
                      style={{ opacity: 0, position: "absolute", zIndex: -1 }}
                    />
                    <span
                      className='radio-button-lable-contact-form w-form-label'
                      htmlFor='Other-2'>
                      Other
                    </span>
                  </label>
                </div>
                <div className='contact-us-fields-wrapper'>
                  <input
                    type='text'
                    className='contact-us-form-field first-item w-input'
                    maxLength={256}
                    name='Full-name'
                    data-name='Full name'
                    placeholder='Full name'
                    id='Full-name-2'
                    required=''
                  />
                  <input
                    type='email'
                    className='contact-us-form-field w-input'
                    maxLength={256}
                    name='email'
                    data-name='Email'
                    placeholder='Email'
                    id='email'
                    required=''
                  />
                  <input
                    type='tel'
                    className='contact-us-form-field w-input'
                    maxLength={256}
                    name='Phone'
                    data-name='Phone'
                    placeholder='Phone'
                    id='Phone'
                    required=''
                  />
                  <textarea
                    placeholder='Message'
                    maxLength={5000}
                    id='field'
                    name='field'
                    data-name='field'
                    required=''
                    className='contact-us-form-field text-field w-input'
                    defaultValue={""}
                  />
                </div>
                <div className='button-wrapper'>
                  <input
                    type='submit'
                    defaultValue='Submit'
                    data-wait='Please wait...'
                    className='primary-button w-button'
                  />
                </div>
              </form>
              <div
                className='success-message w-form-done'
                tabIndex={-1}
                role='region'
                aria-label='Email Form success'>
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div
                className='error-message w-form-fail'
                tabIndex={-1}
                role='region'
                aria-label='Email Form failure'>
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
        <div className='contact-us-links-wrapper mobile'>
          <a href='#'>
            2715 Ash Dr. San Jose, <br />
            South Dakota 83475{" "}
          </a>
          <a href='#'>(217) 555-0113</a>
          <a href='#'>(307) 555-0133</a>
        </div>
      </div>
    </div>
  );
}
