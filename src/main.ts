import App from './App.svelte';

const app_meta: AppMeta = {
	title: "Azura-Web",
	rich_title: "Azura Music Player",
	description: "Azura Music Player as a Web-PWA",
	author: "Stridsvagn69420",
	github: "https://github.com/Stridsvagn69420/Azura-Web",
	license: "EUPL-1.2"
}

const app = new App({
	target: document.body,
	props: {
		indev: true,
		meta: app_meta
	}
});

export default app;