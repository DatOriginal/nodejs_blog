module.exports = {
    multipleMongooseToObject: function (mogooses) {
        return mogooses.map((mogoose) => mogoose.toObject());
    },
    mongooseToObject: function (mogoose) {
        return mogoose ? mogoose.toObject() : mongoose;
    },
};
