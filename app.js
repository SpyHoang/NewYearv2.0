const fireworkContainer = document.querySelector('.fireworks-container')
const daySpan = document.querySelector('#days')
const hourSpan = document.querySelector('#hours')
const minuteSpan = document.querySelector('#minutes')
const secondSpan = document.querySelector('#seconds')
const year = document.querySelector('#year')

const newYear = new Date().getFullYear() + 1

year.innerText = newYear

const countToDate = new Date(newYear, 0, 1).getTime()


const countdown = () =>{
    const now = new Date().getTime()

    const distance = countToDate - now

    const days = Math.floor(distance / (24*60*60*1000))
    const hours = Math.floor((distance % (24*60*60*1000)) / (60*60*1000) )
    const minutes = Math.floor((distance % (60*60*1000)) / (60*1000) )
    const seconds = Math.floor((distance % (60*1000)) / (1000) )
    
    daySpan.innerText = days
    hourSpan.innerText = hours
    minuteSpan.innerText = minutes
    secondSpan.innerText = seconds


    if(distance < 0){
        clearInterval(countdownInterval)
    }
}

countdown 

const countdownInterval = setInterval(countdown, 1000)



const fireworks = new Fireworks(fireworkContainer, {
    speed: 4,
    acceleration: 1.05,
    friction: 1,
    particles: 400,
    explosion: 10
})

fireworks.start()

