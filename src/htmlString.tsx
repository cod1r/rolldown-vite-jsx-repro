/** @jsx h */
import { h, render } from './svgJSX'

export function getHTMLString() {
  const res = render(<div>hi</div>)
  if (res && "outerHTML" in res) return res.outerHTML
  throw Error("res is null")
}
