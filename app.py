from flask import Flask, render_template, redirect, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route("/menu")
def menu():
    return render_template("menu.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/proizvodi")
def proizvodi():
    return render_template("proizvodi.html")

if __name__ == '__main__':
    app.run(debug=True)