import { connect } from 'react-redux';
import { fetchPosts, fetchProfile, setMainCategory } from '../../actions/posts';
import PostList from './Component';

export const mapStateToProps = state => ({
  posts: state.posts.items,
  isFetching: state.posts.isFetching
});

const mapDispatchToProps = { fetchPosts, fetchProfile, setMainCategory };

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListContainer;
