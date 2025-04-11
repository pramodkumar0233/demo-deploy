function navigate(direction) {
    let nextPage;
  
    if (direction === 'next') {
      nextPage = currentPage + 1 > 3 ? 1 : currentPage + 1;
    } else if (direction === 'prev') {
      nextPage = currentPage - 1 < 1 ? 3 : currentPage - 1;
    }
  
    const pageMap = {
      1: 'index.html',
      2: 'page2.html',
      3: 'page3.html'
    };
  
    window.location.href = pageMap[nextPage];
  }
  