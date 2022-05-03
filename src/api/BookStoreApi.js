import axios from 'axios';

export default class BookStoreApi {
  static baseUrl =
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  static appId = 'eGFIaVLSVlgm5JvELcic/';

  static async getBook() {
    const res = await axios({
      method: 'get',
      url: `${this.baseUrl}${this.appId}books`,
      responseType: 'json',
    });

    return (res);
  }

  static async addBook(newBook) {
    const body = {
      item_id: newBook.id,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
    };

    await axios({
      method: 'post',
      url: `${this.baseUrl}${this.appId}books`,
      data: body,
    });
  }

  static async removeBook(id) {
    const res = await axios.delete(`${this.baseUrl}${this.appId}books/${id}`);
    return res;
  }
}
