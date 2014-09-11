from flask import Flask, render_template

app = Flask(__name__)

items = ['One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', \
'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', \
'Nineteen', 'Twenty', 'Twenty One', 'Twenty Two', 'Twenty Three', 'Twenty Four', 'Twenty Five', \
'Twenty Six', 'Twenty Seven', 'Twenty Eight', 'Twenty Nine', 'Thirty']

@app.route("/")
def index():
    return render_template('index.html', my_list=items)

@app.route("/")
def newList():
    count = 0
    for i in range (1, 100):
        count = count + i
    return count

if __name__ == "__main__":
    app.run(debug=True)