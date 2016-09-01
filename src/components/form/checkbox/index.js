import React, {Component} from 'react';
import './index.less';

const CheckBox = (props) => {
    const {list, title, id, i} = props;
    const {getFieldProps} = props.form;
    return (
        <div className="q-item  q-checkbox">
            <p><span>{i}.</span>{title}</p>
            {list.map((item, index) => {
                return (
                    <label key={index}>
                        <input
                            type="checkbox"
                            {...getFieldProps('q' + id + '.' + index, {
                                initialValue: '',                   
                                getValueFromEvent(e) {
                                    return e.target.checked ? item.value : '';
                                }                             
                            }) }
                            />
                        {item.title}
                    </label>

                )
            }) }
        </div>
    );
}

export default CheckBox;