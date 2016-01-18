/**
 * @author Sumukh
 */
$(document).ready(function(){
	
	$("#mapform").change(function(){
		
	var selectedOption =$("#mapform option:selected").val();
	if(selectedOption=='ALL')
	{
		$('a.dot').show(1000);
	}
	else
	{
		$('a.dot[continent="'+selectedOption+'"]').show(1000);
		$('a.dot[continent!="'+selectedOption+'"]').hide(1000);
	}
	
		
	});
$('a.dot').click(function(){
	$('a.dot').removeClass('selected');
	$(this).addClass('selected');
	var city = '.city_detail#'+$(this).attr('city');
	var htmlcode = $(city).html();
	$('.details_container').fadeOut(500,function(){
		$('.details_container .city_details').html(htmlcode);
		$('.details_container').fadeIn(500);
	});
	
});
});
