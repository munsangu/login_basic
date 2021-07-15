const clock = document.querySelector("h2#clock")
const days = document.querySelector("h2#date")

function getClock() {
  const time = new Date()
  const year = time.getFullYear();
  const month = time.getMonth() +1;
  const day = time.getDate();
  const hours = String(time.getHours()).padStart(2,"0")
  const minutes = String(time.getMinutes()).padStart(2,"0")
  const seconds = String(time.getSeconds()).padStart(2,"0")
  days.innerText =`${year} / ${month} / ${day}`
  clock.innerText = `${hours} : ${minutes} : ${seconds}`
}

getClock()
setInterval(getClock, 1000)
