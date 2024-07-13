import Section from '@/components/ui/section'
import docDancingYellow from '/img/homepage/doc_dancing_1.png'
import {Button} from '@/components/ui/button'

type Props = {}

export default function CommercialPro({}: Props) {
  return (
    <Section bgColor={'bg-white'}>
      <div className="py-11">
        <div className="flex w-full flex-wrap justify-center items-center pb-20">
          <div className="w-full md:w-4/12">
            <h2 className="font-extrabold text-primary text-6xl mb-5">The ultimate calendar for sanitary pro.</h2>
          </div>
          <div className=" flex justify-center w-full md:w-4/12 text-center md:pe-10 md:mb-0 mb-10">
            <img className=" rounded-3xl" src={docDancingYellow} alt="happy with plannermed"></img>
          </div>
          <div className="w-full md:w-4/12">
            <p className="font-extrabold text-emerald-300 text-lg ">General Practitioner - Dentist - Psychologist - Physiotherapist - Chiropractor - Podiatrist - Speech Therapist - Midwife - Optometrist - Dermatologist - Cardiologist - Gastroenterologist - Gynecologist - Pediatrician - Orthopedic - Ophthalmologist - Urologist - Allergist - Dietitian/Nutritionist</p>
            <p className="font-extrabold text-emerald-300 text-lg mb-10">And more...</p>
          </div>
        </div>
        <div className="w-full pb-20 text-center">
          <Button size={'lg'} className="rounded-full w-1/2">
            Join the family
          </Button>
        </div>
      </div>
    </Section>
  )
}
