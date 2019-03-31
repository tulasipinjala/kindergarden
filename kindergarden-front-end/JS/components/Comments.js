
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
        <input type="text" class="add__teacher--comment" placeholder="Type your comment here">
        <input type="hidden" class="add__teacher--teacher" value="${teacher.id}"> 
        <button class="add__comment--submit">Add Comment</button>
    </section> 
        `
    }