import { Locator, Page } from "playwright";
import { ActionsModal } from "./modals/ActionsModal";

export class ProcessDesignerPage {
    readonly page;
    readonly actionModal : ActionsModal;

    readonly processNameInput : Locator;
    readonly actionButton : Locator;
    readonly saveButton : Locator;
    readonly circleOkIcon : Locator; // icon that appears when an action is successfully added to the canvas
    readonly emptyMainCanvas : Locator;
    readonly filledMainCanvas : Locator; // canvas with elements
    readonly actionOnCanvas : Locator;


    constructor(page : Page) {
        this.page = page;
        this.actionModal = new ActionsModal(page);
        this.processNameInput = page.locator('input[data-testid*="txt-processName"]');
        this.actionButton = page.getByTestId('pdActions-click');
        this.saveButton = page.getByTestId('pdSave-click');
        this.circleOkIcon = page.locator('//i[contains(@class, "icons-circle-ok")]');
        this.emptyMainCanvas = page.getByTestId('pdEmpty-createAction'); 
        this.filledMainCanvas = page.locator('.linqi-graph-panZoomablePaperCanvas');
        this.actionOnCanvas = this.filledMainCanvas.locator(".linqi-graph-nodeContainer"); // get action elements from the canvas locator
    }

    async clickActionButton() {
        await this.actionButton.click();
    }

    async fillProcessName(name: string) {
        await this.processNameInput.fill(name);
    }

    async dragActionToCanvas() {
        await this.actionModal.processStartButton.dragTo(this.emptyMainCanvas);
    }

    async closeActionModal() {
        await this.actionModal.closeModalButton.click();
    }

    async clickSaveProcessButton() {
        await this.saveButton.click();
    }
}