import {getProgressStandings, getScorers, getSavedMatches, getStandings} from "./api.js";

document.addEventListener("DOMContentLoaded", function() {

  // Activate sidebar nav
  const sidenav = document.querySelectorAll(".sidenav");
  M.Sidenav.init(sidenav);
  loadNav();
 
  function loadNav() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        if (this.status != 200) return;
 
        // Muat daftar tautan menu
        document.querySelectorAll(".topnav, .sidenav").forEach(elm => {
          elm.innerHTML = xhttp.responseText;
        });

        // Daftarkan event listener untuk setiap tautan menu
        document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
          elm.addEventListener("click", event => {
            // Tutup sidenav
            const sidenav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sidenav).close();

            // Muat konten halaman yang dipanggil
            page = event.target.getAttribute("href").substr(1);
            loadPage(page);
          });
        });
      }
    };
    xhttp.open("GET", "nav.html", true);
    xhttp.send();
  }

  // Load page content
  let page = window.location.hash.substr(1);
  if (page === "") {
    page = "home";
  }
  loadPage(page);

  function loadPage(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
        const content = document.querySelector("#body-content");
        let contentHTML = `
          <section class="padding-error">
              <div class="card-error padding-error-2 grey lighten-4 grey-text text-darken-3 light">
                <p class="margin-error">Oops somethings wrong</p>
                <p>Please check your connection</p>
              </div>
          </section>
        `;

        if (page === "home") {
          getProgressStandings();
        } else if (page === "standings") {
          getStandings();
        } else if (page === "top_scorers") {
          getScorers();
        } else if (page === "saved_matches") {
          getSavedMatches();
        }

        if (this.status == 200) {
          content.innerHTML = xhttp.responseText;
        } else if (this.status == 404) {
          content.innerHTML = contentHTML;
        } else if (this.status == 500) {
          content.innerHTML = contentHTML;
        } else {
          content.innerHTML = contentHTML;
        }
      }
    };
    xhttp.open("GET", "pages/" + page + ".html", true);
    xhttp.send();
  }

});
