import {Button} from '@/components/ui/button'
import {Card} from '@/components/ui/card'
import Section from '@/components/ui/section'

type Props = {}

export default function Pricing({}: Props) {
  return (
    <Section>
      <div className="py-20 md:px-20 w-full">
        <div className="text-center mb-20">
          <h2 className=" text-5xl text-primary font-extrabold">
            Growing your <span className="text-secondary">clinic?</span>
            <br />
            <span className="text-indigo-400">Plannermed </span>grow with you!
          </h2>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-10 md:mb0 md:pe-10">
            <Card className="p-10">
              <div className="text-center py-10 mb-2 border-b-gray-500 border-b-2">
                <h3 className="text-primary font-extrabold text-3xl mb-5">Free Plan</h3>
                <p className="text-stone-400 font-extralight leading-4 italic">
                  Forever free.
                  <br />
                  No credit card requiered
                </p>
              </div>
              <div className="text-lg font-extralight text-stone-400 leading-10">
                <ul className="ms-5 my-10">
                  <li>Personal Calendar </li>
                  <li>Online Booking</li>
                  <li>Services: up to 5</li>
                  <li>Collaborator: up to 2</li>
                  <li>Collaboration: unlimited</li>
                  <li> Bookings: unlimited</li>
                </ul>
              </div>
              <div>
                <Button size={'lg'} asChild className="w-full">
                  <a href="https://app.plannermed.com/signup" target="_blank">
                    Open Account
                  </a>
                </Button>
              </div>
            </Card>
          </div>
          <div className="w-full lg:w-1/3 mb-10 md:mb0 md:pe-10">
            <Card className="p-10 bg-accent text-primary-foreground ">
              <div className="text-center py-10 mb-2 border-b-white border-b-2">
                <h3 className="font-extrabold text-5xl mb-5">Premium</h3>
                <p className="font-extralight leading-4 italic">Take advantage of promo price for friends and family.</p>
              </div>
              <div className=" text-xl leading-10">
                <ul className="ms-5 my-10">
                  <li>Personal Calendar Online Booking Services: up to 5 Collaborator: up to 2 Collaboration: unlimited Bookings: unlimited</li>
                  <li>Personal Calendar</li>
                  <li>Online Booking</li>
                  <li>Services: up to 5</li>
                  <li>Collaborator: up to 2</li>
                  <li>Collaboration: unlimited</li>
                  <li> Bookings: unlimited</li>
                </ul>
              </div>
              <div>
                <Button size={'lg'} variant={'outline'} className="w-full">
                  Coming soon
                </Button>
              </div>
            </Card>
          </div>
          <div className="w-full lg:w-1/3 mb-10 md:mb0 md:pe-10">
            <Card className="p-10">
              <div className="text-center py-10 mb-2 border-b-gray-500 border-b-2">
                <h3 className="text-primary font-extrabold text-3xl mb-5">Corporate</h3>
                <p className="text-stone-400 font-extralight leading-4 italic">
                  Forever free.
                  <br />
                  No credit card requiered
                </p>
              </div>
              <div className="text-lg font-extralight text-stone-400 leading-10">
                <ul className="ms-5 my-10">
                  <li>Personal Calendar</li>
                  <li>Online Booking</li>
                  <li>Services: up to 5</li>
                  <li>Collaborator: up to 2</li>
                  <li>Collaboration: unlimited</li>
                  <li> Bookings: unlimited</li>
                </ul>
              </div>
              <div>
                <Button size={'lg'} className="w-full">
                  Coming soon
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  )
}
