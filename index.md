<pre class="ascii-title">
    __  ____________   ____              __  _______ 
   / / / / ____/  _/  / __/___  _____   /  |/  / __ \
  / /_/ / /    / /   / /_/ __ \/ ___/  / /|_/ / /_/ /
 / __  / /____/ /   / __/ /_/ / /     / /  / / _, _/ 
/_/ /_/\____/___/  /_/  \____/_/     /_/  /_/_/ |_|  
                                                     

HCI for MR — v.2026
</pre>
<div id="term" class="term">
<div class="term-output" id="termOut">HCI-for-MR v2026
Type: ls, cd lecture, cd lab, cd hw1, cd ..
</div>

<div class="term-inputline">
  <span class="prompt">$</span>
  <span class="inputwrap">
    <input id="termIn" class="term-input" type="text" autocomplete="off" spellcheck="false" autofocus />
    <span id="blk" class="blk" aria-hidden="true">█</span>
  </span>
</div>
</div>
<script>
  const input = document.getElementById('termIn');
  const blk = document.getElementById('blk');

  function updateBlock() {
    // caret position
    const pos = input.selectionStart ?? 0;

    // measure width of text up to caret using a hidden canvas
    const style = getComputedStyle(input);
    const font = `${style.fontSize} ${style.fontFamily}`;
    const text = input.value.slice(0, pos);

    const canvas = updateBlock._c || (updateBlock._c = document.createElement('canvas'));
    const ctx = canvas.getContext('2d');
    ctx.font = font;

    const w = ctx.measureText(text).width;

    blk.style.transform = `translateX(${w}px)`;
  }

  // hide the real caret
  input.style.caretColor = 'transparent';

  ['input','click','keyup','keydown','focus'].forEach(ev =>
    input.addEventListener(ev, () => requestAnimationFrame(updateBlock))
  );

  updateBlock();
</script>
