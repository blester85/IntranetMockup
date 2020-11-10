$('.col-6>.list-group-flush>.list-group-item').hover(function() {
  $(this)
    .stop()
    .animate({
      fontSize: '1.1em'
    }, 100);
}, function() {
  $(this)
    .stop()
    .animate({
      fontSize: '1em'
    }, 200);
});

$('#helpdeskStatus').click(function() {
  if ($('#helpdeskStatusArrow').hasClass('fa-caret-down')) {
    $('#helpdeskStatusArrow').removeClass('fa-caret-down').addClass('fa-caret-right');
  } else {
    $('#helpdeskStatusArrow').removeClass('fa-caret-right').addClass('fa-caret-down');
  }
});

$.changeInfoArrowDirection = function(direction) {
  if (direction === 'down') {
    $('#infoArrow').removeClass('fa-caret-right').addClass('fa-caret-down');
    $('#infoTab').removeClass('infoBackground').addClass('whiteBackground');
  } else if (direction === 'right') {
    $('#infoArrow').removeClass('fa-caret-down').addClass('fa-caret-right');
    $('#infoTab').removeClass('whiteBackground').addClass('infoBackground');
  }
};

$.changeProceduresArrowDirection = function(direction) {
  if (direction === 'down') {
    $('#proceduresArrow').removeClass('fa-caret-right').addClass('fa-caret-down');
    $('#proceduresTab').removeClass('proceduresBackground').addClass('whiteBackground');
  } else if (direction === 'right') {
    $('#proceduresArrow').removeClass('fa-caret-down').addClass('fa-caret-right');
    $('#proceduresTab').removeClass('whiteBackground').addClass('proceduresBackground');
  }
}

$.changeHRArrowDirection = function(direction) {
  if (direction === 'down') {
    $('#hrArrow').removeClass('fa-caret-right').addClass('fa-caret-down');
    $('#hrTab').removeClass('hrBackground').addClass('whiteBackground');
  } else if (direction === 'right') {
    $('#hrArrow').removeClass('fa-caret-down').addClass('fa-caret-right');
    $('#hrTab').removeClass('whiteBackground').addClass('hrBackground');
  }
}

$.changeMoneyArrowDirection = function(direction) {
  if (direction === 'down') {
    $('#moneyArrow').removeClass('fa-caret-right').addClass('fa-caret-down');
    $('#moneyTab').removeClass('moneyBackground').addClass('whiteBackground');
  } else if (direction === 'right') {
    $('#moneyArrow').removeClass('fa-caret-down').addClass('fa-caret-right');
    $('#moneyTab').removeClass('whiteBackground').addClass('moneyBackground');
  }
}

$.changePersonnelArrowDirection = function(direction) {
  if (direction === 'down') {
    $('#personnelArrow').removeClass('fa-caret-right').addClass('fa-caret-down');
    $('#personnelTab').removeClass('personnelBackground').addClass('whiteBackground');
  } else if (direction === 'right') {
    $('#personnelArrow').removeClass('fa-caret-down').addClass('fa-caret-right');
    $('#personnelTab').removeClass('whiteBackground').addClass('personnelBackground');
  }
}

$.changeFormsArrowDirection = function(direction) {
  if (direction === 'down') {
    $('#formsArrow').removeClass('fa-caret-right').addClass('fa-caret-down');
    $('#formsTab').removeClass('formsBackground').addClass('whiteBackground');
  } else if (direction === 'right') {
    $('#formsArrow').removeClass('fa-caret-down').addClass('fa-caret-right');
    $('#formsTab').removeClass('whiteBackground').addClass('formsBackground');
  }
}

$.infoPanelStatus = function(status) {
  if (status === 'open') {
    $('#info').removeClass('hidden').addClass('show');
  } else if (status === 'close') {
    $('#info').removeClass('show').addClass('hidden');
  }
}

$.proceduresPanelStatus = function(status) {
  if (status === 'open') {
    $('#procedures').removeClass('hidden').addClass('show');
  } else if (status === 'close') {
    $('#procedures').removeClass('show').addClass('hidden');
  }
}

$.hrPanelStatus = function(status) {
  if (status === 'open') {
    $('#hr').removeClass('hidden').addClass('show');
  } else if (status === 'close') {
    $('#hr').removeClass('show').addClass('hidden');
  }
}

$.moneyPanelStatus = function(status) {
  if (status === 'open') {
    $('#money').removeClass('hidden').addClass('show');
  } else if (status === 'close') {
    $('#money').removeClass('show').addClass('hidden');
  }
}

$.personnelPanelStatus = function(status) {
  if (status === 'open') {
    $('#personnel').removeClass('hidden').addClass('show');
  } else if (status === 'close') {
    $('#personnel').removeClass('show').addClass('hidden');
  }
}

$.formsPanelStatus = function(status) {
  if (status === 'open') {
    $('#forms').removeClass('hidden').addClass('show');
  } else if (status === 'close') {
    $('#forms').removeClass('show').addClass('hidden');
  }
}

$('#infoHeading').click(function() {
  if ($('#infoArrow').hasClass('fa-caret-right')) {
    $.infoPanelStatus('open');
    $.changeInfoArrowDirection('down');
    $.changeProceduresArrowDirection('right');
    $.changeHRArrowDirection('right');
    $.changeMoneyArrowDirection('right');
    $.changePersonnelArrowDirection('right');
    $.changeFormsArrowDirection('right');
  } else {
    $.infoPanelStatus('close');
    $.changeInfoArrowDirection('right');
  }
});

$('#proceduresHeading').click(function() {
  if ($('#proceduresArrow').hasClass('fa-caret-right')) {
    $.proceduresPanelStatus('open');
    $.changeProceduresArrowDirection('down');
    $.changeInfoArrowDirection('right');
    $.changeHRArrowDirection('right');
    $.changeMoneyArrowDirection('right');
    $.changePersonnelArrowDirection('right');
    $.changeFormsArrowDirection('right');
  } else {
    $.proceduresPanelStatus('close');
    $.changeProceduresArrowDirection('right');
  }
});

$('#hrHeading').click(function() {
  if ($('#hrArrow').hasClass('fa-caret-right')) {
    $.hrPanelStatus('open');
    $.changeHRArrowDirection('down');
    $.changeInfoArrowDirection('right');
    $.changeProceduresArrowDirection('right');
    $.changeMoneyArrowDirection('right');
    $.changePersonnelArrowDirection('right');
    $.changeFormsArrowDirection('right');
  } else {
    $.hrPanelStatus('close');
    $.changeHRArrowDirection('right');
  }
});

$('#moneyHeading').click(function() {
  if ($('#moneyArrow').hasClass('fa-caret-right')) {
    $.moneyPanelStatus('open');
    $.changeMoneyArrowDirection('down');
    $.changeInfoArrowDirection('right');
    $.changeProceduresArrowDirection('right');
    $.changeHRArrowDirection('right');
    $.changePersonnelArrowDirection('right');
    $.changeFormsArrowDirection('right');
  } else {
    $.moneyPanelStatus('close');
    $.changeMoneyArrowDirection('right');
  }
});

$('#personnelHeading').click(function() {
  if ($('#personnelArrow').hasClass('fa-caret-right')) {
    $.personnelPanelStatus('open');
    $.changePersonnelArrowDirection('down');
    $.changeInfoArrowDirection('right');
    $.changeProceduresArrowDirection('right');
    $.changeHRArrowDirection('right');
    $.changeMoneyArrowDirection('right');
    $.changeFormsArrowDirection('right');
  } else {
    $.personnelPanelStatus('close');
    $.changePersonnelArrowDirection('right');
  }
});

$('#formsHeading').click(function() {
  if ($('#formsArrow').hasClass('fa-caret-right')) {
    $.formsPanelStatus('open');
    $.changeFormsArrowDirection('down');
    $.changeInfoArrowDirection('right');
    $.changeProceduresArrowDirection('right');
    $.changeHRArrowDirection('right');
    $.changeMoneyArrowDirection('right');
    $.changePersonnelArrowDirection('right');
  } else {
    $.formsPanelStatus('close');
    $.changeFormsArrowDirection('right');
  }
});
