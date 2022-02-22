import { useState, useEffect } from "react";
import React from "react";

function Contact() {
  const initialValues = { first_Name: "", last_Name: "", email: "", phone: "", location: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex  =/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (!values.first_Name) {
      errors.first_Name = "First name is required!";
    }
    if (!values.last_Name) {
      errors.last_Name = "Last name is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "Contact number is required!";
    } else if (!phoneno.test(values.phone)) {
      errors.phone = "This is not a valid contact number format!";
    }
    if (!values.location) {
      errors.location = "select a location is required!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    return errors;
  };
  return (
    <div className="contact">
      <section id="contact" >
        <div class="container container-contact">
          <table id="wrap-contact">
            <tr class="thead" align="left">
              <th><h1 id="contact-me">Contact me</h1></th>
              <th><h1>Varsity Attended</h1></th>           
            </tr>
                        
            <tr>
              <td width="50%" class="contact_form">
                <form id="contact-form" class="contact-form" action="https://formspree.io/f/mnqwdobp" method="POST" onSubmit={handleSubmit} >
                  <div class="wrap-input">
                    <div className="field">
                      <input class="input"  type="text" name="first_Name" placeholder="Your first names" value={formValues.first_Name}
              onChange={handleChange} /> 
                      <p>{formErrors.first_Name}</p>
                    </div>
                  </div>

                  <div class="wrap-input">
                    <div  className="field">
                      <input class="input"  type="text" name="last_Name" placeholder="Your last name" value={formValues.last_Name}
              onChange={handleChange} />
                      <p>{formErrors.last_Name}</p>
                    </div>
                  </div>

                  <div class="wrap-input">
                    <div  className="field">                                       
                      <input class="input"  type="email" name="email" placeholder="Your email address" value={formValues.email}
              onChange={handleChange}  />
                      <p>{formErrors.email}</p>
                    </div>
                  </div>
                                    
                  <div class="row">
                    <div className="field">
                      <input class="input"  type="tel" name="phone" placeholder="Contact Number" value={formValues.phone}
              onChange={handleChange} />
                      <p>{formErrors.phone}</p>
                    </div>
                    

                    <div id="select-location" className="field"> 
                      <select class="input" name="location">
                        <option>Choose below...</option>
                        <option>Eastern Cape</option>
                        <option>Free State</option>
                        <option>Gauteng</option>
                        <option>KwaZulu-Natal</option>
                        <option>Limpopo</option>
                        <option>Mpumalanga</option>
                        <option>Nothern Cape</option>
                        <option>North West</option>
                        <option>Western Cape</option>
                      </select>
                      <p>{formErrors.location}</p>
                    </div>
                    
                  </div>
                                    
                  <div class="wrap-input" className="field">
                    <textarea class="input" name="message" placeholder="Your Comment..." value={formValues.message}
              onChange={handleChange} ></textarea>
                    <p>{formErrors.message}</p>
                  </div>
               
                  <div class="container-contact-form-btn">
                    <button class="contact-form-btn">
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </td>
              
              <td align="right" class="varsity_location">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3599.9463980449946!2d28.09470511466812!3d-25.540162343506996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ebfcf9c4e2bb2cf%3A0xc3e391a9666f8399!2s2%20Aubrey%20Matlakala%20St%2C%20Soshanguve%20-%20K%2C%20Soshanguve%2C%200001!5e0!3m2!1sen!2sza!4v1645144373291!5m2!1sen!2sza"
                  width="520" height="500" allowfullscreen="" loading="lazy">
                </iframe>
              </td>
            </tr>
            
            <tr>
              <td></td>
              <td align="right" class="address">
                <ul class="list-ico">
                  <li>
                    <strong>Location</strong>:<span class="bi bi-geo-alt"></span> Pretoria, Gauteng, South Africa
                  </li>
                  
                  <li>
                    <strong>Phone</strong>:<span class="bi bi-phone"></span> (+27) 79-553-5147
                  </li>

                  <li>
                    <strong>Email</strong>:<span class="bi bi-envelope"></span> mashengete@live.com
                  </li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Contact;