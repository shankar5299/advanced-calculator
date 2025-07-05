import { HomePage } from "@/modules/home/ui/components/home-page";

export default async function Home() {
  await new Promise((res) => setTimeout(res, 1000));

  return <HomePage />
}
