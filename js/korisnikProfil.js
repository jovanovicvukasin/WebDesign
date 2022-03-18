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

                kursIds.push(id);
					
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

			window.location = "KursKorisnik.html?id=" + kursevi.id;

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

});