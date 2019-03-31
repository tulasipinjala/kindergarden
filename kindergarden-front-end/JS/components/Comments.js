
export default function Comments(comments) {
    return `
      <ul class="comments">
      ${comments.map(comment => {
        return `
          <li class="comment">
              <h3 class="comment__content" id="${comment.id}">${comment.content}</h3>
        </li>
      `;
    }).join('')}
    </ul>
    <section class="add__comment">
        <h3>Add A Comment</h3>
        <input type="text" class="add__teacher" placeholder="Type your comment here">
        
        <button class="add__comment">Add Comment</button>
    </section> 
        `
    }