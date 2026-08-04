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
    return render_template(
        "index.html"
    )


# Get JSON from flask
@app.route("/api/equipment", methods=["GET"])
def get_equipment():
    equipment = Equipment.query.order_by(Equipment.name).all()

    # returning JSON
    return jsonify([item.to_dict() for item in equipment])


# Submit JSON to Flask
@app.route("api/equipment", methods=["GET", "POST"])
def equipment_collection():
    if request.method == "POST":
        data = request.get_json()

        if data is None:
            # we're sending an error! with 400 status
            #                               "server cant process the request." (client-side error)
            return jsonify({
                "error": "A JSON request body is required."
            }), 400

        name = str(data.get("name", "")).strip()

        category = str(data.get("category", "")).strip()

        #### VALIDATION
        # list of errors
        errors = {}

        if not name: 
            errors["name"] = "Equipment name is required!"

        if len(name) > 100:
            errors["name"] = "Equipment name may contain at most 100 characters."

        valid_categories = {
            "Audio",
            "Lighting",
            "Camera"
        }

        if category not in valid_categories:
            errors["category"] = "Select a valid category"

        # IN CASE OF ERRORS:
        if errors:
            return jsonify({
                "errors": errors
            }), 400

        # If no errors:
        item = Equipment(name=name, category=category)

        # add and commit to db
        db.session.add(item)
        db.session.commit()

        ## operation successful
        # 201 : successfully create a new resource
        return jsonify(
            item.to_dict()
        ), 201

    equipment = Equipment.query.order_by(Equipment.name).all()

    return jsonify([item.to_dict() for item in equipment])
    


        