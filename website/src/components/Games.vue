
<template>
<div class="site-games">
    <div class="site-title">
      <div class="title-txt">
        <h1>PYCO Games</h1>
        
      </div>
    </div>
      <main class="site-content">
        <header class="content-intro wrapper">
          <h2>Die größten Arcade-Klassiker aller Zeiten jetzt in einer Konsole!</h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </header>
        <section class="infoboxen">
          <div class="wrapper">
            <div class="game-infobox" id="pong-info">
              <div class="img-slideshow">
                <img src="../assets/logo.png" alt="Eine spielszene aus Pong">
              </div>
              <div class="infotext">
                <h3>Pong</h3>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div class="game-infobox" id="snake-info">
              <div class="img-slideshow">

              </div>
              <div class="infotext">
                <h3>Snake</h3>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div class="game-infobox" id="pacman-info">
              <div class="img-slideshow">
                
              </div>
              <div class="infotext">
                <h3>Pac-Man</h3>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </div>
            </div>
            <div class="game-infobox" id="invaders-info">
              <div class="img-slideshow">

              </div>
              <div class="infotext">
                <h3>Space Invaders</h3>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </div>
            </div>
          </div>
        </section>
      </main>
</div>
</template>

<script>

</script>

<style scoped>
    @media screen {
	/*Heading styles*/
	.site-title{
		width:100%;
		height: 20rem;
		/*background-image: url('earth.jpg');
		background-repeat: no-repeat;
		background-blend-mode: hard-light;*/
		background-color: #bba156;
		display: flex;
		flex: 1;
	}

	.title-txt{
		color: floralwhite;
		margin: auto;
		/*text-align: center;*/
	}
	.title-txt h1{
		font-size: 7em;
		text-shadow: 2px 2px 18px rgb(217, 255, 0);
	}

	/*Content styles*/
	.site-content{
		line-height: 1.5;
		padding-top: 1rem;
		margin-bottom: 1rem;
		flex: 1 auto;
	}
	.wrapper{
		min-width: 320px;
		max-width: 1024px;
		padding: 0 1rem;
		margin: 0 auto;
	}
	/*Game infoboxes styles*/
	.infoboxen > .wrapper{
		display: grid;
		grid-template-columns: 4fr;
		grid-gap: 1rem;
	}
	.infoboxen{
		background-color: #eee;
		padding: 1rem 0;
		margin-bottom: 1em;
	}
	@media screen and (min-width: 980px){
		.game-infobox{
			text-align: center;
			background-color: white;
			padding: 1rem;
			margin: 1rem 0;
			display: flex;
			flex-flow: row;
			border: 0.5rem solid rgb(17, 179, 12);
			border-radius: 18px;
		}
		
	}/*Ende Media Query*/
	@media screen and (max-width: 980px){
		.game-infobox{
			text-align: center;
			background-color: white;
			padding: 1rem;
			margin: 1rem 0;
			display: flex;
			flex-flow: column;
			border: 0.5rem solid rgb(17, 179, 12);
			border-radius: 18px;
		}

	}/*Ende Media Query*/
	/*Bilder Slideshow*/
	.img-slideshow{
		padding-right: 1rem;
		margin: auto;
	}
	.img-slideshow img{
		width: 25rem;
		height: auto;
		
	}

}
</style>
