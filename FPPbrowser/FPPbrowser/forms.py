from flask.ext.wtf import Form
from wtforms.fields import SelectField

class PlotForm(Form):
	x_axis = SelectField(u'X-axis', choices=[('distance','distance'),('distmod','distmod')])
	y_axis = SelectField(u'Y-axis', choices=[('distance','distance'),('distmod','distmod')])