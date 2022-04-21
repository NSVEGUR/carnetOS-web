<script lang="ts">
</script>

<div id="backstore" style="display: none">
	<section id="app-about">
		<div id="dbOS">
			<div class="DBMS">
				<img src="carnetOS.png" alt="carnet" />
				<h1 class="title">carnetOS</h1>
				<h3>A data driven clone of macOS</h3>
				<p>
					This is a phase 2 DBMS project. Still in development and will be extended to phase to
					using databases. This is purely made with plane html, css and js. No framework, No
					bundling and No dependency:)
				</p>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-about {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.DBMS {
		text-align: justify;
		padding: 10px;
		color: var(--system-text-color);
		width: 90%;
		margin: auto auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		img {
			margin-top: 10rem;
			max-width: 100%;
			min-height: 300px;
			max-height: 450px;
			border-radius: 20px;
			object-fit: cover;
		}
		h1 {
			text-align: center;
		}
		.title {
			margin-top: 2rem;
			text-align: start;
		}
		h3 {
			color: var(--system-transparent-color-secondary-op);
			margin-bottom: 2rem;
		}
	}
</style>
