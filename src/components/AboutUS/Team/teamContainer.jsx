import Team from './team'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    team: state.aboutUsPage.team
})

const TeamContainer = connect(mapStateToProps, {  })(Team)

export default TeamContainer