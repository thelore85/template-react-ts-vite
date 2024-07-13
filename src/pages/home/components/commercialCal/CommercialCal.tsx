import {Button} from '@/components/ui/button'
import {Link} from 'react-router-dom'
import commercialProImg from '/img/homepage/doc_group_calendar.png'
import Section from '@/components/ui/section'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCheck} from '@fortawesome/free-solid-svg-icons'

type Props = {}

export default function CommercialCal({}: Props) {
  return (
    <Section>
      <div className="flex flex-wrap items-center pb-10">
        <div className="w-full md:w-6/12 mt-10 md:pe-10 mb-10 md:mb-0 text-center">
          <img className=" mx-auto rounded-3xl w-full" src={commercialProImg} alt="Planner Med Agenda" style={{maxWidth: '90%'}} />
        </div>
        <div className="w-full md:w-6/12 text-center md:text-left">
          <div className="mb-16">
            <h2 className="text-6xl text-primary font-bold mb-10 md:mt-10 leading-15">
              Your <span className="text-teal-400">med</span> agenda for daily <span className="text-indigo-400">planning</span>
            </h2>
            <p className="font-extralight text-blue-950 text-2xl hidden md:block">
              <FontAwesomeIcon icon={faCheck} className="me-2" /> Collect and Manage bookings. <br />
              <FontAwesomeIcon icon={faCheck} className="me-2" /> Keep Control of your agenda
            </p>
          </div>
          <div>
            <Button size="lg" variant="secondary" asChild className="rounded-full me-4">
              <Link to="/login">Start Now</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="rounded-full">
              <Link to="/login">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
