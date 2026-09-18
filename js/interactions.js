(function(){
  /* ---------- Page overlay (About / Work cards / Email) ---------- */
  const overlay = document.getElementById('modalOverlay');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const modalClose = document.getElementById('modalClose');
  const modalEmailLink = document.getElementById('modalEmailLink');

  function openModal(title, bodyHTML, showEmail){
    modalTitle.textContent = title || '';
    modalBody.innerHTML = bodyHTML || '';
    if (modalEmailLink) modalEmailLink.style.display = showEmail ? 'inline-block' : 'none';
    overlay.classList.add('show');
    overlay.scrollTop = 0;
  }
  function closeModal(){
    overlay.classList.remove('show');
  }

  // Plain-text triggers (currently just Email) — short text from a data attribute
  document.querySelectorAll('.openable').forEach(card => {
    card.addEventListener('click', (e) => {
      // The Email link has a real mailto: href for accessibility/right-click,
      // but we don't want the browser racing off to open a mail app the
      // instant it's clicked — we want it to land on this page first, with
      // the email shown as its own clickable link below.
      const href = card.getAttribute('href');
      if (href && href.startsWith('mailto:')) e.preventDefault();
      const text = card.dataset.modalBody ? `<p>${card.dataset.modalBody}</p>` : '';
      openModal(card.dataset.modalTitle, text, card.dataset.modalEmail === 'true');
    });
  });

  // Rich pages (About, each project) — pull real content from a hidden <template>
  document.querySelectorAll('.open-page').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const tmpl = document.getElementById(trigger.dataset.template);
      openModal(trigger.dataset.title, tmpl ? tmpl.innerHTML : '', false);
    });
  });

  if (modalClose) modalClose.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Home — wherever you are (About, a project page, anywhere), clicking the
  // logo should always drop you back on the landing page, not leave a page
  // sitting open on top of it.
  const homeLink = document.querySelector('header.nav .name');
  if (homeLink) homeLink.addEventListener('click', closeModal);

  /* ---------- Likes counter ----------
     When this page is opened as a published Claude artifact, `window.claude`
     is available and we use the shared "db" capability so the count is the
     same number for every visitor, on every device — it lives on Anthropic's
     servers for this artifact, not in any one browser.
     When it's opened as a plain static file (the zip, GitHub Pages, etc.)
     there's no server at all, so the best a static page can do is remember
     a count in that one browser (localStorage) — it can't be a single
     shared number across devices without a backend somewhere. */
  const likesBtn = document.getElementById('likesBtn');
  const likesCount = document.getElementById('likesCount');
  const LIKES_KEY = 'twisha-portfolio-likes';

  function bump(){
    likesBtn.classList.add('bump');
    setTimeout(() => likesBtn.classList.remove('bump'), 250);
  }

  function getLocalLikes(){
    const n = parseInt(localStorage.getItem(LIKES_KEY), 10);
    return Number.isFinite(n) ? n : 0;
  }
  function setLocalLikes(n){
    localStorage.setItem(LIKES_KEY, String(n));
    if (likesCount) likesCount.textContent = String(n);
  }
  function useLocalLikes(){
    setLocalLikes(getLocalLikes());
    likesBtn.addEventListener('click', () => {
      setLocalLikes(getLocalLikes() + 1);
      bump();
    });
  }

  async function useSharedLikes(){
    let db;
    try {
      db = await window.claude.use('db');
    } catch (e) {
      db = null;
    }
    if (!db){ useLocalLikes(); return; }

    const ref = db.doc('likes/count');
    ref.onSnapshot(
      (snap) => {
        const n = (snap.exists && typeof snap.data().n === 'number') ? snap.data().n : 0;
        if (likesCount) likesCount.textContent = String(n);
      },
      () => { /* stream hiccup — the click handler still tries a write */ }
    );

    likesBtn.addEventListener('click', async () => {
      bump();
      try {
        const snap = await ref.get();
        const current = (snap.exists && typeof snap.data().n === 'number') ? snap.data().n : 0;
        await ref.set({ n: current + 1 });
      } catch (e) { /* offline or rejected — the live count just won't move this time */ }
    });
  }

  if (likesBtn){
    if (window.claude && typeof window.claude.use === 'function'){
      useSharedLikes();
    } else {
      useLocalLikes();
    }
  }

  /* ---------- Copy email on click ---------- */
  const copyFlag = document.getElementById('copyFlag');
  const EMAIL = 'twishawork234@gmail.com';

  function flashCopied(){
    if (!copyFlag) return;
    copyFlag.classList.add('show');
    clearTimeout(flashCopied._t);
    flashCopied._t = setTimeout(() => copyFlag.classList.remove('show'), 1600);
  }

  document.querySelectorAll('.copy-email').forEach(el => {
    el.addEventListener('click', () => {
      // Let the mailto: link still do its normal thing (open a mail app);
      // this just also puts the address on the clipboard as a fallback for
      // anyone without a mail app configured.
      if (navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(EMAIL).then(flashCopied).catch(() => {});
      }
    });
  });
})();
