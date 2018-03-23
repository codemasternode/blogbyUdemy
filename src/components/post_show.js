import React from 'react';
import { connect } from 'react-redux'
import { fetchPost } from '../actions/index';

class PostsShow extends React.Component {

    componentDidMount() {
        const { id } = this.props.match.params; //dodawane prz pomocy router-react

        this.props.fetchPost(id);
    }

    render() {
        const { post } = this.props;

        if(!post) {
            return <div>Loading...</div>
        }

        return (
            <div>
                <h3>{post.title}</h3>
                <h6>Categories: {post.categories}</h6>
                <p>{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) { //drugi argument to this.props 
    return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost })(PostsShow);