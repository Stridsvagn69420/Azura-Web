import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		indev: true,
		meta: {
			title: 'Svelte',
			description: 'Svelte is a framework for building user interfaces.',
			author: "",
			github: "https://github.com/Stridsvagn69420/Azura-Web",
			license: "EUPL-1.2"
		}
	}
});

export default app;