function menu() {
    var a = document.getElementsByClassName('content');
    for (var i = 0; i < a.length; i++) {
        a[i].style.display = 'none';
    }
    if (document.getElementById('btn-1').checked) {
        document.getElementsByClassName('main')[0].style.backgroundImage = "url('image/indexbg.jpg')";
        document.getElementsByClassName('index')[0].style.display = 'block';
    }
    if (document.getElementById('btn-2').checked) {
        document.getElementsByClassName('main')[0].style.backgroundImage = "url('image/aboutbg.jpg')";
        document.getElementsByClassName('about')[0].style.display = 'block';
    }
    if (document.getElementById('btn-3').checked) {
        document.getElementsByClassName('main')[0].style.backgroundImage = "url('image/servicesbg.jpg')";
        document.getElementsByClassName('services')[0].style.display = 'block';
    }
    if (document.getElementById('btn-4').checked) {
        document.getElementsByClassName('main')[0].style.backgroundImage = "url('image/portfoliobg.jpg')";
        document.getElementsByClassName('portfolio')[0].style.display = 'block';
    }
    if (document.getElementById('btn-5').checked) {
        document.getElementsByClassName('main')[0].style.backgroundImage = "url('image/contactbg.jpg')";
        document.getElementsByClassName('contact')[0].style.display = 'block';
    }
}
