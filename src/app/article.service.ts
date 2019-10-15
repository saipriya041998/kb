import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
dispplay_article:string="https://c5a0d071.ngrok.io/api/KB/GetArticles?getall=0&categ=";
add_article:string="https://c5a0d071.ngrok.io/api/KB/InsertUpdateKBAricles";
update:string="https://c5a0d071.ngrok.io/api/KB/InsertUpdateKBAricles";
article_by_id:string="https://c5a0d071.ngrok.io/api/KB/GetKBArticlesById?ArticleId=";
readmore:string="https://c5a0d071.ngrok.io/api/KB/GetReadArticle?ArticleId=";
pagination:string="https://c5a0d071.ngrok.io/api/KB/GetArticles?getall=0&categ=&Page=";
concat:string;

  constructor(private _http:HttpClient) { }
  getAllkbArticles(){
    return this._http.get(this.dispplay_article);
  }
  addArticle(item){
    console.log(item);
    console.log('inside service')
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.add_article,body,{headers:head});
  }
  getArticleById(article_id){
    return this._http.get(this.article_by_id+article_id);
  }
  updateArticle(item){
    let body=JSON.stringify(item);
    let head=new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.update,body,{headers:head});
  }
  onReadArticle(item){
    return this._http.get(this.readmore+item);
  }
  getPageByNumber(ArticleId,Cat_Id){
    if(Cat_Id==0){
      this.concat="categ="+"&Page="+ArticleId;
      return this._http.get(this.pagination+this.concat);
    }else{
      this.concat="categ="+Cat_Id+"&Page="+ArticleId;
      return this._http.get(this.pagination+this.concat);
    }

  }
}
