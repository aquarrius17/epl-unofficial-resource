import "regenerator-runtime";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "./css/style.css";
import "./js/register-push.js";
import "./js/component/nav-bar.js";
import "./js/component/get-scorers.js";
import "./js/component/foot-bar.js";
import "./js/nav.js";
import "./js/foot.js";
import "./js/api.js";
import "./js/db.js";

document.addEventListener("DOMContentLoaded", function() {
	let loaderProgress = document.getElementById("loaderProgress");
	let loaderStandings = document.getElementById("loaderStandings")
	let loaderScorers = document.getElementById("loaderScorers");
	let loaderSavedMatch = document.getElementById("loaderSavedMatch");

	setTimeout(function() {
		loaderProgress = "none";
		loaderStandings = "none";
		loaderScorers = "none";
		loaderSavedMatch = "none";
	}, 1600);
});
