import {Schema,model, models} from "mongoose";

const ArticleSchema= new Schema({
    titre:String,
    description:String,
    contenu:String,
    images:Array
    
});

const Article = models.Article || model("Article",ArticleSchema);

export default Article;