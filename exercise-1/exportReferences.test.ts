import { exportFilename, toCsv } from './exportReferences';

describe('toCsv', () => {
  it('exports rows', () => {
    expect(toCsv(['Title'], [['Cancer study']])).toBeTruthy();
  });
  it('protects against formulas', () => {
    expect(toCsv(['A'], [['=SUM(A1)']])).toContain("'=");
  });
  it('handles negative numbers', () => {
    expect(toCsv(['Value'], [['-0.5']])).toBe('"Value"\n"\'-0.5"');
  });
  it('creates a filename', () => {
    expect(exportFilename('')).toBe('.csv');
  });
});
