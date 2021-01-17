import "regenerator-runtime";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "./css/style.css";
import "./js/register-sw.js";
import "./js/component/nav-detail.js";
import "./js/component/foot-bar.js";
import "./js/foot.js";
import {getMatchDetail, getSavedMatchDetail} from "./js/api.js";
import {saveForLater, deleteMatchDetail, getAll} from "./js/db.js";

// REQUEST API UNTUK PERTAMA KALI
document.addEventListener("DOMContentLoaded", function() {

	const urlParams = new URLSearchParams(window.location.search);
	const isFromSaved = urlParams.get("saved_matches");
	const isFromMatch = urlParams.get("match");
	const idParam = urlParams.get("id");

	let btnSave = document.getElementById("save");
	let btnDelete = document.getElementById("delete");

	let loaderMatchDetail = document.getElementById("loaderMatchDetail");

	if (isFromSaved) {
		setTimeout(function() {
			loaderMatchDetail = "none";
		  	// Hide fab jika dimuat dari indexed db
		  	btnSave.style.display = "none";
		  	// Ambil artikel lalu tampilkan
		  	getSavedMatchDetail();
		}, 1600);
	}

	if (isFromMatch) {
		setTimeout(function() {
			getAll().then(function(iD) {
				let idDetail = [];
				for (let i = 0; i < iD.length; i++) {
					idDetail.push(iD[i].id);
				}
				if (idDetail.indexOf(parseInt(idParam)) >= 0) {
					console.log("Match sudah disimpan");
					btnSave.style.display = "none";
					setTimeout(function() {
						M.toast({
							html: "<div class='green-text text-lighten-2'>The match has already been saved</div>",
							outDuration: 1000,
							displayLength: 5000
						});
					}, 600);
				}
			});
			loaderMatchDetail = "none";
		  	btnDelete.style.display = "none";
		  	getMatchDetail();		  	
		}, 1600);
	}

	const item = getMatchDetail();
	const item2 = getSavedMatchDetail();

	// click save
	btnSave.onclick = function() {
	  	console.log("Tombol FAB save di klik.");
	  	setTimeout(function() {
		  	M.toast({
				html: "Match saved",
				outDuration: 1000,
				displayLength: 3000
			});
		}, 600);
	  	item.then(function(matchDetail) {
	    	saveForLater(matchDetail);
	  	});
	}

	// click delete
	btnDelete.onclick = function() {
		console.log("Tombol FAB delete di klik.");
		item2.then(function(id) {
			const isConfirm = confirm("Are you sure you want to delete this match?");
			if (isConfirm) {
				deleteMatchDetail(parseInt(id));
				setTimeout(function() {
					M.toast({
						html: "Match deleted",
						outDuration: 1000,
						displayLength: 3000
					});
				}, 600);
			} else {
				console.log("Anda meng-cancel-nya");
			}
		});
	}

});
