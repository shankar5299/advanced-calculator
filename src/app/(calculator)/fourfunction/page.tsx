import { FourFunction } from '@/modules/calculator/ui/components/fourfunction'

const Page = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  return <FourFunction />
}

export default Page