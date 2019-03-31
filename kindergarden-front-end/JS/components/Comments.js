
// export default function Comments(comments) {
//     return `
//       <ul class="comments">
//       ${comments.map(comment => {
//         return `
//           <li class="comment">
//               <h3 class="comment__content" id="${comment.id}">${comment.content}</h3>
//         </li>
//       `;
//     }).join('')}
//     </ul>
//     <section class="add__comment">
//         <h3>Add A Comment</h3>
//         <input type="text" class="add__content" placeholder="Type your comment here">
        
//         <button class="add__comment__button">Add Comment</button>
//     </section> 
//         `
//     }

    export default function Comments(comments) {
      return `
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