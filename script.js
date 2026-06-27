const passages = {
    easy: [
      "the cat sleeps quietly under the warm sun",
      "students read books together inside the small library",
      "birds fly across the clear blue morning sky",
      "children play happily outside near the green garden",
      "the river flows gently beside the tall trees",
    ],
    medium: [
      "students gathered in the classroom early morning preparing their notes sharing ideas and waiting patiently for the teacher to arrive with important instructions and guidance",
      "the children played happily outside near the garden running across the grass laughing together chasing butterflies and enjoying the warm sunshine that brightened their day",
      "birds flew gracefully across the clear blue sky singing sweet melodies gliding with ease while the gentle breeze carried their songs through the peaceful valley",
      "friends walked along the riverbank slowly talking about dreams sharing stories watching the water flow and feeling calm as the sunset painted the horizon",
      "the library was quiet and peaceful students read books carefully turning pages softly learning new ideas and finding comfort in the silence of knowledge",
    ],
    hard: [
      "the programmer sat quietly at his desk typing lines of code fixing errors and testing functions the screen glowed brightly showing progress as the project slowly came together determination and patience guided him proving that persistence always leads to success when building something meaningful with creativity and effort",
      "the office was busy with employees working on reports answering emails and attending meetings keyboards clicked constantly phones rang and conversations filled the air despite the rush teamwork kept everything organized reminding everyone that cooperation and discipline are essential for achieving goals and maintaining productivity throughout the day",
      "the gamer focused intensely on the glowing monitor pressing keys quickly moving the character across the battlefield sounds of victory echoed through the room while strategy and reflexes combined to create excitement every match felt like a challenge teaching patience skill and the joy of competing with friends online",
      "the student opened his laptop searching for information reading articles and writing notes for the upcoming exam the quiet room allowed concentration while the ticking clock reminded him of time passing learning required effort but the reward of knowledge gave motivation to continue studying with focus and determination",
      "the cafe was filled with people using laptops sipping coffee and chatting softly the aroma of roasted beans mixed with the sound of typing creating a cozy atmosphere ideas flowed easily projects advanced and friendships grew stronger proving that simple places can inspire creativity and connection among individuals"
    ]
  };

  let state = {
    diff: 'easy', chars: [], input: '',
    started: false, finished: false,
    timer: 60, interval: null, startTime: null,
  };

  const passageEl  = document.getElementById('passage-display');
  const inputEl    = document.getElementById('typing-input');
  const wpmEl      = document.getElementById('wpm-display');
  const accEl      = document.getElementById('acc-display');
  const timerEl    = document.getElementById('timer-display');
  const timerRing  = document.getElementById('timer-ring');
  const mainArea   = document.getElementById('main-area');
  const resultArea = document.getElementById('result-area');
  const C = 2 * Math.PI * 18;

  function pickPassage() {
    const pool = passages[state.diff];
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function renderPassage() {
    const chars = state.chars;
    const typed = state.input;

    // Group chars into words + spaces.
    // Each word is wrapped in white-space:nowrap so the browser
    // only breaks at spaces, never mid-word.
    let html = '';
    let i = 0;
    while (i < chars.length) {
      if (chars[i] === ' ') {
        const cls = i < typed.length
          ? (typed[i] === ' ' ? 'correct' : 'wrong')
          : i === typed.length ? 'cursor' : 'pending';
        html += `<span class="char word-space ${cls}"> </span>`;
        i++;
      } else {
        let wordHtml = '<span class="word">';
        while (i < chars.length && chars[i] !== ' ') {
          const cls = i < typed.length
            ? (typed[i] === chars[i] ? 'correct' : 'wrong')
            : i === typed.length ? 'cursor' : 'pending';
          wordHtml += `<span class="char ${cls}">${chars[i]}</span>`;
          i++;
        }
        wordHtml += '</span>';
        html += wordHtml;
      }
    }
    passageEl.innerHTML = html;
  }

// ── Sound engine ──────────────────────────────────────────────────────────
let audioCtx = null;
let soundBuffers = {};   // filename → AudioBuffer
let soundReady = false;
let volume = 0.8; // Controlled by the slider

const allSounds = ['altpitch.mp3', 'extrapitch.mp3', 'highpitch.mp3', 'lowpitch.mp3', 'midpitch.mp3', 'spacebar.mp3'];

function getAudioCtx() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

// Load files silently on load
async function autoLoadSounds() {
  console.log("Loading keyboard sounds...");
  let loadedCount = 0;

  for (const name of allSounds) {
    try {
      const response = await fetch(name);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      
      const arrayBuffer = await response.arrayBuffer();
      const ctx = getAudioCtx();
      
      soundBuffers[name] = await ctx.decodeAudioData(arrayBuffer);
      loadedCount++;
    } catch (error) {
      console.error(`Failed to automatically load sound file: ${name}`, error);
    }
  }

  if (loadedCount > 0) {
    soundReady = true;
    console.log(`Sound engine ready: ${loadedCount}/${allSounds.length} sounds loaded.`);
  }
}

function playSound(filename) {
  if (!soundReady || !soundBuffers[filename]) return;
  
  const ctx = getAudioCtx();
  const source = ctx.createBufferSource();
  source.buffer = soundBuffers[filename];
  
  const gain = ctx.createGain();
  gain.gain.value = volume; // Applies current volume level here
  
  source.connect(gain);
  gain.connect(ctx.destination);
  source.start(0);
}

// ── Key mapping logic ──────────────────────────────────────────────────────
function getSoundForKey(key, code) {
  if (code === 'Space' || key === ' ') {
    return soundBuffers['spacebar.mp3'] ? 'spacebar.mp3' : 'midpitch.mp3';
  }
  if (code === 'Backspace' || key === 'Backspace') {
    return soundBuffers['midpitch.mp3'] ? 'midpitch.mp3' : null;
  }
  
  const upperKey = key.toUpperCase();
  if (upperKey >= 'A' && upperKey <= 'Z' && upperKey.length === 1) {
    const index = (upperKey.charCodeAt(0) - 65) % allSounds.length;
    const mapped = allSounds[index];
    if (soundBuffers[mapped]) return mapped;
  }

  if (soundBuffers['midpitch.mp3']) return 'midpitch.mp3';
  return null;
}

// ── Play sound on keydown ─────────────────────────────────────────────────
const typingInput = document.getElementById('typing-input');

if (typingInput) {
  typingInput.addEventListener('keydown', async e => {
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') {
      await ctx.resume();
    }

    if (!soundReady) return;
    
    const snd = getSoundForKey(e.key, e.code);
    if (snd) {
      playSound(snd);
    }
  });
}

// ── Volume slider handler ──────────────────────────────────────────────────
const volSlider = document.getElementById('vol-slider');
const volValue = document.getElementById('vol-value');

if (volSlider && volValue) {
  volSlider.addEventListener('input', e => {
    volume = parseFloat(e.target.value);
    volValue.textContent = `${Math.round(volume * 100)}%`;
  });
}

// Kick off file loading automatically
autoLoadSounds();


  function calcWPM() {
    if (!state.startTime || !state.input.length) return 0;
    const mins = (Date.now() - state.startTime) / 60000;
    const correct = [...state.input].filter((c, i) => c === state.chars[i]).length;
    return Math.round((correct / 5) / mins) || 0;
  }

  function calcAcc() {
    if (!state.input.length) return 100;
    const correct = [...state.input].filter((c, i) => c === state.chars[i]).length;
    return Math.round((correct / state.input.length) * 100);
  }

  function updateRing(t) {
    timerRing.style.strokeDashoffset = C * (1 - t / 60);
  }

  function startTimer() {
    state.startTime = Date.now();
    state.interval = setInterval(() => {
      state.timer--;
      timerEl.textContent = state.timer;
      updateRing(state.timer);
      wpmEl.textContent = calcWPM();
      accEl.textContent = calcAcc() + '%';
      if (state.timer <= 0) finish();
    }, 1000);
  }

  function finish() {
    clearInterval(state.interval);
    state.finished = true;
    inputEl.disabled = true;
    const wpm = calcWPM();
    const acc = calcAcc();
    const correct = [...state.input].filter((c, i) => c === state.chars[i]).length;
    document.getElementById('r-wpm').textContent = wpm;
    document.getElementById('r-acc').textContent = acc + '%';
    document.getElementById('r-chars').textContent = correct;
    const titles = wpm >= 80
      ? ['Above Average!', 'Lightning fast!']
      : wpm >= 50
      ? ['Good job!', 'Nice speed!']
      : ['Keep practicing.', 'You can improve.'];
    const sub = wpm >= 80
      ? 'Your typing speed is excellent and shows strong skill.'
      : wpm >= 50
      ? 'A solid performance, keep building consistency and accuracy.'
      : 'Every expert started slow, keep practicing and you will improve.';
    document.getElementById('result-title').textContent = titles[Math.floor(Math.random() * titles.length)];
    document.getElementById('result-sub').textContent = sub;
    mainArea.style.display = 'none';
    resultArea.style.display = 'flex';
  }

  function init() {
    clearInterval(state.interval);
    const passage = pickPassage();
    state = {
      ...state,
      chars: passage.split(''),
      input: '',
      started: false,
      finished: false,
      timer: 60,
      interval: null,
      startTime: null,
    };
    inputEl.value = '';
    inputEl.disabled = false;
    timerEl.textContent = '60';
    wpmEl.textContent = '–';
    accEl.textContent = '–';
    updateRing(60);
    mainArea.style.display = 'block';
    resultArea.style.display = 'none';
    renderPassage();
    inputEl.focus();
  }

  inputEl.addEventListener('input', e => {
    if (state.finished) return;
    const val = e.target.value;
    if (!state.started && val.length > 0) {
      state.started = true;
      startTimer();
    }
    state.input = val;
    wpmEl.textContent = calcWPM() || '–';
    accEl.textContent = state.input.length ? calcAcc() + '%' : '–';
    renderPassage();
    if (val.length >= state.chars.length) finish();
  });

  document.getElementById('reset-btn').addEventListener('click', init);
  document.getElementById('retry-btn').addEventListener('click', init);

  document.querySelectorAll('.diff-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.diff = btn.dataset.diff;
      init();
    });
  });

  init();