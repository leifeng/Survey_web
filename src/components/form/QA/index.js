import React, {Component} from 'react';
import './index.less';
const QA = (props) => {
    const {title, id, i} = props;
    const {getFieldProps} = props.form;

    return (
        <div className="q-item q-qa">
            <p><span>{i}.</span>{title}</p>
            <input
                type="text"
                {...getFieldProps('q' + id) }
                />


        </div>
    );

}

export default QA;