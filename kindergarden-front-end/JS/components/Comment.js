// export default function Comment(comment) {
//     return `
//     <p class="single-comment__content">${comment.content}</p>
//     <section class="update__comment">
//         <h3>Update Comment</h3>
//         <input type="text" class="update__comment--content" placeholder="${comment.content}">
//         <button class="update__comment--submit" id="${comment.id}">Update Comment</button>
//     </section> 
//     <section class="delete__comment">
//         <button class="delete__teacher--comment" id="${comment.id}">Delete Comment</button>
//     </section>
//     `
// }
export default function Comment(comments) {
    return `
    <div class="comment__container">
        <h3 class="comment__content content">Comment: ${comments.content}</h3>
        
        
    </div>
            `
}