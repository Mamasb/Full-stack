# run.py
from app import create_app, db
from app.models import Student, Parent, User

app = create_app()

if __name__ == '__main__':
    app.run()
