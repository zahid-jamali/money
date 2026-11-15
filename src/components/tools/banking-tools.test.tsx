import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import { IbanCheckerTool } from './IbanCheckerTool';
import { GermanIbanCalculatorTool } from './GermanIbanCalculatorTool';
import { BlzSearchTool } from './BlzSearchTool';
import { BicCheckerTool } from './BicCheckerTool';
import { IbanFormatCountryTool } from './IbanFormatCountryTool';

describe('Banking UI Tools', () => {
  describe('IbanCheckerTool', () => {
    it('renders privacy notice and empty state when no IBAN is provided', () => {
      const html = renderToString(<IbanCheckerTool lang="en" />);
      expect(html).toContain('Your IBAN never leaves your browser');
      expect(html).toContain('Enter or paste IBANs');
    });

    it('renders German privacy notice and localized labels when lang=de', () => {
      const html = renderToString(<IbanCheckerTool lang="de" />);
      expect(html).toContain('Ihre IBAN verlässt niemals Ihren Browser');
      expect(html).toContain('IBANs eingeben oder einfügen');
    });

    it('validates a valid German IBAN with Bundesbank verified badge and bank details', () => {
      // Valid German IBAN: Deutsche Bank Berlin (BLZ 10070000)
      const validDE = 'DE89 3704 0044 0532 0130 00';
      const html = renderToString(<IbanCheckerTool initialIbans={validDE} lang="en" />);

      expect(html).toContain('Valid IBAN');
      expect(html).toContain('DE89 3704 0044 0532 0130 00');
      expect(html).toContain('SEPA Member');
      expect(html).toContain('Germany');
      expect(html).toContain('Bank Code');
      expect(html).toContain('Account Number');
    });

    it('displays invalid badge and error reason for corrupt IBAN', () => {
      const invalidIban = 'DE00 0000 0000 0000 0000 00';
      const html = renderToString(<IbanCheckerTool initialIbans={invalidIban} lang="en" />);

      expect(html).toContain('Invalid IBAN');
    });

    it('renders multiple IBANs with summary counter', () => {
      const multi = 'DE89370400440532013000\nDE00111122223333444455';
      const html = renderToString(<IbanCheckerTool initialIbans={multi} lang="en" />);

      expect(html).toContain('Total IBANs');
      expect(html).toContain('Valid');
      expect(html).toContain('Invalid');
    });
  });

  describe('GermanIbanCalculatorTool', () => {
    it('renders official disclaimer banner and inputs', () => {
      const html = renderToString(<GermanIbanCalculatorTool lang="de" />);
      expect(html).toContain('Bundesbank-Ausnahmeregeln');
      expect(html).toContain('Bankleitzahl (BLZ)');
      expect(html).toContain('Kontonummer');
    });

    it('calculates German IBAN from BLZ and Kontonummer with Bundesbank details', () => {
      // Deutsche Bank Berlin BLZ: 10070000, Account: 123456700
      const html = renderToString(
        <GermanIbanCalculatorTool
          initialBlz="10070000"
          initialKontonummer="123456700"
          lang="de"
        />,
      );

      expect(html).toContain('Deutsche Bank');
      expect(html).toContain('DEUTDEBBXXX');
      expect(html).toContain('Berlin');
      expect(html).toContain('Ihre berechnete deutsche IBAN');
      expect(html).toContain('Aufbau der deutschen IBAN');
    });

    it('shows validation error for nonexistent BLZ', () => {
      const html = renderToString(
        <GermanIbanCalculatorTool
          initialBlz="99999999"
          initialKontonummer="123456789"
          lang="de"
        />,
      );

      expect(html).toContain('nicht in der offiziellen Bundesbank-Datenbank gefunden');
    });
  });

  describe('BlzSearchTool', () => {
    it('renders search input and Bundesbank directory results', () => {
      const html = renderToString(<BlzSearchTool lang="de" pageSize={10} />);
      expect(html).toContain('BLZ, Bankname oder Stadt suchen');
      expect(html).toContain('Banken gefunden');
      expect(html).toContain('IBAN berechnen');
    });

    it('filters correctly for a specific bank query', () => {
      const html = renderToString(
        <BlzSearchTool initialQuery="Deutsche Bank" lang="de" pageSize={10} />,
      );
      expect(html).toContain('Deutsche Bank');
      expect(html).toContain('Banken gefunden');
    });

    it('filters by 8-digit BLZ number', () => {
      const html = renderToString(
        <BlzSearchTool initialQuery="10070000" lang="de" pageSize={10} />,
      );
      expect(html).toContain('10070000');
      expect(html).toContain('Deutsche Bank');
    });
  });

  describe('BicCheckerTool', () => {
    it('renders input box, examples and ISO 9362 breakdown for valid BIC', () => {
      const html = renderToString(<BicCheckerTool initialBic="DEUTDEDBXXX" lang="en" />);
      expect(html).toContain('Valid BIC / SWIFT');
      expect(html).toContain('Head Office (Primary)');
      expect(html).toContain('Bank Code');
      expect(html).toContain('DEUT');
      expect(html).toContain('Country Code');
      expect(html).toContain('DE');
      expect(html).toContain('Location Code');
      expect(html).toContain('DB');
      expect(html).toContain('Branch Code');
      expect(html).toContain('XXX');
    });

    it('validates 8-character BIC without branch', () => {
      const html = renderToString(<BicCheckerTool initialBic="BNPAPRPP" lang="en" />);
      expect(html).toContain('Valid BIC / SWIFT');
      expect(html).toContain('BNPA');
      expect(html).toContain('FR');
      expect(html).toContain('PP');
    });

    it('displays error message for invalid length or invalid characters', () => {
      const html = renderToString(<BicCheckerTool initialBic="INVALID12345" lang="en" />);
      expect(html).toContain('Invalid BIC length');
    });
  });

  describe('IbanFormatCountryTool', () => {
    it('renders country specifications, breakdown pills, and example IBAN for Germany (DE)', () => {
      const html = renderToString(<IbanFormatCountryTool initialCountryCode="DE" lang="en" />);
      expect(html).toContain('Germany');
      expect(html).toContain('22');
      expect(html).toContain('EUR');
      expect(html).toContain('Yes (SEPA)');
      expect(html).toContain('Country Code');
      expect(html).toContain('Check Digits');
      expect(html).toContain('Bank Code');
      expect(html).toContain('Account Number');
      expect(html).toContain('Interactive Country IBAN Tester');
    });

    it('renders country specifications for France (FR) with branch code and RIB check key', () => {
      const html = renderToString(<IbanFormatCountryTool initialCountryCode="FR" lang="en" />);
      expect(html).toContain('France');
      expect(html).toContain('27');
      expect(html).toContain('Branch Code');
      expect(html).toContain('National Check Digits');
      expect(html).toContain('French Weighted RIB Key');
    });

    it('renders in German when lang=de', () => {
      const html = renderToString(<IbanFormatCountryTool initialCountryCode="AT" lang="de" />);
      expect(html).toContain('Österreich');
      expect(html).toContain('Länder-Fakten');
      expect(html).toContain('Gesamtlänge');
      expect(html).toContain('SEPA-Mitglied');
    });
  });
});
