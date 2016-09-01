import React, {Component} from 'react';
import './index.less';
class FillBlank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }
    render() {
        const {title, id, i} = this.props;
        const {getFieldProps, getFieldError } = this.props.form;
        let errors;
        return (
            <div className="q-item q-fb">
                <p><span>{i}.</span>{title}</p>
                <input
                    type="text"
                    {...getFieldProps('q' + id, {
                        initialValue: this.state.text,
                        rules: [{ required: true }]
                    }) }
                    />
                <div className="errors">
                    {(errors = getFieldError('q' + id)) ? errors.join(',') : null}
                </div>
            </div>
        );
    }
}

export default FillBlank;