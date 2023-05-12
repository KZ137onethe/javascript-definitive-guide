// 按照用户地区排序的简单整理器

const collator = new Intl.Collator().compare;
['a', 'z', 'A', 'Z'].sort(collator)

// 文件名经常包含数值，因此需要进行特殊排序
const filenameOrder = new Intl.Collator(undefined, { numeric: true}).compare;

['page10', 'page9'].sort(filenameOrder)

// 查找大致匹配目标字符串的所有字符串
const fuzzyMatcher = new Intl.Collator(undefined, {
  sensitivity: "base",
  ignorePunctuation: true,
});
let strings = ["food", "fool", "F Bar"];
strings.findIndex(s => fuzzyMatcher(s, 'foobar') === 0)