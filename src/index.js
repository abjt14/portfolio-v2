import './style.scss'
import { customouseInit } from './js/customouse'
import { MagneticElement } from './js/magneticElement'
import { gsap } from 'gsap'



if (window.innerWidth > 640) {
	// gsap init desktop
	let timelineInit = gsap.timeline()

	timelineInit
	.to('#cont-1 .title > span', { duration: 0, autoAlpha: 0, y: '10vh', rotate: 0.01 })
	.to('#cta-emoji', { duration: 0, autoAlpha: 0 })
	.to('#cta-text', { duration: 0, autoAlpha: 0 })
	.to('#cta-btn', { duration: 0, boxShadow: '0px 0px 0px 0px #adadad' })
	.to('#cta-foreground', { duration: 0, width: '0%' })
	.to('.gsap-hc', { duration: 0, autoAlpha: 0.001 })
	.to('#cont-1 .content .sub-title', { duration: 0, autoAlpha: 0.001 })
	.to('#cont-1 .title span', { duration: .7, delay: .5, stagger: .115, ease: 'power1.out', autoAlpha: 1, y: 0, rotate: 0.01 })
	.to('#cta-foreground', { duration: .25, width: '100%' })
	.to('#cta-emoji', { duration: 0, autoAlpha: 1 })
	.to('#cta-text', { duration: 0, autoAlpha: 1 })
	.to('#cta-btn', { duration: 0, boxShadow: '0px 0px 0px 1.5px #000' })
	.to('#cta-foreground', { duration: .5, left: '100%', width: '0%', })
	.to('.gsap-hc', { duration: 1, autoAlpha: 1 })
	.to('#cont-1 .content .sub-title', { duration: 1, autoAlpha: 1 }, '-=1')
	// gsap init desktop end




	// customouse
	customouseInit()
	// customouse end



	// cont 2 listing item hover
	gsap.to('#projects-img-cont', { duration: 0, opacity: 0 })

	document.querySelector('#projects .content .listing').addEventListener('mouseenter', (e) => {
		gsap.to('#projects-img-cont', { duration: .3, opacity: 1, ease: 'power1.out' })
		gsap.to('#dot', { duration: .1, height: '0rem', width: '0rem', ease: 'power1.out' })
	})

	document.querySelector('#projects .content .listing').addEventListener('mouseleave', (e) => {
		gsap.to('#projects-img-cont', { duration: .3, opacity: 0, ease: 'power1.out' })
		gsap.to('#dot', { duration: .1, height: '.7rem', width: '.7rem', ease: 'power1.out' } )
	})

	document.querySelectorAll('#projects .content .listing a.item').forEach(element => {
		const imageName = element.querySelector('.number').innerText + '.png';

		element.addEventListener('mouseenter', (e) => {
			document.querySelector('#projects-img-cont img').setAttribute('src', `./src/images/projects/${imageName}`)
		})
	})
	// cont 2 listing item hover end



	// magnetize
	window.addEventListener('DOMContentLoaded', (e) => {
		new MagneticElement('a#cta-btn');
	})
	// magnetize end



	// scroll button hide
	document.addEventListener('scroll', (e) => {
		let offset = window.scrollY / document.body.offsetHeight

		// hide/show go to top
		if (offset > .90) {
			document.querySelector('#go-to-top').classList.add('hc-hide')
			// document.querySelector('.hot-corner.hc-top-left .bg').classList.add('hc-hide')
		} else {
			document.querySelector('#go-to-top').classList.remove('hc-hide')
			// document.querySelector('.hot-corner.hc-top-left .bg').classList.remove('hc-hide')
		}
		// hide/show go to top end
	})
	// scroll button hide end



	// gsap hot corners mouse interaction
	document.querySelectorAll('.hot-corner button').forEach(element => {
		element.addEventListener('mouseenter', (e) => {
			gsap.to('#dot', { duration: .1, height: '4rem', width: '4rem', ease: 'power1.out' })
		})
		element.addEventListener('mouseleave', (e) => {
			gsap.to('#dot', { duration: .1, height: '.7rem', width: '.7rem', ease: 'power1.out' } )
		})
	});
	document.querySelectorAll('.hot-corner a').forEach(element => {
		element.addEventListener('mouseenter', (e) => {
			gsap.to('#dot', { duration: .1, height: '4rem', width: '4rem', ease: 'power1.out' })
		})
		element.addEventListener('mouseleave', (e) => {
			gsap.to('#dot', { duration: .1, height: '.7rem', width: '.7rem', ease: 'power1.out' } )
		})
	});
	document.querySelectorAll('.social-links a').forEach(element => {
		element.addEventListener('mouseenter', (e) => {
			gsap.to('#dot', { duration: .1, height: '4rem', width: '4rem', ease: 'power1.out' })
		})
		element.addEventListener('mouseleave', (e) => {
			gsap.to('#dot', { duration: .1, height: '.7rem', width: '.7rem', ease: 'power1.out' } )
		})
	});
	// gsap hot corners mouse interaction end



	// contact container parallax
	gsap.to('.gsap-parallax', { duration: 0, y: document.body.scrollHeight*.7 })

	window.addEventListener('scroll', (e) => {
		let offset = 1 - window.scrollY / (document.body.scrollHeight)
		gsap.to('.gsap-parallax', { duration: 0, y: document.body.scrollHeight*.7*offset })
	})
	// contact container parallax end
} else {
	// gsap init desktop
	let timelineInit = gsap.timeline()

	timelineInit
	.to('#cont-1 .mobile-title', { duration: 0, autoAlpha: 0, y: '10vh', rotate: 0.01 })
	.to('#cont-1 .content .sub-title', { duration: 0, autoAlpha: 0, y: '10vh', rotate: 0.01 })
	.to('#cta-emoji', { duration: 0, autoAlpha: 0 })
	.to('#cta-text', { duration: 0, autoAlpha: 0 })
	.to('#cta-btn', { duration: 0, boxShadow: '0px 0px 0px 0px #adadad' })
	.to('#cta-foreground', { duration: 0, width: '0%' })
	.to('.gsap-hc', { duration: 0, autoAlpha: 0.001 })
	.to('#cont-1 .mobile-title', { duration: .7, delay: .5, stagger: .115, ease: 'power1.out', autoAlpha: 1, y: 0, rotate: 0.01 })
	.to('#cont-1 .content .sub-title', { duration: .7, delay: .15, ease: 'power1.out', autoAlpha: 1, y: 0, rotate: 0.01 }, '-=.7')
	.to('#cta-foreground', { duration: .25, width: '100%' })
	.to('#cta-emoji', { duration: 0, autoAlpha: 1 })
	.to('#cta-text', { duration: 0, autoAlpha: 1 })
	.to('#cta-btn', { duration: 0, boxShadow: '0px 0px 0px 1.5px #000' })
	.to('#cta-foreground', { duration: .5, left: '100%', width: '0%', })
	.to('.gsap-hc', { duration: 1, autoAlpha: 1 })
	// gsap init desktop end
}