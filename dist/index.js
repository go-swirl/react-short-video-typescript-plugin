function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var Slider = _interopDefault(require('react-slick'));
var axios = _interopDefault(require('axios'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// A type of promise-like that resolves synchronously and supports only one observer

const _iteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))) : "@@iterator";

const _asyncIteratorSymbol = /*#__PURE__*/ typeof Symbol !== "undefined" ? (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator"))) : "@@asyncIterator";

// Asynchronously call a function and send errors to recovery continuation
function _catch(body, recover) {
	try {
		var result = body();
	} catch(e) {
		return recover(e);
	}
	if (result && result.then) {
		return result.then(void 0, recover);
	}
	return result;
}

// Asynchronously await a promise and pass the result to a finally continuation
function _finallyRethrows(body, finalizer) {
	try {
		var result = body();
	} catch (e) {
		return finalizer(true, e);
	}
	if (result && result.then) {
		return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
	}
	return finalizer(false, result);
}

function disableScrollssv() {
  var scrollPosition = [window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft, window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop];
  var html = document.documentElement;
  html.setAttribute("data-scroll-position", JSON.stringify(scrollPosition));
  html.setAttribute("data-previous-overflow", html.style.overflow);
  html.style.overflow = "hidden";
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}
function enableScrollssv() {
  var html = document.documentElement;
  var scrollPosition = JSON.parse(html.getAttribute("data-scroll-position"));
  html.style.overflow = html.getAttribute("data-previous-overflow");
  window.scrollTo(scrollPosition[0], scrollPosition[1]);
}
var muted = false;
var checkInWishListOrNot = function checkInWishListOrNot(wishlistData, targetSku) {
  var obj = wishlistData === null || wishlistData === void 0 ? void 0 : wishlistData.find(function (obj) {
    var _obj$product;
    return (obj === null || obj === void 0 ? void 0 : obj.product) && (obj === null || obj === void 0 ? void 0 : (_obj$product = obj.product) === null || _obj$product === void 0 ? void 0 : _obj$product.sku) === targetSku;
  });
  return {
    status: wishlistData === null || wishlistData === void 0 ? void 0 : wishlistData.some(function (obj) {
      var _obj$product2;
      return (obj === null || obj === void 0 ? void 0 : obj.product) && (obj === null || obj === void 0 ? void 0 : (_obj$product2 = obj.product) === null || _obj$product2 === void 0 ? void 0 : _obj$product2.sku) === targetSku;
    }),
    obj: obj
  };
};
var Modal = function Modal(_ref) {
  var children = _ref.children,
    show = _ref.show,
    onClose = _ref.onClose;
  return (
    /*#__PURE__*/
    React__default.createElement("div", {
      id: "swil_ssv_modal_div",
      style: {
        display: show ? "block" : "none"
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_modal-backdrop",
      onClick: onClose
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_modal-wrapper",
      style: {
        backgroundColor: "rgba(0,0,0,0.9"
      }
    }, children))
  );
};
var ErrorBox = function ErrorBox(_ref2) {
  var errorMessage = _ref2.errorMessage,
    isVisibleMsg = _ref2.isVisibleMsg,
    setIsVisibleMsg = _ref2.setIsVisibleMsg;
  React.useEffect(function () {
    var timer = setTimeout(function () {
      setIsVisibleMsg(false);
    }, 1500);
    return function () {
      clearTimeout(timer);
    };
  }, [isVisibleMsg, setIsVisibleMsg]);
  return /*#__PURE__*/React__default.createElement("div", {
    style: {
      transition: "opacity 0.4s ease-out",
      width: errorMessage.length > 15 ? "250px" : "150px",
      display: isVisibleMsg ? "block" : "none",
      opacity: isVisibleMsg ? 1 : 0,
      backgroundColor: "#00000080",
      color: "#fff",
      textAlign: "center",
      margin: "auto",
      padding: "4px 10px",
      fontSize: "18px",
      borderRadius: "5px",
      position: "relative",
      zIndex: "10000000",
      boxShadow: "0px 0px 6px 0px rgba(255, 255, 255, 0.5)"
    }
  }, errorMessage);
};
var CartBtnLoadingComp = function CartBtnLoadingComp(_ref3) {
  var preViousText = _ref3.preViousText,
    NextText = _ref3.NextText,
    loadingCart = _ref3.loadingCart,
    setLoadingCart = _ref3.setLoadingCart,
    btnId = _ref3.btnId,
    loadingbtnId = _ref3.loadingbtnId,
    setLoadingbtnId = _ref3.setLoadingbtnId;
  React.useEffect(function () {
    var timer = setTimeout(function () {
      setLoadingCart(false);
      setLoadingbtnId(null);
    }, 1500);
    return function () {
      clearTimeout(timer);
    };
  }, [loadingCart, setLoadingCart, setLoadingbtnId]);
  if (loadingCart) {
    if (loadingbtnId === btnId) {
      return preViousText;
    } else {
      return NextText;
    }
  } else {
    return NextText;
  }
};
var sliceString = function sliceString(string, numberToslice) {
  if ((string === null || string === void 0 ? void 0 : string.length) > numberToslice) {
    return (string === null || string === void 0 ? void 0 : string.slice(0, numberToslice)) + "...";
  } else {
    return string;
  }
};
function SamplePrevArrow(props) {
  var className = props.className,
    style = props.style,
    onClick = props.onClick;
  return /*#__PURE__*/React__default.createElement("img", {
    className: className + " swirl_ssv_main_screen_arrow_icon",
    alt: "pre icon",
    style: _extends({}, style, {
      display: "block"
    }),
    onClick: onClick,
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/back-btn.webp"
  });
}
function SamplePrevArrowSmallDiv(props) {
  var className = props.className,
    style = props.style,
    onClick = props.onClick;
  return /*#__PURE__*/React__default.createElement("div", {
    className: className + " swirl_ssv_products_slider_btn_pre",
    style: _extends({}, style, {
      display: "block"
    }),
    onClick: onClick
  });
}
function SamplePrevArrowForModal(props) {
  var className = props.className,
    style = props.style,
    onClick = props.onClick;
  return /*#__PURE__*/React__default.createElement("div", {
    className: className + " swirl_ssv_test_new_btn",
    style: _extends({}, style, {
      display: "block"
    }),
    onClick: onClick
  });
}
function SampleNextArrow(props) {
  var className = props.className,
    style = props.style,
    onClick = props.onClick;
  return /*#__PURE__*/React__default.createElement("img", {
    className: className + " swirl_ssv_main_screen_arrow_icon_next",
    alt: "pre icon",
    style: _extends({}, style, {
      display: "block"
    }),
    onClick: onClick,
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/next-btn.webp"
  });
}
function SampleNextArrowSmallDiv(props) {
  var className = props.className,
    style = props.style,
    onClick = props.onClick;
  return /*#__PURE__*/React__default.createElement("div", {
    className: className + " swirl_ssv_products_slider_btn_next",
    style: _extends({}, style, {
      display: "block"
    }),
    onClick: onClick
  });
}
function SampleNextArrowForModal(props) {
  var className = props.className,
    style = props.style,
    onClick = props.onClick;
  var arrowStyle = _extends({}, style, {
    display: "block"
  });
  return /*#__PURE__*/React__default.createElement("div", {
    className: className + " swirl_ssv_test_new_btn",
    style: arrowStyle,
    onClick: onClick
  });
}
var copyToClipboard = function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(function () {
    console.log("URL copied to clipboard:", text);
  })["catch"](function (err) {
    console.error("Error copying to clipboard:", err);
  });
};
var VideoComponent = function VideoComponent(_ref4) {
  var _thisVideo$product, _thisVideo$product2;
  var onClose = _ref4.onClose,
    thisVideo = _ref4.thisVideo,
    videoLink = _ref4.videoLink,
    active = _ref4.active,
    index = _ref4.index,
    windowWidth = _ref4.windowWidth,
    swirlData = _ref4.swirlData,
    setPipDisplay = _ref4.setPipDisplay,
    dataWs = _ref4.dataWs,
    isVisibleMsg = _ref4.isVisibleMsg,
    setIsVisibleMsg = _ref4.setIsVisibleMsg,
    errorMessage = _ref4.errorMessage,
    setErrorMessage = _ref4.setErrorMessage,
    quantity = _ref4.quantity,
    loadingCart = _ref4.loadingCart,
    setLoadingCart = _ref4.setLoadingCart,
    loadingbtnId = _ref4.loadingbtnId,
    setLoadingbtnId = _ref4.setLoadingbtnId,
    wishlistData = _ref4.wishlistData,
    getWishlistDetails = _ref4.getWishlistDetails,
    removeFromWatchList = _ref4.removeFromWatchList,
    swipeStatus = _ref4.swipeStatus,
    setSwipeStatus = _ref4.setSwipeStatus,
    getAvailabiityCheck = _ref4.getAvailabiityCheck,
    cart = _ref4.cart,
    show = _ref4.show;
  var swirlSettings = swirlData === null || swirlData === void 0 ? void 0 : swirlData.data;
  var videoRef = React.useRef(null);
  var _useState = React.useState(true),
    isPlaying = _useState[0],
    setIsPlaying = _useState[1];
  var _useState2 = React.useState(true),
    isVisible = _useState2[0],
    setIsVisible = _useState2[1];
  var _useState3 = React.useState(false),
    isMuted = _useState3[0],
    setIsMuted = _useState3[1];
  var _useState4 = React.useState(false),
    isDrawerOpen = _useState4[0],
    setIsDrawerOpen = _useState4[1];
  var _useState5 = React.useState(false),
    isVisibleModal = _useState5[0],
    setIsVisibleModal = _useState5[1];
  var _useState6 = React.useState(false),
    shareDrawerOnOrOff = _useState6[0],
    setShareDrawerOnOrOff = _useState6[1];
  var _useState7 = React.useState(0),
    currentTime = _useState7[0],
    setCurrentTime = _useState7[1];
  var _useState8 = React.useState(0),
    duration = _useState8[0],
    setDuration = _useState8[1];
  var _useState9 = React.useState(""),
    msg = _useState9[0],
    setMsg = _useState9[1];
  var _useState10 = React.useState(false),
    productDetalDrawer = _useState10[0],
    setProductDetailDrawer = _useState10[1];
  var _useState11 = React.useState(thisVideo.product[0]),
    productData = _useState11[0],
    setProductData = _useState11[1];
  var _useState12 = React.useState(1),
    quantityForAddToCart = _useState12[0],
    setQantityForAddToCart = _useState12[1];
  var _useState13 = React.useState({
      user_id: 0,
      username: "",
      userphonecode: "91",
      userphone: ""
    }),
    userData = _useState13[0],
    setUserData = _useState13[1];
  var modalRef = React.useRef();
  var askbtnref = React.useRef();
  var shareModalRef = React.useRef();
  var shareBtnRef = React.useRef();
  var productRef = React.useRef();
  var productDrawerRef = React.useRef();
  var registerModalRef = React.useRef();
  React.useEffect(function () {
    if (show) {
      if (active === index) {
        if (videoRef.current.paused) {
          videoRef.current.play();
        }
      }
    } else {
      if (!videoRef.current.paused) {
        videoRef.current.pause();
      }
    }
  }, [active, index, show]);
  React.useEffect(function () {
    var handleClickOutside = function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target) && askbtnref.current && !askbtnref.current.contains(event.target) && registerModalRef.current && !registerModalRef.current.contains(event.target)) {
        setIsDrawerOpen(false);
      }
      if (shareModalRef.current && !shareModalRef.current.contains(event.target) && shareBtnRef.current && !shareBtnRef.current.contains(event.target)) {
        setShareDrawerOnOrOff(false);
      }
    };
    if (isDrawerOpen || shareDrawerOnOrOff) {
      document.addEventListener('click', handleClickOutside);
    }
    return function () {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDrawerOpen, setIsDrawerOpen, shareDrawerOnOrOff, setShareDrawerOnOrOff, productDetalDrawer]);
  var handleVideoEnd = function handleVideoEnd() {
    setIsPlaying(false);
  };
  var onOffSLideMoves = function onOffSLideMoves() {
    setSwipeStatus(!swipeStatus);
  };
  var handleInputChange = function handleInputChange(e) {
    var _e$target = e.target,
      name = _e$target.name,
      value = _e$target.value;
    setUserData(function (prevData) {
      var _extends2;
      return _extends({}, prevData, (_extends2 = {}, _extends2[name] = value, _extends2));
    });
  };
  var handleQuantity = function handleQuantity(method) {
    if (method === "decrease") {
      setQantityForAddToCart(quantityForAddToCart - 1);
    } else {
      setQantityForAddToCart(quantityForAddToCart + 1);
    }
  };
  var handleProductDetailDrawer = function handleProductDetailDrawer() {
    setProductDetailDrawer(!productDetalDrawer);
    onOffSLideMoves();
  };
  var videoDwn = function videoDwn(videoSrc) {
    var _document, _document2, _document3;
    var a = (_document = document) === null || _document === void 0 ? void 0 : _document.createElement("a");
    a.href = videoSrc;
    a.download = "video.mp4";
    (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.body.appendChild(a);
    a === null || a === void 0 ? void 0 : a.click();
    (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.body.removeChild(a);
  };
  function downloadVideo(videoSrc) {
    if ((swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.download_verfication) === 1) {
      var _localStorage;
      if ((_localStorage = localStorage) !== null && _localStorage !== void 0 && _localStorage.getItem("userData")) {
        videoDwn(videoSrc);
      } else {
        toggleVisibilityModal();
      }
    } else {
      videoDwn(videoSrc);
    }
  }
  var askQuestionFunction = function askQuestionFunction(e) {
    try {
      e.preventDefault();
      var _temp2 = function () {
        if (localStorage.getItem("userData")) {
          var _temp = _catch(function () {
            var _Object$keys;
            var formData = new FormData();
            var data = JSON.parse(localStorage.getItem("userData"));
            (_Object$keys = Object.keys(data)) === null || _Object$keys === void 0 ? void 0 : _Object$keys.forEach(function (key) {
              formData.append(key, data[key]);
            });
            formData.append("designer_id", swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id);
            formData.append("msg", msg);
            formData.append("swirls_id", thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id);
            return Promise.resolve(axios.post("https://api.goswirl.live/index.php/ShortVideo/askquestion", formData)).then(function (res) {
              if (res.status === 200) {
                console.log("success");
                setErrorMessage("Your query is submitted.Thank You!");
                setIsVisibleMsg(true);
                toggleDrawer();
                setMsg("");
                e.target.reset();
              } else {
                console.log("error");
                setErrorMessage("Something went wrong, Please try again!");
                setIsVisibleMsg(true);
              }
            });
          }, function (error) {
            console.log(error);
            setErrorMessage("Something went wrong, Please try again!");
            setIsVisibleMsg(true);
          });
          if (_temp && _temp.then) return _temp.then(function () {});
        } else {
          toggleVisibilityModal();
        }
      }();
      return Promise.resolve(_temp2 && _temp2.then ? _temp2.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var toggleVisibilityModal = function toggleVisibilityModal() {
    setIsVisibleModal(!isVisibleModal);
  };
  var toggleshareDrawer = function toggleshareDrawer() {
    setIsDrawerOpen(false);
    setShareDrawerOnOrOff(!shareDrawerOnOrOff);
  };
  var handleHover = function handleHover() {
    if (!productDetalDrawer) {
      setIsVisible(false);
    }
  };
  var toggleDrawer = function toggleDrawer() {
    setShareDrawerOnOrOff(false);
    if (!isDrawerOpen) {
      setSwipeStatus(false);
    } else {
      setSwipeStatus(true);
    }
    setIsDrawerOpen(function (prevState) {
      return !prevState;
    });
  };
  React.useEffect(function () {
    var timer = setTimeout(function () {
      setIsVisible(true);
    }, 1500);
    return function () {
      clearTimeout(timer);
    };
  }, [isVisible]);
  var handleMouseLeave = function handleMouseLeave() {
    setIsVisible(true);
  };
  var togglePlayPause = function togglePlayPause() {
    var video = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
    if (video) {
      if (isPlaying) {
        video === null || video === void 0 ? void 0 : video.pause();
      } else {
        video === null || video === void 0 ? void 0 : video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  var handleToggleMute = function handleToggleMute() {
    var video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(function (prevState) {
        return !prevState;
      });
      muted = !muted;
    }
  };
  var handleForward = function handleForward() {
    var video = videoRef.current;
    if (video) {
      video.currentTime += 10;
      video === null || video === void 0 ? void 0 : video.play();
      setIsPlaying(true);
    }
  };
  var handleBackward = function handleBackward() {
    var video = videoRef.current;
    if (video) {
      video.currentTime -= 10;
      video === null || video === void 0 ? void 0 : video.play();
      setIsPlaying(true);
    }
  };
  var handlePlayInPIP = function handlePlayInPIP(videoData) {
    if (videoData) {
      localStorage.setItem("_pip_video_data", JSON.stringify(videoData));
      setPipDisplay(true);
      onClose();
    } else {
      console.error("Error : Not getting video data ");
    }
  };
  React.useEffect(function () {
    var handleTimeUpdate = function handleTimeUpdate() {
      var _videoRef$current;
      setCurrentTime(videoRef === null || videoRef === void 0 ? void 0 : (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.currentTime);
    };
    var handleLoadedMetadata = function handleLoadedMetadata() {
      var _videoRef$current2;
      setDuration(videoRef === null || videoRef === void 0 ? void 0 : (_videoRef$current2 = videoRef.current) === null || _videoRef$current2 === void 0 ? void 0 : _videoRef$current2.duration);
    };
    videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
    videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
    if ((swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.auto_play_mute_un) === "1") {
      setIsMuted(true);
      muted = true;
    }
  }, [swirlSettings]);
  var handleSubmit = function handleSubmit(e) {
    try {
      e.preventDefault();
      var _temp4 = function () {
        if (userData.username === "" || userData.userphone === "" || userData.userphonecode === "") {
          setErrorMessage("Please fill all the field");
          setIsVisibleMsg(true);
        } else {
          var _temp3 = function (_userData$userphone) {
            if ((userData === null || userData === void 0 ? void 0 : (_userData$userphone = userData.userphone) === null || _userData$userphone === void 0 ? void 0 : _userData$userphone.length) === 10) {
              localStorage.setItem("userData", JSON.stringify(userData));
              toggleVisibilityModal();
              return Promise.resolve(askQuestionFunction(e)).then(function () {});
            } else {
              setErrorMessage("Invalid mobile number!");
              setIsVisibleMsg(true);
            }
          }();
          if (_temp3 && _temp3.then) return _temp3.then(function () {});
        }
      }();
      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var settings3 = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: false,
    initialSlide: 0,
    adaptiveHeight: true,
    prevArrow: /*#__PURE__*/React__default.createElement(SamplePrevArrowSmallDiv, null),
    nextArrow: /*#__PURE__*/React__default.createElement(SampleNextArrowSmallDiv, null),
    beforeChange: function beforeChange(current, next) {},
    afterChange: function afterChange(current) {}
  };
  var videoTimeUpdate = function videoTimeUpdate(e) {
    var progress = e.currentTarget;
    var player = videoRef.current;
    var percent = e.nativeEvent.offsetX / progress.offsetWidth;
    player.currentTime = percent * player.duration;
  };
  var addTocartClicked2 = React.useCallback(function (skuCode, quantity) {
    try {
      var _temp8 = function () {
        if (dataWs === "0") {
          console.log("Logic running of add to cart for dataws0");
          var _temp5 = _catch(function () {
            return Promise.resolve(getAvailabiityCheck(skuCode)).then(function (isAvailable) {
              console.log("availability", isAvailable);
              if (isAvailable.status === "instock") {
                var event = new CustomEvent("ADDED_TO_CART", {
                  detail: JSON.stringify({
                    type: "SimpleProduct",
                    sku: skuCode,
                    qty: quantityForAddToCart
                  })
                });
                window.dispatchEvent(event);
                setTimeout(function () {
                  if ((cart === null || cart === void 0 ? void 0 : cart.status) === "rejected") {
                    setErrorMessage("" + (cart !== null && cart !== void 0 && cart.message ? cart === null || cart === void 0 ? void 0 : cart.message : "Something went wrong"));
                    setIsVisibleMsg(true);
                  } else {
                    setErrorMessage("Item added to Cart");
                    setIsVisibleMsg(true);
                  }
                }, 500);
              } else if (isAvailable.status === "outofstock") {
                setErrorMessage("This item is out of stock");
                setIsVisibleMsg(true);
              } else {
                setErrorMessage("Something went wrong, Please try again!");
                setIsVisibleMsg(true);
              }
            });
          }, function (error) {
            console.error("error", error);
            setErrorMessage("Something went wrong, Please try again!");
            setIsVisibleMsg(true);
          });
          if (_temp5 && _temp5.then) return _temp5.then(function () {});
        } else {
          var _temp9 = function () {
            if (dataWs === "1") {
              console.log("Logic running of add to cart for dataws1");
              try {
                var addToCartEvent = new CustomEvent('ADDED_TO_CART', {
                  detail: {
                    sku: skuCode,
                    quantity: quantityForAddToCart
                  }
                });
                window.dispatchEvent(addToCartEvent);
                console.log(addToCartEvent);
                setErrorMessage("Item added to cart");
                setIsVisibleMsg(true);
              } catch (error) {
                console.error("error", error);
                setErrorMessage("Something went wrong, Please try again!");
                setIsVisibleMsg(true);
              }
            } else {
              console.log("Logic running of add to cart for no dataws");
              var _temp6 = _catch(function () {
                return Promise.resolve(getAvailabiityCheck(skuCode)).then(function (isAvailable) {
                  if (isAvailable.status === "instock") {
                    var event = new CustomEvent("ADDED_TO_CART", {
                      detail: JSON.stringify({
                        type: "SimpleProduct",
                        sku: skuCode,
                        qty: quantityForAddToCart
                      })
                    });
                    window.dispatchEvent(event);
                    setErrorMessage("Item added to cart");
                    setIsVisibleMsg(true);
                  } else if (isAvailable.status === "outofstock") {
                    setErrorMessage("This item is out of stock");
                    setIsVisibleMsg(true);
                  } else {
                    setErrorMessage("Something went wrong, Please try again!");
                    setIsVisibleMsg(true);
                  }
                });
              }, function (error) {
                console.error("error", error);
                setErrorMessage("Something went wrong, Please try again!");
                setIsVisibleMsg(true);
              });
              if (_temp6 && _temp6.then) return _temp6.then(function () {});
            }
          }();
          if (_temp9 && _temp9.then) return _temp9.then(function () {});
        }
      }();
      return Promise.resolve(_temp8 && _temp8.then ? _temp8.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  }, [quantityForAddToCart, dataWs, setErrorMessage, setIsVisibleMsg, getAvailabiityCheck, cart]);
  var addToWatchListClicked2 = function addToWatchListClicked2(skuCode) {
    if (dataWs === "0") {
      console.log("Logic running of wishlist for dataws0");
      try {
        var event = new CustomEvent("ADDED_TO_WISHLIST", {
          detail: JSON.stringify({
            type: "SimpleProduct",
            sku: skuCode,
            selectedOptions: []
          })
        });
        console.log(event);
        window.dispatchEvent(event);
        if (cart !== null && cart !== void 0 && cart.token) {
          setErrorMessage("Item added to wishlist");
          setIsVisibleMsg(true);
        }
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    } else if (dataWs === "1") {
      console.log("Logic running of wishlist for dataws1");
      try {
        var _event = new CustomEvent("ADDED_TO_WISHLIST", {
          detail: JSON.stringify({
            type: "SimpleProduct",
            sku: skuCode,
            selectedOptions: []
          })
        });
        window.dispatchEvent(_event);
        if (cart !== null && cart !== void 0 && cart.token) {
          setErrorMessage("Item added to wishlist");
          setIsVisibleMsg(true);
        }
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    } else {
      console.log("Logic running of wishlist for no dataws");
      try {
        var _event2 = new CustomEvent("ADDED_TO_WISHLIST", {
          detail: JSON.stringify({
            type: "SimpleProduct",
            sku: skuCode,
            selectedOptions: []
          })
        });
        window.dispatchEvent(_event2);
        if (cart !== null && cart !== void 0 && cart.token) {
          setErrorMessage("Item added to wishlist");
          setIsVisibleMsg(true);
        }
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    }
  };
  var CTAClicksssv = function CTAClicksssv(dId, pId, vId, cType) {
    try {
      var formData = new FormData();
      formData.append("designer_id", dId);
      formData.append("product_id", pId);
      formData.append("user_id", "");
      formData.append("video_id", vId);
      formData.append("type", cType);
      var _temp10 = _catch(function () {
        return Promise.resolve(axios.post("https://api.goswirl.live/index.php/shopify/actionbuttons", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })).then(function () {});
      }, function (error) {
        console.error("SWIRL CTA Track failed!", error);
      });
      return Promise.resolve(_temp10 && _temp10.then ? _temp10.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var this_page_url = window.location.href;
  var checkInWishListOrNo = checkInWishListOrNot(wishlistData, productData === null || productData === void 0 ? void 0 : productData.sku_code);
  var countPercentage = function countPercentage() {
    var actualPrice = productData === null || productData === void 0 ? void 0 : productData.price;
    var discountedPrice = productData === null || productData === void 0 ? void 0 : productData.discount_price;
    if (actualPrice > 0 && discountedPrice > 0) {
      var discountPercentage = Math.round((actualPrice - discountedPrice) / actualPrice * 100);
      return discountPercentage + "%";
    } else {
      return "Invalid prices";
    }
  };
  return /*#__PURE__*/React__default.createElement("div", {
    onMouseEnter: handleHover,
    onTouchStart: handleHover,
    onMouseMove: handleHover,
    onClick: function onClick() {
      handleHover();
    },
    onMouseLeave: handleMouseLeave,
    style: {
      transition: "opacity 0.6s ease-out",
      width: thisVideo.product.length > 0 ? "50%" : "100%"
    },
    className: "swirl_ssv_column"
  }, /*#__PURE__*/React__default.createElement("video", {
    className: "swirl_ssv_video_div",
    ref: videoRef,
    onEnded: handleVideoEnd,
    preload: "metadata",
    autoPlay: active === index ? true : false,
    loop: true,
    playsInline: true,
    muted: muted
  }, /*#__PURE__*/React__default.createElement("source", {
    src: videoLink,
    type: "video/mp4"
  }), "Your browser does not support the video tag."), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_video_overlay",
    style: {
      willChange: "transform"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "100%",
      display: "flex"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex",
      marginLeft: "auto"
    }
  }, swirlSettings.pip_mode === "1" ? /*#__PURE__*/React__default.createElement("img", {
    onClick: function onClick() {
      return handlePlayInPIP(thisVideo);
    },
    alt: "pip_btn",
    className: "swirl_ssv_close_btn",
    style: {
      zIndex: "9999"
    },
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/pip.webp"
  }) : "", /*#__PURE__*/React__default.createElement("img", {
    onClick: onClose,
    alt: "close_btn",
    className: "swirl_ssv_close_btn",
    style: {
      zIndex: "9999"
    },
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/close.webp"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_play_btn",
    style: {
      transition: "opacity 0.4s ease-out",
      opacity: isVisible ? 0 : 1,
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_video_forword_ssv",
    onClick: handleBackward,
    alt: "video forword",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/rewind.svg"
  }), isPlaying ? /*#__PURE__*/React__default.createElement("img", {
    onClick: togglePlayPause,
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/pause.webp",
    className: "swirl_ssv_playpausse_btn_carousel",
    alt: "pause_btn"
  }) : /*#__PURE__*/React__default.createElement("img", {
    onClick: togglePlayPause,
    className: "swirl_ssv_playpausse_btn_carousel",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/play.webp",
    alt: "pause_btn"
  }), /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_video_forword_ssv",
    onClick: handleForward,
    alt: "video forword",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn@latest/assets/images/forward.svg"
  }))), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_bottom_slider",
    ref: modalRef,
    style: {
      height: "250px",
      padding: "10px",
      borderRadius: "10px 10px 0px 0px ",
      position: "relative",
      backgroundColor: "#fff",
      zIndex: "10001",
      transform: "translateY(" + (isDrawerOpen ? "-250px" : "250px") + ")",
      transition: "transform 0.5s ease"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "2px solid #eee",
      marginBottom: "20px",
      paddingBottom: "8px"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_arrow_left small_screen_arrow_left",
    onClick: toggleDrawer,
    style: {
      cursor: "pointer"
    }
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z",
    fill: "rgba(23,23,28,1)"
  }))), /*#__PURE__*/React__default.createElement("p", {
    style: {
      textAlign: "center",
      color: "black",
      margin: "0px 10px 3px 10px ",
      fontSize: "16px"
    }
  }, "Ask Questions"), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_arrow_left small_screen_arrow_left",
    style: {
      visibility: "hidden"
    }
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z",
    fill: "rgba(23,23,28,1)"
  })))), /*#__PURE__*/React__default.createElement("form", {
    onSubmit: askQuestionFunction
  }, /*#__PURE__*/React__default.createElement("textarea", {
    placeholder: "Enter query here",
    className: "swirl_ssv_text_area",
    rows: 5,
    onChange: function onChange(e) {
      return setMsg(e.target.value);
    }
  }), /*#__PURE__*/React__default.createElement("button", {
    className: "swirl_ssv_register_btn",
    style: {
      opacity: (msg === null || msg === void 0 ? void 0 : msg.length) > 0 ? 1 : 0.6,
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn
    },
    id: "asq_query_send_btn",
    disabled: (msg === null || msg === void 0 ? void 0 : msg.length) > 0 ? false : true
  }, "Send"))), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_bottom_slider",
    ref: shareModalRef,
    style: {
      height: "150px",
      borderRadius: "10px 10px 0px 0px ",
      position: "relative",
      backgroundColor: "#fff",
      zIndex: "10001",
      transform: "translateY(" + (shareDrawerOnOrOff ? "-400px" : "400px") + ")",
      transition: "transform 0.5s ease"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #eee",
      padding: "3px 10px"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_arrow_left small_screen_arrow_left",
    onClick: toggleshareDrawer
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z",
    fill: "rgba(23,23,28,1)"
  }))), /*#__PURE__*/React__default.createElement("p", {
    style: {
      textAlign: "center",
      color: "black",
      margin: "0",
      padding: "5px"
    }
  }, "Share to"), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_arrow_left small_screen_arrow_left",
    style: {
      visibility: "hidden"
    }
  }, /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z",
    fill: "rgba(23,23,28,1)"
  })))), /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "100%",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_share_icons",
    style: {
      padding: "20px  70px"
    }
  }, /*#__PURE__*/React__default.createElement("a", {
    href: "https://www.facebook.com/sharer/sharer.php?u=" + this_page_url + "?swirl_video=" + window.btoa(thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id),
    rel: "noreferrer",
    target: "_blank"
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_video-modal-share-modal-social-ssv",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/facebook.webp",
    alt: "Facebook icon",
    title: "Share on Facebook"
  })), /*#__PURE__*/React__default.createElement("a", {
    href: "https://twitter.com/share?url=" + this_page_url + "?swirl_video=" + window.btoa(thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id),
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_video-modal-share-modal-social-ssv",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/twitter.webp",
    alt: "Twitter icon",
    title: "Share on Twitter"
  })), /*#__PURE__*/React__default.createElement("a", {
    href: "https://api.whatsapp.com/send?text=" + this_page_url + "?swirl_video=" + window.btoa(thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id),
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_video-modal-share-modal-social-ssv",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/whatsapp.webp",
    alt: "Whatsapp icon",
    title: "Share on Whatsapp"
  })), /*#__PURE__*/React__default.createElement("a", {
    href: "mailto:?to=&body=Open this link : " + this_page_url + "?swirl_video=" + window.btoa(thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id) + "&subject=Please checkout this link, I found something amazing"
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_video-modal-share-modal-social-ssv",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/email.webp",
    alt: "Email icon",
    title: "Share on Email",
    rel: "noreferrer",
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/React__default.createElement("img", {
    onClick: function onClick() {
      copyToClipboard(this_page_url + "?swirl_video=" + window.btoa(thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id));
      setErrorMessage("Link copied");
      setIsVisibleMsg(true);
    },
    className: "swirl_ssv_video-modal-share-modal-social-ssv",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/copy-link.webp",
    alt: "Copy link icon",
    title: "Copy Link",
    rel: "noreferrer",
    style: {
      cursor: "pointer"
    }
  })))), /*#__PURE__*/React__default.createElement("div", {
    style: {
      position: "absolute",
      bottom: windowWidth < 833 ? (thisVideo === null || thisVideo === void 0 ? void 0 : (_thisVideo$product = thisVideo.product) === null || _thisVideo$product === void 0 ? void 0 : _thisVideo$product.length) === 0 ? 19 : 130 : 19,
      right: 10,
      padding: "10px 0px",
      willChange: "transform"
    }
  }, swirlSettings.download_icon === 1 ? /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_right_botttom_icn"
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_right_bottom_icons_carousel",
    onClick: function onClick() {
      return downloadVideo(thisVideo.server_url);
    },
    alt: "video forword",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/download.webp"
  }), /*#__PURE__*/React__default.createElement("p", {
    style: {
      padding: "0px",
      marginTop: "-10px",
      textAlign: "center",
      marginBottom: "-7px",
      fontSize: "7px"
    }
  }, "Download")) : "", swirlSettings.ask_question === 1 ? /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_right_botttom_icn",
    ref: askbtnref
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_right_bottom_icons_carousel",
    onClick: toggleDrawer,
    alt: "video forword",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/ask-question.webp"
  }), /*#__PURE__*/React__default.createElement("p", {
    style: {
      padding: "0px",
      marginTop: "-10px",
      textAlign: "center",
      marginBottom: "-7px",
      fontSize: "7px"
    }
  }, "Question")) : "", /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_right_botttom_icn"
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_right_bottom_icons_carousel mute_icons",
    onClick: handleToggleMute,
    style: {
      padding: "6px"
    },
    alt: "video forword",
    src: !muted ? "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/volume-up-fill.webp" : "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/volume-mute-fill.webp"
  }), /*#__PURE__*/React__default.createElement("p", {
    style: {
      padding: "0px",
      marginTop: "-10px",
      textAlign: "center",
      marginBottom: "-7px",
      fontSize: "7px"
    }
  }, !muted ? "Mute" : "Unmute")), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_right_botttom_icn",
    ref: shareBtnRef,
    style: {
      willChange: "transform"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_right_bottom_icons_carousel share_icon ",
    style: {
      padding: "6px"
    },
    onClick: toggleshareDrawer,
    alt: "video forword",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/share-icon.webp"
  }), /*#__PURE__*/React__default.createElement("p", {
    style: {
      padding: "0px",
      marginTop: "-10px",
      textAlign: "center",
      marginBottom: "-7px",
      fontSize: "7px"
    }
  }, "Share"))), /*#__PURE__*/React__default.createElement("div", {
    style: {
      position: "absolute",
      bottom: windowWidth < 833 && thisVideo.product.length > 0 ? "130px" : "30px",
      width: "100%",
      cursor: "pointer"
    }
  }, /*#__PURE__*/React__default.createElement("progress", {
    min: 0,
    style: {
      transition: "opacity 0.4s ease-out",
      opacity: isVisible ? 0 : 1,
      display: "flex",
      flexDirection: "column",
      height: "4px",
      border: "0px",
      maxWidth: "200px",
      margin: "auto"
    },
    onMouseDown: function onMouseDown(e) {
      return videoTimeUpdate(e);
    },
    id: "swirl_ssv_video_progress",
    value: currentTime,
    max: duration
  })), /*#__PURE__*/React__default.createElement("div", {
    ref: registerModalRef,
    className: "content " + (isVisibleModal ? "visible" : "hidden"),
    style: {
      height: "100%",
      padding: "15px",
      width: "100%",
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      margin: "auto",
      zIndex: "10001",
      backgroundColor: "#00000090"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_box_register"
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "25%"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/close.webp",
    alt: "icon",
    style: {
      filter: "invert(1)",
      visibility: "hidden"
    }
  }), /*#__PURE__*/React__default.createElement("p", {
    style: {
      margin: 0,
      padding: "0",
      textAlign: "center",
      color: "#000",
      fontSize: "17px"
    }
  }, "Register yourself", " "), /*#__PURE__*/React__default.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/close.webp",
    onClick: toggleVisibilityModal,
    alt: "icon",
    style: {
      filter: "invert(1)",
      cursor: "pointer"
    }
  })), /*#__PURE__*/React__default.createElement("hr", null), /*#__PURE__*/React__default.createElement("form", {
    className: "swirl_ssv_modal_form",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "text",
    name: "username",
    className: "swirl_ssv_name_field",
    onChange: handleInputChange,
    placeholder: "Enter your name",
    required: true
  }), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_contact-group"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_country-select",
    style: {
      width: "30%"
    }
  }, /*#__PURE__*/React__default.createElement("select", {
    id: "country",
    name: "userphonecode",
    className: "swirl_ssv_country-name",
    style: {
      width: "100%"
    },
    onChange: handleInputChange,
    required: true
  }, /*#__PURE__*/React__default.createElement("option", {
    value: "91",
    defaultValue: true
  }, "India +91"), /*#__PURE__*/React__default.createElement("option", {
    value: "44"
  }, "United Kingdom +44"), /*#__PURE__*/React__default.createElement("option", {
    value: "1"
  }, "United States +1"), /*#__PURE__*/React__default.createElement("option", {
    value: "92"
  }, "Pakistan +92"), /*#__PURE__*/React__default.createElement("option", {
    value: "971"
  }, "United Arab Emirates +971"), /*#__PURE__*/React__default.createElement("option", {
    value: "974"
  }, "Qatar +974"), /*#__PURE__*/React__default.createElement("option", {
    value: "966"
  }, "Saudi Arabia +966"), /*#__PURE__*/React__default.createElement("option", {
    value: "965"
  }, "Kuwait +965"), /*#__PURE__*/React__default.createElement("option", {
    value: "968"
  }, "Oman +968"), /*#__PURE__*/React__default.createElement("option", {
    value: "967"
  }, "Yemen +967"))), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_phone-input"
  }, /*#__PURE__*/React__default.createElement("input", {
    type: "number",
    id: "phone",
    name: "userphone",
    className: "swirl_ssv_phone",
    onChange: handleInputChange,
    placeholder: "Enter phone number",
    required: true
  }))), /*#__PURE__*/React__default.createElement("button", {
    className: "swirl_ssv_register_btn",
    style: {
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn
    }
  }, "Register")))), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_popup",
    style: {
      position: "absolute",
      top: "20%",
      width: "100%"
    }
  }, /*#__PURE__*/React__default.createElement(ErrorBox, {
    swirlSettings: swirlSettings,
    setIsVisibleMsg: setIsVisibleMsg,
    isVisibleMsg: isVisibleMsg,
    errorMessage: errorMessage,
    setErrorMessage: setErrorMessage
  })), thisVideo.product.length > 0 ? /*#__PURE__*/React__default.createElement("div", {
    ref: productDrawerRef,
    style: {
      height: productDetalDrawer ? "360px" : "0px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      backgroundColor: "rgb(255,255,255)",
      zIndex: "10000000",
      position: "absolute",
      bottom: "0",
      left: "0",
      right: "0",
      transition: "height 0.3s ease, max-height 3s ease"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      borderBottom: "1px solid #eee",
      padding: "10px",
      cursor: "pointer"
    },
    onClick: function onClick() {
      handleProductDetailDrawer();
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/previous-arrow.webp",
    alt: "product",
    className: "swirl_ssv_down_arrow"
  })), /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: "auto",
      overflow: "auto",
      maxHeight: "400px",
      overflowX: "auto"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex",
      padding: "10px",
      borderBottom: "1px solid #eee"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_col_1",
    style: {
      width: "80px"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: productData.image,
    style: {
      border: "1px solid #aaa"
    },
    alt: "product",
    className: "swirl_ssv_product_img_ssv swirl_ssv_prduct_on_right"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_col_2",
    style: {
      width: "calc(90% - 80px)",
      padding: "0px 5px"
    }
  }, /*#__PURE__*/React__default.createElement("p", {
    style: {
      fontWeight: "bold",
      fontSize: "15px",
      color: "black",
      textWrap: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap"
    }
  }, sliceString(productData.title, 100)), swirlSettings.product_price_status === 1 ? /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center"
    }
  }, productData.discount_price === productData.price ? /*#__PURE__*/React__default.createElement("p", {
    style: {
      fontWeight: "bold",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
      fontSize: "15px",
      margin: "0"
    }
  }, productData.currencySymbol, productData.price) : /*#__PURE__*/React__default.createElement("p", {
    style: {
      margin: "0"
    }
  }, " ", /*#__PURE__*/React__default.createElement("span", {
    style: {
      fontWeight: "bold",
      marginRight: "5px",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
      fontSize: "15px",
      margin: "0"
    }
  }, productData.currencySymbol, productData.discount_price), " ", /*#__PURE__*/React__default.createElement("del", {
    style: {
      fontWeight: "200",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
      fontSize: "15px",
      margin: "0"
    }
  }, productData.currencySymbol, productData.price)), productData.discount_price === productData.price ? /*#__PURE__*/React__default.createElement("p", {
    style: {
      textAlign: "center",
      visibility: "hidden",
      fontSize: "15px",
      margin: "0"
    }
  }, countPercentage(), " OFF") : /*#__PURE__*/React__default.createElement("span", {
    className: "swirl_ssv_discount_percent_badge ",
    id: "swirl_ssv_discount_percent_badge_sm",
    style: {
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_bk_color,
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_fk_color,
      fontSize: "13px",
      margin: "0"
    }
  }, countPercentage(), " OFF"))) : ""), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_col_3 heart_btn",
    style: {
      width: "10%",
      display: "grid",
      placeItems: "center"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick() {
      if (checkInWishListOrNo.status) {
        var _checkInWishListOrNo$;
        removeFromWatchList(checkInWishListOrNo === null || checkInWishListOrNo === void 0 ? void 0 : (_checkInWishListOrNo$ = checkInWishListOrNo.obj) === null || _checkInWishListOrNo$ === void 0 ? void 0 : _checkInWishListOrNo$.id);
      } else {
        if (cart !== null && cart !== void 0 && cart.token) {
          addToWatchListClicked2(productData === null || productData === void 0 ? void 0 : productData.sku_code);
        } else {
          onClose();
          addToWatchListClicked2(productData === null || productData === void 0 ? void 0 : productData.sku_code);
        }
      }
    }
  }, !checkInWishListOrNo.status ? /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    fill: "#000",
    viewBox: "0 0 256 256"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z",
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  })) : /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    fill: "#000",
    viewBox: "0 0 256 256"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z",
    fill: "red",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  }))))), /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
    style: {
      margin: "0",
      color: "#000",
      fontWeight: "600",
      padding: "10px",
      fontSize: "18px"
    }
  }, "Product Details"), /*#__PURE__*/React__default.createElement("p", {
    style: {
      margin: "0",
      color: "#000",
      fontSize: "14px",
      padding: "10px"
    }
  }, " ", productData.desription)), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_quantity_section",
    style: {
      border: "1px solid #eee",
      display: "flex",
      width: "100%",
      alignItems: "center",
      margin: "0",
      padding: "10px",
      alignContent: "space-between"
    }
  }, /*#__PURE__*/React__default.createElement("p", {
    style: {
      fontSize: "18px",
      color: "#000",
      margin: "0",
      display: "flex"
    }
  }, "Choose Quantity"), /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      marginRight: "10px"
    }
  }, /*#__PURE__*/React__default.createElement("button", {
    style: {
      padding: "10px 20px",
      outline: "none",
      border: "none",
      cursor: "pointer"
    },
    disabled: quantityForAddToCart === 1 ? true : false,
    onClick: function onClick() {
      return handleQuantity("decrease");
    }
  }, "-"), /*#__PURE__*/React__default.createElement("input", {
    className: "swirl_ssv_quantity_section_input",
    value: quantityForAddToCart,
    disabled: true
  }), /*#__PURE__*/React__default.createElement("button", {
    style: {
      padding: "10px 19px",
      outline: "none",
      border: "none",
      cursor: "pointer"
    },
    disabled: quantityForAddToCart === 20 ? true : false,
    onClick: function onClick() {
      return handleQuantity("increase");
    }
  }, "+")))), /*#__PURE__*/React__default.createElement("div", {
    style: {
      padding: "10px"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex",
      paddingTop: "1px",
      width: "100%",
      alignItems: "center"
    }
  }, (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.add_to_cart) === 1 ? /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick() {
      setLoadingbtnId("1");
      setLoadingCart(true);
      addTocartClicked2(productData === null || productData === void 0 ? void 0 : productData.sku_code, 1);
      CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, productData.product_id, thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id, "2");
    },
    style: {
      width: "100%",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_add_to_cart_btn,
      border: "1px solid " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_add_to_cart_btn),
      borderRadius: "5px",
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_add_to_cart_btn,
      fontSize: "15px",
      padding: "4px"
    }
  }, /*#__PURE__*/React__default.createElement(CartBtnLoadingComp, {
    preViousText: "Adding",
    btnId: "1",
    NextText: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.add_to_cart_btn,
    loadingCart: loadingCart,
    setLoadingCart: setLoadingCart,
    loadingbtnId: loadingbtnId,
    setLoadingbtnId: setLoadingbtnId
  })) : "", (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.buy_now) === 1 ? /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick() {
      CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, productData.product_id, thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id, "1");
      if (dataWs === "1") {
        var addToCartEvent = new CustomEvent('ADDED_TO_CART', {
          detail: {
            sku: productData === null || productData === void 0 ? void 0 : productData.sku_code,
            quantity: quantityForAddToCart,
            buynow: true
          }
        });
        window.dispatchEvent(addToCartEvent);
        enableScrollssv();
      } else {
        onClose();
        window.open(productData === null || productData === void 0 ? void 0 : productData.url);
      }
    },
    style: {
      width: "100%",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn,
      border: "1px solid " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn),
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
      borderRadius: "5px",
      marginLeft: "3px",
      fontSize: "15px",
      padding: "4px"
    }
  }, swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.buy_btn) : "", swirlSettings.add_to_cart === 1 ? /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick() {
      window.open("/" + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.cust_cart_redirection_link), "_blank");
    },
    style: {
      border: "1px solid #aaa",
      padding: "3px 5px",
      borderRadius: "5px",
      margin: "5px",
      cursor: "pointer",
      backgroundColor: "#fff"
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_cart_img",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/cart-icon.webp",
    height: 26,
    alt: "cart_icon"
  })), /*#__PURE__*/React__default.createElement("span", {
    className: "swirl_ssv_badge_add_to_cart",
    style: {
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
      position: "absolute",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn,
      marginTop: "-45px",
      marginLeft: "18px",
      width: "20px",
      height: "20px",
      textAlign: "center",
      borderRadius: "50%",
      fontSize: "12px",
      display: "grid",
      placeItems: "center"
    }
  }, quantity ? quantity : "0")) : ""))) : "", /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: windowWidth < 833 && thisVideo.product.length > 0 ? "block" : "none"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      height: "107px",
      width: "95%",
      padding: "15px",
      backgroundColor: "rgb(255,255,255,.8)",
      borderRadius: "10px",
      position: "absolute",
      bottom: "15px",
      willChange: "transform",
      left: "0",
      right: "0",
      margin: "auto"
    }
  }, /*#__PURE__*/React__default.createElement(Slider, settings3, thisVideo === null || thisVideo === void 0 ? void 0 : (_thisVideo$product2 = thisVideo.product) === null || _thisVideo$product2 === void 0 ? void 0 : _thisVideo$product2.map(function (el, index) {
    var currencySymbol = new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: el.currencyname
    }).formatToParts(0).find(function (part) {
      return part.type === "currency";
    }).value;
    return /*#__PURE__*/React__default.createElement("div", {
      key: index
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        display: "flex"
      },
      ref: productRef
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_product_section_col1",
      style: {
        width: "75px"
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      src: el.image,
      alt: "product",
      style: {
        height: "75px",
        width: "75px",
        borderRadius: "8px",
        border: "1px solid #aaa",
        cursor: "pointer"
      },
      onClick: function onClick() {
        handleProductDetailDrawer();
        setProductData(_extends({}, el, {
          currencySymbol: currencySymbol
        }));
      }
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_product_section_col2",
      style: {
        width: "calc(100% - 75px)"
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        padding: "0px 10px",
        width: "100%"
      }
    }, /*#__PURE__*/React__default.createElement("p", {
      style: {
        margin: "0",
        color: "#323232",
        whiteSpace: "nowrap",
        textAlign: "left",
        textOverflow: "ellipsis",
        overflow: "hidden",
        lineHeight: "21px",
        fontWeight: "700",
        fontSize: "16px",
        cursor: "pointer"
      },
      onClick: function onClick() {
        handleProductDetailDrawer();
        setProductData(_extends({}, el, {
          currencySymbol: currencySymbol
        }));
      }
    }, sliceString(el.title, 100)), /*#__PURE__*/React__default.createElement("p", {
      style: {
        margin: "0",
        fontSize: "12px",
        color: "#323232",
        padding: "1px 0px",
        textAlign: "left",
        display: "flex"
      }
    }, el.discount_price === el.price ? /*#__PURE__*/React__default.createElement("p", {
      style: {
        fontWeight: "bold",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
        fontSize: "15px",
        margin: "0"
      }
    }, currencySymbol, el.price) : /*#__PURE__*/React__default.createElement("p", {
      style: {
        margin: "0"
      }
    }, " ", /*#__PURE__*/React__default.createElement("span", {
      style: {
        fontWeight: "bold",
        marginRight: "5px",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
        fontSize: "15px",
        margin: "0"
      }
    }, currencySymbol, el.discount_price), " ", /*#__PURE__*/React__default.createElement("del", {
      style: {
        fontWeight: "200",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
        fontSize: "15px",
        margin: "0"
      }
    }, currencySymbol, el.price)), el.discount_price === el.price ? /*#__PURE__*/React__default.createElement("p", {
      style: {
        textAlign: "center",
        visibility: "hidden",
        fontSize: "15px",
        margin: "0",
        marginLeft: "5px"
      }
    }, countPercentage(), " OFF") : /*#__PURE__*/React__default.createElement("span", {
      style: {
        backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_bk_color,
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_fk_color,
        fontSize: "9px",
        padding: "4px 3px",
        borderRadius: "8px",
        margin: "0 0 2px 5px",
        marginLeft: "5px"
      }
    }, countPercentage(), " OFF")), /*#__PURE__*/React__default.createElement("div", {
      style: {
        display: "flex",
        paddingTop: "1px",
        width: "100%"
      }
    }, swirlSettings.add_to_cart === 1 ? /*#__PURE__*/React__default.createElement("button", {
      onClick: function onClick() {
        setLoadingbtnId("2");
        setLoadingCart(true);
        addTocartClicked2(el === null || el === void 0 ? void 0 : el.sku_code, 1);
        CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, el.product_id, thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id, "2");
      },
      className: "swirl_ssv_add_to_cart_btn_ssv",
      style: {
        width: "100%",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_add_to_cart_btn,
        border: "1px solid " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_add_to_cart_btn)
      }
    }, /*#__PURE__*/React__default.createElement(CartBtnLoadingComp, {
      preViousText: "Adding",
      btnId: "2",
      NextText: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.add_to_cart_btn,
      loadingCart: loadingCart,
      setLoadingCart: setLoadingCart,
      loadingbtnId: loadingbtnId,
      setLoadingbtnId: setLoadingbtnId
    })) : "", swirlSettings.buy_now === 1 ? /*#__PURE__*/React__default.createElement("button", {
      onClick: function onClick() {
        CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, el.product_id, thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.video_id, "1");
        if (dataWs === "1") {
          var addToCartEvent = new CustomEvent('ADDED_TO_CART', {
            detail: {
              sku: el === null || el === void 0 ? void 0 : el.sku_code,
              quantity: quantityForAddToCart,
              buynow: true
            }
          });
          window.dispatchEvent(addToCartEvent);
          enableScrollssv();
        } else {
          onClose();
          window.open(el === null || el === void 0 ? void 0 : el.url);
        }
      },
      className: "swirl_ssv_buy_btn_ssv",
      style: {
        width: "100%",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn,
        border: "1px solid " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn),
        backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn
      }
    }, swirlSettings.buy_btn) : "")))));
  }))))));
};
var ProductDescComp = function ProductDescComp(_ref5) {
  var _el$product$, _el$product$2, _el$product$3, _el$product$4;
  var swirlSettings = _ref5.swirlSettings,
    descriptionData = _ref5.descriptionData,
    el = _ref5.el,
    addToWatchListClicked = _ref5.addToWatchListClicked,
    removeFromWatchList = _ref5.removeFromWatchList,
    video = _ref5.video,
    CTAClicksssv = _ref5.CTAClicksssv,
    addTocartClicked = _ref5.addTocartClicked,
    quantityForAddToCart = _ref5.quantityForAddToCart,
    quantity = _ref5.quantity,
    handleQuantity = _ref5.handleQuantity,
    onClose = _ref5.onClose,
    loadingCart = _ref5.loadingCart,
    setLoadingCart = _ref5.setLoadingCart,
    loadingbtnId = _ref5.loadingbtnId,
    setLoadingbtnId = _ref5.setLoadingbtnId,
    wishlistData = _ref5.wishlistData,
    cart = _ref5.cart,
    dataWs = _ref5.dataWs;
  var checkInWishListOrNo = checkInWishListOrNot(wishlistData, el === null || el === void 0 ? void 0 : el.product[0].sku_code);
  var countPercentage = function countPercentage() {
    var actualPrice = el.product[0].price;
    var discountedPrice = el.product[0].discount_price;
    if (actualPrice > 0 && discountedPrice > 0) {
      var discountPercentage = Math.round((actualPrice - discountedPrice) / actualPrice * 100);
      return discountPercentage + "%";
    } else {
      return "Invalid prices";
    }
  };
  return /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_right_column_main",
    style: {
      paddingTop: "4px",
      display: "flex",
      flexDirection: "column",
      height: "90vh",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_product_tile_ssv",
    style: {
      flexGrow: 0,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    style: {
      width: "75px"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: el === null || el === void 0 ? void 0 : (_el$product$ = el.product[0]) === null || _el$product$ === void 0 ? void 0 : _el$product$.image,
    alt: "product",
    style: {
      border: "1px solid #aaa"
    },
    className: "swirl_ssv_product_img_ssv swirl_ssv_prduct_on_right"
  })), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_product_info_tile_ssv",
    style: {
      width: "calc(90% - 75px)"
    }
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_title_product_desc",
    style: {
      textWrap: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, sliceString(el.product[0].title, 200)), swirlSettings.product_price_status === 1 ? /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_product_price",
    style: {
      display: "flex"
    }
  }, el.product[0].discount_price === el.product[0].price ? /*#__PURE__*/React__default.createElement("p", {
    style: {
      fontWeight: "bold",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
      fontSize: "15px",
      margin: "0"
    }
  }, new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: (_el$product$2 = el.product[0]) === null || _el$product$2 === void 0 ? void 0 : _el$product$2.currencyname
  }).formatToParts(0).find(function (part) {
    return part.type === "currency";
  }).value, el.product[0].price) : /*#__PURE__*/React__default.createElement("p", {
    style: {
      margin: "0"
    }
  }, " ", /*#__PURE__*/React__default.createElement("span", {
    style: {
      fontWeight: "bold",
      marginRight: "5px",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
      fontSize: "15px",
      margin: "0"
    }
  }, new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: (_el$product$3 = el.product[0]) === null || _el$product$3 === void 0 ? void 0 : _el$product$3.currencyname
  }).formatToParts(0).find(function (part) {
    return part.type === "currency";
  }).value, el.product[0].discount_price), " ", /*#__PURE__*/React__default.createElement("del", {
    style: {
      fontWeight: "200",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
      fontSize: "15px",
      margin: "0"
    }
  }, new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: (_el$product$4 = el.product[0]) === null || _el$product$4 === void 0 ? void 0 : _el$product$4.currencyname
  }).formatToParts(0).find(function (part) {
    return part.type === "currency";
  }).value, el.product[0].price)), el.product[0].discount_price === el.product[0].price ? /*#__PURE__*/React__default.createElement("p", {
    style: {
      textAlign: "center",
      visibility: "hidden",
      fontSize: "15px",
      margin: "0"
    }
  }, countPercentage(), " OFF") : /*#__PURE__*/React__default.createElement("span", {
    className: "swirl_ssv_discount_percent_badge",
    style: {
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_bk_color,
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_fk_color,
      fontSize: "13px",
      margin: "0"
    }
  }, countPercentage(), " OFF")) : ""), /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginLeft: "auto",
      height: "auto",
      width: "10%",
      cursor: "pointer"
    },
    title: "Add to wishlist",
    className: "swirl_ssv_heart_icon heart_btn ",
    onClick: function onClick() {
      if (checkInWishListOrNo.status) {
        var _checkInWishListOrNo$2;
        removeFromWatchList(checkInWishListOrNo === null || checkInWishListOrNo === void 0 ? void 0 : (_checkInWishListOrNo$2 = checkInWishListOrNo.obj) === null || _checkInWishListOrNo$2 === void 0 ? void 0 : _checkInWishListOrNo$2.id);
      } else {
        if (cart !== null && cart !== void 0 && cart.token) {
          addToWatchListClicked(descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code, 1);
        } else {
          onClose();
          addToWatchListClicked(descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code, 1);
        }
      }
      CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.product_id, video === null || video === void 0 ? void 0 : video.video_id, "2");
    }
  }, !checkInWishListOrNo.status ? /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    fill: "#000",
    viewBox: "0 0 256 256"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z",
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  })) : /*#__PURE__*/React__default.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "28",
    height: "28",
    fill: "#000",
    viewBox: "0 0 256 256"
  }, /*#__PURE__*/React__default.createElement("rect", {
    width: "256",
    height: "256",
    fill: "none"
  }), /*#__PURE__*/React__default.createElement("path", {
    d: "M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z",
    fill: "red",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "8"
  })))), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_description_product",
    style: {
      flexGrow: 1,
      marginTop: "-30px"
    }
  }, /*#__PURE__*/React__default.createElement("h3", null, "Product Description"), /*#__PURE__*/React__default.createElement("p", {
    style: {
      marginTop: "-15px"
    }
  }, " ", sliceString(el.product[0].desription, 250)), /*#__PURE__*/React__default.createElement("div", {
    className: "swirl_ssv_quantity_section",
    style: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      alignContent: "space-between"
    }
  }, /*#__PURE__*/React__default.createElement("p", {
    style: {
      fontWeight: "bold"
    }
  }, "Choose Quantity"), /*#__PURE__*/React__default.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      marginRight: "10px"
    }
  }, /*#__PURE__*/React__default.createElement("button", {
    style: {
      padding: "10px 20px",
      outline: "none",
      border: "none",
      cursor: "pointer"
    },
    disabled: quantityForAddToCart === 1 ? true : false,
    onClick: function onClick() {
      return handleQuantity("decrease", el === null || el === void 0 ? void 0 : el.product[0].sku_code);
    }
  }, "-"), /*#__PURE__*/React__default.createElement("input", {
    className: "swirl_ssv_quantity_section_input",
    disabled: true,
    value: quantityForAddToCart
  }), /*#__PURE__*/React__default.createElement("button", {
    style: {
      padding: "10px 20px",
      outline: "none",
      border: "none",
      cursor: "pointer"
    },
    disabled: quantityForAddToCart === 20 ? true : false,
    onClick: function onClick() {
      return handleQuantity("increase", el === null || el === void 0 ? void 0 : el.product[0].sku_code);
    }
  }, "+")))), /*#__PURE__*/React__default.createElement("div", {
    style: {
      display: "flex",
      width: "100%",
      marginBottom: "5px"
    }
  }, swirlSettings.add_to_cart === 1 ? /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick() {
      setLoadingbtnId("3");
      setLoadingCart(true);
      addTocartClicked(el === null || el === void 0 ? void 0 : el.product[0].sku_code, 1);
      CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, el === null || el === void 0 ? void 0 : el.product[0].product_id, video === null || video === void 0 ? void 0 : video.video_id, "2");
    },
    style: {
      width: "100%",
      margin: "5px",
      borderRadius: "5px",
      cursor: "pointer",
      backgroundColor: "#fff",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_add_to_cart_btn,
      border: "1px solid " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_add_to_cart_btn)
    }
  }, /*#__PURE__*/React__default.createElement(CartBtnLoadingComp, {
    preViousText: "Adding",
    btnId: "3",
    NextText: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.add_to_cart_btn,
    loadingCart: loadingCart,
    setLoadingCart: setLoadingCart,
    loadingbtnId: loadingbtnId,
    setLoadingbtnId: setLoadingbtnId
  })) : "", swirlSettings.buy_now === 1 ? /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick() {
      CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, el === null || el === void 0 ? void 0 : el.product[0].product_id, video === null || video === void 0 ? void 0 : video.video_id, "1");
      if (dataWs === "1") {
        var _el$product$5;
        var addToCartEvent = new CustomEvent('ADDED_TO_CART', {
          detail: {
            sku: el === null || el === void 0 ? void 0 : (_el$product$5 = el.product[0]) === null || _el$product$5 === void 0 ? void 0 : _el$product$5.sku_code,
            quantity: quantityForAddToCart,
            buynow: true
          }
        });
        window.dispatchEvent(addToCartEvent);
        enableScrollssv();
      } else {
        var _el$product$6;
        onClose();
        window.open(el === null || el === void 0 ? void 0 : (_el$product$6 = el.product[0]) === null || _el$product$6 === void 0 ? void 0 : _el$product$6.url);
      }
    },
    style: {
      width: "100%",
      margin: "5px",
      borderRadius: "5px",
      cursor: "pointer",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn,
      border: "1px solid " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn),
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
      padding: "10px"
    }
  }, swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.buy_btn) : "", /*#__PURE__*/React__default.createElement("div", {
    title: "Add to Watchlist",
    onClick: function onClick() {
      if (checkInWishListOrNo.status) {
        var _checkInWishListOrNo$3;
        removeFromWatchList(checkInWishListOrNo === null || checkInWishListOrNo === void 0 ? void 0 : (_checkInWishListOrNo$3 = checkInWishListOrNo.obj) === null || _checkInWishListOrNo$3 === void 0 ? void 0 : _checkInWishListOrNo$3.id);
      } else {
        if (cart !== null && cart !== void 0 && cart.token) {
          addToWatchListClicked(el === null || el === void 0 ? void 0 : el.sku_code, 1);
        } else {
          onClose();
          addToWatchListClicked(el === null || el === void 0 ? void 0 : el.sku_code, 1);
        }
      }
      CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, el === null || el === void 0 ? void 0 : el.product[0].product_id, video === null || video === void 0 ? void 0 : video.video_id, "2");
    },
    style: {
      border: "1px solid #aaa",
      padding: "5px 8px",
      borderRadius: "5px",
      margin: "5px",
      cursor: "pointer",
      backgroundColor: "#fff",
      display: "none"
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
    alt: "Playlist",
    width: "32",
    height: "32",
    src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/playlist-1654818-1407587.png?f=webp"
  }))), swirlSettings.add_to_cart === 1 ? /*#__PURE__*/React__default.createElement("div", {
    onClick: function onClick() {
      onClose();
      window.open("/" + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.cust_cart_redirection_link), "_blank");
    },
    style: {
      border: "1px solid #aaa",
      padding: "5px 8px",
      borderRadius: "5px",
      margin: "5px",
      cursor: "pointer",
      backgroundColor: "#fff"
    }
  }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
    className: "swirl_ssv_cart_img",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/cart-icon.webp",
    height: 26,
    alt: "cart_icon"
  })), /*#__PURE__*/React__default.createElement("span", {
    className: "swirl_ssv_badge_add_to_cart",
    style: {
      backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
      position: "absolute",
      color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn,
      marginTop: "-45px",
      marginLeft: "18px",
      width: "20px",
      height: "20px",
      textAlign: "center",
      borderRadius: "50%",
      fontSize: "12px",
      display: "grid",
      placeItems: "center"
    }
  }, quantity ? quantity : "0")) : ""));
};
var PipComp = function PipComp(_ref6) {
  var pipDisPlay = _ref6.pipDisPlay,
    setPipDisplay = _ref6.setPipDisplay,
    videoData = _ref6.videoData,
    handleClick = _ref6.handleClick,
    index = _ref6.index;
  var _useState14 = React.useState(true),
    muted = _useState14[0],
    setMuted = _useState14[1];
  var _useState15 = React.useState(false),
    showControls = _useState15[0],
    setShowControls = _useState15[1];
  var _useState16 = React.useState(true),
    isPlaying = _useState16[0],
    setIsPlaying = _useState16[1];
  var videoRef = React.useRef(null);
  React.useEffect(function () {
    if (videoRef.current && videoRef.current.paused && pipDisPlay) {
      var _videoRef$current3;
      (_videoRef$current3 = videoRef.current) === null || _videoRef$current3 === void 0 ? void 0 : _videoRef$current3.play();
    }
  }, [videoRef, pipDisPlay]);
  var handleMuteUnmute = function handleMuteUnmute() {
    var video = videoRef.current;
    if (video) {
      video.muted = !muted;
      setMuted(function (prevState) {
        return !prevState;
      });
    }
  };
  var togglePlayPause = function togglePlayPause() {
    var video = videoRef === null || videoRef === void 0 ? void 0 : videoRef.current;
    if (video) {
      if (isPlaying) {
        video === null || video === void 0 ? void 0 : video.pause();
      } else {
        video === null || video === void 0 ? void 0 : video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  var showPipControls = function showPipControls() {
    setShowControls(true);
    setTimeout(function () {
      setShowControls(false);
    }, 3000);
  };
  return /*#__PURE__*/React__default.createElement("div", {
    id: "pip-container"
  }, /*#__PURE__*/React__default.createElement("div", {
    className: "video-pip-ssv",
    style: {
      display: "block"
    },
    onMouseEnter: showPipControls,
    onMouseLeave: function onMouseLeave() {
      return setShowControls(false);
    }
  }, /*#__PURE__*/React__default.createElement("video", {
    ref: videoRef,
    preload: "metadata",
    loop: true,
    playsInline: true,
    onmouseover: "showPipControls();",
    autoPlay: true,
    id: "swirl_ssv_pip_video",
    poster: videoData === null || videoData === void 0 ? void 0 : videoData.cover_image,
    muted: true
  }, /*#__PURE__*/React__default.createElement("source", {
    src: videoData === null || videoData === void 0 ? void 0 : videoData.server_url,
    type: "video/mp4"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "video-pip-playpause-ssv",
    title: "Play/Pause",
    onClick: togglePlayPause,
    onMouseEnter: showPipControls,
    style: {
      opacity: showControls ? 1 : 0,
      transition: "opacity 0.5s ease",
      position: "absolute",
      bottom: 0,
      right: 0,
      padding: "10px",
      borderRadius: "5px",
      background: "rgb(0, 0, 0, .6) !important"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    src: isPlaying ? "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/pause.webp" : "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/play.webp",
    alt: "Play/Pause icon"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "video-pip-volume-ssv pfs-ex-ssv",
    title: "Mute/Unmute",
    onClick: handleMuteUnmute,
    style: {
      background: "rgb(0, 0, 0, .6) !important"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "pfs-ex-ssv",
    src: muted ? "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/volume-mute-fill.webp" : "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/volume-up-fill.webp",
    alt: "Volume icon"
  })), /*#__PURE__*/React__default.createElement("button", {
    className: "video-pip-close-ssv pfs-ex-ssv",
    title: "Close",
    onClick: function onClick() {
      setPipDisplay(false);
      localStorage.removeItem("_pip_video_data");
    },
    style: {
      background: "rgb(0, 0, 0, .6) !important"
    }
  }, /*#__PURE__*/React__default.createElement("img", {
    className: "pfs-ex-ssv",
    src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/close.webp",
    alt: "Close icon"
  })), /*#__PURE__*/React__default.createElement("button", {
    onClick: function onClick() {
      return handleClick(index);
    },
    className: "video-pip-fullscreen-ssv",
    title: "Full Screen",
    style: {
      border: "2.5px solid #fff !important"
    }
  })));
};
var SwirlShortVideos = function SwirlShortVideos(_ref7) {
  var _swirlData$video, _swirlData$video4;
  var _ref7$dataCode = _ref7.dataCode,
    dataCode = _ref7$dataCode === void 0 ? "y04uwn5r" : _ref7$dataCode,
    _ref7$dataPlalistCode = _ref7.dataPlalistCode,
    dataPlalistCode = _ref7$dataPlalistCode === void 0 ? "Q9cZrn" : _ref7$dataPlalistCode,
    url = _ref7.url,
    dataWs = _ref7.dataWs,
    cart = _ref7.cart,
    _ref7$serverType = _ref7.serverType,
    serverType = _ref7$serverType === void 0 ? "development" : _ref7$serverType;
  var _useState17 = React.useState(false),
    show = _useState17[0],
    setShow = _useState17[1];
  var _useState18 = React.useState(0),
    active = _useState18[0],
    setActive = _useState18[1];
  var _useState19 = React.useState(false),
    descriptionOn = _useState19[0],
    setDescriptionOn = _useState19[1];
  var _useState20 = React.useState([]),
    swirlData = _useState20[0],
    setSwirlData = _useState20[1];
  var _useState21 = React.useState({}),
    descriptionData = _useState21[0],
    setDescriptionData = _useState21[1];
  var _useState22 = React.useState(0),
    quantity = _useState22[0],
    setQueantity = _useState22[1];
  var _useState23 = React.useState(1),
    quantityForAddToCart = _useState23[0],
    setQantityForAddToCart = _useState23[1];
  var _useState24 = React.useState(false),
    pipDisPlay = _useState24[0],
    setPipDisplay = _useState24[1];
  var _useState25 = React.useState(false),
    isVisibleMsg = _useState25[0],
    setIsVisibleMsg = _useState25[1];
  var _useState26 = React.useState("Something went wrong, Please try again!"),
    errorMessage = _useState26[0],
    setErrorMessage = _useState26[1];
  var _useState27 = React.useState(window.innerWidth),
    windowWidth = _useState27[0],
    setWindowWidth = _useState27[1];
  var _useState28 = React.useState(false),
    loadingCart = _useState28[0],
    setLoadingCart = _useState28[1];
  var _useState29 = React.useState(true),
    swipeStatus = _useState29[0],
    setSwipeStatus = _useState29[1];
  var _useState30 = React.useState(null),
    loadingbtnId = _useState30[0],
    setLoadingbtnId = _useState30[1];
  var _useState31 = React.useState(window.innerHeight),
    innerHeight = _useState31[0],
    setInnerHeight = _useState31[1];
  var _useState32 = React.useState([]),
    wishlistData = _useState32[0],
    setWiishlistData = _useState32[1];
  var _useState33 = React.useState([]),
    productStockData = _useState33[0],
    setProductStockData = _useState33[1];
  var checkInWishListOrNo = checkInWishListOrNot(wishlistData, descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code);
  var sliderRef = React.useRef(null);
  var handleNextSlide = function handleNextSlide() {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  var handlePreviousSlide = function handlePreviousSlide() {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  var handleClick = React.useCallback(function (index) {
    setActive(index);
    setTimeout(function () {
      setShow(true);
    }, 100);
    setPipDisplay(false);
    localStorage.removeItem("_pip_video_data");
    disableScrollssv();
  }, [setActive, setShow, setPipDisplay]);
  React.useEffect(function () {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(active);
    }
  }, [active]);
  var getDataFunc = React.useCallback(function () {
    try {
      var _temp11 = _catch(function () {
        return Promise.resolve(axios.get("https://api.goswirl.live/index.php/ShortVideo/videolistingV5?user=" + dataCode + "&playlist=" + dataPlalistCode + "&url=" + url).then(function (res) {
          var _res$data;
          var data = res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.swilrs;
          if (data) {
            setSwirlData(data);
            setTimeout(function () {
              var queryString = window.location.search;
              var queryParams = new URLSearchParams(queryString);
              var swirlVideoParam = queryParams.get("swirl_video");
              var findIndexByVideoId = function findIndexByVideoId(videoId) {
                var _data$video;
                return data === null || data === void 0 ? void 0 : (_data$video = data.video) === null || _data$video === void 0 ? void 0 : _data$video.findIndex(function (obj) {
                  return obj.video_id === videoId;
                });
              };
              var decodedID = window.atob(swirlVideoParam);
              var ind = findIndexByVideoId("" + decodedID);
              if (swirlVideoParam) {
                var scrollToElementById = function scrollToElementById(id) {
                  var element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth"
                    });
                  }
                };
                scrollToElementById("swirl_section_main_div");
                handleClick(ind);
                var _url = new URL(window.location.href);
                _url.searchParams["delete"]("swirl_video");
                window.history.replaceState({}, document.title, _url.toString());
              }
            }, 500);
          }
        })).then(function () {});
      }, function (error) {
        console.log(error);
      });
      return Promise.resolve(_temp11 && _temp11.then ? _temp11.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  }, [dataCode, dataPlalistCode, url, handleClick]);
  var settings = {
    dots: false,
    slidesToShow: windowWidth < 576 ? 2 : windowWidth < 800 ? 3 : windowWidth < 1300 ? 4 : 5,
    slidesToScroll: 1,
    infinite: false,
    initialSlide: 0,
    adaptiveHeight: true,
    prevArrow: /*#__PURE__*/React__default.createElement(SamplePrevArrow, null),
    nextArrow: /*#__PURE__*/React__default.createElement(SampleNextArrow, null)
  };
  var playNextSlideAndPausePrevious = function playNextSlideAndPausePrevious(current, next) {
    var videos = document.getElementsByClassName("swirl_ssv_video_div");
    var thisVideo = videos[next];
    var previosVideo = videos[current];
    if (thisVideo && !thisVideo.paused) {
      thisVideo.pause();
    } else {
      if (thisVideo) {
        thisVideo === null || thisVideo === void 0 ? void 0 : thisVideo.play();
      }
    }
    if (previosVideo && !previosVideo.paused) {
      previosVideo === null || previosVideo === void 0 ? void 0 : previosVideo.pause();
    } else {
      if (previosVideo) {
        previosVideo === null || previosVideo === void 0 ? void 0 : previosVideo.play();
      }
    }
  };
  var settings2 = {
    swipe: swipeStatus,
    dots: false,
    slidesToShow: 1,
    speed: !show ? 0 : 600,
    slidesToScroll: 1,
    infinite: false,
    initialSlide: active,
    touchMove: true,
    fade: !show ? true : false,
    autoPlay: false,
    adaptiveHeight: true,
    prevArrow: /*#__PURE__*/React__default.createElement(SamplePrevArrowForModal, null),
    nextArrow: /*#__PURE__*/React__default.createElement(SampleNextArrowForModal, null),
    vertical: windowWidth > 833 ? false : true,
    verticalSwiping: windowWidth > 833 ? false : true,
    beforeChange: function beforeChange(current, next) {
      playNextSlideAndPausePrevious(current, next);
      setDescriptionOn(false);
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    },
    afterChange: function afterChange(current) {
      setQantityForAddToCart(1);
      if (sliderRef.current) {
        sliderRef.current.slickPause();
      }
    }
  };
  var handleResize = function handleResize() {
    setWindowWidth(window.innerWidth);
  };
  React.useEffect(function () {
    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  var onClose = function onClose() {
    setShow(false);
    enableScrollssv();
    setDescriptionOn(false);
    setQantityForAddToCart(1);
  };
  React.useEffect(function () {
    getDataFunc();
    localStorage.removeItem("_pip_video_data");
  }, [getDataFunc, windowWidth]);
  var swirlSettings = swirlData === null || swirlData === void 0 ? void 0 : swirlData.data;
  var getAvailabiityCheck = React.useCallback(function (skuCode) {
    try {
      return Promise.resolve(function () {
        if (dataWs === "0") {
          var graphqlEndpoint = serverType === "production" ? "https://mcprod.glamourbook.com/graphql" : "https://mcstaging.glamourbook.com/graphql";
          var graphqlQuery = "\n            {\n              products(filter: { sku: { eq: \"" + skuCode + "\" } }) {\n                items {\n                  sku\n                  product_quatity\n                  stock_status\n                }\n              }\n            }\n          ";
          var fetchOptions = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              query: graphqlQuery
            })
          };
          return _catch(function () {
            return Promise.resolve(fetch(graphqlEndpoint, fetchOptions)).then(function (response) {
              return Promise.resolve(response.json()).then(function (data) {
                var items = data.data.products.items;
                if (items.length > 0) {
                  var status = items[0].stock_status;
                  var availabilityQuant = items[0].product_quatity;
                  return status === "OUT_OF_STOCK" ? {
                    status: "outofstock",
                    availableQuantity: availabilityQuant
                  } : {
                    status: "instock",
                    availableQuantity: availabilityQuant
                  };
                } else {
                  return "outofstock";
                }
              });
            });
          }, function (error) {
            console.error(error);
            return "wrong";
          });
        }
      }());
    } catch (e) {
      return Promise.reject(e);
    }
  }, [dataWs, serverType]);
  var getWishlistDetails = React.useCallback(function () {
    try {
      return Promise.resolve(function () {
        if (dataWs === "0") {
          return _catch(function () {
            var _temp12 = function () {
              if (cart !== null && cart !== void 0 && cart.token) {
                var graphqlEndpoint = serverType === "production" ? "https://mcprod.glamourbook.com/graphql" : "https://mcstaging.glamourbook.com/graphql";
                var graphqlQuery = "\n                    query GetAllWishlist($currentPage: Int!, $pageSize: Int!) {\n                        customer {\n                          wishlists {\n                            id\n                            __typename\n                            items_count\n                            items_v2(currentPage: $currentPage, pageSize: $pageSize) {\n                              items {\n                                id\n                                product {\n                                  uid\n                                  sku\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }       \n                  ";
                var requestOptions = {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    authorization: cart !== null && cart !== void 0 && cart.token ? "Bearer " + (cart === null || cart === void 0 ? void 0 : cart.token) : " "
                  },
                  body: JSON.stringify({
                    query: graphqlQuery,
                    variables: {
                      currentPage: 1,
                      pageSize: 50
                    }
                  })
                };
                return Promise.resolve(fetch(graphqlEndpoint, requestOptions)).then(function (wishlistResults) {
                  return Promise.resolve(wishlistResults.json()).then(function (data) {
                    if (data) {
                      var _data$data, _data$data$customer;
                      if (data !== null && data !== void 0 && (_data$data = data.data) !== null && _data$data !== void 0 && (_data$data$customer = _data$data.customer) !== null && _data$data$customer !== void 0 && _data$data$customer.wishlists) {
                        var _data$data2, _data$data2$customer;
                        setWiishlistData(data === null || data === void 0 ? void 0 : (_data$data2 = data.data) === null || _data$data2 === void 0 ? void 0 : (_data$data2$customer = _data$data2.customer) === null || _data$data2$customer === void 0 ? void 0 : _data$data2$customer.wishlists[0].items_v2.items);
                      }
                    }
                  });
                });
              }
            }();
            if (_temp12 && _temp12.then) return _temp12.then(function () {});
          }, function (error) {
            console.error(error);
          });
        } else return function () {
          if (dataWs === "1") {
            return _catch(function () {
              var _temp13 = function () {
                if (cart !== null && cart !== void 0 && cart.token) {
                  var graphqlEndpoint = serverType === "production" ? "https://mcprod.glamourbook.com/graphql" : "https://mcstaging.glamourbook.com/graphql";
                  var graphqlQuery = "\n                    query GetAllWishlist($currentPage: Int!, $pageSize: Int!) {\n                        customer {\n                          wishlists {\n                            id\n                            __typename\n                            items_count\n                            items_v2(currentPage: $currentPage, pageSize: $pageSize) {\n                              items {\n                                id\n                                product {\n                                  uid\n                                  sku\n                                }\n                              }\n                            }\n                          }\n                        }\n                      }       \n                  ";
                  var requestOptions = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      authorization: cart !== null && cart !== void 0 && cart.token ? "Bearer " + (cart === null || cart === void 0 ? void 0 : cart.token) : " "
                    },
                    body: JSON.stringify({
                      query: graphqlQuery,
                      variables: {
                        currentPage: 1,
                        pageSize: 50
                      }
                    })
                  };
                  return Promise.resolve(fetch(graphqlEndpoint, requestOptions)).then(function (wishlistResults) {
                    return Promise.resolve(wishlistResults.json()).then(function (data) {
                      if (data) {
                        var _data$data3, _data$data3$customer;
                        if (data !== null && data !== void 0 && (_data$data3 = data.data) !== null && _data$data3 !== void 0 && (_data$data3$customer = _data$data3.customer) !== null && _data$data3$customer !== void 0 && _data$data3$customer.wishlists) {
                          var _data$data4, _data$data4$customer;
                          setWiishlistData(data === null || data === void 0 ? void 0 : (_data$data4 = data.data) === null || _data$data4 === void 0 ? void 0 : (_data$data4$customer = _data$data4.customer) === null || _data$data4$customer === void 0 ? void 0 : _data$data4$customer.wishlists[0].items_v2.items);
                        }
                      }
                    });
                  });
                }
              }();
              if (_temp13 && _temp13.then) return _temp13.then(function () {});
            }, function (error) {
              console.error(error);
            });
          } else {
            return _catch(function () {
              var _temp14 = function () {
                if (cart !== null && cart !== void 0 && cart.token) {
                  var graphqlEndpoint = serverType === "production" ? "https://mcprod.glamourbook.com/graphql" : "https://mcstaging.glamourbook.com/graphql";
                  var graphqlQuery = "\n                        query GetAllWishlist($currentPage: Int!, $pageSize: Int!) {\n                            customer {\n                              wishlists {\n                                id\n                                __typename\n                                items_count\n                                items_v2(currentPage: $currentPage, pageSize: $pageSize) {\n                                  items {\n                                    id\n                                    product {\n                                      uid\n                                      sku\n                                    }\n                                  }\n                                }\n                              }\n                            }\n                          }       \n                      ";
                  var requestOptions = {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                      authorization: cart !== null && cart !== void 0 && cart.token ? "Bearer " + (cart === null || cart === void 0 ? void 0 : cart.token) : " "
                    },
                    body: JSON.stringify({
                      query: graphqlQuery,
                      variables: {
                        currentPage: 1,
                        pageSize: 50
                      }
                    })
                  };
                  return Promise.resolve(fetch(graphqlEndpoint, requestOptions)).then(function (wishlistResults) {
                    return Promise.resolve(wishlistResults.json()).then(function (data) {
                      if (data) {
                        var _data$data5, _data$data5$customer;
                        if (data !== null && data !== void 0 && (_data$data5 = data.data) !== null && _data$data5 !== void 0 && (_data$data5$customer = _data$data5.customer) !== null && _data$data5$customer !== void 0 && _data$data5$customer.wishlists) {
                          var _data$data6, _data$data6$customer;
                          setWiishlistData(data === null || data === void 0 ? void 0 : (_data$data6 = data.data) === null || _data$data6 === void 0 ? void 0 : (_data$data6$customer = _data$data6.customer) === null || _data$data6$customer === void 0 ? void 0 : _data$data6$customer.wishlists[0].items_v2.items);
                        }
                      }
                    });
                  });
                }
              }();
              if (_temp14 && _temp14.then) return _temp14.then(function () {});
            }, function (error) {
              console.error(error);
            });
          }
        }();
      }());
    } catch (e) {
      return Promise.reject(e);
    }
  }, [cart === null || cart === void 0 ? void 0 : cart.token, dataWs, serverType]);
  var addTocartClicked = React.useCallback(function (skuCode, quantity) {
    try {
      var _temp18 = function () {
        if (dataWs === "0") {
          console.log("running for 0");
          var _temp15 = _catch(function () {
            return Promise.resolve(getAvailabiityCheck(skuCode)).then(function (isAvailable) {
              console.log("availability", isAvailable);
              if (isAvailable.status === "instock") {
                var event = new CustomEvent("ADDED_TO_CART", {
                  detail: JSON.stringify({
                    type: "SimpleProduct",
                    sku: skuCode,
                    qty: quantityForAddToCart
                  })
                });
                window.dispatchEvent(event);
                setTimeout(function () {
                  if ((cart === null || cart === void 0 ? void 0 : cart.status) === "rejected") {
                    setErrorMessage("" + (cart !== null && cart !== void 0 && cart.message ? cart === null || cart === void 0 ? void 0 : cart.message : "Something went wrong, Please try again!"));
                    setIsVisibleMsg(true);
                  } else {
                    setErrorMessage("Item added to Cart");
                    setIsVisibleMsg(true);
                  }
                }, 500);
              } else if (isAvailable.status === "outofstock") {
                setErrorMessage("This item is out of stock");
                setIsVisibleMsg(true);
              } else {
                setErrorMessage("Something went wrong, Please try again!");
                setIsVisibleMsg(true);
              }
            });
          }, function (error) {
            console.error("error", error);
            setErrorMessage("Something went wrong, Please try again!");
            setIsVisibleMsg(true);
          });
          if (_temp15 && _temp15.then) return _temp15.then(function () {});
        } else {
          var _temp19 = function () {
            if (dataWs === "1") {
              console.log("Logic running of add to cart for dataws1");
              try {
                console.log("skuCode", skuCode);
                console.log("quantity", quantityForAddToCart);
                var addToCartEvent = new CustomEvent('ADDED_TO_CART', {
                  detail: {
                    sku: skuCode,
                    quantity: quantityForAddToCart
                  }
                });
                window.dispatchEvent(addToCartEvent);
                console.log(addToCartEvent);
                setErrorMessage("Item added to cart");
                setIsVisibleMsg(true);
              } catch (error) {
                console.error("error", error);
                setErrorMessage("Something went wrong, Please try again!");
                setIsVisibleMsg(true);
              }
            } else {
              console.log("Logic running of add to cart for no dataws");
              var _temp16 = _catch(function () {
                return Promise.resolve(getAvailabiityCheck(skuCode)).then(function (isAvailable) {
                  if (isAvailable.status === "instock") {
                    var event = new CustomEvent("ADDED_TO_CART", {
                      detail: JSON.stringify({
                        type: "SimpleProduct",
                        sku: skuCode,
                        qty: quantityForAddToCart
                      })
                    });
                    window.dispatchEvent(event);
                    setErrorMessage("Item added to Cart");
                    setIsVisibleMsg(true);
                  } else if (isAvailable.status === "outofstock") {
                    setErrorMessage("This item is out of stock");
                    setIsVisibleMsg(true);
                  } else {
                    setErrorMessage("Something went wrong, Please try again!");
                    setIsVisibleMsg(true);
                  }
                });
              }, function (error) {
                console.error("error", error);
                setErrorMessage("Something went wrong, Please try again!");
                setIsVisibleMsg(true);
              });
              if (_temp16 && _temp16.then) return _temp16.then(function () {});
            }
          }();
          if (_temp19 && _temp19.then) return _temp19.then(function () {});
        }
      }();
      return Promise.resolve(_temp18 && _temp18.then ? _temp18.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  }, [quantityForAddToCart, dataWs, getAvailabiityCheck, cart]);
  React.useEffect(function () {
    var firstLoadFunc = function firstLoadFunc() {
      try {
        return Promise.resolve(getWishlistDetails()).then(function () {});
      } catch (e) {
        return Promise.reject(e);
      }
    };
    firstLoadFunc();
  }, [addTocartClicked, getWishlistDetails]);
  var removeFromWatchList = function removeFromWatchList(itemId) {
    if (dataWs === "0") {
      console.log("Logic running of remove wishlist for dataws 0");
      try {
        var event = new CustomEvent("REMOVED_FROM_WISHLIST", {
          detail: itemId
        });
        console.log(event);
        window.dispatchEvent(event);
        setErrorMessage("Item removed from wishlist");
        setIsVisibleMsg(true);
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    } else if (dataWs === "1") {
      console.log("Logic running of remove wishlist for dataws 0");
      try {
        var _event3 = new CustomEvent("REMOVED_FROM_WISHLIST", {
          detail: itemId
        });
        window.dispatchEvent(_event3);
        setErrorMessage("Item removed from wishlist");
        setIsVisibleMsg(true);
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    } else {
      console.log("Logic running of remove wishlist for dataws 0");
      try {
        var _event4 = new CustomEvent("REMOVED_FROM_WISHLIST", {
          detail: itemId
        });
        window.dispatchEvent(_event4);
        setErrorMessage("Item removed from wishlist");
        setIsVisibleMsg(true);
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    }
  };
  var addToWatchListClicked = function addToWatchListClicked(skuCode) {
    if (dataWs === "0") {
      console.log("Logic running of wishlist for dataws 0");
      try {
        var event = new CustomEvent("ADDED_TO_WISHLIST", {
          detail: JSON.stringify({
            type: "SimpleProduct",
            sku: skuCode,
            selectedOptions: []
          })
        });
        console.log(event);
        window.dispatchEvent(event);
        if (cart !== null && cart !== void 0 && cart.token) {
          setErrorMessage("Item added to wishlist");
          setIsVisibleMsg(true);
        }
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    } else if (dataWs === "1") {
      console.log("Logic running of wishlist for dataws1");
      try {
        var _event5 = new CustomEvent("ADDED_TO_WISHLIST", {
          detail: JSON.stringify({
            type: "SimpleProduct",
            sku: skuCode,
            selectedOptions: []
          })
        });
        window.dispatchEvent(_event5);
        if (cart !== null && cart !== void 0 && cart.token) {
          setErrorMessage("Item added to wishlist");
          setIsVisibleMsg(true);
        }
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    } else {
      console.log("Logic running of wishlist for no dataws");
      try {
        var _event6 = new CustomEvent("ADDED_TO_WISHLIST", {
          detail: JSON.stringify({
            type: "SimpleProduct",
            sku: skuCode,
            selectedOptions: []
          })
        });
        window.dispatchEvent(_event6);
        if (cart !== null && cart !== void 0 && cart.token) {
          setErrorMessage("Item added to wishlist");
          setIsVisibleMsg(true);
        }
        setTimeout(function () {
          try {
            return Promise.resolve(getWishlistDetails()).then(function () {});
          } catch (e) {
            return Promise.reject(e);
          }
        }, 500);
      } catch (error) {
        console.error("error", error);
        setErrorMessage("Something went wrong, Please try again!");
        setIsVisibleMsg(true);
      }
    }
  };
  var CTAClicksssv = function CTAClicksssv(dId, pId, vId, cType) {
    try {
      var formData = new FormData();
      formData.append("designer_id", dId);
      formData.append("product_id", pId);
      formData.append("user_id", "");
      formData.append("video_id", vId);
      formData.append("type", cType);
      var _temp20 = _finallyRethrows(function () {
        return _catch(function () {
          return Promise.resolve(axios.post("https://api.goswirl.live/index.php/shopify/actionbuttons", formData, {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          })).then(function () {});
        }, function (error) {
          console.error("SWIRL CTA Track failed!", error);
        });
      }, function (_wasThrown, _result2) {
        if (_wasThrown) throw _result2;
        return _result2;
      });
      return Promise.resolve(_temp20 && _temp20.then ? _temp20.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  };
  React.useEffect(function () {
    var updateWindowDimensions = function updateWindowDimensions() {
      setInnerHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();
    return function () {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);
  React.useEffect(function () {
    setQueantity(cart === null || cart === void 0 ? void 0 : cart.cartCount);
  }, [cart === null || cart === void 0 ? void 0 : cart.cartCount]);
  var countPercentage = function countPercentage(el) {
    var actualPrice = el.price;
    var discountedPrice = el.discount_price;
    if (actualPrice > 0 && discountedPrice > 0) {
      var discountPercentage = Math.round((actualPrice - discountedPrice) / actualPrice * 100);
      return discountPercentage + "%";
    } else {
      return "Invalid prices";
    }
  };
  var getAllProductsStockCount = React.useCallback(function () {
    try {
      var collectUniqueSkuCodes = function collectUniqueSkuCodes(data) {
        var uniqueSkuCodes = [];
        data && (data === null || data === void 0 ? void 0 : data.forEach(function (item) {
          if (item.product && item.product.length > 0) {
            item.product.forEach(function (product) {
              if (!uniqueSkuCodes.includes(product.sku_code)) {
                uniqueSkuCodes.push(product.sku_code);
              }
            });
          }
        }));
        return uniqueSkuCodes;
      };
      var allData = swirlData.video;
      var allSkucodes = collectUniqueSkuCodes(allData);
      var _temp23 = function () {
        if (allSkucodes.length > 0) {
          var _temp22 = function () {
            if (dataWs === "0") {
              var graphqlEndpoint = serverType === "production" ? "https://mcprod.glamourbook.com/graphql" : "https://mcstaging.glamourbook.com/graphql";
              var graphqlQuery = "\n            {\n              products(filter: { sku: { in: [" + allSkucodes.map(function (code) {
                return "\"" + code + "\"";
              }).join(", ") + "] } }) {\n                items {\n                  sku\n                  product_quatity\n                  stock_status\n                }\n              }\n            }\n          ";
              var fetchOptions = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  query: graphqlQuery
                })
              };
              var _temp21 = _catch(function () {
                return Promise.resolve(fetch(graphqlEndpoint, fetchOptions)).then(function (response) {
                  return Promise.resolve(response.json()).then(function (data) {
                    var allStockData = data.data.products.items;
                    setProductStockData(allStockData);
                  });
                });
              }, function (error) {
                console.error(error);
              });
              if (_temp21 && _temp21.then) return _temp21.then(function () {});
            }
          }();
          if (_temp22 && _temp22.then) return _temp22.then(function () {});
        }
      }();
      return Promise.resolve(_temp23 && _temp23.then ? _temp23.then(function () {}) : void 0);
    } catch (e) {
      return Promise.reject(e);
    }
  }, [dataWs, serverType, swirlData]);
  React.useEffect(function () {
    getAllProductsStockCount();
  }, [getAllProductsStockCount]);
  var checkProductStock = React.useCallback(function (skuCode) {
    var stockData = productStockData;
    if (stockData.length > 0) {
      var matchingObj = stockData.find(function (product) {
        return product.sku === skuCode;
      });
      console.log(matchingObj);
      if ((matchingObj === null || matchingObj === void 0 ? void 0 : matchingObj.stock_status) === "IN_STOCK") {
        return {
          status: "instock",
          quantity: matchingObj === null || matchingObj === void 0 ? void 0 : matchingObj.product_quatity
        };
      } else {
        return {
          status: "outofstock",
          quantity: matchingObj === null || matchingObj === void 0 ? void 0 : matchingObj.product_quatity
        };
      }
    }
  }, [productStockData]);
  var handleQuantity = function handleQuantity(method) {
    if (method === "decrease") {
      setQantityForAddToCart(quantityForAddToCart - 1);
    } else {
      setQantityForAddToCart(quantityForAddToCart + 1);
    }
  };
  return /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
    id: "swirl_section_main_div"
  }, /*#__PURE__*/React__default.createElement("style", null, "\n          #swirl_ssv_video_progress::-webkit-progress-bar {\n            background-color: " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn) + ";\n          }\n\n          #swirl_ssv_video_progress::-webkit-progress-value {\n            background-color: " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn) + ";\n          }\n\n          #swirl_ssv_video_progress::-moz-progress-bar {\n            background-color: " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn) + ";\n          }\n        "), /*#__PURE__*/React__default.createElement(Modal, {
    show: show,
    title: "Lightbox",
    onClose: onClose,
    innerHeight: innerHeight
  }, /*#__PURE__*/React__default.createElement(Slider, _extends({}, settings2, {
    ref: sliderRef
  }), swirlData === null || swirlData === void 0 ? void 0 : (_swirlData$video = swirlData.video) === null || _swirlData$video === void 0 ? void 0 : _swirlData$video.map(function (el, index) {
    var _swirlData$video2, _el$product, _swirlData$video3;
    var video = el;
    return /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_ssv_modal_row",
      key: index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_pre_next_elems",
      onClick: handlePreviousSlide,
      style: {
        cursor: index === 0 || windowWidth < 1200 ? "default" : "pointer",
        backgroundImage: "url(" + (swirlData === null || swirlData === void 0 ? void 0 : (_swirlData$video2 = swirlData.video[index - 1]) === null || _swirlData$video2 === void 0 ? void 0 : _swirlData$video2.cover_image) + ")"
      }
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_ssv_modal_square",
      style: {
        width: el.product.length > 0 ? windowWidth >= 1500 ? "50vw" : "70%" : windowWidth >= 1500 ? "50vw" : "70%",
        marginTop: windowWidth > 833 ? "30px" : "0px",
        maxWidth: el.product.length === 0 ? windowWidth < 833 ? "100%" : "340px" : "auto",
        margin: windowWidth < 833 ? el.product.length === 0 ? "0px auto" : "0px" : "32px auto"
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_row"
    }, /*#__PURE__*/React__default.createElement(VideoComponent, {
      thisVideo: el,
      onClose: onClose,
      videoLink: el.server_url,
      swirlData: swirlData,
      active: active,
      windowWidth: windowWidth,
      index: index,
      pipDisPlay: pipDisPlay,
      setPipDisplay: setPipDisplay,
      dataWs: dataWs,
      isVisibleMsg: isVisibleMsg,
      setIsVisibleMsg: setIsVisibleMsg,
      errorMessage: errorMessage,
      setErrorMessage: setErrorMessage,
      quantity: quantity,
      loadingCart: loadingCart,
      setLoadingCart: setLoadingCart,
      setLoadingbtnId: setLoadingbtnId,
      loadingbtnId: loadingbtnId,
      wishlistData: wishlistData,
      getWishlistDetails: getWishlistDetails,
      removeFromWatchList: removeFromWatchList,
      sliderRef: sliderRef,
      swipeStatus: swipeStatus,
      setSwipeStatus: setSwipeStatus,
      getAvailabiityCheck: getAvailabiityCheck,
      cart: cart,
      checkProductStock: checkProductStock,
      show: show
    }), video.product.length > 0 ? /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_column swirl_ssv_right_section_display_none"
    }, (el === null || el === void 0 ? void 0 : (_el$product = el.product) === null || _el$product === void 0 ? void 0 : _el$product.length) > 1 ? /*#__PURE__*/React__default.createElement(React.Fragment, null, descriptionOn ? /*#__PURE__*/React__default.createElement(React.Fragment, {
      key: index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_right_column_main",
      style: {
        display: "flex",
        flexDirection: "column"
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        flexGrow: 0,
        borderBottom: "1px solid #eee",
        marginBottom: "10px",
        motionPath: "-7px",
        display: "flex",
        alignItems: "center",
        width: "100%"
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_arrow_left",
      onClick: function onClick() {
        setDescriptionOn(false);
        setQantityForAddToCart(1);
      },
      style: {
        height: "auto",
        width: "12%"
      }
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/React__default.createElement("path", {
      d: "M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z",
      fill: "rgba(23,23,28,1)"
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "heart_btn",
      style: {
        marginLeft: "auto",
        padding: "0px 10px",
        height: "auto",
        width: "50px",
        cursor: "pointer"
      },
      onClick: function onClick() {
        if (checkInWishListOrNo.status) {
          var _checkInWishListOrNo$4;
          removeFromWatchList(checkInWishListOrNo === null || checkInWishListOrNo === void 0 ? void 0 : (_checkInWishListOrNo$4 = checkInWishListOrNo.obj) === null || _checkInWishListOrNo$4 === void 0 ? void 0 : _checkInWishListOrNo$4.id);
        } else {
          if (cart !== null && cart !== void 0 && cart.token) {
            addToWatchListClicked(descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code);
          } else {
            onClose();
            addToWatchListClicked(descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code);
          }
        }
        CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, descriptionData.product_id, video === null || video === void 0 ? void 0 : video.video_id, "2");
      }
    }, !checkInWishListOrNo.status ? /*#__PURE__*/React__default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "28",
      height: "28",
      fill: "#000",
      viewBox: "0 0 256 256"
    }, /*#__PURE__*/React__default.createElement("rect", {
      width: "256",
      height: "256",
      fill: "none"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z",
      fill: "none",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    })) : /*#__PURE__*/React__default.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "28",
      height: "28",
      fill: "#000",
      viewBox: "0 0 256 256"
    }, /*#__PURE__*/React__default.createElement("rect", {
      width: "256",
      height: "256",
      fill: "none"
    }), /*#__PURE__*/React__default.createElement("path", {
      d: "M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z",
      fill: "red",
      stroke: "#000",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "8"
    })))), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_product_tile_ssv",
      style: {
        flexGrow: 0,
        borderRadius: "10px",
        marginLeft: "10px",
        marginRight: "10px",
        display: "flex"
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      style: {
        width: "75px"
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      src: descriptionData.image,
      alt: "product",
      style: {
        border: "1px solid #aaa"
      },
      className: "swirl_ssv_product_img_ssv swirl_ssv_prduct_on_right"
    })), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_product_info_tile_ssv",
      style: {
        width: "calc(100% - 75px)"
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_title_product_desc",
      style: {
        textWrap: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis"
      }
    }, sliceString(descriptionData.title, 100)), swirlSettings.product_price_status === 1 ? /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_product_price",
      style: {
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
        display: "flex"
      }
    }, descriptionData.discount_price === descriptionData.price ? /*#__PURE__*/React__default.createElement("p", {
      style: {
        fontWeight: "bold",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
        fontSize: "15px",
        margin: "0"
      }
    }, new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: el.product[0].currencyname
    }).formatToParts(0).find(function (part) {
      return part.type === "currency";
    }).value, descriptionData.price) : /*#__PURE__*/React__default.createElement("p", {
      style: {
        margin: "0"
      }
    }, " ", /*#__PURE__*/React__default.createElement("span", {
      style: {
        fontWeight: "bold",
        marginRight: "5px",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
        fontSize: "15px",
        margin: "0"
      }
    }, new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: el.product[0].currencyname
    }).formatToParts(0).find(function (part) {
      return part.type === "currency";
    }).value, descriptionData.discount_price), " ", /*#__PURE__*/React__default.createElement("del", {
      style: {
        fontWeight: "200",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
        fontSize: "15px",
        margin: "0"
      }
    }, new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: el.product[0].currencyname
    }).formatToParts(0).find(function (part) {
      return part.type === "currency";
    }).value, descriptionData.price)), descriptionData.discount_price === descriptionData.price ? /*#__PURE__*/React__default.createElement("p", {
      style: {
        textAlign: "center",
        visibility: "hidden",
        fontSize: "15px",
        margin: "0"
      }
    }, countPercentage(descriptionData), " ", "OFF") : /*#__PURE__*/React__default.createElement("span", {
      className: "swirl_ssv_discount_percent_badge",
      style: {
        backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_bk_color,
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_fk_color,
        fontSize: "13px",
        margin: "0"
      }
    }, countPercentage(descriptionData), " ", "OFF")) : "")), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_description_product",
      style: {
        flexGrow: "152",
        marginTop: "-30px"
      }
    }, /*#__PURE__*/React__default.createElement("h3", null, "Product Description"), /*#__PURE__*/React__default.createElement("p", {
      style: {
        marginTop: "-15px"
      }
    }, sliceString(descriptionData.desription, 250), " "), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_quantity_section",
      style: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        alignContent: "space-between"
      }
    }, /*#__PURE__*/React__default.createElement("p", null, "Choose Quantity"), /*#__PURE__*/React__default.createElement("div", {
      style: {
        marginLeft: "auto",
        display: "flex",
        marginRight: "10px"
      }
    }, /*#__PURE__*/React__default.createElement("button", {
      style: {
        padding: "10px 20px",
        outline: "none",
        border: "none",
        cursor: "pointer"
      },
      disabled: quantityForAddToCart === 1 ? true : false,
      onClick: function onClick() {
        return handleQuantity("decrease");
      }
    }, "-"), /*#__PURE__*/React__default.createElement("input", {
      className: "swirl_ssv_quantity_section_input",
      disabled: true,
      value: quantityForAddToCart
    }), /*#__PURE__*/React__default.createElement("button", {
      style: {
        padding: "10px 20px",
        outline: "none",
        border: "none",
        cursor: "pointer"
      },
      disabled: quantityForAddToCart === 20 ? true : false,
      id: "btn_for_increase",
      onClick: function onClick() {
        return handleQuantity("increase");
      }
    }, "+")))), /*#__PURE__*/React__default.createElement("div", {
      style: {
        display: "flex",
        width: "100%",
        marginBottom: "5px"
      }
    }, swirlSettings.add_to_cart === 1 ? /*#__PURE__*/React__default.createElement("button", {
      onClick: function onClick() {
        setLoadingbtnId("4");
        setLoadingCart(true);
        addTocartClicked(descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code, 1);
        CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, descriptionData.product_id, video === null || video === void 0 ? void 0 : video.video_id, "2");
      },
      style: {
        width: "100%",
        margin: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#fff",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_add_to_cart_btn,
        border: "1px solid " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_add_to_cart_btn)
      }
    }, /*#__PURE__*/React__default.createElement(CartBtnLoadingComp, {
      preViousText: "Adding",
      btnId: "4",
      NextText: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.add_to_cart_btn,
      loadingCart: loadingCart,
      setLoadingCart: setLoadingCart,
      loadingbtnId: loadingbtnId,
      setLoadingbtnId: setLoadingbtnId
    })) : "", swirlSettings.buy_now === 1 ? /*#__PURE__*/React__default.createElement("button", {
      onClick: function onClick() {
        CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, descriptionData.product_id, video === null || video === void 0 ? void 0 : video.video_id, "1");
        if (dataWs === "1") {
          var addToCartEvent = new CustomEvent('ADDED_TO_CART', {
            detail: {
              sku: descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code,
              quantity: quantityForAddToCart,
              buynow: true
            }
          });
          window.dispatchEvent(addToCartEvent);
          enableScrollssv();
        } else {
          onClose();
          window.open(descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.url);
        }
      },
      style: {
        width: "100%",
        margin: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn,
        border: "1px solid " + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn),
        backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
        padding: "10px"
      }
    }, swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.buy_btn) : "", /*#__PURE__*/React__default.createElement("div", {
      title: "Add to Watchlist",
      onClick: function onClick() {
        if (checkInWishListOrNo.status) {
          var _checkInWishListOrNo$5;
          removeFromWatchList(checkInWishListOrNo === null || checkInWishListOrNo === void 0 ? void 0 : (_checkInWishListOrNo$5 = checkInWishListOrNo.obj) === null || _checkInWishListOrNo$5 === void 0 ? void 0 : _checkInWishListOrNo$5.id);
        } else {
          if (cart !== null && cart !== void 0 && cart.token) {
            addToWatchListClicked(descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code);
          } else {
            onClose();
            addToWatchListClicked(descriptionData === null || descriptionData === void 0 ? void 0 : descriptionData.sku_code);
          }
        }
        CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, descriptionData.product_id, video === null || video === void 0 ? void 0 : video.video_id, "2");
      },
      style: {
        border: "1px solid #aaa",
        padding: "5px 8px",
        borderRadius: "5px",
        margin: "5px",
        cursor: "pointer",
        backgroundColor: "#fff",
        display: "none"
      }
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
      alt: "Playlist",
      width: "32",
      height: "32",
      src: "https://cdn.iconscout.com/icon/premium/png-256-thumb/playlist-1654818-1407587.png?f=webp"
    }))), swirlSettings.add_to_cart === 1 ? /*#__PURE__*/React__default.createElement("div", {
      onClick: function onClick() {
        window.open("/" + (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.cust_cart_redirection_link), "_blank");
      },
      style: {
        border: "1px solid #aaa",
        padding: "5px 8px",
        borderRadius: "5px",
        margin: "5px",
        cursor: "pointer",
        backgroundColor: "#fff"
      }
    }, /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("img", {
      className: "swirl_ssv_cart_img",
      src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/cart-icon.webp",
      height: 26,
      alt: "cart_icon"
    })), /*#__PURE__*/React__default.createElement("span", {
      className: "swirl_ssv_badge_add_to_cart",
      style: {
        backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
        position: "absolute",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn,
        marginTop: "-45px",
        marginLeft: "18px",
        width: "20px",
        height: "20px",
        textAlign: "center",
        borderRadius: "50%",
        fontSize: "12px",
        display: "grid",
        placeItems: "center"
      }
    }, quantity ? quantity : "0")) : ""))) : /*#__PURE__*/React__default.createElement("div", {
      key: index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_right_column_main"
    }, el.product.map(function (el, index) {
      var currencySymbol = new Intl.NumberFormat(undefined, {
        style: "currency",
        currency: el.currencyname
      }).formatToParts(0).find(function (part) {
        return part.type === "currency";
      }).value;
      var countPercentage = function countPercentage() {
        var actualPrice = el.price;
        var discountedPrice = el.discount_price;
        if (actualPrice > 0 && discountedPrice > 0) {
          var discountPercentage = Math.round((actualPrice - discountedPrice) / actualPrice * 100);
          return discountPercentage + "%";
        } else {
          return "Invalid prices";
        }
      };
      return /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: "flex",
          padding: "10px",
          borderBottom: "1px solid #eee",
          cursor: "pointer"
        },
        key: index
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "swirl_col_1",
        style: {
          width: "80px"
        }
      }, /*#__PURE__*/React__default.createElement("img", {
        src: el.image,
        style: {
          border: "1px solid #aaa"
        },
        onClick: function onClick() {
          setDescriptionOn(true);
          setDescriptionData(el);
        },
        alt: "product",
        className: "swirl_ssv_product_img_ssv swirl_ssv_prduct_on_right"
      })), /*#__PURE__*/React__default.createElement("div", {
        className: "swirl_col_2",
        style: {
          width: "calc(90% - 80px)",
          padding: "0px 5px"
        }
      }, /*#__PURE__*/React__default.createElement("p", {
        onClick: function onClick() {
          setDescriptionOn(true);
          setDescriptionData(el);
        },
        style: {
          fontWeight: "bold",
          fontSize: "14px",
          textWrap: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis"
        }
      }, sliceString(el.title, 100)), swirlSettings.product_price_status === 1 ? /*#__PURE__*/React__default.createElement(React.Fragment, null, /*#__PURE__*/React__default.createElement("div", {
        style: {
          display: "flex",
          alignItems: "center"
        }
      }, el.discount_price === el.price ? /*#__PURE__*/React__default.createElement("p", {
        style: {
          fontWeight: "bold",
          color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
          fontSize: "15px",
          margin: "0"
        }
      }, currencySymbol, el.price) : /*#__PURE__*/React__default.createElement("p", {
        style: {
          margin: "0"
        }
      }, " ", /*#__PURE__*/React__default.createElement("span", {
        style: {
          fontWeight: "bold",
          marginRight: "5px",
          color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
          fontSize: "15px",
          margin: "0"
        }
      }, currencySymbol, el.discount_price), " ", /*#__PURE__*/React__default.createElement("del", {
        style: {
          fontWeight: "200",
          color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color,
          fontSize: "15px",
          margin: "0"
        }
      }, currencySymbol, el.price)), el.discount_price === el.price ? /*#__PURE__*/React__default.createElement("p", {
        style: {
          textAlign: "center",
          visibility: "hidden",
          fontSize: "15px",
          margin: "0"
        }
      }, countPercentage(), " OFF") : /*#__PURE__*/React__default.createElement("span", {
        className: "swirl_ssv_discount_percent_badge",
        style: {
          backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_bk_color,
          color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_fk_color,
          fontSize: "13px",
          margin: "0"
        }
      }, countPercentage(), " OFF"))) : "", /*#__PURE__*/React__default.createElement("div", {
        style: {
          marginTop: "5px",
          display: "flex"
        }
      }, swirlSettings.add_to_cart === 1 ? /*#__PURE__*/React__default.createElement("button", {
        className: "swirl_ssv_add_to_cart_btn_ssv",
        style: {
          color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_add_to_cart_btn
        },
        onClick: function onClick() {
          setLoadingbtnId("5" + index);
          setLoadingCart(true);
          addTocartClicked(el === null || el === void 0 ? void 0 : el.sku_code, 1);
          CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, el.product_id, video === null || video === void 0 ? void 0 : video.video_id, "2");
        }
      }, /*#__PURE__*/React__default.createElement(CartBtnLoadingComp, {
        preViousText: "Adding",
        btnId: "5" + index,
        NextText: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.add_to_cart_btn,
        loadingCart: loadingCart,
        setLoadingCart: setLoadingCart,
        loadingbtnId: loadingbtnId,
        setLoadingbtnId: setLoadingbtnId
      })) : "", " ", swirlSettings.buy_now === 1 ? /*#__PURE__*/React__default.createElement("button", {
        className: "swirl_ssv_buy_btn_ssv",
        onClick: function onClick() {
          CTAClicksssv(swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.brand_id, el.product_id, video === null || video === void 0 ? void 0 : video.video_id, "1");
          if (dataWs === "1") {
            var addToCartEvent = new CustomEvent('ADDED_TO_CART', {
              detail: {
                sku: el === null || el === void 0 ? void 0 : el.sku_code,
                quantity: quantityForAddToCart,
                buynow: true
              }
            });
            window.dispatchEvent(addToCartEvent);
            enableScrollssv();
          } else {
            onClose();
            window.open(el === null || el === void 0 ? void 0 : el.url);
          }
        }
      }, swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.buy_btn) : "")), /*#__PURE__*/React__default.createElement("div", {
        className: "swirl_col_3 ",
        style: {
          width: "10%"
        }
      }, /*#__PURE__*/React__default.createElement("div", {
        className: "swirl_ssv_arrow_right",
        onClick: function onClick() {
          setDescriptionOn(true);
          setDescriptionData(el);
        }
      }, /*#__PURE__*/React__default.createElement("svg", {
        width: "36",
        height: "36",
        viewBox: "0 0 36 36",
        fill: "none",
        xmlns: "http:www.w3.org/2000/svg"
      }, /*#__PURE__*/React__default.createElement("g", {
        clipPath: "url(#clip0_1415_6645)"
      }, /*#__PURE__*/React__default.createElement("path", {
        d: "M19.757 18.0001L12.332 10.5751L14.453 8.4541L23.999 18.0001L14.453 27.5461L12.332 25.4251L19.757 18.0001Z",
        fill: "black"
      })), /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("clipPath", {
        id: "clip0_1415_6645"
      }, /*#__PURE__*/React__default.createElement("rect", {
        width: "36",
        height: "36",
        fill: "white"
      })))))));
    })))) : /*#__PURE__*/React__default.createElement("div", {
      key: index
    }, /*#__PURE__*/React__default.createElement(ProductDescComp, {
      el: video,
      swirlSettings: swirlSettings,
      quantityForAddToCart: quantityForAddToCart,
      handleQuantity: handleQuantity,
      addTocartClicked: addTocartClicked,
      CTAClicksssv: CTAClicksssv,
      video: video,
      addToWatchListClicked: addToWatchListClicked,
      removeFromWatchList: removeFromWatchList,
      quantity: quantity,
      type: "for_multiple",
      descriptionData: el.product[0],
      onClose: onClose,
      loadingCart: loadingCart,
      setLoadingCart: setLoadingCart,
      loadingbtnId: loadingbtnId,
      setLoadingbtnId: setLoadingbtnId,
      wishlistData: wishlistData,
      getAvailabiityCheck: getAvailabiityCheck,
      cart: cart,
      dataWs: dataWs
    }))) : "")), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_pre_next_elems",
      onClick: handleNextSlide,
      style: {
        backgroundImage: "url(" + (swirlData === null || swirlData === void 0 ? void 0 : (_swirlData$video3 = swirlData.video[index + 1]) === null || _swirlData$video3 === void 0 ? void 0 : _swirlData$video3.cover_image) + ")",
        cursor: index === (swirlData === null || swirlData === void 0 ? void 0 : swirlData.video.length) - 1 || windowWidth < 1200 ? "default" : "pointer"
      }
    }));
  }))), /*#__PURE__*/React__default.createElement(Slider, settings, swirlData === null || swirlData === void 0 ? void 0 : (_swirlData$video4 = swirlData.video) === null || _swirlData$video4 === void 0 ? void 0 : _swirlData$video4.map(function (el, index) {
    var _el$product2;
    var countPercentage = function countPercentage() {
      var actualPrice = el.product[0].price;
      var discountedPrice = el.product[0].discount_price;
      if (actualPrice > 0 && discountedPrice > 0) {
        var discountPercentage = Math.round((actualPrice - discountedPrice) / actualPrice * 100);
        return discountPercentage + "%";
      } else {
        return "Invalid prices";
      }
    };
    var swirlSettings = swirlData === null || swirlData === void 0 ? void 0 : swirlData.data;
    var currencySymbol = el.product.length > 0 ? new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: el.product[0].currencyname
    }).formatToParts(0).find(function (part) {
      return part.type === "currency";
    }).value : "$";
    function formatVideoDuration() {
      var durationInSeconds = el.video_len;
      var minutes = Math.floor(durationInSeconds / 60);
      var seconds = Math.floor(durationInSeconds % 60);
      var formattedMinutes = minutes < 10 ? "0" + minutes : "" + minutes;
      var formattedSeconds = seconds < 10 ? "0" + seconds : "" + seconds;
      return formattedMinutes + ":" + formattedSeconds;
    }
    return /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_main_div_card",
      key: index
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_card"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_media-container",
      onClick: function onClick() {
        return handleClick(index);
      }
    }, swirlSettings.auto_play === "1" ? /*#__PURE__*/React__default.createElement("video", {
      style: {
        width: "100%",
        height: "auto",
        display: "block"
      },
      autoPlay: index < 5 && !show ? true : false,
      preload: "metadata",
      loading: "lazy",
      playsInline: true,
      poster: el.cover_image,
      muted: true,
      loop: true
    }, /*#__PURE__*/React__default.createElement("source", {
      src: el.cover_video,
      type: "video/mp4"
    }), "Your browser does not support the video tag.") : /*#__PURE__*/React__default.createElement("img", {
      src: el.cover_image,
      alt: " Description",
      style: {
        width: "100%",
        height: "auto",
        display: "block"
      }
    }), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_overlay"
    }, /*#__PURE__*/React__default.createElement("p", {
      className: "swirl_ssv_total_views",
      style: {
        visibility: swirlSettings.views === "1" ? "" : "hidden"
      }
    }, /*#__PURE__*/React__default.createElement("img", {
      style: {
        marginRight: "3px"
      },
      src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/views-icon.webp",
      height: "20px",
      alt: "toatal videos"
    }), " ", el.total_views)), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_overlay-right"
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "swirl_ssv_ssv_duration",
      style: {
        visibility: (swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.time_sec) === "1" ? "" : "hidden"
      }
    }, formatVideoDuration())), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_overlay-center"
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_elements_over_short_play_btn"
    }, /*#__PURE__*/React__default.createElement("img", {
      className: "swirl_ssv_playpausse_btn_carousel_outer",
      src: "https://cdn.jsdelivr.net/gh/SwirlAdmin/swirl-cdn/assets/images/goswirl-webp/play.webp",
      alt: "play pause btn"
    })))), swirlSettings.product_blog_img === 1 && el.product.length > 0 ? /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_produt_section_ssv",
      onClick: function onClick() {
        return handleClick(index);
      }
    }, /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_image-container"
    }, /*#__PURE__*/React__default.createElement("img", {
      className: "swirl_ssv_prodct_img_ssv",
      alt: "product",
      src: el.product[0].image
    }), (el === null || el === void 0 ? void 0 : (_el$product2 = el.product) === null || _el$product2 === void 0 ? void 0 : _el$product2.length) > 1 ? /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_badge",
      style: {
        backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.bk_color_buy_btn,
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.front_color_buy_btn
      }
    }, el.product.length) : ""), /*#__PURE__*/React__default.createElement("div", {
      className: "swirl_ssv_product_info",
      style: {
        height: "auto",
        paddingBottom: swirlSettings.product_price_status === 1 ? "0px" : "15px"
      }
    }, /*#__PURE__*/React__default.createElement("p", null, el.product[0].title), /*#__PURE__*/React__default.createElement("div", {
      style: {
        display: swirlSettings.product_price_status === 1 ? "block" : "none"
      }
    }, el.product[0].discount_price === el.product[0].price ? /*#__PURE__*/React__default.createElement("h3", {
      style: {
        fontWeight: "bold",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color
      }
    }, currencySymbol, el.product[0].price) : /*#__PURE__*/React__default.createElement("h3", null, " ", /*#__PURE__*/React__default.createElement("span", {
      style: {
        fontWeight: "bold",
        marginRight: "5px",
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color
      }
    }, currencySymbol, el.product[0].discount_price), " ", /*#__PURE__*/React__default.createElement("del", {
      style: {
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.mrp_fk_color
      }
    }, currencySymbol, el.product[0].price)), el.product[0].discount_price === el.product[0].price ? /*#__PURE__*/React__default.createElement("p", {
      style: {
        textAlign: "center",
        visibility: "hidden"
      }
    }, countPercentage(), " OFF") : /*#__PURE__*/React__default.createElement("div", null, /*#__PURE__*/React__default.createElement("p", {
      style: {
        textAlign: "center"
      }
    }, /*#__PURE__*/React__default.createElement("span", {
      className: "swirl_ssv_discount_percent_badge",
      style: {
        backgroundColor: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_bk_color,
        color: swirlSettings === null || swirlSettings === void 0 ? void 0 : swirlSettings.off_fk_color,
        fontSize: "13px"
      }
    }, countPercentage(), " OFF")))))) : ""));
  })), pipDisPlay ? /*#__PURE__*/React__default.createElement(PipComp, {
    videoData: JSON.parse(localStorage.getItem("_pip_video_data")),
    pipDisPlay: pipDisPlay,
    setPipDisplay: setPipDisplay,
    handleClick: handleClick,
    index: active
  }) : ""));
};

exports.SwirlShortVideos = SwirlShortVideos;
//# sourceMappingURL=index.js.map
