const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

const selectRandomTag = () => {
  const tags = tagsEl.querySelectorAll('.tag');
  const idx = Math.floor(Math.random() * (tags.length - 1));
  tags[idx].classList.add('highlight');
};

const createTags = (input) => {
  const tags = input
    .split(',')
    .filter((val) => {
      return val.trim() !== '';
    })
    .map((val) => val.trim());

  tagsEl.innerHTML = '';

  tags.forEach((tag) => {
    const tagEl = document.createElement('span');
    tagEl.classList.add('tag');
    tagEl.innerHTML = tag;
    tagsEl.appendChild(tagEl);
  });
};

textarea.focus();

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value);

  if (e.key === 'Enter') {
    setTimeout(() => {
      textarea.value = '';
    }, 10);

    selectRandomTag();
  }
});
