const darkmodeSwitch = document.querySelector('#darkmode-switch')
const hasDarkmode = localStorage.getItem('darkmode')

if(hasDarkmode == null) {
    if(windows,matchMedia('(prefers-color-scheme: dark)').matches){
        enableDarkmode()
    } else {
        disableDarkMode()
    }
} else if(hasDarkmode === 'on') {
    enableDarkmode()
} else if(hasDarkmode === 'off') {
       disableDarkMode()
}


darkmodeSwitch.addEventListener('change', () => {
if(darkmodeSwitch.checked) {
    enableDarkmode()
    localStorage.setItem('darkmode', 'on')
} else {
    disableDarkMode()
    localStorage.setItem('darkmode', 'off')
}
})

function enableDarkmode() {
  darkmodeSwitch.checked = true
  document.documentElemet.classList.add('dark')
}
function disableDarkMode() {
    darkmodeSwitch.checked = false
    document.documentElemet.classList.remove('dark')
}
