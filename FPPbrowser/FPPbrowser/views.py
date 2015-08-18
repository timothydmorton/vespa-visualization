from FPPbrowser import app
from flask import render_template, request, jsonify, flash
from matplotlib import pyplot as plt
from bokeh import plotting as bkplt
from bokeh.embed import file_html, components
from bokeh.resources import CDN

import numpy as np
import os, os.path
# import vespa
import json
import mpld3

# starpop = vespa.MultipleStarPopulation(1)
data_options = []
# for each_key in starpop.stars.keys():
# 	if np.isfinite(getattr(starpop.stars,each_key)).any():
# 		data_options.append(each_key)

# Create empty pyplot figure
fig = bkplt.figure()

KOI_files = []
curdir = os.path.dirname(__file__)
KOI_filepath = os.path.join(curdir,'static','fpp')
for each_file in os.listdir(KOI_filepath):
	if each_file[0] != '.':
		KOI_files.append(each_file)

@app.route('/')
def index():
	# jsonfig = json.dumps(mpld3.fig_to_dict(fig))
	# return render_template('index.html', data_options=data_options, jsonfig=jsonfig)
	script, div = components(fig, CDN)
	return render_template('index.html', data_options=data_options, script=script, div=div, KOI_files=KOI_files)

@app.route('/loadKOIData', methods=['POST'])
def load_KOIdata():

	KOI_filename = request.form['KOIinput']
	return render_template('index.html', KOI_filename=KOI_filename, KOI_files=KOI_files)

@app.route('/_plot_data', methods=['POST'])
def plot_data():

	data = request.form['KOIinput']
	return render_template('index.html', data=data, KOI_files=KOI_files)
	# all_picks = request.args.getlist('checkbox_data')

	# x_pick = 'H_mag'#str(all_picks[0])
	# y_pick = 'H_mag'#str(all_picks[1])

	# x = starpop[x_pick]
	# y = starpop[y_pick]

	# fig.xaxis.axis_label = x_pick
	# fig.yaxis.axis_label = y_pick

	# # Plot data and convert to JSON
	# script, div = components(fig, CDN)
	# # jsonfig = jsonify(mpld3.fig_to_dict(fig))
	# # return render_template('index.html', data_options=data_options, jsonfig=jsonfig)
	# return div
