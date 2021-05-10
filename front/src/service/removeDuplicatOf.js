export default function removeDuplicateOf(array) {
  return array
    .reduce((acc, crr) => (
      acc.includes(crr) ? acc : [...acc, crr]
    ), []);
}
