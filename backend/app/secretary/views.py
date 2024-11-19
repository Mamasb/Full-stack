from flask import render_template, redirect, url_for, flash
from .forms import AddStudentForm
from .models import db, Student, Grade
from .utils import send_email

def add_student():
    form = AddStudentForm()
    form.grade.choices = [(g.id, g.name) for g in Grade.query.all()]

    if form.validate_on_submit():
        admission_number = Student.generate_admission_number()
        password = Student.generate_password()

        new_student = Student(
            name=form.name.data,
            admission_number=admission_number,
            grade_id=form.grade.data,
            parent_email=form.parent_email.data
        )
        new_student.set_password(password)
        
        db.session.add(new_student)
        db.session.commit()

        # Send email to parent with login details
        send_email(
            subject="Student Login Details",
            recipient=form.parent_email.data,
            body=f"Your child's login details:\nAdmission Number: {admission_number}\nPassword: {password}\nLogin URL: <login-url>"
        )

        flash("Student added and login details sent to the parent.", "success")
        return redirect(url_for('secretary.add_student'))
    
    return render_template('secretary/add_student.html', form=form)
