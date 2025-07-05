import { About } from '@/modules/resources/about';
import React from 'react'

const Page = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return <About />
}

export default Page