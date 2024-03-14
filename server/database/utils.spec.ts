import { readData, writeData } from './utils';
import fs from 'fs';
import path from 'path';

jest.mock('path', () => ({
  join: (...arg: string[]) => arg[arg.length - 1],
}));

describe('testing readData', () => {
  it('should read and parse data', async () => {
    const mockData = [{ review: 'good review' }];

    const appId = '123';

    fs.promises.readFile = jest
      .fn()
      .mockResolvedValue(JSON.stringify(mockData));

    const data = await readData(appId);

    expect(data).toEqual(mockData);
    expect(fs.promises.readFile).toHaveBeenCalledWith(`${appId}.json`, 'utf-8');
  });

  it('return empty when not found', async () => {
    const appId = '123';
    fs.promises.readFile = jest
      .fn()
      .mockRejectedValue(new Error('File not found'));

    const data = await readData(appId);

    expect(data).toEqual([]);
  });
});

describe('testing writeData', () => {
  it('should write data to file', async () => {
    const mockData = [{ review: 'good review' }];

    const appId = '123';

    fs.promises.writeFile = jest.fn().mockResolvedValue(undefined);

    await writeData(appId, mockData);

    const data = JSON.stringify(mockData, null, 2);

    expect(fs.promises.writeFile).toHaveBeenCalledWith(
      `${appId}.json`,
      data,
      'utf-8',
    );
  });

  it('logs error when it fails', async () => {
    const mockData = [{ review: 'good review' }];
    const appId = '123';

    fs.promises.writeFile = jest
      .fn()
      .mockRejectedValue(new Error('Write Failed'));

    const consoleSpy = jest.spyOn(console, 'log');

    await writeData(appId, mockData);

    expect(consoleSpy).toHaveBeenCalledWith(
      'Error Writing to file',
      expect.any(Error),
    );
  });
});
