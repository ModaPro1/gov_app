import MainTitle from "./MainTitle";
import contactImg from "../assets/contact.png";
import sendImg from "../assets/send.svg";
import { useRef, useState } from "react";

const INITIAL_FORM_DATA = {
  name: {
    val: "",
    error: null,
  },
  email: {
    val: "",
    error: null,
  },
  message: {
    val: "",
    error: null,
  },
}
export default function Contact() {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [isLoading, setIsLoading] = useState(false)
  const formEl = useRef()

  function handleInputChange(id, value) {
    setFormData(prev => {
      let prevFormData = {...prev}
      prevFormData[id].val = value
      return prevFormData;
    })
  }

  function validation() {
    const formDataCopy = {...formData}

    // Name
    if (formData.name.val === "") {
      formDataCopy.name.error = "هذا الحقل مطلوب"
    } else {
      formDataCopy.name.error = null
    }

    // Email
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (formData.email.val === "") {
      formDataCopy.email.error = "هذا الحقل مطلوب"
    }else if(!formData.email.val.match(validRegex)) {
      formDataCopy.email.error = "يجب ادخال بريد الكتروني صالح"
    } else {
      formDataCopy.email.error = null
    }

    // Message
    if (formData.message.val === "") {
      formDataCopy.message.error = "هذا الحقل مطلوب"
    } else {
      formDataCopy.message.error = null
    }

    setFormData(formDataCopy)
  }

  function submit(e) {
    e.preventDefault();
    
    validation()

    if(!formData.name.error && !formData.email.error && !formData.message.error) {
      setIsLoading(true)
      // send email
      const serviceID = 'default_service';
      const templateID = 'template_jw9g44h';

      emailjs.sendForm(serviceID, templateID, formEl.current)
      .then(() => {
        setIsLoading(false)
        setFormData(INITIAL_FORM_DATA)
      }, (err) => {
        console.log(err);
        alert("حدث خطأ في النظام")
      });
    }
  }

  return (
    <div className="contact py-4" id="contact">
      <MainTitle classes="border-gray">تواصل معنا</MainTitle>
      <div className="container">
        <form
          onSubmit={submit}
          className="form bg-white shadow-sm rounded-3 p-3 d-flex gap-3"
          ref={formEl}
        >
          <div className="img">
            <img src={contactImg} alt="IMAGE" />
          </div>
          <div className="content pt-3">
            <div className="input-box">
              <label htmlFor="name" className="mb-1">
                الأسم
              </label>
              <input
                type="text"
                className={`form-control ${formData.name.error ? 'is-invalid' : ''}`}
                id="name"
                name="name"
                value={formData.name.val}
                onChange={(e) =>
                  handleInputChange("name", e.target.value)
                }
              />
              {formData.name.error && <div className="error text-danger">{formData.name.error}</div>}
            </div>
            <div className="input-box mt-3">
              <label htmlFor="email" className="mb-1">
                البريد الالكتروني
              </label>
              <input
                type="email"
                className={`form-control text-start ${formData.email.error ? 'is-invalid' : ''}`}
                id="email"
                name="email"
                value={formData.email.val}
                onChange={(e) =>
                  handleInputChange("email", e.target.value)
                }
              />
              {formData.email.error && <div className="error text-danger">{formData.email.error}</div>}
            </div>
            <div className="input-box mt-3">
              <label htmlFor="message" className="mb-1">
                الرسالة
              </label>
              <textarea
                rows={5}
                className={`form-control ${formData.message.error ? 'is-invalid' : ''}`}
                id="message"
                name="message"
                value={formData.message.val}
                onChange={(e) =>
                  handleInputChange("message", e.target.value)
                }
              ></textarea>
              {formData.message.error && <div className="error text-danger">{formData.message.error}</div>}
            </div>
            <button className="mt-3 send" disabled={isLoading}>
              {isLoading ? <span className="spinner-border spinner-border-sm" aria-hidden="true"></span> : <img src={sendImg} alt="Icon" width={15} />}
              <span>
                {isLoading ? 'جاري الارسال' : 'إرسال'}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
