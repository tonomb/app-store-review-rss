import { fetchRssReviewsAndSave, getLatestReviews } from './reviewsService';
import fetchMock from 'jest-fetch-mock';
import * as database from '../database/utils';
fetchMock.enableMocks();

jest.mock('../database/utils', () => ({
  readData: jest.fn(),
  writeData: jest.fn(),
}));

describe('fetchRssReviewsandsave', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('successfuly fetches and saves reviews', async () => {
    const mockFeed = { feed: { entry: [{ id: 1, title: 'good review' }] } };

    fetchMock.mockResponseOnce(JSON.stringify(mockFeed));

    const appid = '123';
    const feedUrl = 'http://test.com';

    await fetchRssReviewsAndSave(appid, feedUrl);

    expect(fetchMock).toHaveBeenLastCalledWith(feedUrl);
    expect(database.writeData).toHaveBeenLastCalledWith(
      appid,
      mockFeed.feed.entry,
    );
  });

  it('handles fetch failure', async () => {
    fetchMock.mockReject(new Error('Network Failure'));

    const consoleSpy = jest.spyOn(console, 'log');
    const appid = '123';
    const feedUrl = 'http://test.com';

    await fetchRssReviewsAndSave(appid, feedUrl);

    expect(fetchMock).toHaveBeenLastCalledWith(feedUrl);
    expect(consoleSpy).toHaveBeenCalledWith(expect.any(Error));
    consoleSpy.mockRestore();
  });
});

describe('getLatestReviews', () => {
  it('returns the reviews data', async () => {
    const mockReviews = [{ id: 1, title: 'good review' }];

    database.readData.mockResolvedValue(mockReviews);

    const appid = '123';
    const reviews = await getLatestReviews(appid);

    expect(database.readData).toHaveBeenCalledWith(appid);
    expect(reviews).toEqual(mockReviews);
  });
});
