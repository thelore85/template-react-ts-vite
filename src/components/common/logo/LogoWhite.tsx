import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type Props = {}

export default function LogoWhite({}: Props) {
  return (
    <div className="">
      <FontAwesomeIcon icon={faCalendarDay} className="me-2 text-white" />
      <span className="text-white font-extralight me-1">planner</span>
      <span className="text-white font-extrabold">med</span>
    </div>
  )
}
