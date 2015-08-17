// function form_maker(data_options,x_or_y) {

// 	for (var each_op in data_options) {
// 		// <li>
// 		var l = document.createElement("li")

// 		// <input type='checkbox' onchange='this.form.submit()' name=''>
// 		var o_star = document.createElement("input");
// 		var o_star_name = data_options[each_op] + x_or_y;
// 		o_star.setAttribute('type','checkbox');
// 		o_star.setAttribute('name','a_checkbox[]');
// 		o_star.setAttribute('onchange','this.form.submit()');
// 		o_star.setAttribute('id',o_star_name);
// 		o_star.setAttribute('value',o_star_name);
// 		l.appendChild(o_star)

// 		// <label for=''></label>
// 		var la = document.createElement("label")
// 		la.setAttribute('for',o_star_name)
// 		la.innerHTML = o_star_name.substring(0, o_star_name.length-1);
// 		l.appendChild(la)
// 		document.getElementById(x_or_y + '_axis_ul').appendChild(l);
// 	}
// }

// $("#clear").click(function() {
// 	$("input[type=checkbox]").removeAttr("checked");
// });

// function form_validation() {
// 	var checked_values = $('input[name="checkbox_data"]:checked').map(
// 		function() {
// 			return this.value;
// 		}).get();

// 	if (checked_values.length > 1) {
// 		// document.getElementById('optionsform').submit();

// 		// $.get('/_Plot_data', function( jsonfig ) {
// 		//		 mPld3.draw_figure("figure", jsonfig);
// 		// });
// 		$.get('/_Plot_data', function( scriptdiv ) {
// 				document.write(scriptdiv);
// 				document.write('div2');
// 		});
// 	}
// 	// mPld3.draw_figure("figure", jsonfig);
// }


$('#stars_tab input[type=radio]').hide()

$('#top-right input[type=radio]').hide()

$('#FPP_tab').click(function () {
	$('#FPP_img').show();
	$('.stars_img').hide();
	$('#FPP_tab').css({
		'background-color':'white',
		'color':'black'
	});
	$('#stars_tab').css({
		'background-color':'black',
		'color':'white'
	});
	$('label[for="singleStar"], label[for="doubleStar"], label[for="tripleStar"]').css('color', 'white');
});

$('#stars_tab').click(function () {
	$('.stars_img').show();
	$('#FPP_img').hide();
	$('#stars_tab').css({
		'background-color':'white',
		'color':'black'
	});
	$('#FPP_tab').css({
		'background-color':'black',
		'color':'white'
	});
	if ($('#singleStar').is(':checked')) {
		$('label[for="singleStar"]').css('color', 'red');
		$('label[for="doubleStar"],label[for="tripleStar"]').css('color', 'black');
		$('#singleStarImg').show();
		$('#doubleStarImg').hide();
		$('#tripleStarImg').hide();
	} else if ($('#doubleStar').is(':checked')) {
		$('label[for="doubleStar"]').css('color', 'red');
		$('label[for="singleStar"],label[for="tripleStar"]').css('color', 'black');
		$('#singleStarImg').hide();
		$('#doubleStarImg').show();
		$('#tripleStarImg').hide();
	} else if ($('#tripleStar').is(':checked')) {
		$('label[for="tripleStar"]').css('color', 'red');
		$('label[for="singleStar"],label[for="doubleStar"]').css('color', 'black');
		$('#singleStarImg').hide();
		$('#doubleStarImg').hide();
		$('#tripleStarImg').show();
	}
});

$('#Pl_tab').click(function () {
	$('#Pl_img').show();
	$('#EB_img').hide();
	$('#BEB_img').hide();
	$('#HEB_img').hide();
	$('#Pl_tab').css({
		'background-color':'white',
		'color':'black',
	});
	$('#EB_tab, #BEB_tab, #HEB_tab').css({
		'background-color':'black',
		'color':'white'
	});
});

$('#EB_tab').click(function () {
	$('#Pl_img').hide();
	$('#EB_img').show();
	$('#BEB_img').hide();
	$('#HEB_img').hide();
	$('#EB_tab').css({
		'background-color':'white',
		'color':'black'
	});
	$('#Pl_tab, #BEB_tab, #HEB_tab').css({
		'background-color':'black',
		'color':'white'
	});
});

$('#BEB_tab').click(function () {
	$('#Pl_img').hide();
	$('#EB_img').hide();
	$('#BEB_img').show();
	$('#HEB_img').hide();
	$('#BEB_tab').css({
		'background-color':'white',
		'color':'black'
	});
	$('#Pl_tab, #EB_tab, #HEB_tab').css({
		'background-color':'black',
		'color':'white'
	});
});

$('#HEB_tab').click(function () {
	$('#Pl_img').hide();
	$('#EB_img').hide();
	$('#BEB_img').hide();
	$('#HEB_img').show();
	$('#HEB_tab').css({
		'background-color':'white',
		'color':'black'
	});
	$('#Pl_tab, #EB_tab, #BEB_tab').css({
		'background-color':'black',
		'color':'white'
	});
});

$(function () {
	$('#bottom-right').click(function () {
		if ($('#Pl').is(':checked')) {
			$('#Pl_div').show();
			$('#EB_div').hide();
			$('#BEB_div').hide();
			$('#HEB_div').hide();
		} else if ($('#EB').is(':checked')) {
			$('#Pl_div').hide();
			$('#EB_div').show();
			$('#BEB_div').hide();
			$('#HEB_div').hide();
		} else if ($('#BEB').is(':checked')) {
			$('#Pl_div').hide();
			$('#EB_div').hide();
			$('#BEB_div').show();
			$('#HEB_div').hide();
		} else if ($('#HEB').is(':checked')) {
			$('#Pl_div').hide();
			$('#EB_div').hide();
			$('#BEB_div').hide();
			$('#HEB_div').show();
		}
	})
});

$('#submit').click(function(){
	$('#hiddenSubmit').trigger('click');
});