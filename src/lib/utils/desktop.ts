import { dontRef } from './Menu/dont-ref';

export function loadDesktop() {
	setTimeout(() => {
		document.getElementById('splash').style.display = 'none';
		document.querySelector('main').style.animation = 'fadein 0.5s forwards ease-in-out';
		document.getElementById('dock').style.animation = 'appearFromBottom 0.7s forwards ease-in-out';
		document.querySelector('main').style.display = 'block';
		dontRef();
	}, 2500);
}

export function manageFullScreen(e: any) {
	if (e.target.closest('nav') || e.target.closest('.dock-el')) return;
	if (window.innerWidth == screen.width && window.innerHeight == screen.height) {
		document.exitFullscreen();
	} else {
		try {
			document.body.requestFullscreen();
		} catch (err) {
			console.log(err);
		}
	}
}
