$(document).ready(function(){

	// URL projekta - Obratiti paznju da je uklonjen znak / sa kraja!
	var firebaseUrl = 'https://dizajn-faf22-default-rtdb.firebaseio.com';

	var korisnikIds = [];
	var korisnici = {};

	//prikaz svih
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            korisnici = JSON.parse(xhttp.responseText);

			 // Izvajanje svakog pojedinacnog kursa
            for (var id in korisnici) {
                var korisnik = korisnici[id];
                console.log(korisnik);
                appendKorisnikRow('allKorisnik', korisnik);

                korisnikIds.push(id);
					
            }


			
        }
    }

    xhttp.open('GET', firebaseUrl + '/korisnici.json');
    xhttp.send();

	

	// Dodaje red u tabelu
	function appendKorisnikRow(position, korisnici) {
    	var row = document.createElement('tr');
        row.setAttribute = ('id=klik');
		
		row.addEventListener('click', function(e){
			e.preventDefault();

			window.location = "IzmenaKorisnik.html?id=" + korisnikIds[$(e.currentTarget).index()];

			return false;

		});

        var td1 = document.createElement('td');
		td1.innerText = "";
		row.appendChild(td1);


		var td2 = document.createElement('td');
		td2.innerText = korisnici.korisnickoIme;
		row.appendChild(td2);

		var td3 = document.createElement('td');
		td3.innerText = korisnici.email;
		row.appendChild(td3);

		var td4 = document.createElement('td');
		td4.innerText = korisnici.ime;
		row.appendChild(td4);


		var td5 = document.createElement('td');
		td5.innerText = korisnici.prezime;
		row.appendChild(td5);


		document.getElementById(position).appendChild(row);
   	 	
	}

});