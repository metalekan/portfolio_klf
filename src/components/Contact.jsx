import React from 'react'

const Contact = () => {
  return (
    <section className='min-h-screen w-full borde flex flex-col text-white bg-black px-2 md:px-10 pb-20 md:pb-0'>
      <h1 className='text-center text-xl font-extrabold text_gradient'>Contact Me</h1>
      <h2 className='text-center md:text-lg'>Have a project idea? Feel free to send me a message.</h2>
      <form className='flex flex-col gap-4 mt-6' action="">
        <div className="w-full flex justify-between">
          <div className="flex flex-col gap-2 w-[45%]">
            <label className='font-bold' htmlFor="">Name</label>
            <input className='input' type="text" placeholder="Enter your name" />
          </div>

          <div className="flex flex-col gap-2 w-[45%]">
            <label className='font-bold' htmlFor="">Email</label>
            <input className='input' type="email" placeholder="Enter your email" />
          </div>

        </div>

        <div className="flex flex-col gap-2">
          <label className='font-bold' htmlFor="">Subject</label>
          <input className='input' type="text" />
        </div>

        <div className="flex flex-col gap-2">
          <label className='font-bold' htmlFor="">Message</label>
          <textarea className='input' cols="50" rows="10"></textarea>
          {/* <input className='input' type="text" /> */}
        </div>

        <button className='rounded btn_three bg-cyan hover:bg-white hover:text-cyan p-3 font-bold text-md md:text-lg'>Send Message</button>
      </form>
    </section>
  )
}

export default Contact