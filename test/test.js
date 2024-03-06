import { expect } from 'chai';
import { convertRupiah, convertToWords } from '../src/formatCurrency.js';

describe('formatCurrencyIndonesian', () => {
  it('should format currency correctly', () => {
    expect(convertRupiah(50000)).to.equal('Rp 50.000,00');
  });

  it('should allow custom symbol', () => {
    expect(convertRupiah(50000, { symbol: 'IDR' })).to.equal('IDR 50.000,00');
  });

  it('should allow informal formatting', () => {
    expect(convertRupiah(50000, { formal: false })).to.equal('Rp 50.000,00');
  });

  it('should allow informal formatting with custom symbol', () => {
    expect(convertRupiah(50000, { formal: false, symbol: 'IDR' })).to.equal('IDR 50.000,00');
  });

  it('should format with custom dot and floating point', () => {
    expect(convertRupiah(50000, { dot: '.', floatingPoint: 0 })).to.equal('Rp 50.000');
  });

  it('should format with custom dot and decimal', () => {
    expect(convertRupiah(50000, { dot: ',', decimal: '.' })).to.equal('Rp 50.000.00');
  });

  it('should replace zero decimals', () => {
    expect(convertRupiah(50000, { replaceZeroDecimals: true })).to.equal('Rp 50.000');
  });
});


describe('convertToWords', () => {
  it('should convert number to words correctly', () => {
    const result = convertToWords(200000);
    expect(result).to.equal('Dua Ratus Ribu Rupiah');
  });
});