(function () {
  const root = document.querySelector(".ops-diagram");
  if (!root) return;

  const stage = root.querySelector(".ops-diagram-stage");
  const svg = root.querySelector(".ops-diagram-links");
  const hub = root.querySelector('[data-diagram-anchor="hub"]');
  const source = root.querySelector('[data-diagram-anchor="source"]');
  if (!stage || !svg || !hub) return;

  const nodeKeys = ["n1", "n2", "n3", "n4", "n5", "n6", "n7", "n8"];
  let raf = 0;

  function centerOf(el, relativeTo) {
    const a = el.getBoundingClientRect();
    const b = relativeTo.getBoundingClientRect();
    return {
      x: a.left - b.left + a.width / 2,
      y: a.top - b.top + a.height / 2,
    };
  }

  function edgeToward(from, to, radius) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const len = Math.hypot(dx, dy) || 1;
    return {
      x: from.x + (dx / len) * radius,
      y: from.y + (dy / len) * radius,
    };
  }

  function curve(from, to) {
    const dx = to.x - from.x;
    // Longer horizontal run → pull control points further out so arcs read as “reach”
    const midX = from.x + dx * 0.58;
    const lift = Math.min(36, Math.abs(to.y - from.y) * 0.08);
    const dir = to.y >= from.y ? 1 : -1;
    return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} C ${midX.toFixed(1)} ${(from.y + lift * dir).toFixed(1)}, ${midX.toFixed(1)} ${(to.y - lift * dir).toFixed(1)}, ${to.x.toFixed(1)} ${to.y.toFixed(1)}`;
  }

  function redraw() {
    raf = 0;
    if (window.matchMedia("(max-width: 860px)").matches) {
      svg.innerHTML = "";
      svg.setAttribute("width", "0");
      svg.setAttribute("height", "0");
      return;
    }

    const w = stage.clientWidth;
    const h = stage.clientHeight;
    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.setAttribute("width", String(w));
    svg.setAttribute("height", String(h));

    const hubC = centerOf(hub, stage);
    // Stop short of the hub glow/ring so the arrow tip does not sit on the circle
    const hubR = Math.min(hub.clientWidth, hub.clientHeight) * 0.62 + 14;
    const tipClear = 10; // room for marker tip before the target
    const parts = [];

    if (source) {
      const srcC = centerOf(source, stage);
      const srcR = Math.min(source.clientWidth, source.clientHeight) * 0.48;
      const a = edgeToward(srcC, hubC, srcR);
      const b = edgeToward(hubC, srcC, hubR);
      parts.push(
        `<path class="ops-link ops-link-main" d="${curve(a, b)}" marker-end="url(#ops-arrow)" />`
      );
    }

    nodeKeys.forEach((key) => {
      const node = root.querySelector(`[data-diagram-anchor="${key}"]`);
      if (!node) return;
      const disc = node.querySelector(".ops-node-disc") || node;
      const nC = centerOf(disc, stage);
      // End outside the icon disc so tips do not overlap the circles
      const nR = disc.clientWidth * 0.62 + tipClear;
      const a = edgeToward(hubC, nC, hubR);
      const b = edgeToward(nC, hubC, nR);
      parts.push(
        `<path class="ops-link" d="${curve(a, b)}" marker-end="url(#ops-arrow)" />`
      );
    });

    svg.innerHTML =
      `<defs><marker id="ops-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor"/></marker></defs>` +
      parts.join("");
  }

  function schedule() {
    if (raf) return;
    raf = requestAnimationFrame(redraw);
  }

  window.redrawOpsDiagram = schedule;

  window.addEventListener("resize", schedule);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(schedule).catch(() => {});
  }
  schedule();
  setTimeout(schedule, 120);
  setTimeout(schedule, 400);
})();
