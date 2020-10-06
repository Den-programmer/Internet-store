import { connect } from 'react-redux'
import Archives from './archives'

const mapStateToProps = (state) => ({
    archives: state.blogPage.sidebar.archives
})

const ArchivesContainer = connect(mapStateToProps, {})(Archives)

export default ArchivesContainer 