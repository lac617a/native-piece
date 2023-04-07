export default function humanize(str: string) {
  let i = 0;
  const frags = str.split("-");
  for (i; i < frags.length; i++) {
    frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
  }
  return frags.join("").charAt(0).toLowerCase() + frags.join("").substring(1);
}