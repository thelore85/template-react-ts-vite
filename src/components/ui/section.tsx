import React from 'react'

type Props = {
  children: React.ReactNode
  bgColor?: string
  paddingY?: string
}

export default function Section({children, bgColor, paddingY = '0'}: Props) {
  return (
    <section className={`${bgColor} py-${paddingY} `}>
      <div className="container flex flex-wrap justify-center items-center">{children}</div>
    </section>
  )
}
