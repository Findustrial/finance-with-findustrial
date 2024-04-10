// import solidLogo from './assets/solid.svg'
import { Show } from 'solid-js'

function App({ style, url }) {

  const _style = style || 'default'
  const _url = url || 'https://findustrial.io/de/photovoltaik-finanzierung'

  const text = "Jetzt flexibel finanzieren statt kaufen!"

  // redirect to url

  return (
    <>
      <Show when={_style === 'default'}>
        <a href={_url} class="inline-block rounded-[4px] py-3 px-4 text-base bg-[#003993] text-white text-center">
          <p class="font-medium leading-none">{text}</p>
          <span class="font-normal text-xs tracking-wide leading-none">powered by Findustrial</span>
        </a>
      </Show>
      <Show when={_style === 'dark'}>
      <a href={_url} class="inline-block rounded-[4px] py-3 px-4 text-base bg-[#323232] text-white text-center">
          <p class="font-medium leading-none">{text}</p>
          <span class="font-normal text-xs tracking-wide leading-none">powered by Findustrial</span>
        </a>
      </Show>
      <Show when={_style === 'light'}>
      <a href={_url} class="inline-block rounded-[4px] py-3 px-4 text-base border border-1 border-[#003992] bg-white text-center">
          <p class="font-medium leading-none text-[#003992]">{text}</p>
          <span class="font-normal text-xs tracking-wide leading-none text-[#323232]">powered by Findustrial</span>
        </a>
        </Show>
    </>
  )
}

export default App
