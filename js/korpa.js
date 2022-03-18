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

        appendKursRow('allKurs', kurs);    

        }

        
    }

    $('#kupiBtn').on('click', function(event){
        $("#modalObavestenje").modal('show');


        event.preventDefault();
		return false;
    });

    xhttp.open('GET', firebaseUrl + '/kursevi/' + id + '.json');
    xhttp.send();

    // Dodaje red u tabelu
    function appendKursRow(position, kursevi) {
         var row = document.createElement('tr');

         var td1 = document.createElement('td');
         td1.innerText = "";
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

         document.getElementById(position).appendChild(row);
    }

    $('#obrisiBtn').on('click', function(event){
        $("#modalObavestenje1").modal('show');


        
    });

    $('#daBtn').on('click', function(event){
        $("#modalObavestenje2").modal('show');

        event.preventDefault();
		return false;
    });


});