import {Button} from '@/components/ui/button'
import Logo from '@/components/common/logo/Logo'
import {Link} from 'react-router-dom'

type Props = {}

export default function MainMenu({}: Props) {
  return (
    <div className="w-full bg-white py-4">
      <div className="container">
        <div className="flex justify-between">
          <div>
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="hidden md:block">
            <Button variant="default" className=" rounded-full px-10">
              <a href="https://app.plannermed.com/signup" target="_blank">
                Start Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
