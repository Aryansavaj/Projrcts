import React from "react"

type Props = {
  blackText: string
  blueText?: string
  isBlock?: boolean
  className?: string
  textClassName?: string
  children?: React.ReactNode
}

export default function Titleh6({
  blackText,
  blueText,
  isBlock,
  className,
  textClassName,
  children
}: Props) {
  return (
    <h6
      className={`${
        textClassName ? textClassName : "text-[26px] lg:text-[22px]"
      } leading-[2rem] lg:leading-[3rem] font-bold mb-8 ${className}`}
    >
      <span className={`${isBlock && "block"}`}>{blackText}</span>
      <span className={`text-primary `}> {blueText}</span>
      {children}
    </h6>
    
  )
}
