import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Field from './Field';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.handleChangeQuestionActivity = this.handleChangeQuestion.bind(this, 'activity');
    this.handleChangeQuestionBudget = this.handleChangeQuestion.bind(this, 'budget');
    this.handleChangeQuestionSpace = this.handleChangeQuestion.bind(this, 'space');
    this.handleChangeQuestionTime = this.handleChangeQuestion.bind(this, 'time');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeQuestion(label, evt) {
    const value = evt.target.value;
    this.props.onChange(label, value);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const { questions, answers } = this.props;

    return (
      <form
        className="Form"
        onSubmit={this.handleSubmit}
      >
        <div className="Form__header">
          <h1>Want to know which dog breed is the perfect one for you?</h1>
          <h2>Just answer a few questions and you'll know!</h2>
        </div>
        <Field
          label={questions.activity}
          value={answers.activity}
          onChange={this.handleChangeQuestionActivity}
        />
        <Field
          label={questions.budget}
          value={answers.budget}
          onChange={this.handleChangeQuestionBudget}
        />
        <Field
          label={questions.space}
          value={answers.space}
          onChange={this.handleChangeQuestionSpace}
        />
        <Field
          label={questions.time}
          value={answers.time}
          onChange={this.handleChangeQuestionTime}
        />
        <input
          className="Form__submit_button"
          type="submit"
          value="Submit"
        />
      </form>
    );
  }
}

Form.propTypes = {
  questions: PropTypes.shape({
    activity: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    space: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  answers: PropTypes.shape({
    activity: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    space: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
