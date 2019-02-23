import React, { Component } from 'react';
//import { Link } from "react-router-dom";

class Articles extends Component {
  constructor(){
      super();
      this.state ={articles: []};
  }
  componentDidMount() {
         fetch('/api/articles')
           .then(res => {
               console.log("res", res);
               return res.json()
            })
           .then(articles => { 
               console.log("articles",articles); 
               this.setState({ articles: articles.articles })
            });
        }
  render() {
       return (
           <div className="container">
                <div className="row">
                <div className="divider"></div>
                <h1>Articles</h1>
                <div className="section">
                {this.state.articles.map(article =>{
                    const { _id, title, body}= article;
                    return(
                        <div key={_id}>
                            <div className="divider"></div>
                            <div className="section">
                                <h5> {title} </h5>
                                <p>{body}</p>
                            </div>
                        </div>
                    )
                }
                    
                        
                
                    )}
                </div>
                    
                    
                </div>
           </div>
       );
   }
}

export default Articles;
