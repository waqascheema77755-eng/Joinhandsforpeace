document.addEventListener('DOMContentLoaded', () => {
  let count = parseInt(localStorage.getItem('peaceMembers') || '0');
  document.getElementById('memberCount').textContent = count;

  document.getElementById('joinBtn').onclick = () => {
    count++;
    localStorage.setItem('peaceMembers', count);
    document.getElementById('memberCount').textContent = count;
    alert('Thank you for joining the Peace Movement!');
  };

  const commentForm = document.getElementById('commentForm');
  const commentList = document.getElementById('commentList');

  commentForm.onsubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('visitorName').value.trim();
    const comment = document.getElementById('visitorComment').value.trim();
    if (name && comment) {
      const li = document.createElement('li');
      li.textContent = `${name}: ${comment}`;
      commentList.appendChild(li);
      commentForm.reset();
    }
  };

  document.getElementById('subscriberPassword').addEventListener('input', (e) => {
    if (e.target.value === 'peace2025') {
      document.getElementById('contactFields').style.display = 'block';
    } else {
      document.getElementById('contactFields').style.display = 'none';
    }
  });

  document.getElementById('liveVisitors').textContent = Math.floor(Math.random() * 100 + 1);
});
