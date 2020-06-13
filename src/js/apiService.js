const apiKey = '16752813-8ad3a541d9a85fd347d38c131';

const apiService = {
  pageNum: 1,
  perPage: 12,
  search: 'kiev',

  getData(
    search = this.search,
    pageNum = this.pageNum,
    perPage = this.perPage,
  ) {
    this.pageNum = pageNum;
    this.search = search;
    const baseUrl = 'https://pixabay.com/api';
    const rest = `?image_type=photo&orientation=horizontal&q=`;
    const searchParams = `${search}&page=${pageNum}&per_page=${perPage}&key=${apiKey}`;
    const url = baseUrl + rest + searchParams;
    console.log('20 url', url);
    // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=cat&page=1&per_page=12key='16752813-8ad3a541d9a85fd347d38c131'
        
    return fetch(url)
      .then(response => {
        console.log('24 response', response);
        if (response.ok) return response.json();
      })
      .then(data => data.hits)

      .catch(error => console.warn('==Err==', error));
  },

  nextPage() {
    this.pageNum += 1;
    return this.getData();
  },
  prevPage() {
    // console.log(this);

    this.pageNum -= 1;
    // console.log(this.pageNum);
    return this.getData();
  },

  resetPage(e) {
    // console.log(this);
    this.pageNum = 1;
    // console.log( this.getData());
    return this.getData();

    // console.log('resetPage' , 11);
    // console.log('this.page' , this.pageNum);
  },
};

console.log('this.page', apiService.pageNum);

// console.log(apiService.resetPage());

// apiService.resetPage()

export default apiService;
