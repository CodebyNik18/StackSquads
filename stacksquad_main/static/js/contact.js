(function () {
    var c = document.getElementById('bgCanvas');
    var ctx = c.getContext('2d');
    var W, H, pts = [];

    function resize() {
        W = c.width = c.offsetWidth;
        H = c.height = c.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function Pt() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = (Math.random() - .5) * .28;
        this.vy = (Math.random() - .5) * .28;
        this.r = Math.random() * 1.4 + .4;
        this.a = Math.random() * .5 + .1;
    }
    Pt.prototype.tick = function () {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > W) this.vx *= -1;
        if (this.y < 0 || this.y > H) this.vy *= -1;
    };

    for (var i = 0; i < 70; i++) pts.push(new Pt());

    function draw() {
        ctx.clearRect(0, 0, W, H);
        for (var i = 0; i < pts.length; i++) {
            pts[i].tick();
            ctx.beginPath();
            ctx.arc(pts[i].x, pts[i].y, pts[i].r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(0,212,255,' + pts[i].a + ')';
            ctx.fill();
            for (var j = i + 1; j < pts.length; j++) {
                var dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
                var d = Math.sqrt(dx * dx + dy * dy);
                if (d < 120) {
                    ctx.beginPath();
                    ctx.moveTo(pts[i].x, pts[i].y);
                    ctx.lineTo(pts[j].x, pts[j].y);
                    ctx.strokeStyle = 'rgba(0,212,255,' + (.09 * (1 - d / 120)) + ')';
                    ctx.lineWidth = .6;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }
    draw();
})();

/* ── FORM VALIDATION ── */
function on(id) { document.getElementById(id).classList.add('on'); }
function off(id) { document.getElementById(id).classList.remove('on'); }

['fname', 'femail', 'fphone'].forEach(function (id) {
    document.getElementById(id).addEventListener('input', function () {
        off(id + 'Err');
        this.classList.remove('bad');
    });
});
document.getElementById('fterms').addEventListener('change', function () {
    if (this.checked) off('ftermsErr');
});

document.getElementById('cf').addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = true;
    var name = document.getElementById('fname').value.trim();
    var email = document.getElementById('femail').value.trim();
    var phone = document.getElementById('fphone').value.trim();
    var terms = document.getElementById('fterms').checked;
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) { on('fnameErr'); document.getElementById('fname').classList.add('bad'); ok = false; }
    if (!re.test(email)) { on('femailErr'); document.getElementById('femail').classList.add('bad'); ok = false; }
    if (!phone) { on('fphoneErr'); document.getElementById('fphone').classList.add('bad'); ok = false; }
    if (!terms) { on('ftermsErr'); ok = false; }
    if (!ok) return;

    var btn = document.getElementById('fsubmit');
    btn.disabled = true;
    btn.querySelector('.label').textContent = 'Sending…';
    btn.querySelector('.arrow').textContent = '⟳';

    setTimeout(function () {
        btn.style.display = 'none';
        document.getElementById('fsuccess').classList.add('on');
    }, 1000);
});

document.querySelectorAll('a[href="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); });
});