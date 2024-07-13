import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarDay} from '@fortawesome/free-solid-svg-icons'

type Props = {}

export default function Logo({}: Props) {
  return (
    <div className="text-3xl">
      <FontAwesomeIcon icon={faCalendarDay} className="me-2 text-secondary" />
      <span className="text-secondary font-extralight me-1">planner</span>
      <span className="text-primary font-extrabold">med</span>
    </div>
  )
}
