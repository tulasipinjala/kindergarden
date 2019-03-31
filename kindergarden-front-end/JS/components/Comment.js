export default function Comment(comment) {
    return `

    <div class="comment__container">
        <h3 class="comment__content content">Comment: ${comment.content}</h3>
        <section class="add__comment">
        <input type="text" class="add__content" placeholder="comment">
       
            <button class="add__comment__button" id="${comment.id}">Add Comment</button>
        </section>
    


    <p class="single-comment__content">${comment.newContent}</p>
    <section class="update__comment">
        <h3>Update Comment</h3>
        <input type="text" class="update__comment--content" placeholder="${comment.content}">
        <button class="update__comment__button" id="${comment.id}">Update Comment</button>
    </section> 
    <section class="delete__comment">
        <button class="delete__comment__button" id="${comment.id}">Delete Comment</button>
    </section>
    </div>

    
            `
}  

