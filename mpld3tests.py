import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import vespa
from sklearn.datasets import load_iris

import mpld3
from mpld3 import plugins, utils

def star_param_scatterplot():

	# Create star population
	starpop = vespa.MultipleStarPopulation(1)
	# return starpop.prophist2d('distmod','distmod')
	x = starpop['H_mag']
	y = starpop['distmod']

	fig, ax = plt.subplots(111)

	# the_plot = ax.plot(x,y)

	return mpld3.fig_to_dict(fig)