import Product from '../models/product.js'

async function getProducts(req, res){
    try {
        const products = await Product.find().sort({name:1}).populate('category');
        res.json(products);
    } catch (error){
        res.status(500).send({error})
    }
}

async function getProductById(req, res){
    try {
        const id = req.params.id
        const product = await Product.findById(id).populate('category');
        if(!product){
            return res.status(404).json({message: "Product not found"})
        }
        res.json(product);
    } catch (error){
        res.status(500).send({error})
    }
}

async function getProductByCategory(req,res) {
    try{
        const id = req.params.idCategory;
        const products = await Product.find({category:id}).populate('category').sort({name:1});
        if(products.length===0){
            return res.status(404).json({message:'No products found on this category'});
        }
        res.json(products);
    } catch (error){
        res.status(500).json({error})
    }
}

async function createProduct(req, res){
    try {
        const {name, description, price, stock, imageURL, category} = req.body;
        if(!name || !description || !price || !stock || !imageURL || !category){
            return res.status(400).json({error: "All fields are required"});
        }
        const newProduct = await Product.create({name, description, price, stock, imageURL, category});
        res.status(201).json(newProduct)
    } catch (error){
        res.status(500).send({error})
    }
}

async function updateProduct(req, res){
    try {
        const id = req.params.id;
        const {name, description, price, stock, imageURL, category} = req.body;
        if(!name || !description || !price || !stock || !imageURL || !category){
            return res.status(400).json({error: "All fields are required"});
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, {name, description, price, stock, imageURL, category}, {new:true});
        if(!updatedProduct){
            return res.status(404).json({message: 'Product not found'});
        }
        res.status(200).json(updatedProduct)
    } catch (error){
        res.status(500).send({error})
    }
}
async function deleteProduct(req, res){
    try {
        const id = req.params.id; 
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct){
            return res.status(404).json({message: "Product not found"});
        }
        res.status(204).send()
    } catch (error){
        res.status(500).send({error})
    }
}

export {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByCategory
}