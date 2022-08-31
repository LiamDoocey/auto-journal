$(document).ready(function(){
    $('.delcarbtn').click(() => confirm('Are you sure you want to delete this car?'));
    $('#delManubtn').click(() => confirm('Are you sure you want to delete this Manufacturer?'))
});
function Errorpass(){
    document.getElementById('errorpass').style.display = 'block';
}
