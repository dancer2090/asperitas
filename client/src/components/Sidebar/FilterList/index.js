import FilterList from './component';
import { connect } from 'react-redux';
import { setFilter } from '../../../actions/posts';

const mapStateToProps = state => ({
  filter: state.posts.filter
});
const mapDispatchToProps = {
  setFilter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterList);
