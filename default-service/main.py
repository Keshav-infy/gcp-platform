from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'My Default Service - V2-3-57-0:INCRUP1.1'
