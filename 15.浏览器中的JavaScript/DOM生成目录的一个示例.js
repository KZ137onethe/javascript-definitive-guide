
document.addEventListener('DOMContentLoaded', () => {
  let toc = document.querySelector('#TOC');
  if(!toc){
    toc = document.createElement('div');
    toc.id = "TOC";
    document.body.prepend(toc)
  }

  // 查找所有节标题元素，这里假设文档的标题使用 <h1> , 文档中的各节使用 <h2> 到 <h6>
  let headings = document.querySelectorAll('h2, h3, h4, h5, h6')
  // 数组化一个数组，来跟踪节号
  let sectionNumbers = [0, 0, 0, 0, 0]

  for(let heading of headings){
    // 如果标题位于TOC容器中则跳过
    if(heading.parentNode === toc){
      continue
    }

    // 确定标题的级别（减1， 因为<h2>算1级标题）
    let level = parseInt(heading.tagName.charAt(1)) - 1;

    // 递增这个标题级别的节号，并把所有低级编号重置为0
    sectionNumbers[level - 1]++;
    for(let i = level; i < sectionNumbers.length; i++){
      sectionNumbers[i] = 0;
    }

    // 现在组合所有标题级别的节号，以产生类似2.3.1这样的节号
    let sectionNumber = sectionNumbers.slice(0, level).join(".");

    // 把节号添加到节标题中，把编号放在<span>中添加样式
    let span = document.createElement('span');
    span.className = 'TOCSectNum';
    span.textContent = sectionNumber;
    heading.prepend(span);

    // 把标题包装在一个命名的锚元素中，以便可以链接到它
    let anchor = document.createElement('a');
    let fragmentName = `TOC${sectionNumber}`;
    anchor.name = fragmentName;
    heading.before(anchor);
    anchor.append(heading);

    // 接下来创建对这一节的链接
    let link = document.createElement("a");
    link.href = `#${fragmentName}`;

    // 把标题文本复制到链接中，此时可以放心使用innerHTML，因为没有插入任何不可信字符串
    link.innerHTML = heading.innerHTML;

    // 把链接放到一个div中，以便根据级别添加样式
    let entry = document.createElement('div');
    entry.classList.add('TOCEntry', `TOCLevel${level}`);
    entry.append(link);

    // 把div添加到TOC容器中
    toc.append(entry);
  }
})