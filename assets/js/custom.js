/*  Website Name: Cracht
 *  Author: ...
 *  Description: Custom JS File
 *  Version:
 */

$(document).ready(function() {
    $('#newsCarousel').owlCarousel({
        loop: true,
        margin: 8,
        responsiveClass: true,
        nav: true,
        autoplay: false,
        center: true,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            640: {
                items: 3,
            },
            1100: {
                items: 3,
            }
        }
    });
});

// Signature
var dark = ["background-color: #171718", "color: #ffffff", "padding: 20px 5px 16px 40px", "background-image: url(https://www.alcyone.in/assets/images/logos/logo-circle.svg)", "background-position: 10px 9px", "background-repeat: no-repeat", "background-size: 26px 30px"].join(";"),
    gold = ["padding: 20px 5px 16px", "background-color: #009fe3", "color: #ffffff"].join(";"),
    spacer = ["background-color: transparent"].join(";"),
    msg = "\n\n %c Crafted with â™¥ï¸Ž by ALCYONE %c https://www.alcyone.in %c \n\n";

function consoleWithNoSource(...o) { setTimeout(console.log.bind(console, ...o)) }
consoleWithNoSource(msg, dark, gold, spacer);