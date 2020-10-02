import { connect } from 'react-redux'
import NewProducts from './NewProducts'

const mapStateToProps = (state) => ({
    newProducts: state.homePage.sidebar.newProducts
})

const NewProductsContainer = connect(mapStateToProps, {})(NewProducts)

export default NewProductsContainer