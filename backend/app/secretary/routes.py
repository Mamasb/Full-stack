from flask import Blueprint
from .views import add_student

secretary_bp = Blueprint('secretary', __name__)

secretary_bp.route('/add-student', methods=['GET', 'POST'])(add_student)
