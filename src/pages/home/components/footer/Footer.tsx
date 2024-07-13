import Section from '@/components/ui/section'
import LogoWhite from '@/components/common/logo/LogoWhite'

export default function ContactSection() {
  return (
    <Section bgColor="bg-primary">
      <div className="w-full flex flex-wrap text-white font-light justify-between mb-10 py-28">
        <div className="w-full md:w-4/12 mb-14 text-4xl">
          <div className="">
            <LogoWhite />
            <p className="text-xs font-extralight text-indigo-400 mt-1 block">Trademark 2024 - all right reserved</p>
          </div>
        </div>
        <div className="w-full md:w-3/12 mb-14">
          <h4 className="text-lg font-bold mb-5">Contacts</h4>
          <a className="block mb-2" href="mailto:info@plannermed.com">
            info@plannermed.com
          </a>
          <a className="block mb-2" href="mailto:marketing@plannermed.com">
            marketing@plannermed.com
          </a>
          <a className="block mb-2" href="mailto:workwithus@plannermed.com">
            workwithus@plannermed.com
          </a>
        </div>
        <div className="w-full md:w-2/12 mb-14">
          <h4 className="text-lg font-bold mb-5">Legal</h4>
          <a href="#" target="_blank" className="block mb-2">
            Privacy Policy
          </a>
          <a href="#" target="_blank" className="block mb-2">
            Cookie Policy
          </a>
          <a href="#" target="_blank" className="block mb-2">
            General Conditions
          </a>
        </div>
        <div className="w-full md:w-2/12 mb-14">
          <h4 className="text-lg font-bold mb-5">Admin</h4>
          <a className="block mb-2" href="https://app.plannermed.com/login">
            Login
          </a>
          <a className="block mb-2" href="https://app.plannermed.com/signup">
            Signup
          </a>
        </div>
      </div>
      <div className="w-full text-indigo-300 font-thin mb-20">
        <p>
          <span className="text-white">Plannermed© 2024</span> | property of plannermed SpA - All right reserved - comany based in italy with fiscal coverage of 10.000 euro
        </p>
      </div>
    </Section>
  )
}
