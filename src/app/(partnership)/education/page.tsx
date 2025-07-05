import { Education } from '@/modules/partnership/education'
import React from 'react'

const Page =async () => {
    await new Promise((res) => setTimeout(res ,1000));
  return <Education/>
}

export default Page