// import solidLogo from './assets/solid.svg'
import { Show } from 'solid-js'
import logo from './assets/image.png'
import logoDark from './assets/image_dark.png'

function App({ style, url }) {

  const _style = style || 'default'
  const _url = url || 'https://findustrial.io/de/photovoltaik-finanzierung'

  const text = "Jetzt flexibel finanzieren statt kaufen!"

  // redirect to url
  const buttonStyles = {
    "default":  "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base bg-[#003993] text-white text-center",
    "dark":     "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base bg-[#323232] text-white text-center",
    "light":    "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base border border-1 border-[#003992] bg-white text-center"
  }

  const textBaseStyle = "font-medium text-lg "
  
  return (
    <>
      <Show when={_style === 'default'}>
        <a href={_url} class={buttonStyles[_style]}>
          <p class={textBaseStyle}>{text}</p>
          <span class="flex items-center justify-center font-normal text-xs tracking-wide">powered by <img src={logo} class="h-[21px] ml-1"></img></span>
        </a>
      </Show>
      <Show when={_style === 'dark'}>
      <a href={_url} class={buttonStyles[_style]}>
          <p class={textBaseStyle}>{text}</p>
          <span class="flex items-center justify-center font-normal text-xs tracking-wide">powered by <img src={logo} class="h-[21px] ml-1"></img></span>
        </a>
      </Show>
      <Show when={_style === 'light'}>
      <a href={_url} class={buttonStyles[_style]}>
          <p class={textBaseStyle + 'text-[#003992]'}>{text}</p>
          <span class="flex items-center justify-center font-normal text-xs tracking-wide">powered by <img src={logoDark} class="h-[21px] ml-1"></img></span>
        </a>
        </Show>
    </>
  )
}

export default App
