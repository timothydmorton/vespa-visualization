from FPPbrowser import app, forms
from flask import render_template, request
from matplotlib import pyplot as plt

import numpy as np
import json
import mpld3


@app.route('/')
def index():

	# Create empty pyplot figure
	fig = plt.figure()
	jsonfig = json.dumps(mpld3.fig_to_dict(fig))

	# Render template
	return render_template('index.html', jsonfig=jsonfig)

@app.route('/plot_w_options', methods=['POST'])
def plot_w_options():

	# Generate randm data
	x = np.random.randint(200, size=100)
	y = np.random.randint(200, size=100)
	fig = plt.figure()
	ax = fig.add_subplot(111)

	# Get plot_color from HTML select object
	plot_color = request.form['color_choice']

	# Plot data with selected color
	ax.plot(x,y,marker='.',color=plot_color,lw=0)
	jsonfig = json.dumps(mpld3.fig_to_dict(fig))

	# Render index.html again, but with data and color
	return render_template('index.html', jsonfig=jsonfig)