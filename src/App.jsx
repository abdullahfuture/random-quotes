import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion' 

// create a full axios request instance chatgpt
const App = () => {
const [quote, setQuote] = useState('');
const getQuote = async () => {
  axios.get('https://api.quotable.io/random')
  .then((res) => {
    setQuote(res.data.content)
  })
  .catch((err) => {
    console.log(err)
  })
}

  return (
    <>
    {/* start the full axios request */}
    <motion.div className="grid place-items-center   border-none  rounded-md border-4 py-3 px-3 border-purple-300 border-spacing-3   bg-slate-500 w-fit h-fit center-it ">
            {
        quote &&
     
   (<p
   whileInView="fade-in bg-black "
   
   className="   rounded-md text-white">
    {quote}
   </p> )
  } <br />
      <button className=" outline-none text-slate-500 border-none   w-fit rounded-md  py-0 bg-white " onClick={getQuote}>
   Get Quote
      </button>

    </motion.div >
       
        
    </>
  )
}

export default App
