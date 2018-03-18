import React from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends React.Component {

    renderField(field) {
        return (
            <div className="form-group">
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                {field.meta.data}
            </div>
        )
    }

    render() {
        return (
            <form>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField}
                />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField}
                />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField}
                />
                <button type="submit" className="btn btn-primary">Submit!!!</button>
            </form>
        )
    }
}

function validate(values) {
    const errors = {}

    if (!values.title) {
        errors.title = "Enter a title!!!"
    }

    if (!values.categories) {
        errors.categories = "Enter some categories"
    }

    if (!values.content) {
        errors.content = "Enter some content please!!!";
    }


    return errors
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);