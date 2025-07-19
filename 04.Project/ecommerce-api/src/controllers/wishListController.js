import WishList from '../models/wishList.js'

async function getWishLists(req, res){
    try {
        const WishLists = await WishLists.find().sort({product:1}).populate('user');
        res.json(WishLists);
    } catch (error){
        res.status(500).send({error})
    }
}

async function getWishListById(req, res){
    try {
        const id = req.params.id
        const WishList = await WishList.findById(id).populate('user');
        if(!WishList){
            return res.status(404).json({message: "Wishlist not found"})
        }
        res.json(WishList);
    } catch (error){
        res.status(500).send({error})
    }
}

async function createWishList(req, res){
    try {
        const {user, products} = req.body;
        if(!user || !products){
            return res.status(400).json({error: "All fields are required"});
        }
        const newWishList = await WishList.create({user, products});
        res.status(201).json(newWishList)
    } catch (error){
        res.status(500).send({error})
    }
}

async function updateWishList (req, res){
    try {
        const id = req.params.id;
        const {user, products} = req.body;
        if(!user || !products){
            return res.status(400).json({error: "All fields are required"});
        }
        const updatedWishList = await WishList.findByIdAndUpdate(id, {user, products}, {new:true});
        if(!updatedWishList){
            return res.status(404).json({message: 'Wishlist not found'});
        }
        res.status(200).json(updatedWishList)
    } catch (error){
        res.status(500).send({error})
    }
}
async function deleteWishList(req, res){
    try {
        const id = req.params.id; 
        const deletedWishList = await WishList.findByIdAndDelete(id);
        if(!deletedWishList){
            return res.status(404).json({message: "Wishlist not found"});
        }
        res.status(204).send()
    } catch (error){
        res.status(500).send({error})
    }
}

export {
    getWishLists,
    getWishListById,
    createWishList,
    updateWishList,
    deleteWishList,
}