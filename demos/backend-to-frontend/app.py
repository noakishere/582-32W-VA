from flask import (
    Flask,
    jsonify,
    render_template,
    request
)

from models import db, Equipment

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = ("sqlite:///equipment.db")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)


with app.app_context():
    db.create_all()

@app.route("/")
def hello():
    return "HELLO"