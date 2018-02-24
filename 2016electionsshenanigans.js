$(document).ready(function () {
    
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
        $('#content').toggleClass('animateLeft');
    });
        
    $("#formdropdown").click(function(){
        $("#login").toggle();
    });
        
    $(window).load(function() {
        $("#hashtag").popover();
    });
        
});