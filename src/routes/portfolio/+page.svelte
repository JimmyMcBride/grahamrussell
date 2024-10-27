<script>
	import Carousel from '$lib/components/Carousel.svelte';
	export let data;
	let { projects } = data;
</script>

<section class="container mx-auto p-8 text-center">
	<div class="flex flex-col gap-4 px-4 py-10">
		{#each projects as { folder, images }}
			<div>
				<h2 class="h2 my-8">{folder}</h2>
				<Carousel {folder} {images} />
				<p class="my-8 text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius,
					turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin
					mauris.
				</p>
			</div>
		{/each}
	</div>
</section>
