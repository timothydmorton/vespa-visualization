from FPPbrowser import app#, forms
from flask import render_template, request, jsonify
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

# Create empty pyplot figure
fig = plt.figure()
ax = fig.add_subplot(111)

@app.route('/')
def index():
	jsonfig = json.dumps(mpld3.fig_to_dict(fig))
	return render_template('index.html', data_options=data_options, jsonfig=jsonfig)

@app.route('/_plot_data', methods=['POST','GET'])
def plot_data():

	all_picks = request.args.getlist('checkbox_data')

	x_pick = 'H_mag'#str(all_picks[0])
	y_pick = 'H_mag'#str(all_picks[1])

	x = starpop[x_pick]
	y = starpop[y_pick]

	ax.set_xlabel(x_pick)
	ax.set_ylabel(y_pick)

	# Plot data and convert to JSON
	ax.plot(x,y,marker='.',lw=0)
	jsonfig = json.dumps(mpld3.fig_to_dict(fig))
	return render_template('index.html', data_options=data_options, jsonfig=jsonfig)
	# return jsonfig
