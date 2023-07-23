'use client'
import { Icon } from "react-icons-kit"
import {ic_mail} from 'react-icons-kit/md/ic_mail'
import {ic_question_answer} from 'react-icons-kit/md/ic_question_answer'
import {ic_portrait} from 'react-icons-kit/md/ic_portrait'
import Form from "../components/Form"
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Contact = () => {

    const contactCard = [
      {
        id:0,
        icon : (<Icon icon={ic_mail} style={{color:'#BA110C'}} size={50}/>),
        name : 'Email',
        info_1 : 'Monday to Friday',
        inof_2 : 'response time: 72 hours',
        button: 'Send Email -> '
      },
      {
        id:1,
        icon : (<Icon icon={ic_portrait} style={{color:'#BA110C'}} size={50}/>),
        name : 'Live Chat',
        info_1 : 'Weekdays: 9 AM - 6 PM',
        inof_2 : 'Weekends: 9 AM - 5 PM',
        button: 'Chat Now -> '
      },
      {
        id:2,
        icon : (<Icon icon={ic_question_answer} style={{color:'#BA110C'}} size={50}/>),
        name : 'Community Forum',
        info_1 : 'Monday to Friday Expected',
        inof_2 : 'response time: 72 hours',
        button: 'Ask The Community -> '
      },
    ]
  useEffect(() => {
Aos.init({duration:1000})
  },[])

  return (
    <div className="flex flex-col py-6 justify-between items-center bg-gradient-to-b from-black to-red-900">
      <h1 className="text-stone-200 text-4xl font-bold">Contact <span className="text-red-600">Us</span></h1>
      <div className="flex flex-wrap justify-between items-center w-[80%]">
        {
          contactCard.map((item) => (
            <div key={item.id} data-aos='flip-right' className="flex flex-col justify-center gap-3 items-center p-4 text-sm border-2 w-[300px] rounded-md mt-7 text-stone-300">
              <span>{item.icon}</span>
              <p className="font-bold">{item.name}</p>
              <div className="text-center">
                <p>{item.info_1}</p>
              <p>{item.inof_2}</p>
              </div>
              <button>{item.button}</button>
            </div>
          ))
        }
      </div>
      <br /><br />
      <div>
        <h1 className="text-2xl font-bold text-stone-200 text-center">We&apos;d love to hear <span className="text-red-600">from You</span></h1>
        < Form/>
        <br />
        <iframe className="sm:inline-block hidden w-screen" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.341013568887!2d81.03767749123409!3d21.065851122370837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2945974c4968a9%3A0x1099add1b9c303a7!2sSingdai%2C%20Chhattisgarh%20491441!5e0!3m2!1sen!2sin!4v1688698688260!5m2!1sen!2sin" width={1530} height={400} style={{border:'0'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact