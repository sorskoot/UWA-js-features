(function () {
    // get an element to write the output to
    let output = document.querySelector('#output');

    // create a string
    let daydream = 'What a day for a daydream!';

    //does the daydream string contain the sequence 'day'?
    output.innerText += `\n${daydream.includes('day')}`; // writes true
    
    //does the daydream string contain the sequence 'What', 
    //starting to read from the 4th position?
    output.innerText += `\n${daydream.includes('What', 4)}`; // writes false


    let face = '⊙_ʘ'; // a funny face in utf-16 characters. 
    //write the code points of the face to the output
    output.innerText += `\n${face.codePointAt(0)}, ${face.codePointAt(1)}, ${face.codePointAt(2)}`;

    //create another face, but now constructed from code points
    output.innerText += `\n${String.fromCodePoint(0x0028, 0x25CF, 0x032E, 0x032E, 0x0303, 0x2022, 0x0303, 0x0029)}`;

    // repeat the face 3 times
    output.innerText += `\n${face.repeat(3)}`;
})();