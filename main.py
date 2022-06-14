from flask import Flask, render_template, request, redirect, url_for
import db

app = Flask(  
	__name__,
	template_folder='templates',  
	static_folder='static',
)

#главная страница
@app.route('/', methods=['GET', 'POST'])
def index():
  if request.method == "POST":
    title = request.form["title"]
    type = request.form["type"]
    amount = request.form["amount"]
    db.add(title, type, amount)
  items = db.getAll()
  return render_template('index.html', items=items)

@app.route('/page')
def page():
  return render_template("girma.html")
  
#обработка удаления
@app.route('/delete', methods=['GET','POST'])
def delete():
  if request.method == "POST":
    id = request.form["id"]
    print(id)
    db.removeById(int(id))
  return redirect(url_for('index'))
app.run(host='0.0.0.0', port=81)