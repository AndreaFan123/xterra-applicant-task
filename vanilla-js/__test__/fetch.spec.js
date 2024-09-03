import { describe, expect, vi, it } from "vitest";
import { fetchResults } from "../model/fetch-results";

global.fetch = vi.fn();

const mockResponse = [
  {
    division: "F50-54",
    first_name: "KERRY",
    gender: "F",
    last_name: "CANCROFT",
    nationality: "US",
    splits: [
      { name: 'swim_time', time: '00:33:08' },
      { name: 'bike_time', time: '03:00:34' },
      { name: 'run_time', time: '01:14:32' },
      { name: 't1_time', time: '00:02:30' },
      { name: 't2_time', time: '00:01:49' }
    ],
    total_time: "04:52:35"
  }
];

describe("Fetch Results", () => {
  it("should show error message", async () => {
    global.fetch.mockResolvedValue({ ok: false });
    try {
      await fetchResults();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });

  it("should fetch data from the API", async () => {
    global.fetch.mockResolvedValue({
      ok: true,
      json: () => mockResponse
    });

    const result = await fetchResults();

    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
  });

  it("should return correct key", async () => {
    const results = await fetchResults();

    const expectedKeys = [
      "division",
      "first_name",
      "gender",
      "last_name",
      "nationality",
      "splits",
      "total_time",
    ];

    results.forEach(result => {
      expectedKeys.forEach(key => {
        expect(result).toHaveProperty(key);
      });
      expect(Array.isArray(result.splits)).toBe(true);
      result.splits.forEach(split => {
        expect(split).toHaveProperty("name");
        expect(split).toHaveProperty("time");
      });
    });
  });



});


