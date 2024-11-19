from flask import render_template, redirect, url_for
from forms import AddStudentForm, AddFeeForm
from models import db, Student, Fee

@app.route('/add_student', methods=['GET', 'POST'])
def add_student():
    form = AddStudentForm()
    if form.validate_on_submit():
        student = Student(first_name=form.first_name.data, last_name=form.last_name.data, grade=form.grade.data)
        db.session.add(student)
        db.session.commit()
        return redirect(url_for('home'))
    return render_template('add_student.html', form=form)

@app.route('/add_fee', methods=['GET', 'POST'])
def add_fee():
    form = AddFeeForm()
    if form.validate_on_submit():
        student = Student.query.get(form.student_id.data)
        if student:
            fee = Fee(student_id=form.student_id.data, amount=form.amount.data)
            db.session.add(fee)
            db.session.commit()
            return redirect(url_for('home'))
    return render_template('add_fee.html', form=form)
