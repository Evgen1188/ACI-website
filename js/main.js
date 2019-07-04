



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
    $('#main-coll-mob').animate({
        marginLeft: 0,
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
    $('#collapse-mob-close').animate({
        marginLeft: "-100%",
    });
});





$('#collapse-mob-close').on('click', function(e){
    e.preventDefault();
    $('#main-coll-mob').animate({
        marginLeft: "-100%",
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


$('#PRESENTATION').on('click', function(e){
    e.preventDefault();
    $('#PRESENTATION-coll-mob').animate({
        marginLeft: 0,
    });
    $('.nav-section-op').animate({
        opacity: 0,

    });


});
$('#PRESENTATION-collapse-mob-close').on('click', function(e){
    e.preventDefault();
    $('#PRESENTATION-coll-mob').animate({
        marginLeft: "-100%",
    });
    $('.nav-section-op').animate({
        opacity: 1,

    });

});

/***************/
$('#NOS-SERVICES').on('click', function(e){
    e.preventDefault();
    $('#SERVICES-coll-mob').animate({
        marginLeft: 0,
    });
    $('.nav-section-op').animate({
        opacity: 0,

    });


});
$('#SERVICES-collapse-mob-close').on('click', function(e){
    e.preventDefault();
    $('#SERVICES-coll-mob').animate({
        marginLeft: "-100%",
    });
    $('.nav-section-op').animate({
        opacity: 1,

    });

});

/***************/
$('#PRODUITS').on('click', function(e){
    e.preventDefault();
    $('#PRODUITS-coll-mob').animate({
        marginLeft: 0,
    });
    $('.nav-section-op').animate({
        opacity: 0,

    });


});
$('#PRODUITS-collapse-mob-close').on('click', function(e){
    e.preventDefault();
    $('#PRODUITS-coll-mob').animate({
        marginLeft: "-100%",
    });
    $('.nav-section-op').animate({
        opacity: 1,

    });

});

$('#FORMATION').on('click', function(e){
    e.preventDefault();
    $('#FORMATION-coll-mob').animate({
        marginLeft: 0,
    });
    $('.nav-section-op').animate({
        opacity: 0,

    });


});
$('#FORMATION-collapse-mob-close').on('click', function(e){
    e.preventDefault();
    $('#FORMATION-coll-mob').animate({
        marginLeft: "-100%",
    });
    $('.nav-section-op').animate({
        opacity: 1,

    });

});