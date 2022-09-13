import "../components/contact.css"
import Phone from "../assets/Phone.png"
import Email from "../assets/email.png"
import Address from "../assets/1076323.png"
import { useRef } from "react"
import emailjs from 'emailjs-com'
import { useState } from "react"




const Contact =() =>{
  
  const formRef = useRef()
  const [done, setDone] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm('service_vax52gq', 'template_i5t08of', formRef.current, 'juFGZQVtWCqSkTx81')
  .then((result) => {
      console.log(result.text);
      setDone(true)
  }, (error) => {
      console.log(error.text);
  });
}
  return(
    <>

<section className='contact mb'>
      
      <div className='container'>
        <form className='shadow'>
          <h4>Fillup The Form</h4> <br />
          <div className="c-info-item"> 
          <img src={Phone} alt="" className="c-icon"/>  
          +91830 8437 716    
          </div>
          <div className="c-info-item"> 
          <img src={Email} alt="" className="c-icon"/>  
          gaurikhune@gmail.com   
          </div>
          <div className="c-info-item"> 
          <img src={Address} alt="" className="c-icon"/>  
          KK Market ,Balajinagar,Pune,Maharashtra   
          </div>


          <form ref={formRef }onSubmit={handleSubmit}>
                    <input  type= "text" placeholder="Name" name="user_name"></input>
                        <input  type= "text" placeholder="Email" name="user_email"></input>
                        <textarea  rows="5" placeholder="Message" name="message"></textarea>
                     
                        {done && "Thank you..."}
                    </form>
          <textarea cols='30' rows='10'></textarea>
          <button>Submit Request</button>
        </form>
      </div>
    </section>
    </>
  )
}
export default Contact