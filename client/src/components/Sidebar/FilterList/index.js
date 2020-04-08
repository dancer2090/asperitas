import FilterList from './component';
import { connect } from 'react-redux';
import { setFilter, fetchPosts } from '../../../actions/posts';

const mapStateToProps = state => ({
  filter: state.posts.filter,
  mainCategory: state.posts.mainCategory
});
const mapDispatchToProps = {
  setFilter,
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);
