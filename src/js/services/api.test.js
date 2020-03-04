import { apiService } from './api';

describe('ApiService', () => {
  let mockApiService = apiService;
  beforeEach(() => {
    mockApiService.axios = { get: () => {}, all: () => {} };
  });
  describe('getMovies', () => {
    it('should call axios get with a query', () => {
      const spy = jest.spyOn(mockApiService.axios, 'get');
      mockApiService.getMovies('query');
      expect(spy).toHaveBeenCalledWith('&s=query');
    });
  });
  describe('getMoviesWithDetails', () => {
    it('should call axios all with an array of calls', () => {
      const spy = jest.spyOn(mockApiService.axios, 'all');
      const callsArray = [() => {}, () => {}];
      mockApiService.getMoviesWithDetails(callsArray);
      expect(spy).toHaveBeenCalled();
      expect(spy.mock.calls[0][0].length).toBe(callsArray.length);
    });
  });
  describe('getMovieDetails', () => {
    it('should call axios get passing imdbId', () => {
      const spy = jest.spyOn(mockApiService.axios, 'get');
      mockApiService.getMovieDetails('test-it');
      expect(spy).toHaveBeenCalledWith('&i=test-it');
    });
  });
});
