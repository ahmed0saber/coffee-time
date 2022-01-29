/*     ADD TO FAVORITE     */
function add_to_fav(element){
    if(element.classList.contains("faved")){
        $(element).removeClass('faved');
        $(element).addClass('not-fav');
    }else{
        $(element).removeClass('not-fav');
        $(element).addClass('faved');
    }
}
/*     CURVED TEXT "Our Products"     */
curved = document.getElementsByClassName("curved");
for(var i=0; i<curved.length; i++){
    new CircleType(curved[i]).radius(720);
}
/*     TOGGLE NAVBAR LINKS 'active' CLASS     */
window.addEventListener('scroll', function() {
	var check_points = document.getElementsByClassName('check-point');
    var nav_links = document.getElementsByClassName('nav-link');
    for(var i = 0; i < check_points.length; i++){
        var position = check_points[i].getBoundingClientRect();
        if(position.top < window.innerHeight - 200 && position.bottom >= 0) {
            for(var a = 0; a < nav_links.length; a++){
                nav_links[a].classList.remove("active");
            }
            nav_links[i].classList.add("active");
        }
    }
});