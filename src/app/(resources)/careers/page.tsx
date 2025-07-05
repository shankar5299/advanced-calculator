import { Careers } from '@/modules/resources/careers';
import React from 'react'

const Page = async () => {
    await new Promise((res) => setTimeout(res, 1000));

    return <Careers />
}

export default Page