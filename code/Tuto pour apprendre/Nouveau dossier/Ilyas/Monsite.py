from flask import Flask, request, render_template,jsonify
import site
import time
app = Flask(__name__, static_url_path='/static')

@app.route('/coucou')
def coucou():
    return 'coucou'

@app.route('/test/result')
def show_array():
    # façon = request.args.get()
    array = [int(x) for x in request.args.get('list').split(',')]
    print(type(array), array)
    return jsonify(

        bubble_sort(array)
        
        
        )

@app.route('/test')
def liste():
        return render_template('site.html')


def bubble_sort(array):
    longeur = len(array)
    x = time.time()
    for i in range(longeur):
        for j in range(longeur-i-1):
            if array[j]> array[j+1]:
                array[j], array[j+1] = array[j+1], array[j]

    y = time.time()
    return {"data":array, "time": round(y - x, 1)}

    