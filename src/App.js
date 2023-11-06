import React, { useState } from 'react'
import { CgMail } from 'react-icons/cg'
import { FaLocationDot } from 'react-icons/fa6'
import { BiSolidPhone } from 'react-icons/bi'
import { FaTelegram } from 'react-icons/fa'
import { IoEarthSharp } from 'react-icons/io5'
function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject:"",
  })
  const [data, setData] = useState([])
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setData((prevData) => [...prevData, formData])
    e.target.formData=''
    setFormData({
      name: "",
      email: "",
      message: "",
      subject:""
    });
  }

  return (
    <div className="App">
      <div className='flex-row items-center justify-center'>
        <div className='items-center justify-center flex w-full h-screen '>
          <form onSubmit={handleSubmit}>
            <div className='bg-white shadow-2xl p-8'>
              <h1 className='text-3xl'>Get in touch</h1>
              <div className='grid grid-flow-col gap-3 py-3'>
                <input type='text' className='bg-transparent border-2 p-2' placeholder='Name' value={formData.name} onChange={handleChange} name='name' />
                <input type='email' className='bg-transparent border-2 p-2' placeholder='Email' value={formData.email} onChange={handleChange} name='email' />
              </div>
              <div className='grid grid-flow-row gap-3 '>
                <input type='text' className='bg-transparent border-2 p-2 w-full' placeholder='Subject' value={formData.subject} onChange={handleChange} name='subject' />

                <textarea rows="4" cols="50" className='border-2 p-2' name='message' value={formData.message} onChange={handleChange} placeholder='Message' >

                </textarea>
              </div>
              <input type='submit' className='bg-blue-500 text-white p-3 rounded-lg mt-3' placeholder='Submit Message' />

            </div>
          </form>
          <div className='w-1/4 bg-blue-500 p-16 text-white text-lg rounded-sm flex-row gap-4 '>
            <h1 className='text-3xl py-4'>Contact Us</h1>
            <div className='flex gap-2 '><span className='bg-blue-400 text-white   aspect-square h-[40px] rounded-full flex items-center justify-center'><FaLocationDot size={15} /></span><div><span><b>Address:</b></span>198   West 21th <span>Street,Suite 721 New York NY</span></div></div>
            <div className='flex gap-2 mt-3'><span className='bg-blue-400 text-white   aspect-square h-[40px] rounded-full flex items-center justify-center'><BiSolidPhone size={15} /></span><span><b>Phone:</b></span>+ 1235 2355 98</div>
            <div className='flex gap-2 mt-3'><span className='bg-blue-400 text-white   aspect-square h-[40px] rounded-full flex items-center justify-center'><FaTelegram size={15} /></span><span><b>Email:</b></span>info@yoursite.com</div>
            <div className='flex gap-2 mt-3'><span className='bg-blue-400 text-white   aspect-square h-[40px] rounded-full flex items-center justify-center'><IoEarthSharp size={15} /></span><span><b>Website </b></span>yoursite.com</div>
          </div>
        </div>

        <div className='flex-row '>
          {data.map((dt, i) => {
            const initials = dt.name.split(" ").map((word) => word[0].toUpperCase()).join("");
            return (
              <div className='flex-col gap-3 bg-blue-100 w-2/6 p-4 ml-auto border-b-2 border-gray-500' key={i}>
                <p className='flex gap-4'>
                  <span className='bg-green-500 text-white p-4 aspect-square h-[60px] rounded-full text-center'>
                    {initials}
                  </span>
                  <span className='flex-row'>
                    <b>
                      <span>{dt.name}</span>
                    </b>
                    <span className='flex gap-3'>
                      <span className='text-blue-900'>
                        <CgMail size={30} />
                      </span>
                      <b>
                        <span className='text-blue-900'>Email:</span>
                      </b>
                      <span className='text-blue-800'>{dt.email}</span>
                    </span>
                    <span>{dt.message}</span>
                  </span>
                </p>
              </div>
            );
          })}


        </div>
      </div>
    </div>
  );
}

export default App;