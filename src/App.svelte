<script>
	import { onMount } from "svelte";
	import Empty from "./Empty.svelte";

	export let countdown = 10;
	export let details = {};

	let View = Empty;

	let timer;

	const handleSetup = async () => {
		const parser = new UAParser();
		details = parser.getResult();
		console.log(details);
		View = (await import("./Errors/Firefox.svelte")).default;
	};

	onMount(async () => {
		timer = setInterval(() => {
			countdown -= 1;
			if (countdown === 0) {
				clearInterval(timer);
			}
		}, 1000);
	});
</script>

<svelte:component this={View}>
	<main>
		<p>Andrew is a Creative Technologist based in Amsterdam.</p>
		<p>Senior Developer at Random Studio.</p>
		<div>
			<a
				href="https://github.com/fightwithcrayon"
				target="_blank"
				rel="noopener"
			>
				Github
			</a>
			<a href="mailto:contact@andrewthomashill.co.uk">Email</a>
			<a href="https://random.studio" target="_blank" rel="noopener"
				>Random Studio</a
			>
			<a href="https://www.twitter.com/drawfloat" class="dead">Twitter</a>
		</div>
		<div class="countdown">{countdown}</div>
		<img
			src={`http://localhost:3000/screenshot?url=https://expressjs.com/en/starter/hello-world.html&width=${window.innerWidth}&height=${window.innerHeight}`}
			width={window.innerWidth}
		/>
		<script
			on:load={handleSetup}
			src="https://cdn.jsdelivr.net/npm/ua-parser-js/src/ua-parser.min.js"></script>
	</main>
</svelte:component>

<style>
	@font-face {
		font-family: "Graphik Web";
		font-weight: 400;
		src: local("Graphik Regular Web"), local("Graphik Web"),
			url("./assets/fonts/Graphik-Regular-Web.woff") format("woff"),
			local("Graphik Regular"), local("Graphik");
	}
	body {
		font: "Graphik Web";
	}
	.dead {
		text-decoration: line-through;
	}
	img {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
	}
</style>
