var classes = ['Biologist','Chemist','Engineer', 'Programmer'];

(function displayClass(i) {
    $('#tst h1').text(classes[i]).fadeIn(1000, function() {
        $(this).delay(600).fadeOut(1000, function() {
            displayClass((i + 1) % classes.length);
        });
    });
})(0);