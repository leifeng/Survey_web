import React, {Component} from 'react';
import './index.less';
class LeftSidebar extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        }
        this.onClick=this.onClick.bind(this);
    }
    render() {
        const {data,title} = this.props;
        return (
            <div className="left-sidebar">
                <div className="title">{title}</div>
                <div className="body" onClick={this.onClick}>
                    {data.map((item, index) => {
                        return <a key={index} data-id={item.id} data-index={index} className={this.state.activeIndex == index ? 'active' : ''}>{item.name}</a>
                    }) }
                </div>
            </div>
        );
    }
    onClick(e) {
        const {getIdfn} = this.props;
        const target = e.target;
        if (target.nodeName === 'A') {
            let index = target.getAttribute('data-index');
            let id = target.getAttribute('data-id');
            this.setState({
                activeIndex: index
            });
            getIdfn(id);
        }

    }
}
LeftSidebar.propTypes = {
    data: React.PropTypes.array,
    getIdfn: React.PropTypes.func
}
LeftSidebar.defaultProps = {
    data: [
        { id: 1, name: '分类1' },
        { id: 2, name: '分类2' },
        { id: 3, name: '分类3' },
        { id: 4, name: '分类4' },
        { id: 5, name: '分类5' },
        { id: 6, name: '分类6' },
        { id: 7, name: '分类7' },
        { id: 8, name: '分类8' },
        { id: 9, name: '分类9' }
    ]
}
export default LeftSidebar;