import { Matrix } from '@/modules/calculator/ui/components/matrix'
import React from 'react'

const Page = async () => {
    await new Promise((res) => setTimeout(res, 1000));
    return <Matrix />
}

export default Page