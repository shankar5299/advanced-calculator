import { Scientific } from '@/modules/calculator/ui/components/scientific'
import React from 'react'

const Page = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return <Scientific />
}

export default Page