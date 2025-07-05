import { Help } from '@/modules/resources/help'
import React from 'react'

const Page = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return <Help />
}

export default Page
