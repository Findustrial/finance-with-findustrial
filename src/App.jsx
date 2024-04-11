// import solidLogo from './assets/solid.svg'
import logo from './assets/image.png'
import logoDark from './assets/image_dark.png'

function App({ style, url }) {

  const _size = "medium"
  const _style = style || 'default'
  const _url = url || 'https://findustrial.io/de/photovoltaik-finanzierung'

  const text = "Jetzt flexibel finanzieren statt kaufen!"

  // redirect to url
  const buttonStyles = {
    "default":  {
      "small": "inline-block rounded-[4px] pt-2 pb-2 px-3 text-sm bg-[#003993] text-white text-center",
      "medium": "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base bg-[#003993] text-white text-center",
    },
    "dark": {
      "medium": "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base bg-[#323232] text-white text-center",
    },
    "light": {
      "medium": "inline-block rounded-[4px] pt-4 pb-3 px-5 text-base border border-1 border-[#003992] bg-white text-center",
    }
  }

  const pStyles = {
    "default": {
      "small": "text-sm",
      "medium": "font-medium text-lg",
    },
    "dark": {
      "medium": "font-medium text-lg text-white",
    },
    "light": {
      "medium": "font-medium text-lg text-[#003992]",
    }
  }
  
  const spanStyles = {
    "default": {
      "small": "flex items-center justify-center text-xs tracking-wide",
      "medium": "flex items-center justify-center font-normal text-xs tracking-wide",
    },
    "dark": {
      "medium": "flex items-center justify-center font-normal text-xs tracking-wide",
    },
    "light": {
      "medium": "flex items-center justify-center font-normal text-xs tracking-wide",
    }
  }
  
  const imgStyles = {
    "default": {
      "small": "h-[15px] ml-1",
      "medium": "h-[21px] ml-1",
    },
    "dark": {
      "medium": "h-[21px] ml-1",
    },
    "light": {
      "medium": "h-[21px] ml-1",
    }
  }
  
  return (
    <>
      <a href={_url} class={buttonStyles[_style][_size]}>
        <p class={pStyles[_style][_size]}>{text}</p>
        <span class={spanStyles[_style][_size]}>powered by <img src={_style === 'light' ? logoDark : logo} class={imgStyles[_style][_size]}></img></span>
      </a>
    </>
  )
}

export default App
