
document.getElementById('post-btn').addEventListener('click', function(){
    const comment = document.getElementById('new-comment');
    const newComment = document.createElement('p');
    newComment.innerText = comment.value;
    document.getElementById('add-comment').appendChild(newComment);
    comment.value = '';
})