$('th:contains("Died")').parent().hide()
$('td:contains("death")').parent().hide()
$('th:contains("death")').parent().hide()
$('span:contains("Death")').parent().hide()
$('p').not('.infobox p').first().html(function() {
	return $(this).html().replace('was', 'is');
})

var hidden = ['died','remains','funeral','death','autopsy','suicide','cremated']
hidden.forEach(function(word) {
	$('p:contains('+word+')').hide();
	$('li:contains('+word+')').hide();
	$('span:contains('+word+')').hide();	
})

$('p').each(function() {
    var html = $(this).html();
    $(this).html(html.replace('was survived by', 'lives with'));
    $(this).html(html.replace(/(&nbsp;| )– [0-9a-zA-Z ]+\)/, ')'));
});
