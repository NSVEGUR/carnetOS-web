<script lang="ts">
	function showDev(e: any) {
		const devId = e.target.dataset?.dev;
		const devAbouts: NodeListOf<HTMLElement> = document.querySelectorAll('.dev-text');
		devAbouts.forEach((about) => {
			about.style.display = 'none';
		});
		const activeDev: HTMLElement = document.querySelector(`[data-devabout="${devId}"]`);

		activeDev.style.display = 'block';
	}
</script>

<div id="backstore" style="display: none">
	<section id="app-developers">
		<div class="dev-nav">
			<div data-dev="1" class="dev" on:click={showDev}>Ravi</div>
			<div data-dev="2" class="dev" on:click={showDev}>Praveen</div>
			<div data-dev="3" class="dev" on:click={showDev}>Harsha</div>
		</div>
		<div class="dev-about">
			<div data-devabout="1" class="dev-text">
				Ravi Id voluptate incididunt sit aute exercitation exercitation qui voluptate sint. Sint
				esse sit officia aute minim sint qui cillum ea ex labore adipisicing. Pariatur ex esse
				exercitation veniam excepteur aliquip amet. Eiusmod non adipisicing excepteur voluptate
				occaecat fugiat adipisicing ea dolor tempor ad esse nulla. Cillum enim pariatur elit
				adipisicing deserunt qui aliqua velit tempor. Voluptate aliqua quis veniam nisi consequat
				pariatur ea.
			</div>
			<div data-devabout="2" class="dev-text">
				praveen Id id excepteur incididunt exercitation sit. Laborum reprehenderit duis ex
				incididunt in culpa labore laboris enim. Enim officia reprehenderit aliquip laborum ipsum ut
				velit ipsum tempor mollit velit.
			</div>
			<div data-devabout="3" class="dev-text">
				Harsha Veniam laboris velit nisi enim in duis. Ea do sunt voluptate laborum. Sunt magna
				consectetur ut ad. Magna proident tempor sunt consectetur ea labore duis excepteur. Sit
				voluptate exercitation minim sit laboris pariatur.
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-developers {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 10px;
		.dev-nav {
			display: flex;
			flex-direction: column;
			width: 30%;
			height: 100%;
		}
		[data-devabout='2'],
		[data-devabout='3'] {
			display: none;
		}
	}
</style>
