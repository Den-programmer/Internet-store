import { connect } from 'react-redux'
import MainHeader from './mainHeader'
import { setIsCartPopupOpenStatus } from '../../../../redux/reducers/reducerApp'

const mapStateToProps = (state) => ({
    cartPopupStatus: state.app.cartPopupStatus,
    productsInCart: state.app.productsInCart
})

const MainHeaderContainer = connect(mapStateToProps, { setIsCartPopupOpenStatus })(MainHeader)

export default MainHeaderContainer