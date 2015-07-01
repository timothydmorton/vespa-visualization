from flask import Flask, render_template
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
# import vespa
import json
from sklearn.datasets import load_iris

import mpld3
from mpld3 import plugins, utils

app = Flask(__name__)

@app.route("/")
def star_param_scatterplot():

	# Create star population
	# starpop = vespa.MultipleStarPopulation(1)
	# return starpop.prophist2d('distmod','distmod')
	# x = starpop['H_mag']
	# y = starpop['distmod']
	x = np.random.randint(200, size=100)
	y = np.random.randint(200, size=100)
	fig = plt.figure()
	ax = fig.add_subplot(111) #, xlabel='$distance$', ylabel='$distmod$')

	the_plot = ax.plot(x,y,marker='.',lw=0)
	f = open("mpld3_product.txt","w")
	json01 = json.dumps(mpld3.fig_to_dict(fig))
	return render_template('test.html', testvar=json01)

if __name__ == "__main__":
    app.run()