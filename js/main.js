



$('#collapse-open').on('click', function(e){
    e.preventDefault();
    $('#coll').animate({
        marginTop: 0,
    });
    $('#logo').animate({
        opacity: 0,
    });
    $('#maint').animate({
        opacity: 0,
    });
    $('#collapse-open').animate({
        opacity: 0,
    });
});



$('#collapse-close').on('click', function(e){
    e.preventDefault();
    $('#coll').animate({
        marginTop: "-100%",
    });
    $('#logo').animate({
        opacity: 1,
    });
    $('#maint').animate({
        opacity: 1,
    });
    $('#collapse-open').animate({
        opacity: 1,
    });
});


