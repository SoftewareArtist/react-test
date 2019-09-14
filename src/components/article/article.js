
import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import "./article.scss";
import {setArticleRead} from '../../redux/actions/article'

// images
import delete_icon from '../../assets/icons/delete.svg';
import avatar_icon from '../../assets/image/avatar.png';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class Article extends React.Component {


    onClickDelete() {
        alert(this.props.data.id);
        // this.props.onDeleteItem(this.props.data.id);
    }

    onClickMark() {
        // setArticleRead
        this.props.setArticleRead(this.props.data.id);
        // alert(this.props.data.id);
    }

    render() {
        const data = this.props.data;

        return (
            <div className="card">
                <img className="image" src={avatar_icon}></img>
                <div className="name">
                    <h1>{data.author}</h1>
                    <h2>{data.email}</h2>
                    <h3>{data.jobTitle}</h3>
                </div>
                <div className="article">
                    <h1>{data.title}</h1>
                    <h2>{data.desc}</h2>
                </div>
                <div className="tags">
                    {
                        data.tags.map((obj, index) => {
                            return (
                                <div key={index} className="tag"><label>{obj}</label></div>
                            )
                        })
                    }
                </div>

                <IconButton className={data.isRead ? "button-delete" : ""} aria-label="delete" onClick={(e) => this.onClickDelete()}>
                    <img  src={delete_icon}></img>
                </IconButton>
                
                {
                    !data.isRead && <button className="button-read" onClick={(e) => this.onClickMark()}>Mark as Read</button>
                }
                {
                    !data.isRead && <div className="mark-unread"></div>
                }
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
	setArticleRead
}, dispatch);


export default connect(
	null,
	mapDispatchToProps
)(Article);
