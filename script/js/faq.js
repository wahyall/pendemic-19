const faq = () => {
  const accordionItem = [...document.querySelectorAll('.accordion .item')];
  const accordionHeight = accordionItem.map(item => getComputedStyle(item.lastElementChild).height);
  
  // Set ukuran height pada setiap accordion menjadi 0,
  // tetapi set accordion pertama untuk terbuka terlebih dahulu (default)
  closeAllAccordionExcept(0);
  openAccordion(0);

  accordionItem.forEach((item, i) => {
    // Jalankan event click pada setiap accordion
    item.firstElementChild.addEventListener('click', function () {
      // Tutup semua accordion yang tidak diklik,
      // agar nanti hanya accordion yang baru saja diklik yang terbuka
      closeAllAccordionExcept(i);

      // Toggle class open pada item yang diklik
      item.classList.toggle('open');
      
      // Setelah itu cek apakah item tersebut memiliki class "open"
      item.classList.contains('open') ? openAccordion(i) : closeAccordion(i);
    })
  });

  function closeAccordion(i) {
    accordionItem[i].classList.remove('open');
    accordionItem[i].lastElementChild.style.height = 0;
  }

  function openAccordion(i) {
    accordionItem[i].classList.add('open');
    accordionItem[i].lastElementChild.style.height = accordionHeight[i];
  }

  function closeAllAccordionExcept(index) {
    accordionItem.forEach((item, i) => {
      if (i !== index) {
        item.classList.remove('open');
        item.lastElementChild.style.height = 0;
      }
    })
  }
}

export default faq;