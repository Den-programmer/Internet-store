import React, { useState, useEffect } from 'react'
import classes from './productPanel.module.scss'
import { useTranslation } from 'react-i18next'
import { Field, Form, Formik } from 'formik'

const ProductPanel = (props) => {
    const { t } = useTranslation()
    const [productCharacteristicSettings, setProductCharacteristicSettings] = useState([
        {
            id: 1,
            type: "text",
            placeholder: "product_title",
            name: "productTitle"
        },
        {
            id: 2,
            type: "text",
            placeholder: "brand",
            name: "brand"
        },
        {
            id: 3,
            type: "text",
            placeholder: "type",
            name: "type"
        },
        {
            id: 4,
            type: "text",
            placeholder: "weight",
            name: "weight"
        },
        {
            id: 5,
            type: "text",
            placeholder: "dimensions",
            name: "dimensions"
        },
        {
            id: 6,
            type: "text",
            placeholder: "categories_with_example",
            name: "categories"
        },
        {
            id: 7,
            type: "text",
            placeholder: "size",
            name: "size"
        },
        {
            id: 8,
            type: "text",
            placeholder: "color",
            name: "color"
        },
        {
            id: 9,
            type: "number",
            placeholder: "price_pl",
            name: "price"
        },
        {
            id: 10,
            type: "text",
            placeholder: "tags",
            name: "tags"
        }
    ])
    const productCharacteristics = productCharacteristicSettings.map(item => {
        return (
            <div key={item.id} className={classes.productCharacteristic}>
                <Field placeholder={t(item.placeholder)} type={item.type} className={classes.productCharacteristic_textfield} name={item.name}/>
            </div>
        )
    })
    const getProductPhotos = (ref) => {
        const node = ref.current
        let urlFiles = []
        if (node.files) {
            for(let file of node.files) {
                urlFiles.push(URL.createObjectURL(file))
            }
        }
        console.log(urlFiles)
    }

    const filePhotoInput = React.createRef()
    const dropzone = React.createRef()
    useEffect(() => {
        let node = dropzone.current
        let fileInput = filePhotoInput.current

        if (node && fileInput) {
            node.ondragover = node.ondragenter = (e) => {
                e.preventDefault()
            }

            node.ondrop = (e) => {
                if (e.dataTransfer && fileInput) {
                    fileInput.files = e.dataTransfer.files
                    const dT = new DataTransfer()
                    dT.items.add(e.dataTransfer.files[0])
                    fileInput.files = dT.files
                    getProductPhotos(filePhotoInput)

                    e.preventDefault()
                }
            }
        }
    })

    const initialValues = {
        productTitle: '',
        brand: '',
        type: '',
        weight: '',
        dimensions: '',
        categories: 'Mobile Phones&Electronics',
        size: '',
        color: '',
        price: '',
        tags: 'Product Tag&Product Tag',
        desc: ''
    }
    const submit = (values) => {
        console.log(values)
    }   
    return (
        <div className={classes.productPanel}>
            <div className={classes.header}>
                <h3>{t("add_new_product")}</h3>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={submit}
                >
                <Form className={classes.addProductPanel}>
                    <div className={classes.block}>
                        <div className={classes.productCharacteristicsWrapper}>
                            {productCharacteristics}
                        </div>
                        <div className={classes.productCharacteristicsWrapper}>
                            <div className={classes.productCharacteristic}>
                                <Field placeholder={t('description')} type="text" className={classes.productCharacteristic_textarea} name="desc" component="textarea"/>
                            </div>
                            <div className={classes.productPhotos}>
                                <div ref={dropzone} className={classes.productChangingPhoto}>
                                    <h4 className={classes.productChangingPhoto_title}>Drop your files</h4>
                                    <p className={classes.productChangingPhoto__text}>or</p>
                                    <input className={classes.productChangingPhoto_hidden_filefield}
                                        onChange={() => getProductPhotos(filePhotoInput)}
                                        id="filePhotoInput"
                                        ref={filePhotoInput}
                                        accept="image/*"
                                        type="file"
                                        multiple="multiple"/>
                                    <label htmlFor="filePhotoInput">
                                        <span className={classes.selectFile_btn}>Select your file</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.btn_wrapper}>
                        <button type="submit" className={classes.btn_addNewProduct}>{t("add_new_product")}</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default ProductPanel 