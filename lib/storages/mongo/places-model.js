module.exports = function(mongoose, mongoStorage){
    
    var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;

    var PlacesSchema = new Schema({
        name:       String,
        image:      String
    });

    mongoStorage.Models.PlacesSchema = mongoose.model('places', PlacesSchema);
}

