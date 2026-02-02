import { test } from '../fixtures/authFixture';
import { expect } from '@playwright/test';
import { MainNavigation } from '../pages/components/MainNavigation';
import { ProcessPage } from '../pages/ProcessPage';
import { ProcessDesignerPage } from '../pages/processDesigner/ProcessDesignerPage';

test("Verify action is created and visible on canvas", async ({ page, loginPage }) => {
    const mainNavigation = new MainNavigation(page);
    const processPage = new ProcessPage(page);
    const actionName = "Test Action";
    
    await mainNavigation.clickProcessButton();
    await expect(page).toHaveURL(/.processDashboard/);

    const [newPage] = await Promise.all([
        page.context().waitForEvent('page'),
        processPage.clickCreateProcessButton()
    ]);

    const processDesignerPage = new ProcessDesignerPage(newPage);
    await expect(newPage).toHaveURL(/.processDesigner/);

    await processDesignerPage.fillProcessName(actionName);
    await expect(processDesignerPage.processNameInput).toHaveValue(actionName);

    await processDesignerPage.clickActionButton();
    await processDesignerPage.dragActionToCanvas();

    await processDesignerPage.closeActionModal();
    await processDesignerPage.clickSaveProcessButton();
    await expect(processDesignerPage.circleOkIcon).toBeVisible();

    await expect(processDesignerPage.filledMainCanvas).toBeVisible();
    await expect(processDesignerPage.emptyMainCanvas).toBeHidden();
    
    await expect(processDesignerPage.actionOnCanvas).toHaveCount(1);
    await expect(processDesignerPage.actionOnCanvas).toBeVisible();
    await expect(processDesignerPage.processNameInput).toHaveValue(actionName);
});