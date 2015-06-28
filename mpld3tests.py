import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import vespa
import json
from sklearn.datasets import load_iris

import mpld3
from mpld3 import plugins, utils

def star_param_scatterplot():

	# Create star population
	starpop = vespa.MultipleStarPopulation(1)
	# return starpop.prophist2d('distmod','distmod')
	x = starpop['H_mag']
	y = starpop['distmod']

	fig = plt.figure()
	ax = fig.add_subplot(111, xlabel='$distance$', ylabel='$distmod$')

	the_plot = ax.plot(x,y)
	f = open("mpld3_product.txt","w")
	json01 = json.dumps(mpld3.fig_to_dict(fig))
	f.write(json01)
	f.close()