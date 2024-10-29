<script>
	import Carousel from '$lib/components/Carousel.svelte';
	export let data;
	let { projects } = data;
</script>

<section class="container mx-auto p-8 text-center">
	<div class="flex flex-col gap-4 px-4 py-10">
		{#each projects as { folder, images, title, tools, description }}
			<div>
				<h2 class="h2 my-8">{title}</h2>
				<Carousel {folder} {images} />
				<p class="my-4 text-xl"><strong>Tools Used:</strong> {tools}</p>
				<p class="my-8 text-lg">
					{description}
				</p>
			</div>
		{/each}
	</div>
</section>
