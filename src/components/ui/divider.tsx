type Props = {
  bgColor?: string
}

export default function Divider({bgColor}: Props) {
  return (
    <div className={`${bgColor} w-full text-center flex items-center`}>
      <div className="inline-block mx-auto w-1/2 border-stone-100" style={{borderTop: '0.2px solid gray'}}></div>
    </div>
  )
}
