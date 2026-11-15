import { describe, it, expect } from 'vitest';
import * as UI from './index';

describe('UI Components Export verification', () => {
  it('exports all 21 UI components properly', () => {
    // 1. Card & parts
    expect(UI.Card).toBeDefined();
    expect(UI.CardHeader).toBeDefined();
    expect(UI.CardTitle).toBeDefined();
    expect(UI.CardDescription).toBeDefined();
    expect(UI.CardContent).toBeDefined();
    expect(UI.CardFooter).toBeDefined();

    // 2. Button
    expect(UI.Button).toBeDefined();

    // 3. MoneyInput
    expect(UI.MoneyInput).toBeDefined();

    // 4. NumberInput
    expect(UI.NumberInput).toBeDefined();

    // 5. PercentInput
    expect(UI.PercentInput).toBeDefined();

    // 6. DateInput
    expect(UI.DateInput).toBeDefined();

    // 7. DateRangeList
    expect(UI.DateRangeList).toBeDefined();

    // 8. Select
    expect(UI.Select).toBeDefined();

    // 9. SegmentedToggle
    expect(UI.SegmentedToggle).toBeDefined();

    // 10. Checkbox
    expect(UI.Checkbox).toBeDefined();

    // 11. ResultSummary
    expect(UI.ResultSummary).toBeDefined();

    // 12. ComparisonTable
    expect(UI.ComparisonTable).toBeDefined();

    // 13. CopyButton
    expect(UI.CopyButton).toBeDefined();

    // 14. ShareButton
    expect(UI.ShareButton).toBeDefined();

    // 15. PrintButton
    expect(UI.PrintButton).toBeDefined();

    // 16. Breadcrumbs
    expect(UI.Breadcrumbs).toBeDefined();

    // 17. TableOfContents
    expect(UI.TableOfContents).toBeDefined();

    // 18. FaqAccordion
    expect(UI.FaqAccordion).toBeDefined();

    // 19. RelatedTools
    expect(UI.RelatedTools).toBeDefined();

    // 20. AdSlot
    expect(UI.AdSlot).toBeDefined();

    // 21. UpdatedBadge
    expect(UI.UpdatedBadge).toBeDefined();
  });
});
