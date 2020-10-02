import { connect } from 'react-redux'
import Testimonials from './testimonials'
import { chooseTestimonial, changeShownTestimonial } from '../../../../redux/reducers/reducerHome'

const mapStateToProps = (state) => ({
    testimonials: state.homePage.sidebar.testimonials,
    testimonialShown: state.homePage.sidebar.testimonialShown
})

const TestimonialsContainer = connect(mapStateToProps, { chooseTestimonial, changeShownTestimonial })(Testimonials)

export default TestimonialsContainer