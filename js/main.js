const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;


const activeSlide = n => {
   for(let slide of slides) {
      slide.classList.remove('active');
   }
   slides[n].classList.add('active');
}

const activeDots = n => {
   for(let dot of dots) {
      dot.classList.remove('active');
   }
   dots[n].classList.add('active');
}

const prepareCollection = ind => {
   activeSlide(ind);
   activeDots(ind);
}

const nextSlide = () => {
   if(index === slides.length - 1) {
      index = 0;
      prepareCollection(index);
   } else {
      index++;
      prepareCollection(index);
   }
}

const prevSlide = () => {
   if(index === 0) {
      index = slides.length - 1;
      prepareCollection(index);
   } else {
      index--;
      prepareCollection(index);
   }
}

dots.forEach((item, indexDot) => {
   item.addEventListener('click', () => {
      index = indexDot;
      prepareCollection(index);
   });
});

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

setInterval(nextSlide, 3000);