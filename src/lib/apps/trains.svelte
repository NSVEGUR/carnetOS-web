<!-- svelte-ignore a11y-invalid-attribute -->
<script lang="ts">
</script>

<div id="backstore" style="display: none">
	<section id="app-trains">
		<div class="container">
			<div class="table">
				<div class="table-header">
					<div class="header__item">Train Name</div>
					<div class="header__item">From</div>
					<div class="header__item">To</div>
					<div class="header__item">Departure<span>(From)</span></div>
					<div class="header__item">Arrival<span>(To)</span></div>
				</div>
				<div class="table-content">
					<div class="table-row">
						<div class="table-data">Hogwarts Express</div>
						<div class="table-data">2</div>
						<div class="table-data">0</div>
						<div class="table-data">1</div>
						<div class="table-data">5</div>
					</div>
					<div class="table-row">
						<div class="table-data">Godawari Express</div>
						<div class="table-data">1</div>
						<div class="table-data">1</div>
						<div class="table-data">2</div>
						<div class="table-data">3</div>
					</div>
					<div class="table-row">
						<div class="table-data">Coramandel Express</div>
						<div class="table-data">0</div>
						<div class="table-data">2</div>
						<div class="table-data">2</div>
						<div class="table-data">2</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-trains {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.container {
		max-width: 1000px;
		margin-right: auto;
		margin-left: auto;
		display: flex;
		width: 100%;
		height: 100%;
		padding: 10px;
		justify-content: center;
		align-items: center;
	}

	.table {
		width: 100%;
		height: 100%;
	}

	.table-header {
		display: flex;
		gap: 30px;
		width: 100%;
		background: var(--system-text-color);
		color: var(--system-text-color-op);
		padding: 18px 10px;
	}

	.table-row {
		display: flex;
		width: 100%;
		gap: 30px;
		padding: 18px 10px;
		background: transparent;
		color: var(--system-text-color);
		&:nth-child(even) {
			background: var(--system-text-color-op);
		}
	}

	.table-data,
	.header__item {
		flex: 1 1 20%;
		text-align: center;
	}
	.header__item {
		span {
			margin-left: 3px;
			text-transform: none;
			font-size: 0.6rem;
		}
	}

	.header__item {
		text-transform: uppercase;
	}
</style>
