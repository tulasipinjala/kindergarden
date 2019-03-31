

    export default function Comments(comments) {
      return `
      <div class = "comments__list"> 
        <h1>Comments</h1>
          <ul class="comments">
              ${comments.map(comment => {
          return `
                      <li class="comment">
                          <h4 class="comment__content" id="${comment.id}">${comment.content}</h4>                      
                      </li>
                  `
      }).join('')}
          </ul>
          <section class="add__comment">
          <h3>Add Comment</h3>
          
              <input type="text" class="add__content" placeholder="comment">

              <button class="add__comment__button">Add Comment</button>
          </section> 
      `
  }