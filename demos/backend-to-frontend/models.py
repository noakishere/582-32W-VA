from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Equipment(db.Model):
    id = db.Column(
        db.Integer,
        primary_key = True
    )

    name = db.Column(
        db.String(100),
        nullable=False
    )

    category = db.Column(
        db.String(50),
        nullable=False
    )

    # we convert the fields to a dictionary format
    # as we want to expose to frontend later.
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "category": self.category
        }