import { apiService } from './api';

describe('ApiService', () => {
  let mockApiService = apiService;
  beforeEach(() => {
    mockApiService.axios = { get: () => {} };
  });
  describe('getMovieDetails', () => {
    it('should call axios get passing imdbId', () => {
      const spy = jest.spyOn(mockApiService.axios, 'get');
      mockApiService.getMovieDetails('test-it');
      expect(spy).toHaveBeenCalledWith('&i=test-it');
    });
  });
  describe('getMovies', () => {
    it('should call axios get with a query', () => {
      const spy = jest.spyOn(mockApiService.axios, 'get');
      mockApiService.getMovies('query');
      expect(spy).toHaveBeenCalledWith('&s=query');
    });
  });
});
