const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

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
});
