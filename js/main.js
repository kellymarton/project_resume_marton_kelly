$(document).ready(function () {

    $.backstretch('http://www.alachuaaudubon.org/wp-content/uploads/2016/03/La-Chua-070814-Pete-Gumaskas.jpg');

//Add button functionality to each heading to hide section content until button is clicked
    $('#button1').click(function () {
        $('#hide1').toggle('slow');
    });

    $('#button2').click(function () {
        $('#hide2').toggle('slow');
    });

    $('#button3').click(function () {
        $('#hide3').toggle('slow');
    });

    $('#button4').click(function () {
        $('#hide4').toggle('slow');
    });

    $('.rotate').textrotator({
        animation: 'flipCube',
        separator: ',',
        speed: 2000
    });

});
