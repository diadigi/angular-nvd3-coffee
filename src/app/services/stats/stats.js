export class StatService {
  constructor($http) {
    this.$http = $http;
  }

  getAll() {
    return this.$http
      .get('app/services/stats/data.json');
  }
}
