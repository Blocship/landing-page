import React from 'react'
import SubHeading from '../headings/SubHeading'
import SectionHeading from '../headings/SectionHeading'
import SectionText from '../text/SectionText'

export default function AppDevelopmentProcess() {
  return (
    <div className='flex flex-col gap-4 justify-center mt-12'>
      <div className='max-w-[1100px] mx-auto'>
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
      </div>
      
      
    </div>
  )
}
