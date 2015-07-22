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

$("#clear").click(function() {
	$("input[type=checkbox]").removeAttr("checked");
});

function form_validation() {
	var checked_values = $('input[name="checkbox_data"]:checked').map(
		function() {
			return this.value;
		}).get();

	if (checked_values.length > 1) {
		// document.getElementById('optionsform').submit();

		$.get('/_plot_data', function( jsonfig ) {
		    mpld3.draw_figure("figure", jsonfig);
		});
	}
	// mpld3.draw_figure("figure", jsonfig);
}