import { connect } from 'react-redux'
import NewProducts from './NewProducts'
import { setProductId } from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    newProducts: state.app.newProducts
})

const NewProductsContainer = connect(mapStateToProps, { setProductId })(NewProducts)

export default NewProductsContainer