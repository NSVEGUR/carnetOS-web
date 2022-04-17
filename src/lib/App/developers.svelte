<!--  svelte-ignore a11y-invalid-attribute-->
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
			<div data-dev="0" class="dev" on:click={showDev}>Developers</div>
			<div data-dev="1" class="dev" on:click={showDev}>Harsha</div>
			<div data-dev="2" class="dev" on:click={showDev}>Praveen</div>
			<div data-dev="3" class="dev" on:click={showDev}>Nagasai</div>
			<div data-dev="4" class="dev" on:click={showDev}>Ravindar</div>
			<div data-dev="5" class="dev" on:click={showDev}>Vineeth</div>
		</div>
		<div class="dev-about">
			<div data-devabout="0" class="dev-text" />
			<div data-devabout="1" class="dev-text">
				<div class="flex-container-data">
					<div class="flex-container-data-1">
						<ul>
							<a href="#">
								<li class="active-link">
									<i class="fas fa-user" />
									<span>About</span>
								</li>
							</a>
							<a href="https://harsha662002.github.io/Personal_Portfolio/" target="_blank">
								<li>
									<i class="fas fa-paint-brush" />
									<span>Website</span>
								</li>
							</a>
							<a href="https://github.com/Harsha662002" target="_blank">
								<li>
									<i class="fab fa-github" />
									<span>github</span>
								</li>
							</a>
							<a href="https://www.linkedin.com/in/harsha-vasireddy-9a12671ba/" target="_blank">
								<li>
									<i class="fab fa-linkedin-in" />
									<span>LinkedIn</span>
								</li>
							</a>
						</ul>
					</div>
					<div class="flex-container-data-2">
						<img src="/src/assets/harsha.png" alt="harsha pic" class="profile-pic" />
						<h2>Hi I'm Harsha Vasireddy</h2>
						<p>
							I am 2nd year Computer Science at IIITDM Kancheepuram.I am beginner in webdev with
							just 1 year experience and just want to go deep down into it.I have been in front-end
							webdev and hungry to learn backend also.
						</p>
						<p>
							It's just not been webdev, my other interests lie in competitive programming as well
							as I have been attempting quite a few contests.
						</p>
						<p>
							My non-academic stuff basically include my love for cricket,kabaddi and movies.I have
							even the background of baseball and was also a part of my school team.
						</p>
					</div>
				</div>
			</div>
			<div data-devabout="2" class="dev-text">
				<div class="flex-container-data">
					<div class="flex-container-data-1">
						<ul>
							<a href="#">
								<li class="active-link">
									<i class="fas fa-user" />
									<span>About</span>
								</li>
							</a>
							<a href="https://praveen-prav.github.io/Praveen/" target="_blank">
								<li>
									<i class="fas fa-paint-brush" />
									<span>Website</span>
								</li>
							</a>
							<a href="https://github.com/praveen-prav" target="_blank">
								<li>
									<i class="fab fa-github" />
									<span>github</span>
								</li>
							</a>
							<a href="https://www.linkedin.com/in/praveen-pravee-594521194" target="_blank">
								<li>
									<i class="fab fa-linkedin-in" />
									<span>LinkedIn</span>
								</li>
							</a>
						</ul>
					</div>
					<div class="flex-container-data-2">
						<img src="/src/assets/praveen.png" alt="harsha pic" class="profile-pic" />
						<h2>Hi I'm Praveen</h2>
						<p>
							I'm a 2nd year student from Computer science department at IIITDM Kancheepuram.
							Passionate about programming and Ethical Hacking. An optimistic person. I like to make
							things automate from the software side and interseted in AI programming. Also i
							started to learn frontend-dev, and want to go deep into it. I'm still at the beginners
							level in these things.
						</p>
						<p>
							Till now i'm good at C,C++,python, java, html & css. My hobbies are like learning new
							programming related concepts and watching movies, playing video games.
						</p>
					</div>
				</div>
			</div>
			<div data-devabout="3" class="dev-text">
				<div class="flex-container-data">
					<div class="flex-container-data-1">
						<ul>
							<a href="#">
								<li class="active-link">
									<i class="fas fa-user" />
									<span>About</span>
								</li>
							</a>
							<a href="https://nsvegur.github.io/Blog" target="_blank">
								<li>
									<i class="fas fa-paint-brush" />
									<span>Website</span>
								</li>
							</a>
							<a href="https://github.com/NSVEGUR" target="_blank">
								<li>
									<i class="fab fa-github" />
									<span>github</span>
								</li>
							</a>
							<a href="https://www.linkedin.com/in/nagasai-v-93b84921b" target="_blank">
								<li>
									<i class="fab fa-linkedin-in" />
									<span>LinkedIn</span>
								</li>
							</a>
						</ul>
					</div>
					<div class="flex-container-data-2">
						<img src="/src/assets/nagasai.png" alt="harsha pic" class="profile-pic" />
						<h2>Hi I'm Nagasai Vegur</h2>
						<p>
							I am a Developer, Designer and Coding enthusiast. I am passionate about Data Science,
							Web Dev, App Dev and Problem solving. I wanna learn something new, and enjoy trying
							out new technologies. Find my works in my gitty 😺.
						</p>
						<p>
							Present I am studying in 2nd year CSE in IIITDM Kancheepuram. Even got a quite
							experience in app development👨🏻‍💻 and game development. Life is not only about dev, I
							love watching movies, listening songs and playing cricket. Perfect🎧 which is my fav
							available in this dbOS playlist. Go check it out.
						</p>
						<p>
							I love to paint in frontend, respond in backend, script in types, build in apps and
							what not still learning many more things. (NVM I don't no much about them just
							learning things 👻)
						</p>
					</div>
				</div>
			</div>
			<div data-devabout="4" class="dev-text">
				<div class="flex-container-data">
					<div class="flex-container-data-1">
						<ul>
							<a href="#">
								<li class="active-link">
									<i class="fas fa-user" />
									<span>About</span>
								</li>
							</a>
							<a href="https://ravindar832.github.io/Blog/" target="_blank">
								<li>
									<i class="fas fa-paint-brush" />
									<span>Website</span>
								</li>
							</a>
							<a href="https://github.com/Ravindar832" target="_blank">
								<li>
									<i class="fab fa-github" />
									<span>github</span>
								</li>
							</a>
							<a href="http://linkedin.com/in/gugulothu-ravindar-85683a232" target="_blank">
								<li>
									<i class="fab fa-linkedin-in" />
									<span>LinkedIn</span>
								</li>
							</a>
						</ul>
					</div>
					<div class="flex-container-data-2">
						<img src="/src/assets/ravinder.png" alt="harsha pic" class="profile-pic" />
						<h2>Hi I'm Ravindar</h2>
						<p>
							I'm student from 2nd year cse department at IIITDM KANCHEEPURAM. I'm a beginner to
							web-devlopment 👷🏻. I am good with frontend and now exploring React framework.Working
							on react gives me good experience and making me to learn new things in front end from
							my past experience. I'm also learning UI design which helps me to make works
							attractive.
						</p>
						<p>
							Apart from my professional interests , I play sports like cricket ,kabaddi. Most of
							free times I listen to music, read novel stories. I'm also good at dance 🕺🏻. I love to
							traveldifferent places to experience the nature and people in different lifestyles
						</p>
					</div>
				</div>
			</div>
			<div data-devabout="5" class="dev-text">
				<div class="flex-container-data">
					<div class="flex-container-data-1">
						<ul>
							<a href="#">
								<li class="active-link">
									<i class="fas fa-user" />
									<span>About</span>
								</li>
							</a>
							<a href="https://vineethchabala.github.io/VineethChabalaPortfolio/" target="_blank">
								<li>
									<i class="fas fa-paint-brush" />
									<span>Website</span>
								</li>
							</a>
							<a href="https://github.com/VineethChabala" target="_blank">
								<li>
									<i class="fab fa-github" />
									<span>github</span>
								</li>
							</a>
							<a href="https://www.linkedin.com/in/vineeth-chabala-86b077213/" target="_blank">
								<li>
									<i class="fab fa-linkedin-in" />
									<span>LinkedIn</span>
								</li>
							</a>
						</ul>
					</div>
					<div class="flex-container-data-2">
						<img src="/src/assets/vineeth.png" alt="harsha pic" class="profile-pic" />
						<h2>Hi I'm Vineeth</h2>
						<p>
							I'm an UnderGraduate student in IIITDM Kanceepuram having my major in computerscience.
							I have completed my schooling in my hometown and completed pre-graduation in Kurnool.
							I have a deep passion in CyberSecurity sector. I love to explore new things.
						</p>
						<p>
							I have started my research on WebDev from Feb 2022. Doing WebDev intrests me alot. I
							am also planning to learn flutter and build apps. Working on flutter was very nice.
							Developing an app has been a intrest in me from many years. I am so happy that one of
							my dream is going to come true.
						</p>
						<p>
							Apart from studies i love to write stories. Stories I write are mostly doesnt contain
							any dialogue part. I am planning to do some shortfilms with my friends. I started this
							story writing habit when im in 10th class but it took a serious turn in this lockdown.
							i listen to music alot. Most people say listening music might give a feel like staying
							in another world I am one of those most people.
						</p>
					</div>
				</div>
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
	.flex-container-data {
		display: flex;
		flex-wrap: nowrap;
	}

	.flex-container-data-1 {
		width: 25%;
		height: 100%;
		background-color: transparent;
		padding: 0 10px;
		padding-top: 1rem;
	}
	.flex-container-data-1 a {
		color: var(--system-text-color);
	}
	.flex-container-data-1 li {
		margin: 5px 0;
		padding: 0px 10px;
		border-radius: 7px;
	}
	.active-link {
		background: var(--system-transparent-color-primary-op);
	}
	.flex-container-data-1 span {
		padding-left: 8px;
	}
	.flex-container-data-1 li:hover {
		background: var(--system-transparent-color-primary-op);
	}
	.flex-container-data-2 {
		padding: 10px 5px 10px 0;
		color: var(--system-text-color);
		width: 75%;
		text-align: center;
		font-size: 30px;
	}

	.profile-pic {
		height: 160px;
		width: 160px;
		border-radius: 50%;
		object-fit: cover;
	}
	.profile-pic {
		height: 160px;
		width: 160px;
		border-radius: 50%;
		object-fit: cover;
	}

	.flex-container-data-2 p {
		text-align: left;
		padding-left: 15px;
	}
</style>
