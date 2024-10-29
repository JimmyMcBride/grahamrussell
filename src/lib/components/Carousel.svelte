<script>
	export let images = [];
	export let folder;
	let currentIndex = 0;
	let loadedImages = new Array(images.length).fill(false);

	const handleImageLoad = (index) => {
		loadedImages[index] = true;
	};

	const prevSlide = () => {
		currentIndex = (currentIndex - 1 + images.length) % images.length;
	};

	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	const getAltText = (image) => image.split('/').pop().split('.')[0].replace(/-/g, ' ');
</script>

<div id="default-carousel" class="relative w-full" data-carousel="slide">
	<!-- Carousel wrapper with responsive height -->
	<div
		class="relative h-[25rem] sm:h-[30rem] md:h-[35rem] lg:h-[40rem] overflow-hidden rounded-lg bg-gray-700 bg-opacity-20"
	>
		{#each images as image, index}
			<div
				class={`${
					index === currentIndex ? 'block' : 'hidden'
				} duration-700 ease-in-out absolute inset-0 flex items-center justify-center`}
				data-carousel-item
			>
				<!-- Skeleton UI -->
				{#if !loadedImages[index]}
					<div class="bg-gray-300 animate-pulse h-full w-full"></div>
				{/if}
				<!-- Image with event listener to handle loading -->
				<img
					src={`/${folder}/${image}`}
					alt={getAltText(image)}
					class="absolute block -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 h-full object-contain"
					on:load={() => handleImageLoad(index)}
					style="display: {loadedImages[index] ? 'block' : 'none'}"
				/>
			</div>
		{/each}
	</div>

	<!-- Slider indicators -->
	<div class="absolute z-30 flex -translate-x-1/2 bottom-3 left-1/2 space-x-2">
		{#each images as _, i}
			<button
				type="button"
				class={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-gray-400' : 'bg-gray-600'} md:w-3 md:h-3`}
				aria-current={i === currentIndex}
				aria-label={`Slide ${i + 1}`}
				on:click={() => (currentIndex = i)}
			></button>
		{/each}
	</div>

	<!-- Slider controls -->
	<button
		on:click={prevSlide}
		class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
		data-carousel-prev
	>
		<span
			class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-red-800/30 group-hover:bg-white/50 dark:group-hover:bg-red-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
		>
			<svg
				class="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-gray-800 rtl:rotate-180"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 6 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M5 1 1 5l4 4"
				/>
			</svg>
			<span class="sr-only">Previous</span>
		</span>
	</button>
	<button
		on:click={nextSlide}
		class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-2 sm:px-4 cursor-pointer group focus:outline-none"
		data-carousel-next
	>
		<span
			class="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/30 dark:bg-red-800/30 group-hover:bg-white/50 dark:group-hover:bg-red-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
		>
			<svg
				class="w-3 h-3 sm:w-4 sm:h-4 text-white dark:text-gray-800 rtl:rotate-180"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 6 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 9l4-4-4-4"
				/>
			</svg>
			<span class="sr-only">Next</span>
		</span>
	</button>
</div>
