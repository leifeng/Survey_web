import React, {Component} from 'react';
import './index.less';
const Radio = (props) => {
    const {list, title, id, i} = props;
    const {getFieldProps} = props.form;
    return (
        <div className="q-item q-radio">
            <p><span>{i}.</span>{title}</p>
            {list.map((item, index) => {
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            {...getFieldProps('q' + id + '.' + index, {
                                exclusive: true,
                                getValueFromEvent(e) {
                                    return e.target.checked ? item.value : '';
                                },
                                getValueProps(value) {
                                    return {
                                        checked: value === item.value,
                                    };
                                },
                            }) }
                            />
                        {item.title}
                    </label>

                )
            }) }
        </div>
    )
}
export default Radio;