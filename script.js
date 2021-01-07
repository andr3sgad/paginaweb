jQuery('document').ready(function($){
    let menuBtn = $('.menu-icon'),
    menu = $('.navigation ul');
    menuBtn.click(function (){
        if( menu.hasClass('show') ) {
            menu.removeClass('show');
        } else {
            menu.addClass('show');
        }
    });
});

function iniciarMap(){
    var coord = {lat: 39.4846444, lng:-0.3561308};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 14,
        center: coord
      });
      var marker = new google.maps.Marker({
        position: coord,
        map: map
      });

}