<script lang="ts">
	import { onMount } from 'svelte';
	function trigger(e: any) {
		const id = e.target.dataset?.bookingslink;
		show(id);
	}
	function show(id: number | string) {
		const links: NodeListOf<HTMLElement> = document.querySelectorAll('.bookings-links');
		const divs: NodeListOf<HTMLElement> = document.querySelectorAll('.bookings-div');
		divs.forEach((div) => {
			div.style.display = 'none';
		});
		links.forEach((link) => {
			link.classList.remove('active-bookings');
		});
		const active: HTMLElement = document.querySelector(`[data-bookings="${id}"]`);
		const activeLink: HTMLElement = document.querySelector(`[data-bookingslink="${id}"]`);
		activeLink.classList.add('active-bookings');
		active.style.display = 'flex';
	}
	onMount(() => {
		show(0);
	});
</script>

<div id="backstore" style="display: none">
	<section id="app-bookings">
		<div class="app-bookings">
			<div class="bookings-nav">
				<div data-bookingslink="0" class="bookings-links active-bookings" on:click={trigger}>
					<span><i class="fas fa-ticket-alt" /></span>Book Ticket
				</div>
				<div data-bookingslink="1" class="bookings-links" on:click={trigger}>
					<span><i class="fas fa-check-circle" /></span>My Tickets
				</div>
				<div class="bookings-links">
					<span><i class="fas fa-subway" /></span>Train Details
				</div>
			</div>
			<div class="bookings">
				<div data-bookings="0" class="bookings-div">
					<div class="places">
						<div class="input">
							<span class="prefix">
								<i class="fab fa-telegram-plane" />
							</span>
							<select id="from" name="from" form="to">
								<option value="">From</option>
								<option value="ashoka">Ashoka</option>
								<option value="ashwatha">Ashwatha</option>
								<option value="jasmine">Jasmine</option>
								<option value="gulmohar">Gulmohar</option>
								<option value="academics">Academics</option>
								<option value="admin">Admin</option>
								<option value="arjuna">Arjuna</option>
								<option value="cafetaria">Cafetaria</option>
								<option value="gate">Gate</option>
								<option value="akshaya">Akshaya</option>
							</select>
						</div>
						<div>
							<i class="fas fa-map-signs" />
						</div>
						<div class="input">
							<span class="prefix">
								<i class="fas fa-map-marker-alt" />
							</span>
							<select id="to" name="to" form="from">
								<option value="">To</option>
								<option value="ashoka">Ashoka</option>
								<option value="ashwatha">Ashwatha</option>
								<option value="jasmine">Jasmine</option>
								<option value="gulmohar">Gulmohar</option>
								<option value="academics">Academics</option>
								<option value="admin">Admin</option>
								<option value="arjuna">Arjuna</option>
								<option value="cafetaria">Cafetaria</option>
								<option value="gate">Gate</option>
								<option value="akshaya">Akshaya</option>
							</select>
						</div>
					</div>
					<div class="dates">
						<div class="input">
							<span class="prefix">
								<i class="fas fa-calendar" />
							</span>
							<input type="date" placeholder="Date of Journey" />
						</div>
						<div>
							<i class="fas fa-map-signs" />
						</div>
						<div class="input">
							<span class="prefix">
								<i class="fas fa-user-circle" />
							</span>
							<select id="class" name="class">
								<option value="">Class</option>
								<option value="general">General</option>
								<option value="ac">AC</option>
								<option value="woman">Woman</option>
							</select>
						</div>
					</div>
					<div class="search">Search Trains</div>
				</div>
				<div data-bookings="1" class="bookings-div">My Bookings</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-bookings {
		width: 100%;
		height: 100%;
	}
	.app-bookings {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 10px;
		color: var(--system-text-color);
		.bookings-nav {
			display: flex;
			flex-direction: column;
			position: sticky;
			left: 10px;
			top: 0;
			min-width: 20%;
			height: 100%;
			gap: 10px;
			padding-top: 30px;
			.bookings-links {
				border-radius: 8px;
				padding-left: 10px;
				display: flex;
				flex-direction: row;
				gap: 10px;
				justify-content: flex-start;
				align-items: center;
				span {
					font-size: 0.8rem;
				}
				&:hover {
					background: var(--system-transparent-color-primary-op);
				}
			}
		}
		.bookings {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: center;
			gap: 10px;
			.bookings-div {
				display: none;
				gap: 15px;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		}
		.active-bookings {
			background: var(--system-transparent-color-primary-op);
		}
	}
	.search {
		background: var(--system-transparent-color-primary-op);
		margin-top: 10px;
		padding: 0 13px;
		border-radius: 4px;
		font-size: 0.9rem;
		transition: all 0.3s linear;
		&:hover {
			box-shadow: var(--shadow-effect);
			background: var(--system-text-color);
			color: var(--system-text-color-op);
		}
	}
	.places {
		display: flex;
		flex-direction: row;
		gap: 10px;
	}
	.input {
		display: flex;
		align-items: center;
		max-width: 300px;
		background: #fff;
		border: 1px solid #a0a0a0;
		border-radius: 4px;
		padding-left: 0.5rem;
		overflow: hidden;
		.prefix {
			font-weight: 300;
			font-size: 14px;
			color: #999;
		}
		select,
		input {
			flex-grow: 1;
			font-size: 14px;
			background: #fff;
			border: none;
			outline: none;
			padding: 0.5rem;
			width: 200px;
		}
	}
	.dates {
		display: flex;
		flex-direction: row;
		gap: 10px;
		.fa-calendar {
			opacity: 0;
		}
		.fa-map-signs {
			opacity: 0;
		}
	}
</style>
