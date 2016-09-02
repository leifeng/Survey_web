import React, {Component} from 'react';
import './index.less';
class Popup extends Component {
    constructor() {
        super();
        this.onClose = this.onClose.bind(this);
    }
    render() {
        const {title, display, height, width} = this.props;
        return (
            <div className="popup" style={{ display: display }}  onClick={this.onClose}>
                <div className="popup-bg"></div>
                <div className="popup-center" style={{ height: height }}>
                    <div className="popup-main" style={{ width: width }}>
                        <div className="popup-title">{title}<a className="popup-close">x</a></div>
                        <div className="popup-body">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    onClose(e) {
        const target = e.target;
        if (target.className === 'popup-bg' || target.className === 'popup-close' || target.className === 'popup-center') {
            const {onCloseCb} = this.props;
            onCloseCb();
        }
    }
}
Popup.propTypes = {
    title: React.PropTypes.string,
    display: React.PropTypes.string,
    onCloseCb: React.PropTypes.func,
    width: React.PropTypes.number,
    height: React.PropTypes.number
}
Popup.defaultProps = {
    title: '',
    display: '',
    width: 500,
    height: 300,
    onCloseCb: null
}
export default Popup;