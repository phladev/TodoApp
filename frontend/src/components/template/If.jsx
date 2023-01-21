export default function If({ test, children }) {
  if (test) {
    return children;
  } else {
    return false;
  }
}
