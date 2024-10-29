<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<section class="flex justify-center mt-16 flex-wrap">
	<Avatar src="/graham.png" width="w-96" rounded="rounded-full" class="m-8" />
	<div class="gap-y-4 flex flex-col max-w-full p-8">
		<h1 class="h1">
			<span
				class="bg-gradient-to-br dark:from-tertiary-300 dark:to-primary-500 from-secondary-500 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
			>
				Hi, I'm Graham Russell.
			</span>
		</h1>
		<h2
			class="text-3xl font-bold my-8 w-full bg-gradient-to-br dark:from-tertiary-300 dark:to-secondary-500 from-secondary-500 to-primary-500 bg-clip-text text-transparent box-decoration-clone"
		>
			Marketing Specialist & Operations Manager with a Creative Edge
		</h2>

		<div class="max-w-4xl">
			<p class="text-xl">
				I’m Graham Russell, an Asheville-based operations manager and marketing specialist with a
				passion for delivering creative solutions and improving processes. With a background in
				advertising, graphic design, and supply chain distribution, I aim to bring streamlined
				efficiency and captivating media strategies to your business.
			</p>

			<div class="flex flex-wrap gap-4 mt-8">
				<div
					class="rounded-full bg-primary-400-500-token bg-primary-hover-token w-10 h-10 flex justify-center items-center p-1"
				>
					<a href="https://www.tiktok.com/@crucifixati0n?_t=8qwA9RjnXpP&_r=1" target="_blank">
						<img src="/tik-tok.png" size="md" alt="tik tok icon" />
					</a>
				</div>
				<div
					class="rounded-full bg-primary-400-500-token bg-primary-hover-token w-10 h-10 flex justify-center items-center p-1"
				>
					<a href="https://www.youtube.com/@Crucifixation" target="_blank">
						<img src="/youtube.png" size="md" alt="youtube icon" />
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
<section class="mt-16">
	<div class="flex justify-center flex-wrap gap-32 mx-32">
		<div class="flex flex-col text-center">
			<p class="text-primary-900-50-token text-6xl">130k+</p>
			<p class="text-primary-600-300-token">TikTok Followers</p>
		</div>
		<div class="flex flex-col text-center">
			<p class="text-primary-900-50-token text-6xl">1.6m+</p>
			<p class="text-primary-600-300-token">Likes</p>
		</div>
		<div class="flex flex-col text-center">
			<p class="text-primary-900-50-token text-6xl">11m+</p>
			<p class="text-primary-600-300-token">Total Views</p>
		</div>
		<div class="flex flex-col text-center">
			<p class="text-primary-900-50-token text-6xl">10+</p>
			<p class="text-primary-600-300-token">Years of Experience</p>
		</div>
	</div>
</section>

<section class="my-16 flex justify-center flex-wrap gap-4">
	<div class="card variant-ringed-primary p-4 w-96 max-w-[90%]">
		<Icon name="atom-solid" class="h-12 w-12 mb-4 text-primary-500-400-token" />
		<h3 class="h2">Process-Driven</h3>
		<hr class="mb-4" />
		<p>
			With a strong foundation in operational management and process improvement, I specialize in
			streamlining workflows and optimizing resource allocation. Leveraging ERP systems and
			conducting regular audits, I ensure efficiency and accuracy, consistently meeting production
			targets across all projects.
		</p>
	</div>
	<div class="card variant-ringed-primary p-4 w-96 max-w-[90%]">
		<Icon name="scale-balance-solid" class="h-12 w-12 mb-4 text-primary-500-400-token" />
		<h3 class="h2">Versatile Marketing Specialist</h3>
		<hr class="mb-4" />
		<p>
			Experienced in digital and in-store marketing, I bring expertise in managing social media and
			creating multimedia assets to boost customer engagement. From designing brand-aligned
			materials to hosting live events, I excel in crafting compelling experiences that drive
			visibility and customer loyalty.
		</p>
	</div>
	<div class="card variant-ringed-primary p-4 w-96 max-w-[90%]">
		<Icon name="chart-pie-solid" class="h-12 w-12 mb-4 text-primary-500-400-token" />

		<h3 class="h2">Customer-Focused Designer</h3>
		<hr class="mb-4" />
		<p>
			With a background in graphic design and print, I deliver visually engaging content tailored to
			client needs. From concept to final production, I ensure each project aligns with brand
			standards and communicates effectively, using tools like Adobe Creative Suite to bring ideas
			to life in print and digital formats.
		</p>
	</div>
</section>
