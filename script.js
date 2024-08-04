'use strict'
const rootElement = document.documentElement
const bodyElement = document.body
const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const menuItems = document.querySelectorAll('nav li')

const toggleMenu = () => {
	rootElement.classList.toggle('menu-open')
	bodyElement.classList.toggle('locked')
	menuItems.forEach((item, i) => {
		if (item.classList.contains(`slide-in-${i + 1}`)) {
			item.classList.replace(`slide-in-${i + 1}`, `slide-out-${i + 1}`)
		} else if (item.classList.contains(`slide-out-${i + 1}`)) {
			item.classList.replace(`slide-out-${i + 1}`, `slide-in-${i + 1}`)
		} else {
			item.classList.add(`slide-in-${i + 1}`)
		}
	})
}

menuBars.addEventListener("click", toggleMenu)

overlay.addEventListener("click", (e) => {
	if (e.target.closest('.nav-link')) {
		toggleMenu()
	}
})