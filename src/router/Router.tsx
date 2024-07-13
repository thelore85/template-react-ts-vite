import {Routes, Route} from 'react-router-dom'
import Home from '@/pages/home/Home'

type Props = {}

export default function Router({}: Props) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}
