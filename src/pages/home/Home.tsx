import MainMenu from '@/pages/home/components/menu/MainMenu'

import Features from './components/features/Features'
import CommercialPro from './components/commercialPro/CommercialPro'
import Pricing from './components/pricing/Pricing'
import CommercialCal from './components/commercialCal/CommercialCal'
import Footer from './components/footer/Footer'

type Props = {}

export default function Home({}: Props) {
  return (
    <main className="w-full bg-gray">
      <MainMenu />
      <CommercialCal />
      <Features />
      <CommercialPro />
      <Pricing />
      <Footer />
    </main>
  )
}
