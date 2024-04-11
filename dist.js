// load js and css file from endpoint and mount them to the page

function loadScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    document.body.appendChild(script)
  })
}

function loadStyle(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = url
    link.onload = resolve
    link.onerror = reject
    document.head.appendChild(link)
  }
  )
}

(function loadApp() {

  // load the base url of the script that is being executed
  const script = document.currentScript
  const baseUrl = script.src.replace('dist.js', '')

  return Promise.all([
    loadStyle(baseUrl + 'dist/style.css'),
    loadScript(baseUrl + 'dist/finance-with-findustrial.js')
  ])
})()
