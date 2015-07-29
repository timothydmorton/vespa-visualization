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

// 		// $.get('/_plot_data', function( jsonfig ) {
// 		//		 mpld3.draw_figure("figure", jsonfig);
// 		// });
// 		$.get('/_plot_data', function( scriptdiv ) {
// 				document.write(scriptdiv);
// 				document.write('div2');
// 		});
// 	}
// 	// mpld3.draw_figure("figure", jsonfig);
// }

$(function () {
	$('#FPP_tab, #stars_tab').click(function () {
		if ($('#FPP_input').is(':checked')) {
			$('#stars_tab').children('div').hide();
			$('#FPP_tab').children('div').show();
		} else if ($('#stars_input').is(':checked')) {
			$('#FPP_tab').children('div').hide();
			$('#stars_tab').children('div').show();
		}
	})
});

$(function () {
	$('#bottom-right').click(function () {
		if ($('#pl').is(':checked')) {
			$('#pl_div').show();
			$('#eb_div').hide();
			$('#beb_div').hide();
			$('#heb_div').hide();
		} else if ($('#eb').is(':checked')) {
			$('#pl_div').hide();
			$('#eb_div').show();
			$('#beb_div').hide();
			$('#heb_div').hide();
		} else if ($('#beb').is(':checked')) {
			$('#pl_div').hide();
			$('#eb_div').hide();
			$('#beb_div').show();
			$('#heb_div').hide();
		} else if ($('#heb').is(':checked')) {
			$('#pl_div').hide();
			$('#eb_div').hide();
			$('#beb_div').hide();
			$('#heb_div').show();
		}
	})
});

$('#top-right input[type=radio]').hide()