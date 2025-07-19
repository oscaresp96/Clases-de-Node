import ShippingAddress from '../models/shippingAddress.js'

async function getShippingAddresses(req, res){
    try {
        const ShippingAddresses = await ShippingAddress.find().sort({user:1}).populate('user');
        res.json(ShippingAddresses);
    } catch (error){
        res.status(500).send({error})
    }
}

async function getShippingAddressById(req, res){
    try {
        const id = req.params.id
        const ShippingAddress = await ShippingAddress.findById(id).populate('user');
        if(!ShippingAddress){
            return res.status(404).json({message: "Shipping Address not found"})
        }
        res.json(ShippingAddress);
    } catch (error){
        res.status(500).send({error})
    }
}


async function createShippingAddress(req, res){
    try {
        const {user, name, address, city, state, postalCode, country, phone, isDefault, addressType} = req.body;
        if(!user || !name || !address|| !city|| !state || !postalCode || !country || !phone || !isDefault || !addressType){
            return res.status(400).json({error: "All fields are required"});
        }
        const newShippingAddress = await ShippingAddress.create({user, name, address, city, state, postalCode, country, phone, isDefault, addressType});
        res.status(201).json(newShippingAddress)
    } catch (error){
        res.status(500).send({error})
    }
}

async function updateShippingAddress(req, res){
    try {
        const id = req.params.id;
        const {user, name, address, city, state, postalCode, country, phone, isDefault, addressType} = req.body;
        if(!user || !name || !address|| !city|| !state || !postalCode || !country || !phone || !isDefault || !addressType){
            return res.status(400).json({error: "All fields are required"});
        }
        const updatedShippingAddress = await ShippingAddressAddress.findByIdAndUpdate(id, {user, name, address, city, state, postalCode, country, phone, isDefault, addressType}, {new:true});
        if(!updatedShippingAddress){
            return res.status(404).json({message: 'Shipping Address not found'});
        }
        res.status(200).json(updatedShippingAddress)
    } catch (error){
        res.status(500).send({error})
    }
}
async function deleteShippingAddress(req, res){
    try {
        const id = req.params.id; 
        const deletedShipppingAddress = await ShippingAddressAddress.findByIdAndDelete(id);
        if(!deletedShipppingAddress){
            return res.status(404).json({message: "Shipping Address not found"});
        }
        res.status(204).send()
    } catch (error){
        res.status(500).send({error})
    }
}

export {
    getShippingAddresses,
    getShippingAddressById,
    createShippingAddress,
    updateShippingAddress,
    deleteShippingAddress,
}