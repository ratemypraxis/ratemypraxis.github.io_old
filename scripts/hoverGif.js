const imageContainer = document.getElementById('image-container');
const defaultImage = document.getElementById('default-image');

const hoverImage = new Image();
hoverImage.src = '../images/papernetDemo.gif';
hoverImage.alt = 'Hover Image';
hoverImage.style.display = 'none';

imageContainer.appendChild(hoverImage);

imageContainer.addEventListener('mouseenter', () => {
  defaultImage.style.display = 'none';
  hoverImage.style.display = 'inline-block';
});

imageContainer.addEventListener('mouseleave', () => {
  defaultImage.style.display = 'inline-block';
  hoverImage.style.display = 'none';
});

const scContainer = document.getElementById('sc');
const scDefault = document.getElementById('scdefault');

const scHover = new Image();
scHover.src = '../images/slowchat.gif';
scHover.alt = 'Hover Gif';
scHover.style.display = 'none';

scContainer.appendChild(scHover);

scContainer.addEventListener('mouseenter', () => {
  scDefault.style.display = 'none';
  scHover.style.display = 'inline-block';
});

scContainer.addEventListener('mouseleave', () => {
  scDefault.style.display = 'inline-block';
  scHover.style.display = 'none';
});


const ppContainer = document.getElementById('pp');
const ppDefault = document.getElementById('ppdefault');

const ppHover = new Image();
ppHover.src = '../images/pixelPress.gif';
ppHover.alt = 'Hover Gif';
ppHover.style.display = 'none';

ppContainer.appendChild(ppHover);

ppContainer.addEventListener('mouseenter', () => {
  ppDefault.style.display = 'none';
  ppHover.style.display = 'inline-block';
});

ppContainer.addEventListener('mouseleave', () => {
  ppDefault.style.display = 'inline-block';
  ppHover.style.display = 'none';
});

