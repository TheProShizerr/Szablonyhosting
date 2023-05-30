//Funkcja do sprawdzania dostępności stron
function checkPages() {
    //Tablica z adresami stron do sprawdzenia
    let urls = ["https://panel.szablonyhost.eu/home", "https://ptero.szablonyhost.eu", "https://szablonyhost.eu"];
    //Element div do wyświetlania wyników
    let results = document.getElementById("results");
    //Pętla po tablicy z adresami stron
    for (let url of urls) {
      //Wysyłanie żądania fetch do strony
      fetch(url)
        .then(response => {
          //Sprawdzanie statusu odpowiedzi
          if (response.status == 200) {
            //Jeśli status jest 200, strona jest online
            //Dodanie emoji z zielonym kółkiem i znakiem ✔️ przed stroną
            results.innerHTML += "<span class='text-time'><i class='bi bi-check-circle-fill'></i> Strona " + url + " jest online.<br> </span>";
          } else {
            //Jeśli status jest inny, strona jest offline lub niedostępna
            //Dodanie emoji z czerwonym kółkiem i znakiem ➖ przed stroną
            results.innerHTML += "<span class='text-time'><i class='bi bi-dash-circle-fill'></i> Strona " + url + " jest offline.<br>  </span>";
          }
        })
        .catch(error => {
          //Jeśli wystąpi błąd, strona jest offline lub niedostępna
          //Dodanie emoji z czerwonym kółkiem i znakiem ➖ przed stroną
          results.innerHTML += "<span class='text-time'><i class='bi bi-dash-circle-fill'></i> Strona " + url + " jest offline.<br>   </span>";
        });
    }
  }
  
  //Funkcja do uruchomienia po załadowaniu strony
  window.onload = function() {
    //Wywołanie funkcji checkPages
    checkPages();
  }
  
  //Funkcja do uruchomienia po załadowaniu strony
  window.onload = function() {
    //Wywołanie funkcji checkPages
    checkPages();
  }