const sequelize = require('../service/db_config');
const User = require('../model/User');
const ProductModels = require('../model/Product');
const CartModels = require('../model/Cart');

const authenUserAccount = async (username, password) => {
    try {
        const user = await User.findOne({
            where: { username: username, pass: password },
        });
        if (user != null) {
            const session = await CartModels.Session.findOne({
                where: {
                    CustomerUserName: username,
                },
            });
            console.log(session);
            if (session == null) {
                await CartModels.Session.create({
                    CustomerUserName: username,
                });
            }
            return { user: user, found: true };
        } else {
            return { user: null, found: false };
        }
    } catch (err) {
        console.log(err);
    }
};

const existedUsername = async (username) => {
    try {
        const user = await User.findOne({
            attributes: ['username'],
            where: { username: username },
        });
        if (user == null) return false;
        else return true;
    } catch (err) {
        console.log(err);
    }
};

const register = async (username, password, first_name, last_name, phone, email, address, city) => {
    try {
        if ((await existedUsername(username)) == false) {
            const newUser = await User.create({
                userName: username,
                pass: password,
                firstName: first_name,
                lastName: last_name,
                phone: phone,
                email: email,
                address: address,
                city: city,
            });
            console.log(newUser);
            await CartModels.Session.create();
            return {
                info: newUser,
                status: true,
            };
        } else {
            console.log('Existed');
            return {
                info: 'Existed',
                status: false,
            };
        }
    } catch (err) {
        console.log(err);
    }
};

const logOut = async (userID) => {
    try {
        const session = await CartModels.findAll({
            where: {
                CustomerUserName: userID,
            },
        });
        session.destroy();
    } catch (err) {
        return err;
    }
};

const viewCart = async (username) => {
    try {
        const cart = await User.findAll({
            where: {
                username: username,
            },
            include: [
                {
                    model: CartModels.Session,
                    required: true,
                    include: [
                        {
                            model: CartModels.cartItem,
                            required: true,
                        },
                    ],
                },
            ],
        });
        return cart;
    } catch (err) {
        return err;
    }
};

const addProductToCart = async (userId, productId, quant) => {
    try {
        const session = await CartModels.Session.findOne({
            attributes: ['id'],
            where: {
                CustomerUserName: userId,
                deletedAt: null,
            },
        });
        const product = await CartModels.cartItem.create({
            quantity: quant,
            SessionId: session.dataValues.id,
            ProductId: productId,
        });
        return { added: true, item: product };
    } catch (err) {
        return { added: false, item: err };
    }
};

const deleteProductFromCart = async (productId) => {
    try {
        await CartModels.cartItem.destroy({
            where: {
                ProductId: productId,
            },
        });
        return { deleted: true, err: null };
    } catch (err) {
        return { deleted: false, err: err };
    }
};

const deleteAllCart = async (userID) => {
    try {
        const items = await CartModels.cartItem
            .findAll({
                where: {
                    CustomerUserName: userID,
                },
            })
            .then(() => {
                if (items) {
                    items.destroy();
                }
            });
    } catch (err) {
        return err;
    }
};

module.exports = {
    authenUserAccount,
    existedUsername,
    register,
    viewCart,
    addProductToCart,
    deleteProductFromCart,
    deleteAllCart,
    logOut,
};
