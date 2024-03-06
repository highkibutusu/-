document.getElementById('postButton').addEventListener('click', function() {
    const input = document.getElementById('postInput');
    const text = input.value.trim();
    if (text) {
        const container = document.getElementById('postsContainer');
        const post = document.createElement('div');
        post.textContent = text;
        post.classList.add('post'); // 各投稿にスタイルを適用
        container.insertBefore(post, container.firstChild); // 最新の投稿を上に表示
        input.value = ''; // 入力フィールドをクリア
    }
});
