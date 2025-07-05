import { Design } from '@/modules/partnership/design-principers'
import React from 'react'

const Page = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return <Design />
}

export default Page
