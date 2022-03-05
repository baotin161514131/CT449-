const config ={
    app:{
        port: process.env.PORT || 8080,
    },
    db:{
        uri: "mongodb+srv://baotin161514131:baotin37@cluster0.ox7n6.mongodb.net/Lab1_2?retryWrites=true&w=majority"
    },
};

module.exports = config;