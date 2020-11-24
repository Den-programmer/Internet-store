import { connect } from "react-redux"
import OptionalPanel from "./optionalPanel"
import { openProductsPortionOptionList, changeProductsPortion, changeSidebarShownStatus } from '../../../redux/reducers/reducerShop'

const mapStateToProps = (state) => ({
    productsPortion: state.shopPage.productsPortion,
    isPortionListOpen: state.shopPage.isProductsPortionOptionListOpen,
    productsCountMenu: state.shopPage.productsCountMenu
})

const OptionalPanelContainer = connect(mapStateToProps, { openProductsPortionOptionList, changeProductsPortion, changeSidebarShownStatus })(OptionalPanel)

export default OptionalPanelContainer