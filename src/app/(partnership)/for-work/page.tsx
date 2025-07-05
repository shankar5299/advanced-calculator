import { ForWork } from '@/modules/partnership/forwork'
import React from 'react'

const Page =async () => {
    await new Promise((res) => setTimeout(res , 1000));
    return <ForWork />
}

export default Page
