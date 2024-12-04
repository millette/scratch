// npm
import type { Component } from 'solid-js'
import { createSignal } from 'solid-js'
import { Show } from 'solid-js/web'

type HelloProps = {
  on: string,
  off: string,
}

const [on, setOn] = createSignal(true)

function off() {
  return !on()
}

function toggle() {
  setOn(!on())
}

const Hello: Component<HelloProps> = (props) => {
  return <div on:click={toggle}>
    <Show when={on()}>
      <img src={props.on} alt="p1" />
    </Show>
    <Show when={off()}>
      <img src={props.off} alt="p2" />
    </Show>
  </div>
}

export default Hello
