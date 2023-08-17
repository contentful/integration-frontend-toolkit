const s = (e) => 16 * e,
  o = (e) => (r) => {
    const n = r.split(`${e}`)[0],
      t = Number(n);
    return e === 'rem' ? s(t) : t;
  },
  a = o('rem');
export { o as default, a as parseRemToPxInt, s as translateRemToPx };
