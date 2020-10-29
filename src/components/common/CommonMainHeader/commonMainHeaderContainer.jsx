import { connect } from 'react-redux'
import CommonMainHeader from './commonMainHeader'
import { setIsCartPopupOpenStatus } from '../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    cartPopupStatus: state.app.cartPopupStatus,
    productsInCart: state.app.productsInCart
})

const CommonMainHeaderContainer = connect(mapStateToProps, { setIsCartPopupOpenStatus })(CommonMainHeader)

export default CommonMainHeaderContainer