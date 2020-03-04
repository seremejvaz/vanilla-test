import { cacheService } from './cache';

describe('CacheService', () => {
  let mockCacheService = cacheService;
  beforeEach(() => {
    mockCacheService.movieCache = { id: { Title: 'Title' } };
    mockCacheService.currentQueryCachedresults = { Title: 'Title' };
  });
  describe('getMovieFromCache', () => {
    it('should the correct data if the id is found in cache', () => {
      expect(mockCacheService.getMovieFromCache('id')).toEqual({
        Title: 'Title'
      });
    });
    it('should return undefined if the id is not found in cache', () => {
      expect(mockCacheService.getMovieFromCache('notfound')).toBe(undefined);
    });
  });

  describe('', () => {
    it('should ', () => {});
  });
});
