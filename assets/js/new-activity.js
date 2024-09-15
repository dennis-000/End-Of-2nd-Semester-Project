document.addEventListener('DOMContentLoaded', function() {
    const questionForm = document.getElementById('question-form');
    const forumPosts = document.querySelector('.forum-posts');

    questionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const questionInput = document.getElementById('question-input');
        const question = questionInput.value.trim();

        if (question) {
            addForumPost(question);
            questionInput.value = '';
        }
    });

    function addForumPost(question) {
        const postElement = document.createElement('div');
        postElement.classList.add('forum-post');
        postElement.innerHTML = `
            <p><strong>Q:</strong> ${question}</p>
            <p><strong>A:</strong> Thank you for your question. Our sports coordinator will respond shortly.</p>
        `;
        forumPosts.appendChild(postElement);
    }
});