(function () {
    // get an element to write the output to
    let output = document.querySelector('#output');

    // Regular string
    let name = 'Timmy';

    // Template String
    let greeting = `Hi ${name}!\nI hope you're having a fantastic ${timeOfDay()}!`;

    //write the greeting to the console
    output.innerText = greeting;

    // simple function to calculate date
    function timeOfDay() {
        var hours = new Date().getHours();
        if (hours < 6) return 'night'
        else if (hours < 12) return 'morning'
        else if (hours < 18) return 'afternoon'
        else if (hours < 24) return 'evening';
    }

})();