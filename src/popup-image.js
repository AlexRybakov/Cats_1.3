import { Popup } from "./popup.js";

export class PopupWithImage extends Popup {
    constructor(classname) {
        super(classname);
    }
    open(dataImage) {
        const imagePopup = this._popupElement.querySelector('.popup__image');
        imagePopup.src = dataImage;

        super.open();
    }
}