const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

const pickARandomTAg = () => {
  const tags = tagsEl.querySelectorAll('.tag');
  const idx = Math.floor(Math.random() * tags.length);
  return tags[idx];
};

const highlightTag = (tag) => {
  tag.classList.add('highlight');
};

const unHighlightTag = (tag) => {
  tag.classList.remove('highlight');
};
const selectRandomTag = () => {
  const times = 3000;

  const interval = setInterval(() => {
    const randomTag = pickARandomTAg();

    highlightTag(randomTag);

    setTimeout(() => {
      unHighlightTag(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickARandomTAg();
      highlightTag(randomTag);
    }, 100);
  }, times);
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
