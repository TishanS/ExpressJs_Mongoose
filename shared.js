const mongoose=require('mongoose'); 

module.exports = {
    async connectMongoose(){
        try{
            mongoose.connect(process.env.MONGOOSE_CONNECTION_URL);
            console.log('connection success');
        }
        catch(error){
            console.log(error);
        }
    }
}
