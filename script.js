//-------- Clock -------- //
const hour = document.getElementById('clock-hour');
const minutes = document.getElementById('clock-minutes');
const seconds = document.getElementById('clock-seconds');

const clock = () => {
    let date = new Date();

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6;

    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000) // 1000 = 1s

// ----- Clock & Date Text -----
const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textAmPm = document.getElementById('text-ampm'),
    dateDay = document.getElementById('date-day'),
    dateWeek = document.getElementById('date-week'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year');

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        mm = date.getMinutes(),
        day = date.getDate(),
        dayweek = date.getDay(),
        month = date.getMonth(),
        year = date.getFullYear()

    //We change the hours from 24 to 12 hours
    if (hh >= 12) {
        hh = hh - 12
        ampm = 'PM'
    }
    else {
        ampm = 'AM'
    }

    //We detect when it's 0AM and transform to 12AM
    if (hh == 0) {
        hh = 12
    }

    //Show a zero before hours
    if (hh < 10) {
        hh = `0${hh}`
    }

    //Show time
    textHour.innerHTML = `${hh}:`

    //Show a zero before the minutes
    if (mm < 10) {
        mm = `0${mm}`
    }

    //Show Minutes
    textMinutes.innerHTML = `${mm}`

    //Show am or pm
    textAmPm.innerHTML = ampm

    // If you want to show the name of the day of the week
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satday']

    // We get the months of the year and show it
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    //We show the day, the month and the year
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]}, `
    dateYear.innerHTML = year
    // dateWeek.innerHTML = `${week[dayweek]}`
}
setInterval(clockText, 1000)

// Dark and Light Theme
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// ------- color theme ----
let switches = document.getElementsByClassName('switch');

let style = localStorage.getItem('style');

if (style == null) {
    setTheme('green');
} else {
    setTheme(style);
}

for (let i of switches) {
    i.addEventListener('click', function () {
        let theme = this.dataset.theme;
        setTheme(theme);
    });
}

function setTheme(theme) {
    if (theme == 'green') {
        document.getElementById('switcher-id').href = 'theme/green.css';
    }
    else if (theme == 'blue') {
        document.getElementById('switcher-id').href = 'theme/blue.css';
    }
    else if (theme == 'orange') {
        document.getElementById('switcher-id').href = 'theme/orange.css';
    }
    else if (theme == 'pink') {
        document.getElementById('switcher-id').href = 'theme/pink.css';
    }
    localStorage.setItem('style', theme);
}



