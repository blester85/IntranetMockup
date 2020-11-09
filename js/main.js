$('#infoHeading').click(function() {
  if ($('#infoHeading>a>i#infoArrow').hasClass('fa-caret-right')) {
    $('#info').removeClass('hidden');
    $('#info').addClass('show');

    $('#infoArrow').removeClass('fa-caret-right');
    $('#infoArrow').addClass('fa-caret-down');

    $('#proceduresArrow').removeClass('fa-caret-down');
    $('#proceduresArrow').addClass('fa-caret-right');

    $('#hrArrow').removeClass('fa-caret-down');
    $('#hrArrow').addClass('fa-caret-right');

    $('#moneyArrow').removeClass('fa-caret-down');
    $('#moneyArrow').addClass('fa-caret-right');

    $('#personnelArrow').removeClass('fa-caret-down');
    $('#personnelArrow').addClass('fa-caret-right');

    $('#formsArrow').removeClass('fa-caret-down');
    $('#formsArrow').addClass('fa-caret-right');
  } else {
    $('#info').removeClass('show');
    $('#info').addClass('hidden');
    $('#infoArrow').removeClass('fa-caret-down');
    $('#infoArrow').addClass('fa-caret-right');
  }
});

$('#proceduresHeading').click(function() {
  if ($('#proceduresHeading>a>i#proceduresArrow').hasClass('fa-caret-right')) {
    $('#procedures').removeClass('hidden');
    $('#procedures').addClass('show');

    $('#proceduresArrow').removeClass('fa-caret-right');
    $('#proceduresArrow').addClass('fa-caret-down');

    $('#infoArrow').removeClass('fa-caret-down');
    $('#infoArrow').addClass('fa-caret-right');

    $('#hrArrow').removeClass('fa-caret-down');
    $('#hrArrow').addClass('fa-caret-right');

    $('#moneyArrow').removeClass('fa-caret-down');
    $('#moneyArrow').addClass('fa-caret-right');

    $('#personnelArrow').removeClass('fa-caret-down');
    $('#personnelArrow').addClass('fa-caret-right');

    $('#formsArrow').removeClass('fa-caret-down');
    $('#formsArrow').addClass('fa-caret-right');
  } else {
    $('#procedures').removeClass('show');
    $('#procedures').addClass('hidden');
    $('#proceduresArrow').removeClass('fa-caret-down');
    $('#proceduresArrow').addClass('fa-caret-right');
  }
});

$('#hrHeading').click(function() {
  if ($('#hrHeading>a>i#hrArrow').hasClass('fa-caret-right')) {
    $('#hr').removeClass('hidden');
    $('#hr').addClass('show');

    $('#hrArrow').removeClass('fa-caret-right');
    $('#hrArrow').addClass('fa-caret-down');

    $('#infoArrow').removeClass('fa-caret-down');
    $('#infoArrow').addClass('fa-caret-right');

    $('#proceduresArrow').removeClass('fa-caret-down');
    $('#proceduresArrow').addClass('fa-caret-right');

    $('#moneyArrow').removeClass('fa-caret-down');
    $('#moneyArrow').addClass('fa-caret-right');

    $('#personnelArrow').removeClass('fa-caret-down');
    $('#personnelArrow').addClass('fa-caret-right');

    $('#formsArrow').removeClass('fa-caret-down');
    $('#formsArrow').addClass('fa-caret-right');
  } else {
    $('#hr').removeClass('show');
    $('#hr').addClass('hidden');
    $('#hrArrow').removeClass('fa-caret-down');
    $('#hrArrow').addClass('fa-caret-right');
  }
});
