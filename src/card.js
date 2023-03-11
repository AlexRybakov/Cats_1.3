export class Card {

    constructor(data, selectorTemplate,handleClickCatImage,handleCatTitle, handleLikeCard) {
        this._data = data,
        this._selectorTemplate = selectorTemplate;
        this._handleClickCatImage = handleClickCatImage;
        this._handleCatTitle = handleCatTitle;
        this._handleLikeCard = handleLikeCard;
    }

    _updateViewLike() {
            if(this._data.favorite) {
                this.cardLikeElement.classList.add('card__like_active')
            } else {
                this.cardLikeElement.classList.remove('card__like_active')
            }
        }

    _getTemplate() {
        const template = document.querySelector(this._selectorTemplate).content.querySelector('.card');
        return template;
    }

    getElement() {
        this.element = this._getTemplate().cloneNode(true);

        this.cardTitleElement = this.element.querySelector('.card__name');
        this.cardImageElement = this.element.querySelector('.card__image');
        this.cardLikeElement = this.element.querySelector('.card__like');
        this.cardWatchElement = this.element.querySelector('.btn-text')
    
        this.updateView();
        
        this.setEventListener();

        this.cardTitleElement.addEventListener('click', () => {
            this._handleClickCatImage(this._data.image);
        })

        return this.element
    }

    getData() {
        return this._data;
    }

    getId() {
        return this._data.id;
    }

    setData(newData) {
        this._data = newData;
    }

    updateView() {
        this.cardTitleElement.textContent = this._data.name;
        this.cardImageElement.src  = this._data.image;

        this._updateViewLike();
    }

    _setLikeCat = () => {
        this._data.favorite = !this._data.favorite;
        this.updateView();

        this._handleLikeCard(this._data, this);

    }

    deleteView() {
        this.element.remove();
        this.element = null;
    }

    setEventListener () {
        this.cardWatchElement.addEventListener('click', () => this._handleCatTitle(this));

        this.cardLikeElement.addEventListener('click', this._setLikeCat)
    }
}