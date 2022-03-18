$(document).ready(function(){

    var id = window.location.search.slice(1).split('&')[0].split('=')[1];
	console.log(id);

	// URL projekta - Obratiti paznju da je uklonjen znak / sa kraja!
	var firebaseUrl = 'https://dizajn-faf22-default-rtdb.firebaseio.com';


	//prikaz podataaka jednog kursa
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var kurs = JSON.parse(xhttp.responseText);


            var slika1 = document.getElementById('imgKurs1');
            slika1.src = kurs.slika;
            slika1.classList.add('imgKurs');

            var naziv1 = document.getElementById('nazivId');
            naziv1.innerText = kurs.naziv;

            var id1 = document.getElementById('idid');
            id1.innerText = kurs.id;

            var autor1 = document.getElementById('autorId');
            autor1.innerText = kurs.autor;

            var izmena1 = document.getElementById('izmenaId');
            izmena1.innerText = kurs.datumIzmene;

            var opis1 = document.getElementById('opisId');
            opis1.innerText = kurs.opis;

            var cena1 = document.getElementById('cenaId');
            cena1.innerText = kurs.cena;

            var brLekcija1 = document.getElementById('brLekcijaId');
            brLekcija1.innerText = kurs.brojLekcija;

            var kategorija1 = document.getElementById('kategorijaId');
            kategorija1.innerText = kurs.kategorija;

            var jezik1 = document.getElementById('jezikId');
            jezik1.innerText = kurs.jezik;

            var ocena1 = document.getElementById('ocenaId');
            ocena1.innerText = kurs.prosecnaOcena;

            var brKorisnika1 = document.getElementById('brKorisnikaId');
            brKorisnika1.innerText = kurs.brojKorisnika;

            var sertifikovan1 = document.getElementById('sertifikovanId');
            sertifikovan1.innerText = kurs.sertifikovan;

        }

        
    }

    $('#kupiBtn').on('click', function(event){
        event.preventDefault();
        window.location = "Korpa.html?id=" + id;
		return false;
    });

    xhttp.open('GET', firebaseUrl + '/kursevi/' + id + '.json');
    xhttp.send();


});