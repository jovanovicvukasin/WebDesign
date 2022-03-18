$(document).ready(function(){

	// URL projekta - Obratiti paznju da je uklonjen znak / sa kraja!
	var firebaseUrl = 'https://dizajn-faf22-default-rtdb.firebaseio.com';

	var kursIds = [];
	var kursevi = {};

	//prikaz svih
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            kursevi = JSON.parse(xhttp.responseText);

			 // Izvajanje svakog pojedinacnog kursa
            for (var id in kursevi) {
                var kurs = kursevi[id];
                console.log(kurs);
                appendKursRow('allKurs', kurs);
				filtrirani('allKurs', kurs);


                //kursIds.push(id);
					
            }


			
        }
    }

    xhttp.open('GET', firebaseUrl + '/kursevi.json');
    xhttp.send();

	

	// Dodaje red u tabelu
	function appendKursRow(position, kursevi) {
    	var row = document.createElement('tr');
		
		row.addEventListener('click', function(e){
			e.preventDefault();

			window.location = "Kurs.html?id=" + kursevi.id;

			return false;

		});

		

    	var td1 = document.createElement('td');
		var img = document.createElement("img");
		img.src = kursevi.slika;
		img.style.cssText = "width:100px;height:100px;border-right: 2px solid #ff0000;";
		td1.appendChild(img);
    	row.appendChild(td1);

		var td2 = document.createElement('td');
		td2.innerText = kursevi.naziv;
		row.appendChild(td2);

		var td3 = document.createElement('td');
		td3.innerText = kursevi.autor;
		row.appendChild(td3);

		var td4 = document.createElement('td');
		td4.innerText = kursevi.cena;
		row.appendChild(td4);


		var td5 = document.createElement('td');
		td5.innerText = kursevi.kategorija;
		row.appendChild(td5);


		var td6 = document.createElement('td');
		td6.innerText = kursevi.prosecnaOcena;
		row.appendChild(td6);

		document.getElementById(position).appendChild(row);
   	 	
	}

	var nazivKursaFilter = $('#nazivFilterInput');
	var autorKursaFilter =  $('#autorFilterInput');
	var kategorijaKursaFilter = $('#kategorijaFilterInput');

	function filtrirani(position, kursevi){
		$('#nadjiKurs').on('click', function(event){



			var nazivKursa = nazivKursaFilter.val().toLowerCase() + " ";
			var autorKursa = autorKursaFilter.val().toLowerCase();
			var kategorijaKursa = kategorijaKursaFilter.find(":selected").val();
		
			console.log('nazivFilter: ' + nazivKursa);
			console.log('naziv: ' + kursevi.naziv);

			console.log('autorFilter: ' + autorKursa);
			console.log('autor: ' + kursevi.autor);
	
			console.log('kategorijaFilter: ' + kategorijaKursa);
			console.log('kategorija: ' + kursevi.kategorija);


			if(kursevi.naziv.toLowerCase() == nazivKursa || 
			kursevi.autor.toLowerCase() == autorKursa ||
			kursevi.kategorija == kategorijaKursa ){

				removeTableRows('allKurs');
				
			
				var row = document.createElement('tr');
		
				row.addEventListener('click', function(e){
					e.preventDefault();

					window.location = "Kurs.html?id=" + kursevi.id;

					return false;

				});

		

				var td1 = document.createElement('td');
				var img = document.createElement("img");
				img.src = kursevi.slika;
				img.style.cssText = "width:100px;height:100px;border-right: 2px solid #ff0000;";
				td1.appendChild(img);
				row.appendChild(td1);

				var td2 = document.createElement('td');
				td2.innerText = kursevi.naziv;
				row.appendChild(td2);

				var td3 = document.createElement('td');
				td3.innerText = kursevi.autor;
				row.appendChild(td3);

				var td4 = document.createElement('td');
				td4.innerText = kursevi.cena;
				row.appendChild(td4);


				var td5 = document.createElement('td');
				td5.innerText = kursevi.kategorija;
				row.appendChild(td5);


				var td6 = document.createElement('td');
				td6.innerText = kursevi.prosecnaOcena;
				row.appendChild(td6);

				document.getElementById(position).appendChild(row);
				
				

				console.log('ODGOVARA PRETRAZI!!!');


				
			}else{
				console.log('NE ODGOVARA PRETRAZI!!!');
			}

			event.preventDefault();
				return false;

			

		
		});

		
	}


    $('#loginId').on('click', function(event) {
		$("#modalLogin").modal('show');
			var korisnickoImeUnos = $('#korisnickoImeModallogin');
			var lozinkaUnos = $('#lozinkaModallogin');

			$('#loginBtn').on('click', function(event){
				var korisnickoIme = korisnickoImeUnos.val();
				var lozinka = lozinkaUnos.val();

				var message = $('#message');


				console.log('korisnickoIme: ' + korisnickoIme);
				console.log('lozinka: ' + lozinka);	

				if(korisnickoIme=="" || lozinka==""){
					message.text('Svi podaci moraju biti popunjeni!');
					event.preventDefault();
					return false;
				}

				
			});
		
			
			console.log('poslat zahtev!')

			
			event.preventDefault();
			return false;
		
	});

    $('#registracijaId').on('click', function(event) {
		$("#modalRegistracija").modal('show');
			var korisnickoImeUnos = $('#korisnickoImeModal');
			var lozinkaUnos = $('#lozinkaModal');
			var emailUnos = $('#emailModal');
			var imeUnos = $('#imeModal');
			var prezimeUnos = $('#prezimeModal');
			var datumRodjenjaUnos = $('#datumRodjenjaModal');
			var adresaUnos = $('#adresaModal');
			var brojTelefonaUnos = $('#brojTelefonaModal');

			$('#registracijaBtn').on('click', function(event){

				var korisnickoIme = korisnickoImeUnos.val();
				var lozinka = lozinkaUnos.val();
				var email = emailUnos.val();
				var ime = imeUnos.val();
				var prezime = prezimeUnos.val();
				var datumRodjenja = datumRodjenjaUnos.val();
				var adresa = adresaUnos.val();
				var brojTelefona = brojTelefonaUnos.val();

				var message = $('#message1');

				if(korisnickoIme=="" || lozinka=="" || email=="" || ime=="" || prezime=="" || datumRodjenja=="" || adresa=="" || brojTelefona==""){
					message.text('Svi podaci moraju biti popunjeni!');
					event.preventDefault();
					return false;
				}

				if (!brojTelefona.match(/[-.0-9]+/)) {
					message.text('Broj telefona mora biti broj!');

					event.preventDefault();
					return false;
				}

			});

			console.log('poslat zahtev!')

			
			event.preventDefault();
			return false;
		

			
	});

	// Brise sve redove iz tabele
	function removeTableRows(tBody) {
    var tBody = document.getElementById(tBody);
    while (tBody.firstChild) {
        tBody.removeChild(tBody.lastChild);
    }
}


});