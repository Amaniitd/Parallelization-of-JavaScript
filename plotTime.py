

import json

import matplotlib.pyplot as plt

import numpy as np

import sys

def plotTime(signatures, times):
    # plot a horizontal bar graph
    y_pos = np.arange(len(signatures))
    plt.barh(y_pos, times, align='center', alpha=0.5)
    plt.yticks(y_pos, signatures)
    plt.xlabel('Time (ms)')
    #remove all the borders
    for spine in plt.gca().spines.values():
        spine.set_visible(False)
    plt.tick_params(top='off', bottom='off', left='off', right='off', labelleft='on', labelbottom='on')
    #remove the ticks
    plt.tick_params(axis='both', which='both', length=0)
    #enlarge the plot
    plt.gcf().set_size_inches(15, 8)
    # extend the plot to display the names of the signatures
    plt.subplots_adjust(left=0.5)
    #add title
    plt.title("Time taken by each function call")
    plt.show()




# load the json file

def readJson(filename):
    with open(filename, 'r') as f:
        data = json.load(f)
        signatures = []
        times = []
        for key in data:
            signatures.append(key)
            times.append(data[key]["time"])
    plotTime(signatures, times)
        
readJson(sys.argv[1])