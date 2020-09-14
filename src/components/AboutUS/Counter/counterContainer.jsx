import { connect } from 'react-redux'
import Counter from './counter'

const mapStateToProps = (state) => ({
    totalEmployees: state.aboutUsPage.counter.totalEmployees,
    satisfaction:  state.aboutUsPage.counter.satisfaction,
    cupsOfCoffee: state.aboutUsPage.counter.cupsOfCoffee,
    buyersRating: state.aboutUsPage.counter.buyersRating
})

const CounterContainer = connect(mapStateToProps, {  })(Counter)

export default CounterContainer