class NavDetail extends HTMLElement {

	connectedCallback() {
		this.render();
	}

	render() {
		this.innerHTML = `
			<div class="navbar-fixed">
				<nav class="purple lighten-1" role="navigation">
			      <div class="nav-wrapper container">
			        <div class="brand-logo" id="logo-container">
			        	<img class="materialboxed img-style" width="100" src="images/logo.webp" alt="logo">
			        </div>
			        <a href="./index.html#saved_matches" class="sidenav-trigger" data-target="nav-mobile">
			        	<i class="material-icons">archive</i>
			        </a>
			        <ul class="topnav right hide-on-med-and-down"></ul>
			      </div>
			    </nav>
			</div>
			<ul class="sidenav" id="nav-mobile"></ul>
		`;
	}

}

customElements.define("nav-detail", NavDetail);
