import exp from 'express'
export const productApp = exp.Router()

let products = []

// Read all products
productApp.get('/products', (req, res) => {
    res.json({
        message: "all products",
        payload: products
    })
})


// Create product
productApp.post('/products', (req, res) => {
    const newProduct = req.body
    products.push(newProduct)
    res.json({
        message: "Product created"
    })
})


// Read products by brand
productApp.get('/products/brand/:brand', (req, res) => {
    const brandName = req.params.brand
    const filteredProducts = products.filter(
        productObj => productObj.brand === brandName
    )
    res.json({
        message: "Products by brand",
        payload: filteredProducts
    })
})


// Update product
productApp.put('/products', (req, res) => {
    let modifiedProduct = req.body
    let index = products.findIndex(
        productObj => productObj.productId === modifiedProduct.productId
    )
    if (index === -1) {
        return res.json({ message: "Product not found" })
    }
    products.splice(index, 1, modifiedProduct)
    res.json({
        message: "Product updated"
    })
})


// Delete product by id
productApp.delete('/products/:productId', (req, res) => {
    let idOfUrl = Number(req.params.productId)
    let index = products.findIndex(
        productObj => productObj.productId === idOfUrl
    )
    if (index === -1) {
        return res.json({ message: "Product not found to delete" })
    }
    products.splice(index, 1)
    res.json({
        message: "Product removed"
    })
})
