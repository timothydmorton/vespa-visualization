from flask import render_template
from FPPbrowser import app
from matplotlib import pyplot as plt

import numpy as np
import json
import mpld3


@app.route("/")
def index():

	x = np.random.randint(200, size=100)
	y = np.random.randint(200, size=100)
	fig = plt.figure()
	ax = fig.add_subplot(111)
	ax.plot(x,y,marker='.',lw=0)

	f = open("mpld3_product.txt","w")
	json01 = json.dumps(mpld3.fig_to_dict(fig))
	return render_template('index.html', testvar=json01)