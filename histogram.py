from __future__ import division
from scipy.integrate import odeint
import numpy as np
import pylab as P
from matplotlib import pyplot as plt
import csv

mu, sigma = 200, 25
x = mu + sigma*P.randn(100)
y = mu + sigma*P.randn(100)

#P.figure()
#bins = [100,125,150,160,170,180,190,200,210,220,230,240,250,275,300]
#n, bins, patches = P.hist(x, bins)#, orientation="horizontal")
##
length = len(x)
time = np.linspace(0,length,length)

area = np.pi*(0.05*x)**2
colors = np.random.rand(100)
#
#plt.plot(time,x,time,y)
#plt.show()   

vert_hist = np.histogram(x, bins)
ax1 = plt.subplot(3,1,1)
ax1.plot(time,x,time,y)

ax2 = plt.subplot(3,1,2)
ax2.hist(x,bins)

ax3 = plt.subplot(3,1,3)
ax3.scatter(x,y, s=area, c=colors, alpha=0.5)

plot.show()