function remove_fuel() {
    for (let i = 1; i < form.fuel.length; i++) {
        form.fuel.options[i].innerText = '';
    }
}
let gearbox;
form.vehicle.addEventListener('change', function () {
    let index = form.vehicle.selectedIndex;
    let fuel;

    // choose what is index of véhicule
    switch (index) {
        case 0:
            remove_fuel();
            break;
        case 1:
            remove_fuel();
            fuel = ['Electrique', 'Essence'];
            gearbox = 'none';
            break;
        case 2:
            remove_fuel();
            fuel = ['Hybirde', 'Essence', 'Diesel'];
            gearbox = 'Manual';
            break;
        case 3:
            remove_fuel();
            fuel = ['Electrique', 'Hybirde', 'Essence', 'Diesel'];
            gearbox = 'Manual';
            break;
        case 4:
            remove_fuel();
            fuel = ['Diesel'];
            gearbox = 'Manual';
            break;
        case 5:
            remove_fuel();
            fuel = ['Hybirde', 'Essence', 'Diesel'];
            gearbox = 'Automatique';
            break;
        case 6:
            remove_fuel();
            fuel = ['Diesel'];
            gearbox = 'Automatique';
            break;
        case 7:
            remove_fuel();
            fuel = ['Diesel', 'Essence'];
            gearbox = 'Manual';
            break;
    }

    // fill fuel and gearbox
    for (let i = 0; i < fuel.length; i++) {
        form.fuel.options[i + 1].innerText = fuel[i];
    }
    form.gearbox.options[1].innerText = gearbox;
});

document.querySelector("#select-submit").addEventListener('click', function (event) {
    event.preventDefault();

    // get value of select tags
    let cars = document.querySelector("#select > select:nth-child(3)").value;
    let carfuel = document.querySelector("#select > select:nth-child(4)").value;
    let day = document.querySelector("#number").value;
    let price;

    // calculate gearbox motorbike
    if (gearbox == 'none') {
        if (cars == 'motorbike') {
            if (carfuel == 'Electrique') {
                price = (10 * 0.05) + 10;
            }
            if (carfuel == 'Essence') {
                price = (10 * 0.14) + 10;
            }
        }
    }
    // calculate gearbox auto
    if (gearbox == 'Automatique') {
        // calculate berlin
        if (cars == 'berlin') {
            if (carfuel == 'Hybirde') {
                price = ((20 * 0.19) + (20 * 0.09)) + 20;
            }
            if (carfuel == 'Essence') {
                price = ((20 * 0.19) + (20 * 0.14)) + 20;
            }
            if (carfuel == 'Diesel') {
                price = ((20 * 0.19) + (20 * 0.21)) + 20;
            }
        }
        // calculate truck
        if (cars == 'truck') {
            if (carfuel == 'Diesel') {
                price = ((250 * 0.19) + (250 * 0.21)) + 250;
            }
        }
    }
    // calculate gearbox manual
    if (gearbox == 'Manual') {
        // calculate compact
        if (cars == 'compact') {
            if (carfuel == 'Hybirde') {
                price = 14 + (14 * 0.09);
            }
            if (carfuel == 'Essence') {
                price = 14 + (14 * 0.14);
            }
            if (carfuel == 'Diesel') {
                price = 14 + (14 * 0.21);
            }
        }
        // calculate citadin
        if (cars == 'citadin') {
            if (carfuel == 'Hybirde') {
                price = 12 + (12 * 0.09);
            }
            if (carfuel == 'Essence') {
                price = 12 + (12 * 0.14);
            }
            if (carfuel == 'Diesel') {
                price = 12 + (12 * 0.21);
            }
            if (carfuel == 'Electrique') {
                price = 12 + (12 * 0.05);
            }
        }
        // calculate utility
        if (cars == 'utility') {
            if (carfuel == 'Diesel') {
                price = 16 + (16 * 0.21);
            }
        }
        // calculate construction machine
        if (cars == 'construction machine') {
            if (carfuel == 'Diesel') {
                price = 900 + (900 * 0.21);
            }
            if (carfuel == 'Essence') {
                price = 900 + (900 * 0.14);
            }
        }
    }
    price = price * day;
     Swal.fire(`Price: ${price} `+ '€');
});
