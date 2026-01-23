import { gsap, Elastic } from 'gsap'
import { useEffect, useRef, useState } from 'react'

type Props = {
  label: string
}

export const Switch = ({ label }: Props) => {
  const CIRCLE_WIDTH = 24

  const [state, setState] = useState(false)

  const switchRef = useRef<HTMLButtonElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const labelRef = useRef<HTMLSpanElement>(null)

  const t1 = gsap.timeline()

  useEffect(() => {
    if (state) {
      t1.to(
        circleRef.current,
        {
          duration: 0.5,
          x: CIRCLE_WIDTH,
          // backgroundColor: '#51ff0d',
          ease: Elastic.easeOut.config(1, 0.6),
        },
        'start',
      ).to(
        switchRef.current,
        {
          duration: 0.5,
          // borderColor: '#51ff0d',
        },
        'start',
      )

      return
    }

    t1.to(
      circleRef.current,
      {
        duration: 0.5,
        x: 0,
        backgroundColor: 'white',
        ease: Elastic.easeOut.config(1, 0.6),
      },
      'reverse',
    )
  })

  return (
    <div className="inline-flex items-center">
      <button
        type="button"
        ref={switchRef}
        className="w-[66px] h-[38px] px-2 bg-black content-center rounded-full cursor-pointer border-white border-2"
        onClick={() => setState((prev) => !prev)}
      >
        <div
          ref={circleRef}
          className="size-[24px] bg-white rounded-full"
        ></div>
      </button>
      <span ref={labelRef} className="text-lg">
        {label}
      </span>
    </div>
  )
}
