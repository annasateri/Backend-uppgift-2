import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createProduct } from '../store/actions/productCatalogActions'

const CreateProduct = () => {

    const dispatch = useDispatch()

  const [values, setValues] = useState({
    name: "",
    shortDescription: "",
    longDescription: "",
    imgUrl: "",
    price: 0,
    subCategoriesId: 0
  })

  const handleName = (e) => {
    setValues({...values, name: e.target.value})
  }

  const handleShortDescription = (e) => {
    setValues({...values, shortDescription: e.target.value})
  }

  const handleLongDescription = (e) => {
    setValues({...values, longDescription: e.target.value})
  }

  const handleImg = (e) => {
    setValues({...values, imgUrl: e.target.value})
  }

  const handlePrice = (e) => {
    setValues({...values, price: parseInt(e.target.value)})
  }

  const handleSubCategoriesId = (e) => {
    setValues({...values, subCategoriesId: parseInt (e.target.value)})
  }


  const handleSubmit = (e) => {
    e.preventDefault();

        let newProduct = {
          name: values.name,
          shortDescription: values.shortDescription,
          longDescription: values.longDescription,
          imgUrl: values.imgUrl,
          price: values.price,
          subCategoriesId: values.subCategoriesId
        }

        console.log(newProduct)
        dispatch(createProduct(newProduct))
        console.log('Product added')
        setValues({...values, name: "", shortDescription: "", longDescription: "", imgUrl: "", price: "", subCategoriesId: ""})
      }
    

  return (
    <div className="reg-new-product mt-5">
      <form className="col-6 m-auto p-3 mb-5 shadow-1" id="formReg" onSubmit={handleSubmit}>
        <div className="text-center ">
                <h2 className="m-auto mb-3 pb-2 add-new-product col-7">Create New Product</h2>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <div className="">
              <label className="form-label">Name</label>
              <input 
                onChange={handleName}
                type="text" 
                id="title" 
                className="form-control" 
                value={values.name} />
              
            </div>
          </div>
          </div>

        <div className="row mb-3">
          <div className="col">
            <label className="form-label">Short Description</label>
            <input 
              onChange={handleShortDescription}
              type="text" 
              id="color" 
              className="form-control" 
              value={values.shortDescription} />
          </div>
          <div className="col">
            <label className="form-label">Price</label>
            <input 
              onChange={handlePrice}
              type="number" 
              id="price" 
              className="form-control" 
              value={values.price} />
          </div>
        </div>

        <div className="mb-3">
          <label className="form-label">Long Description</label>
          <textarea 
            onChange={handleLongDescription}
            type="text" 
            id="description" 
            className="form-control" 
            value={values.longDescription} ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Image URL</label>
          <input 
            onChange={handleImg}
            type="text" 
            id="img" 
            className="form-control" 
            value={values.imgUrl} />
        </div>

        <div className="mb-3">
          <label className="form-label">Sub Category</label>
          <input 
            onChange={handleSubCategoriesId}
            type="number" 
            id="subCategoriesId" 
            className="form-control" 
            value={values.subCategoriesId} />
        </div>
        
        <div className="col-2 m-auto">
            <button type="submit" className="btn btn-block mb-4 text-white">Add</button>
        </div>

      </form>
    </div>
  )
  }
export default CreateProduct
