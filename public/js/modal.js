// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const selects = document.querySelectorAll('.station-select');
    const selectStationBtn = document.getElementById('selectStationBtn');
    const selectedStationText = document.getElementById('selected-station');

    // 1) Kun én valgt dropdown ad gangen
   selects.forEach(function (select) {
    select.addEventListener('change', function () {

        // 1) Fjern markering fra alle dropdowns
        selects.forEach(function (otherSelect) {
            otherSelect.classList.remove('selected');
        });

        // 2) Hvis der er valgt en station, marker dropdown
        if (this.value !== '') {
            this.classList.add('selected');

            // Tøm de andre dropdowns
            selects.forEach(function (otherSelect) {
                if (otherSelect !== select) {
                    otherSelect.value = '';
                }
            });
        }
    });
});

    // 2) Når man klikker "Vælg station"
    selectStationBtn.addEventListener('click', function () {
        let chosenOption = null;

        // Find den dropdown, der har en valgt station
        selects.forEach(function (select) {
            if (select.value !== '') {
                // selectedIndex er det nummer, den valgte option har
                chosenOption = select.options[select.selectedIndex];
            }
        });

        // Hvis der ikke er valgt nogen station
        if (!chosenOption) {
            alert('Vælg en station først.');
            return;
        }

        // Hent adressen fra data-address
        const address = chosenOption.getAttribute('data-address');

        // Skriv adressen ind i <span id="selected-station">
        selectedStationText.textContent = address;

        // Luk modalen
        const modal = document.getElementById('myModal');
        if (modal) {
            modal.style.display = 'none';
        }
    });
});