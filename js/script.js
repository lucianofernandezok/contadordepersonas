
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

console.log(saveEl)

let count = 0

function increment() {

    count += 1
    countEl.textContent = count
}

function save() {
  let srtCount = count + " - "
  saveEl.textContent += srtCount
  countEl.textContent = 0
  count = 0
}



