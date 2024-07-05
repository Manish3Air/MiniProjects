let hour_hand = document.querySelector('.hour-hand')
let min_hand = document.querySelector('.min-hand')
let sec_hand = document.querySelector('.sec-hand')
let dh_hand = document.querySelector('.dh')
let dm_hand = document.querySelector('.dm')
let ds_hand = document.querySelector('.ds')
let clock=document.querySelector('.clock')



setInterval(() => {
    let date = new Date()
    let sec = date.getSeconds()
    let min = date.getMinutes()
    let hour = date.getHours()
    
    let hrotation = 30 * hour + min / 2
    let mrotation = 6 * min
    let srotation = 6 * sec

    hour_hand.style.transform = `rotate(${hrotation}deg)`
    min_hand.style.transform = `rotate(${mrotation}deg)`
    sec_hand.style.transform = `rotate(${srotation}deg)`

    let displayHour = hour % 12
    displayHour = displayHour ? displayHour : 12 

    dh_hand.innerHTML = displayHour < 10 ? '0' + displayHour : displayHour
    dm_hand.innerHTML = min < 10 ? '0' + min : min
    ds_hand.innerHTML = sec < 10 ? '0' + sec : sec

    


    let val1h = Math.ceil(Math.random() * 255)
    let val2h = Math.ceil(Math.random() * 255)
    let val3h = Math.ceil(Math.random() * 255)

    clock.style.backgroundColor = `rgba(${val3h},${val1h},${val2h},${0.09})` 

    hour_hand.style.backgroundColor = `rgb(${val1h},${val2h},${val3h})`

    min_hand.style.backgroundColor = `rgb(${val2h},${val1h},${val3h})`

    sec_hand.style.backgroundColor = `rgb(${val3h},${val2h},${val1h})`

    dh_hand.style.color = `rgb(${val1h},${val2h},${val3h})`

    dm_hand.style.color = `rgb(${val2h},${val1h},${val3h})`

    ds_hand.style.color = `rgb(${val3h},${val2h},${val1h})`

}, 1000)