import Image from 'next/image'
import React from 'react'
export default function page() {
  return (
    <div>page
      <img width={200} height={200} src=" https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg" alt=""/>
      <Image 
        src="https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg" 
        height={200} 
        width={200} 
        alt='capybara'>
      </Image>
      <Image
        src={"https://gaubongonline.vn/wp-content/uploads/2024/02/Capybara-nuoc-mui-rut-8.jpg"}
        alt='anh gau bong'
        height={200}
        width={200}
      >
      </Image>
      <Image
        src={""}
      >

      </Image>
    </div>
  )
}
