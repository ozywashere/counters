const counters = [...document.querySelectorAll('.counter__data')]

const updateCount = (el) => {
  const value = parseInt(el.dataset.value)
  const increment = Math.ceil(value / 200)
  let initial = 0
  const increaseCount = setInterval(() => {
    initial += increment
    el.innerText = initial
    if (initial >= value) {
      el.innerText = `${value} +`
      clearInterval(increaseCount)
    }
  }, 5)
}
counters.forEach((counter) => {
  updateCount(counter)
})
