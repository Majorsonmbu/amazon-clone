import React from 'react'
import { Link } from 'react-router-dom'
import Product from './Product'
import "./Products.css"


export default function Products() {
  return (
   <>
     <div className='products-row'>
      <Product 
        id="1" 
        title=" Seagate Portable 2TB External Hard Drive Portable 
            HDD - USB 3.0 for PC, Mac, PlayStation & Xbox - 1-Year 
            Rescue Service (STGX2000400)"
        image='https://m.media-amazon.com/images/I/81tjLksKixL._AC_UL320_.jpg'
        rating= "4"
        price= "$59.99"
       />

      <Product 
        id="1234567" 
        title="Razor Cynosa Chroma Gaming Keyboard: Individually Backlit
        RGB Keys - Spill-Resistant Design - Programmable Macro
        Functionality - Quiet & Cushioned"
        image='https://images-na.ssl-images-amazon.com/images/I/61WgmLgwuQL.__AC_SX300_SY300_QL70_FMwebp_.jpg'
        rating= "5"
        price= "349.99"
       />
    </div>

    <div className='products-row'>
        <Product 
          id="1434569" 
          title="AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop
          Processor with Wraith Stealth Cooler"
          image='https://m.media-amazon.com/images/I/61vGQNUEsGL._AC_UL320_.jpg'
          rating= "5"
          price= "288.89"
        />

        <Product 
          id="12365487" 
          title="Soundance Laptop Stand, Aluminum Computer Riser,
          Ergronomic Laptops Elevator for Desk, Metal Holder Compatible
          with 10 to 15.6 Inches Notebook Computer, Silver"
          image='https://m.media-amazon.com/images/I/81MN9l2nl2S._AC_UL320_.jpg'
          rating= "5"
          price= "27.99"
       />

        <Product 
          id="12345567" 
          title="H390 Wired Headset, Stereo Headphones with
          Noise-Cancelling Microphone"
          image='https://m.media-amazon.com/images/I/61CqYq+xwNL._AC_UL320.jpg'
          rating= "5"
          price= "349.99"
       />
    </div>

    <div className='products-row'>
      <Product 
        id="12345367" 
        title="Sceptre 24 inch Professional Thin 75Hz 1080p LED Monitor
        2x HDMI VGA Build-in Speakers, Machine Black (E248W-19203R Series)"
        image='https://m.media-amazon.com/images/I/71rXSVqET9L._AC_UL320_.jpg'
        rating= "3"
        price= "193.49"
       />
    </div>
   </>
  )

}

