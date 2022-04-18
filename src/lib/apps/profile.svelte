<!--  svelte-ignore a11y-invalid-attribute-->
<script lang="ts">
	import { onMount } from 'svelte';
	function trigger(e: any) {
		const id = e.target.dataset?.profilelink;
		show(id);
	}
	function show(id: number | string) {
		const links: NodeListOf<HTMLElement> = document.querySelectorAll('.profile-links');
		const divs: NodeListOf<HTMLElement> = document.querySelectorAll('.profile-div');
		divs.forEach((div) => {
			div.style.display = 'none';
		});
		links.forEach((link) => {
			link.classList.remove('active-profile');
		});
		const active: HTMLElement = document.querySelector(`[data-profile="${id}"]`);
		const activeLink: HTMLElement = document.querySelector(`[data-profilelink="${id}"]`);
		activeLink.classList.add('active-profile');
		active.style.display = 'flex';
	}
	onMount(() => {
		show(0);
	});
</script>

<div id="backstore" style="display: none">
	<section id="app-profile">
		<div class="app-profile">
			<div class="profile-nav">
				<div data-profilelink="0" class="profile-links active-profile" on:click={trigger}>
					<span><i class="fas fa-user" /></span>My Profile
				</div>
				<div data-profilelink="1" class="profile-links" on:click={trigger}>
					<span><i class="fas fa-pencil-alt" /></span>Edit Email
				</div>
				<div data-profilelink="2" class="profile-links" on:click={trigger}>
					<span><i class="fas fa-key" /></span>Reset Pass
				</div>
				<div class="profile-links"><span><i class="fas fa-ticket-alt" /></span>My Bookings</div>
				<div class="profile-links"><span><i class="fas fa-cogs" /></span>Settings</div>
			</div>
			<div class="profile">
				<div data-profile="0" class="profile-div">
					<div class="profile-pic">
						<img src="profile.png" alt="profile" />
					</div>
					<div>
						<h3>anonymous@gmail.com</h3>
					</div>
				</div>
				<div data-profile="1" class="profile-div">
					<form>
						<input type="email" placeholder="Enter New Email" />
						<input type="email" placeholder="Confirm New Email" />
					</form>
					<div class="submit">Update Email</div>
				</div>
				<div data-profile="2" class="profile-div">
					<form>
						<input type="password" placeholder="Enter Old Password" />
						<input type="password" placeholder="Enter New Password" />
						<input type="password" placeholder="Confirm New Password" />
					</form>
					<div class="submit">Reset Password</div>
				</div>
			</div>
		</div>
	</section>
</div>

<style lang="scss">
	#app-profile {
		width: 100%;
		height: 100%;
	}
	.app-profile {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		gap: 10px;
		color: var(--system-text-color);
		.profile-nav {
			display: flex;
			flex-direction: column;
			position: sticky;
			left: 10px;
			top: 0;
			min-width: 20%;
			height: 100%;
			gap: 10px;
			padding-top: 30px;
			.profile-links {
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
		.profile {
			display: flex;
			flex-direction: column;
			width: 100%;
			height: 100%;
			justify-content: center;
			align-items: center;
			gap: 10px;
			form {
				display: flex;
				flex-direction: column;
				gap: 10px;
			}
			input {
				background: var(--system-transparent-color-primary-op);
				border-radius: 10px;
				padding: 10px;
				backdrop-filter: blur(30px);
				padding-left: 10px;
				outline: none;
				font-weight: 600;
				border: none;
				color: var(--system-text-color);
				caret-color: var(--system-transparent-color-secondary-op);
			}
			input:focus {
				border: solid 1px var(--system-text-color);
			}

			::placeholder {
				/* Chrome, Firefox, Opera, Safari 10.1+ */
				color: var(--system-transparent-color-secondary-op);
				opacity: 1; /* Firefox */
			}

			:-ms-input-placeholder {
				/* Internet Explorer 10-11 */
				color: var(--system-transparent-color-secondary-op);
			}

			::-ms-input-placeholder {
				/* Microsoft Edge */
				color: rgba(255, 255, 255, 0.5);
			}
			.profile-div {
				display: none;
				gap: 15px;
				flex-direction: column;
				align-items: center;
				.submit {
					font-size: 0.8rem;
					padding: 0 15px;
					background: var(--system-text-color);
					color: var(--system-text-color-op);
					border-radius: 20px;
					transition: all 0.3s ease;
					&:hover {
						background: var(--system-text-color-op);
						color: var(--system-text-color);
						box-shadow: var(--shadow-effect);
					}
				}
			}
			.profile-pic {
				background: var(--system-transparent-color-primary-op);
				height: 200px;
				width: 200px;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				img {
					max-width: 100%;
				}
			}
		}
		.active-profile {
			background: var(--system-transparent-color-primary-op);
		}
	}
</style>
