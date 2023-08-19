import Image from "next/image";

const AuthModal = ({
    image,
    text,
    leftBtnText,
    rightBtnText,
    close,
    isOpened,
    see
  }) => {
    return isOpened ? (
      <div className="LogOutModal-cont" onClick={close}>
        <div
          className="LogOutModal-cont__content"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="LogOutModal-cont__content__imgWrapper">
            <Image
              src={image}
              alt="goodImage"
              className="LogOutModal-cont__content__imgWrapper__img"
            />
          </div>
          <p className="LogOutModal-cont__content__text">{text}</p>
          <div className="LogOutModal-cont__content__btnWrapper">
            <button
              className="LogOutModal-cont__content__btnWrapper__btn1"
              onClick={close}
            >
              <p className="LogOutModal-cont__content__btnWrapper__btn1__leftBtnText">
                {leftBtnText}
              </p>
            </button>
            <button className="LogOutModal-cont__content__btnWrapper__btn2" onClick={see}>
              <p className="LogOutModal-cont__content__btnWrapper__btn2__text">
                {rightBtnText}
              </p>
            </button>
          </div>
        </div>
      </div>
    ) : null;
  };

  export default AuthModal