import React, { useState,useEffect } from 'react';


const Contact = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[message,setMsg]=useState("")
   
  const backendurl="https://portfolio-backend-mae6.onrender.com";

   
   useEffect(() => {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.setAttribute('autocomplete', 'off'));
  }, []);

 const handleSubmit = async (e) => {
    e.preventDefault();
   const formData={name,email,message}
    try{
     const response = await fetch(`${backendurl}/contact`, {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify(formData),
     
     });
   
   if(response.ok){
     alert('Contact added successfully!');
       
      
     } else {
       alert('Error adding contact');
     }
   } catch (error) {
     alert('Error: ' + error.message);
   }

  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>Name:</label>
      <input type="text" name="name" autoComplete="new-name"  value={name} onChange={(e)=>setName(e.target.value) } required />
      
      <label>Email:</label>
      <input type="email" name="email" autoComplete="new-name"  value={email} onChange={(e)=>setEmail(e.target.value)} required />
      
      <label>Message:</label>
      <textarea name="message" value={message} autoComplete="new-name"  onChange={(e)=>setMsg(e.target.value)} required />
      
      <button type="submit">Submit</button>
    </form>
  );
};

export default Contact;
