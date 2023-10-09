// src\components\Contact.jsx

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      'service_0xmh5nd',
      'template_ikz5q6a',
      formRef.current,
      'T6alslNFfNvD8k9S_' 
    ).then(() => {
      setLoading(false);
      alert("Your message has been sent to me successfully! I will reply to you as soon as possible. Thank you!");

      setForm({
        name: "",
        email: "",
        message: ""
      })
    }), (error) => {
      setLoading(false);
      alert("Sorry, your message has not been sent. Please try again later.");
  }
  }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      {/* Create a form to sent visitors' name, email and message to my email address */}
      <motion.div 
        variants={slideIn("left","tween", 0.2, 1)}
        className='xl:w-1/3 w-full bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Send Me a Message</p>
        <p className={styles.sectionHeadText}>Contact</p>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-10'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>

            <input 
              type="text" name='name' value={form.name} onChange={handleChange} 
              placeholder='What should I call you?' 
              className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>

            <input 
              type="text" name='email' value={form.email} onChange={handleChange} 
              placeholder='This is the email I will reply to.' 
              className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>

            <textarea 
              rows="10" name='message' value={form.message} onChange={handleChange} 
              placeholder='Please leave your message and I will get back to you as soon as possible.' 
              className='bg-tertiary px-6 py-4 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium' 
            />
          </label>

          <button type="submit" className='bg-tertiary px-8 py-3 outline-none w-fit text-orange font-bold  rounded-xl shadow-md shadow-primary  '>
            {loading? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div variants={
        slideIn("right","tween", 0.2, 1)}
        className='xl:w-2/3 w-full xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

export default SectionWrapper(Contact, "contact");