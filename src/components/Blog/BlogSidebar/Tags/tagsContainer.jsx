import { connect } from 'react-redux'
import Tags from './tags'

const mapStateToProps = (state) => ({
    tags: state.blogPage.sidebar.tags
})

const TagsContainer = connect(mapStateToProps, {})(Tags)

export default TagsContainer