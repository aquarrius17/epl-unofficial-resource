import "regenerator-runtime";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "./css/style.css";
import "./js/register-sw.js";
import "./js/component/nav-button.js";
import "./js/component/foot-bar.js";
import "./js/component/get-matches.js";
import "./js/foot.js";
import getMatches from "./js/api.js";
import "./js/db.js";

document.addEventListener("DOMContentLoaded", function() {
	let loaderMatch = document.getElementById("loaderMatch");
	setTimeout(function() {
		getMatches();
		loaderMatch = "none";
	}, 1500);
});
