from FPPbrowser import app, forms
from flask import render_template, request
from matplotlib import pyplot as plt

import numpy as np
import vespa
import json
import mpld3

starpop = vespa.MultipleStarPopulation(1)
data_options = []
for each_key in starpop.stars.keys():
	if np.isfinite(getattr(starpop.stars,each_key)).any():
		data_options.append(each_key)

@app.route('/', methods=['POST','GET'])
def index():

	# Create empty pyplot figure
	fig = plt.figure()
	jsonfig = json.dumps(mpld3.fig_to_dict(fig))
	f_x='[]'
	f_y='[]'

	if request.method == 'POST':
		f_x = request.values.getlist('checkbox_x')
		f_y = request.values.getlist('checkbox_y')
		x_pick = str(f_x[::-1][0])
		y_pick = str(f_y[::-1][0])
		# Generate random data
		x = starpop[x_pick]
		y = starpop[y_pick]
		# x = np.random.randint(200, size=100)
		# y = np.random.randint(200, size=100)
		fig = plt.figure()
		ax = fig.add_subplot(111)
		ax.set_xlabel(x_pick)
		ax.set_ylabel(y_pick)

		# Get plot_color from HTML select object
		# plot_color = request.form['color_choice']

		# Plot data and convert to JSON
		ax.plot(x,y,marker='.',lw=0)
		jsonfig = json.dumps(mpld3.fig_to_dict(fig))

	# elif request.method == 'GET':
	# 	# Render template
	# 	return render_template('index.html', jsonfig=jsonfig, data_options=data_options,f_x='',f_y='')
	return render_template('index.html', jsonfig=jsonfig, data_options=data_options,f_x=[x.encode('UTF8') for x in f_x],f_y=[y.encode('UTF8') for y in f_y])

@app.route('/plot_w_options', methods=['POST'])
def plot_w_options():
	f_x = request.values.getlist('checkbox_x')
	f_y = request.values.getlist('checkbox_y')
	try:
		x_pick = f_x[::-1][0]
		y_pick = f_y[::-1][0]
	except IndexError:
		pass
	else:
		return str(x_pick + " " + y_pick)
		# Generate random data
		# x = starpop['H_mag']
		# y = starpop['distmod']
		x = np.random.randint(200, size=100)
		y = np.random.randint(200, size=100)
		fig = plt.figure()
		ax = fig.add_subplot(111)

		# Get plot_color from HTML select object
		# plot_color = request.form['color_choice']

		# # Plot data with selected color
		# ax.plot(x,y,marker='.',color=plot_color,lw=0)
		# jsonfig = json.dumps(mpld3.fig_to_dict(fig))

		# # Render index.html again, but with data and color
	return render_template('index.html', jsonfig=jsonfig, data_options=data_options)