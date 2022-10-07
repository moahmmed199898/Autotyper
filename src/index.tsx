import React, { useEffect, useState } from 'react';

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
/**
 * A custom Thing component. Neat!
 */

export type Props = {
  children: string,
  className?: string,
  speed?: number
}

export function AutoTyper(props: Props) {
  const split = props.children.split("")
  const [display, setDisplay] = useState("")

  useEffect(() => {
    let currentIndex = 0
    let oldLetters = "";
    const typer = setInterval(() => {
      const temp = oldLetters + split[currentIndex]
      oldLetters = temp;
      setDisplay(oldLetters)
      currentIndex++;
      if (currentIndex === split.length) clearInterval(typer)
    }, 10000/(props.speed && props.speed > 0 ? props.speed : 1))
  }, [])

  return <div className={props.className}>
    <span>{display}</span>
  </div>
}
