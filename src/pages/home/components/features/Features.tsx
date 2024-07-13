import {Card} from '@/components/ui/card'
import Section from '@/components/ui/section'
import {faBell, faCalendar, faCheck, faLink, faList, faPeopleGroup, faShop} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

type Props = {}

export default function Features({}: Props) {
  return (
    <Section bgColor="bg-white" paddingY="20">
      <div className="w-full block py-">
        <h3 className="text-center text-3xl font-bold text-primary mb-5" style={{textWrap: 'balance'}}>
          All the features you may need!
        </h3>
      </div>
      <div className="w-full lg:w-1/3 p-5 inline-block">
        <Card className="p-5 shadow-xl">
          <div className=" flex items-center mb-5">
            <div className=" flex justify-center items-center rounded-md bg-orange-300 w-10 h-10 text-white me-4">
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <h3 className="text-xl text-primary font-bold text-indigo-800">Dynamic Calendar</h3>
          </div>
          <div>
            <ul className="ms-5 text-sm text-stone-400">
              <li className="">View all bookings related to your clinics</li>
              <li>Filter by collaborators, clinics and more</li>
              <li>Google calendar Sync Real time update</li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 p-5 inline-block">
        <Card className="p-5 shadow-xl">
          <div className=" flex items-center mb-5">
            <div className=" flex justify-center items-center rounded-md bg-rose-300 w-10 h-10 text-white me-4">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </div>
            <h3 className="text-xl text-primary font-bold text-indigo-800">Team Collaboration</h3>
          </div>
          <div>
            <ul className="ms-5 text-sm text-stone-400">
              <li>Add team member to your clinic</li>
              <li>Check all team agenda in one place</li>
              <li>Manage Collaborator services</li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 p-5 inline-block">
        <Card className="p-5 shadow-xl">
          <div className=" flex items-center mb-5">
            <div className=" flex justify-center items-center rounded-md bg-violet-400 w-10 h-10 text-white me-4">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <h3 className="text-xl text-primary font-bold text-indigo-800">Patients Notifications</h3>
          </div>
          <div>
            <ul className="ms-5 text-sm text-stone-400">
              <li>Confirmation email</li>
              <li>Remainder email 24h before visit</li>
              <li>Booking cancellation alert</li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 p-5 inline-block">
        <Card className="p-5 shadow-xl">
          <div className=" flex items-center mb-5">
            <div className=" flex justify-center items-center rounded-md bg-orange-400 w-10 h-10 text-white me-4">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <h3 className="text-xl text-primary font-bold text-indigo-800">Personal Booking Page</h3>
          </div>
          <div>
            <ul className="ms-5 text-sm text-stone-400">
              <li>Patients can book directly online</li>
              <li>Personal Link to place in your website</li>
              <li>No account required while booking</li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 p-5 inline-block">
        <Card className="p-5 shadow-xl">
          <div className=" flex items-center mb-5">
            <div className=" flex justify-center items-center rounded-md bg-green-300 w-10 h-10 text-white me-4">
              <FontAwesomeIcon icon={faList} />
            </div>
            <h3 className="text-xl text-primary font-bold text-indigo-800">Patients History</h3>
          </div>
          <div>
            <ul className="ms-5 text-sm text-stone-400">
              <li>Keep track of all your patients</li>
              <li>View all patients booking history</li>
              <li>Check all notes and info in one place</li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="w-full lg:w-1/3 p-5 inline-block">
        <Card className="p-5 shadow-xl">
          <div className=" flex items-center mb-5">
            <div className=" flex justify-center items-center rounded-md bg-lime-300 w-10 h-10 text-white me-4">
              <FontAwesomeIcon icon={faShop} />
            </div>
            <h3 className="text-xl text-primary font-bold text-indigo-800">Multi Clinics</h3>
          </div>
          <div>
            <ul className="ms-5 text-sm text-stone-400">
              <li>Keep track of all your patients</li>
              <li>View all patients booking history</li>
              <li>Check all notes and info in one place</li>
            </ul>
          </div>
        </Card>
      </div>
    </Section>
  )
}
