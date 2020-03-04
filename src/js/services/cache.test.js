import { cacheService } from './cache';

describe('CacheService', () => {
  let mockCacheService = cacheService;
  let testMovie = { imdbID: 'test-id', title: 'Test Movie' };
  beforeEach(() => {
    mockCacheService.movieCache = {
      firstId: { Title: 'Title 1' },
      secondId: { Title: 'Title 2' }
    };
    mockCacheService.currentQueryCachedresults = { Title: 'Title 1' };
  });
  describe('getMovieFromCache', () => {
    it('should the correct data if the id is found in cache', () => {
      expect(mockCacheService.getMovieFromCache('firstId')).toEqual({
        firstId: { Title: 'Title 1' }
      });
    });
    it('should return undefined if the id is not found in cache', () => {
      expect(mockCacheService.getMovieFromCache('notfound')).toBe(undefined);
    });
  });

  describe('saveMovieOnCache', () => {
    it('should save the movie in the cache if the data is correct ', () => {
      expect(mockCacheService.getMovieFromCache(testMovie.imdbID)).toBe(
        undefined
      );
      mockCacheService.saveMovieOnCache(testMovie);
      expect(mockCacheService.getMovieFromCache(testMovie.imdbID)).toEqual(
        testMovie
      );
    });
  });
  describe('getMovieListFromCache', () => {
    it('should return a list of movies given a list of ids', () => {
      expect(
        mockCacheService.getMovieListFromCache(['firstId', 'secondId'])
      ).toEqual([{ Title: 'Title 1' }, { Title: 'Title 2' }]);
    });
  });

  describe('saveCurrentQueryCachedResults', () => {
    it('should save a result in the query cache', () => {
      expect(mockCacheService.currentQueryCachedresults).toEqual({
        Title: 'Title 1'
      });
      mockCacheService.saveCurrentQueryCachedResults({
        Title: 'test new cache'
      });
      expect(mockCacheService.currentQueryCachedresults).toEqual({
        Title: 'test new cache'
      });
    });
  });

  describe('getCurrentQueryCachedResults', () => {
    it('should return the current saved query cache results', () => {
      expect(mockCacheService.getCurrentQueryCachedResults()).toEqual({
        Title: 'Title 1'
      });
    });
  });
});
