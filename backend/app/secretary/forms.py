from flask_wtf import FlaskForm
from wtforms import StringField, SelectField, SubmitField
from wtforms.validators import DataRequired, Email

class AddStudentForm(FlaskForm):
    name = StringField('Student Name', validators=[DataRequired()])
    grade = SelectField('Grade', choices=[], coerce=int, validators=[DataRequired()])
    parent_email = StringField('Parent Email', validators=[DataRequired(), Email()])
    submit = SubmitField('Add Student')
