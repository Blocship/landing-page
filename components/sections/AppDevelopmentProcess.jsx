import React from 'react'
import SubHeading from '../headings/SubHeading'
import SectionHeading from '../headings/SectionHeading'
import SectionText from '../text/SectionText'
import Image from 'next/image'
import Block from './AppDevelopmentProcess/Block'

export default function AppDevelopmentProcess() {
  return (
    <div className='max-w-[1100px] mx-auto py-[150px] px-5'>
      <SubHeading className='mb-4 md:mb-6 lg:mb-[30px]'>Our App Development Process</SubHeading>
      <div className='flex flex-col gap-5'>
        <SectionHeading className='text-center'>Better & Great Experience</SectionHeading>
        <SectionText className='text-center'>
          Our process begins with understanding the needs and goals of our clients, 
          followed by the planning and design phase. We then move on to development and testing, 
          and conclude with the deployment and maintenance of the app. Throughout the process, 
          we maintain close communication with our clients to keep them informed of progress and 
          to ensure that their needs are being met.
        </SectionText>
      </div>
      
      <div className='mt-[80px] lg:mt-[100px] grid md:grid-cols-4 md:grid-rows-5 justify-center gap-[70px]'>
        {
          [
            {
              id: 0,
              title: `Planning and concept development`,
              content: `This stage involves defining the app's goals, target audience, and features`,
              imagePath: `/planning.webp`,
              cssClass: `md:row-start-1 md:col-start-1`
            },
            {
              id: 1,
              title: `Design and development`,
              content: `In this stage, the app's user interface and functionality are created and tested`,
              imagePath: `/design.webp`,
              cssClass: `md:row-start-2 md:col-start-2`
            },
            {
              id: 2,
              title: `Testing and debugging`,
              content: `Before the app is released, it is thoroughly tested to ensure that it is stable and free of errors`,
              imagePath: `/testing.webp`,
              cssClass: `md:row-start-3 md:col-start-3`
            },
            {
              id: 3,
              title: `Deployment`,
              content: `Once the app is built, it is released and made available for users to download. Ongoing maintenance is also important to fix any bugs and add new features`,
              imagePath: `/deployment.webp`,
              cssClass: `md:row-start-4 md:col-start-4`
            }
          ].map(({id, title, content, imagePath, cssClass}) => {
            return <Block key={id} id={id} cssClass={cssClass} title={title} content={content} imagePath={imagePath} />;
          })
        }
      </div>
      
    </div>
  )
}
