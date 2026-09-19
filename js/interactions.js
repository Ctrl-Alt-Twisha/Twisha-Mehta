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

  // Every nav link (Home, About, Work, Contact) closes an open page first.
  // Without this, clicking e.g. Contact while About is open just scrolls
  // the page underneath a still-visible overlay — nothing looks like it
  // happened, even though the anchor scroll technically fired.
  document.querySelectorAll('header.nav .name, header.nav nav a').forEach(link => {
    link.addEventListener('click', closeModal);
  });

  /* ---------- Shell joke popup ---------- */
  const shellBtn = document.getElementById('shellBtn');

  // Always shown on the very first click of a page load.
  const SHELL_PINNED_JOKE = "Puzzle pieces and seashells follow the same rule: if it doesn't fit, don't force it.";

  // Everything else — shuffled, and drawn without repeats until the whole
  // set has been shown once, then reshuffled. Resets on page refresh.
  const SHELL_JOKES = [
    "Why did the seashell blush? It finally saw what was under the tide.",
    "This shell used to be a &lt;div&gt;. It wanted more shell-f expression.",
    "Debugging is a lot like beachcombing \u2014 mostly sand, occasionally treasure.",
    "I asked the ocean for code review feedback. It just kept making waves.",
    "Why do programmers love the beach? Endless sandboxes, zero merge conflicts with the tide.",
    "This shell has survived every wave so far \u2014 kind of like your code after a good refactor.",
    "Fun fact: shells don't have Wi-Fi, but they still know how to make waves.",
    "Why did the crab never share? Because he's shellfish.",
    "The ocean waved, so I waved back. Seemed rude not to.",
    "This shell has excellent taste \u2014 it's been sitting on the beach for years.",
    "Life's a beach, and then you debug.",
    "The tide came in and reviewed my code. It left a lot of red flags.",
    "Sand gets everywhere \u2014 kind of like technical debt.",
    "Why was the starfish always calm? Nothing fazed it.",
    "Waves don't rush. Neither should a good code review.",
    "The ocean never overthinks. It just keeps moving.",
    "Why did the seashell go to therapy? Too many waves of emotion.",
    "This shell has heard every wave's secrets and told none of them.",
    "Beach days and bug fixes have one thing in common: sand shows up somewhere unexpected.",
    "The tide always comes back \u2014 unlike some of my earlier project ideas.",
    "Every wave thinks it's the big one. So does every deploy.",
    "My code and the ocean both have currents I don't fully understand.",
    "Debugging is just beachcombing for bugs instead of shells.",
    "Why did the developer take a beach day? Too many unresolved conflicts.",
    "My favorite exception is the one I never catch \u2014 on the beach, ideally.",
    "Good code and good sandcastles both fall apart if you build too fast.",
    "Every semicolon I forget, the ocean forgives. My compiler doesn't.",
    "A finished puzzle and a finished project both start with way too many loose pieces.",
    "The best part of a puzzle isn't finishing it \u2014 it's the piece that finally clicks.",
    "I've never met a puzzle piece I didn't spend way too long searching for.",
    "A 1000-piece puzzle is basically a group project with quieter teammates.",
    "This shell is the strong, silent type.",
    "Some shells whisper the ocean. This one just judges your scrolling.",
    "Shake this shell and you might hear the sound of unfinished side-projects.",
    "This shell has more patience than my Wi-Fi.",
    "Waves crash, but this shell just chills.",
    "This shell survived a thousand tides and one refresh button.",
    "Ask this shell a question and it'll answer in exactly one sarcastic wave sound.",
    "This shell has seen more sunsets than your camera roll.",
    "Some things get smoother with time \u2014 this shell, and eventually, your code.",
    "Not all treasure is gold. Some of it is just a really good clue.",
    "A shell's favorite music genre: wave-y.",
    "If shells could talk, this one would probably just say 'still loading...'",
    "This shell believes in taking things one tide at a time.",
    "Some people collect stamps. This shell collects moments.",
    "This shell has zero notifications and, honestly, that's the dream.",
    "Even shells need a moment to just sit on the sand and do nothing.",
    "A shell never rushes the tide, and neither should you rush a good idea.",
    "If patience were a shape, it would look exactly like this shell.",
    "This shell's biggest flex: surviving every wave without a single complaint.",
    "Not every shell washes ashore with a story, but this one definitely did.",
    "This shell once watched an entire sunset without checking its phone. Iconic.",
    "The ocean's favorite debugging tool: time.",
    "Every good idea starts a little messy \u2014 kind of like wet sand.",
    "This shell has never once panicked during a deadline. Impressive.",
    "Sometimes the best clue is the one hiding in plain sight, like a shell in the sand.",
    "This shell has never lost an argument, mostly because it never argues.",
    "The tide always returns what it borrows, eventually.",
    "A good puzzle and a good beach day end the same way: satisfied and slightly sandy.",
    "This shell's advice for everything: breathe, and let the wave pass.",
    "Not every mystery needs solving today. Some just need a good beach walk.",
    "This shell's secret talent: looking effortlessly cool while doing absolutely nothing.",
    "A little curiosity goes a long way \u2014 on the beach, and everywhere else.",
    "This shell believes every good project deserves a little sand in its shoes.",
    "If you're reading this, you've officially been shell-approved."
  ];

  let shellQueue = [];
  let shellFirstClick = true;

  function shuffle(arr){
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function nextShellJoke(){
    if (shellFirstClick){
      shellFirstClick = false;
      return SHELL_PINNED_JOKE;
    }
    if (shellQueue.length === 0) shellQueue = shuffle(SHELL_JOKES);
    return shellQueue.pop();
  }

  if (shellBtn){
    shellBtn.addEventListener('click', () => {
      openModal('\ud83d\udc1a A little beach wisdom', `<p>${nextShellJoke()}</p>`, false);
    });
  }

  /* ---------- Likes counter ----------
     A real shared count — the same number for every visitor, on every
     device, not a separate tally per browser. This uses Abacus
     (abacus.jasoncameron.dev), a free counter API that needs no signup or
     key: every page load reads the current number without changing it,
     and every click sends a request that increments one shared counter
     on their server.
     (This used to call CounterAPI's v1 endpoint, but that was retired in
     August 2026 — CounterAPI's v2 replacement requires a signed-up API
     key, so it's no longer a fit for a plain client-side site. Every fetch
     was quietly failing, and the local fallback below was kicking in on
     every visit — a separate count per browser starting at 0 — which is
     the "starts from 0 for everyone" bug.)
     If Abacus is ever unreachable (offline, rate-limited, or the service
     itself having issues), this still quietly falls back to a plain
     per-device count in localStorage, so the button never just breaks —
     it's just not shared for that visit.
     NOTE: this is a free third-party service with no account tied to it,
     so it's not guaranteed to stay up forever. If it ever needs replacing,
     swap COUNTER_NS/COUNTER_KEY (or the URLs below) for a new provider —
     everything else here stays the same. */
  const likesBtn = document.getElementById('likesBtn');
  const likesCount = document.getElementById('likesCount');
  const LIKES_KEY = 'twisha-portfolio-likes';
  const COUNTER_NS = 'twisha-mehta-portfolio-9f3k';
  const COUNTER_KEY = 'site-likes';
  const COUNTER_GET = `https://abacus.jasoncameron.dev/get/${COUNTER_NS}/${COUNTER_KEY}`;
  const COUNTER_HIT = `https://abacus.jasoncameron.dev/hit/${COUNTER_NS}/${COUNTER_KEY}`;

  function bump(){
    likesBtn.classList.add('bump');
    setTimeout(() => likesBtn.classList.remove('bump'), 250);
  }

  // Abacus always replies with { "value": N }, but keep this liberal in
  // case the provider ever changes shape again.
  function extractCount(data){
    if (!data) return null;
    if (typeof data.value === 'number') return data.value;
    if (typeof data.count === 'number') return data.count;
    return null;
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
    // Show the current shared count on load, without incrementing it.
    try {
      const res = await fetch(COUNTER_GET);
      if (res.status === 404){
        // Counter hasn't been created yet (nobody's clicked it). That's a
        // real shared 0, not a failure — don't fall back to local storage.
        if (likesCount) likesCount.textContent = '0';
      } else if (res.ok){
        const n = extractCount(await res.json());
        if (typeof n === 'number' && likesCount) likesCount.textContent = String(n);
      } else {
        throw new Error('bad response');
      }
    } catch (e){
      useLocalLikes();
      return;
    }

    likesBtn.addEventListener('click', async () => {
      bump();
      try {
        // /hit creates the counter on first use and increments it by 1.
        const res = await fetch(COUNTER_HIT);
        if (!res.ok) throw new Error('bad response');
        const n = extractCount(await res.json());
        if (typeof n === 'number' && likesCount) likesCount.textContent = String(n);
      } catch (e){ /* offline or rate-limited this click — count just won't move this time */ }
    });
  }

  if (likesBtn) useSharedLikes();

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
