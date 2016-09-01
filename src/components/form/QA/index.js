import React, {Component} from 'react';
import './index.less';
class QA extends Component {
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
            <div className="q-item q-qa">
                <p><span>{i}.</span>{title.substring(0, title.indexOf('_')) }
                    <input
                        type="text"
                        {...getFieldProps('q' + id, {
                            initialValue: this.state.text,               
                            rules: [{ required: true }]
                        }) }
                        />
                    {title.substring(title.indexOf('_') + 1) }</p>
                <div className="errors">
                    {(errors = getFieldError('q' + id)) ? errors.join(',') : null}
                </div>
            </div>
        );
    }
}
export default QA;