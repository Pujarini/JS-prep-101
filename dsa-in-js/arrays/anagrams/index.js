// valid anagram("car","cat") false
// valid anagram("anagram","nagaram") true
// valid anagram("cinema","iceman") true

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  let freq1 = {};
  for (let key of str1) {
    freq1[key] = (freq1[key] || 0) + 1;
  }
  for (let key of str2) {
    if (!freq1[key]) {
      return false;
    } else {
      freq1[key] -= 1;
    }
  }
  return true;
}

console.log(validAnagram("cinema", "iceman"));
