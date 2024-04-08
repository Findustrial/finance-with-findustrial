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
  return Promise.all([
    loadStyle('./dist/style.css'),
    loadScript('./dist/finance-with-findustrial.umd.cjs')
  ])
})()
