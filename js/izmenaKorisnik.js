$(document).ready(function(){

    var id = window.location.search.slice(1).split('&')[0].split('=')[1];
	console.log(id);

	// URL projekta - Obratiti paznju da je uklonjen znak / sa kraja!
	var firebaseUrl = 'https://dizajn-faf22-default-rtdb.firebaseio.com';


	//prikaz podataaka jednog kursa
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var korisnik = JSON.parse(xhttp.responseText);


            var kime1 = $('#korisnickoImeId');
            kime1.val(korisnik.korisnickoIme);

            var emaill1 = $('#emailId');
            emaill1.val(korisnik.email);

            var ime1 = $('#imeId');
            ime1.val(korisnik.ime);

            var prezime1 = $('#prezimeId');
            prezime1.val(korisnik.prezime);

            var datum1 = $('#datumRodjenjaId');
            datum1.val(korisnik.datumRodjenja);

            var adresa1 = $('#adresaId');
            adresa1.val(korisnik.adresa);

            var telefon1 = $('#telefonId');
            telefon1.val(korisnik.telefon);

            

            $('#izmeniBtn').on('click', function(event){

                var newKorisnickoIme = kime1.val();
                var newEmail = emaill1.val();
                var newIme = ime1.val();
                var newPrezime = prezime1.val();
                var newDatum = datum1.val();
                var newAdresa = adresa1.val();
                var newTelefon = telefon1.val();

                var message = $('#message');

                if(newKorisnickoIme=="" || newEmail=="" || newIme=="" || newPrezime=="" || newDatum=="" || newAdresa=="" || newTelefon==""){
                    message.text('Svi podaci moraju biti popunjeni!');

                    event.preventDefault();
					return false;
                }

                if (!newTelefon.match(/[-.0-9]+/)) {
					message.text('Broj telefona mora biti broj!');

					event.preventDefault();
					return false;
				}

                else{
                    $("#modalObavestenje").modal('show');
                
                }



                event.preventDefault();
				return false;
            });

        }

        
    }

    $('#obrisiBtn').on('click', function(event){
        $("#modalObavestenje1").modal('show');


        event.preventDefault();
		return false;
    });

    $('#daBtn').on('click', function(event){
        $("#modalObavestenje2").modal('show');

        event.preventDefault();
		return false;
    });


    xhttp.open('GET', firebaseUrl + '/korisnici/' + id + '.json');
    xhttp.send();

});