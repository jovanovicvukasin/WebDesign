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

            var naziv1 = $('#nazivId');
            naziv1.val(kurs.naziv);

            var id1 = $('#idid');
            id1.val(kurs.id);

            var autor1 = $('#autorId');
            autor1.val(kurs.autor);

            var izmena1 = $('#izmenaId');
            izmena1.val(kurs.datumIzmene);

            var opis1 = $('#opisId');
            opis1.val(kurs.opis);

            var cena1 = $('#cenaId');
            cena1.val(kurs.cena);

            var brLekcija1 = $('#brLekcijaId');
            brLekcija1.val(kurs.brojLekcija);

            var kategorija1 = $('#kategorijaId');
            kategorija1.val(kurs.kategorija);

            var jezik1 = $('#jezikId')
            jezik1.val(kurs.jezik);

            var ocena1 = $('#ocenaId');
            ocena1.val(kurs.prosecnaOcena);

            var brKorisnika1 = $('#brKorisnikaId');
            brKorisnika1.val(kurs.brojKorisnika);

            var sertifikovan1 = $('#sertifikovanId');
            sertifikovan1.val(kurs.sertifikovan);

            $('#izmeniBtn').on('click', function(event){

                var newNziv = naziv1.val();
                var newAutor = autor1.val();
                var newIzmena = izmena1.val();
                var newOpis = opis1.val();
                var newCena = cena1.val();
                var newBrLekcija = brLekcija1.val();
                var newJezik = jezik1.val();

                var message = $('#message');

                if(newNziv=="" || newAutor=="" || newIzmena=="" || newOpis=="" || newCena=="" || newBrLekcija=="" || newJezik==""){
                    message.text('Svi podaci moraju biti popunjeni!');

                    event.preventDefault();
					return false;
                }

                if (newCena<0){
					message.text('Cena mora biti pozitivan broj!');

					event.preventDefault();
					return false;
				}

                if (newCena==0){
					message.text('Cena mora biti veca od 0!');

					event.preventDefault();
					return false;
				}

                if (newBrLekcija<0){
					message.text('Broj lekcija mora biti pozitivan broj!');

					event.preventDefault();
					return false;
				}

                if (newBrLekcija==0){
					message.text('Broj lekcija mora biti veci od 0!');

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

    xhttp.open('GET', firebaseUrl + '/kursevi/' + id + '.json');
    xhttp.send();

});