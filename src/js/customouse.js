import { gsap } from "gsap"

const pointer = document.querySelector('#pointer')

const customouseInit = () => {
	window.addEventListener('mousemove', (e) => {
		const x = e.clientX;
		const y = e.clientY;

		// pointer.style.transform = `translate3d(${x+6.5}px, ${y+5}px, 0)`
		gsap.to('#pointer', { duration: 0.3, x: (x+6.5), y: (y+5), ease: "power1.out" });
	})

	document.body.addEventListener('mouseenter', (e) => {
		gsap.to('#dot', { duration: 0.1, height: '.7rem', width: '.7rem', ease: "power1.out" } )
	})
	document.body.addEventListener('mouseleave', (e) => {
		gsap.to('#dot', { duration: 0.1, height: '0rem', width: '0rem', ease: "power1.out" } )
	})
}

export { customouseInit }