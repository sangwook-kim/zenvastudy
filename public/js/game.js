/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar player_1 = __webpack_require__(/*! ./player */ \"./src/player.ts\");\nvar canvasBg = document.getElementById('canvasBg');\nvar ctxBg = canvasBg.getContext('2d');\nvar canvasEntities = document.getElementById('canvasEntities');\nvar ctxEntities = canvasEntities.getContext('2d');\nvar width = canvasBg.width, height = canvasBg.height;\nvar reqAFrame = window.requestAnimationFrame ||\n    window.webkitRequestAnimationFrame ||\n    (function (cb) {\n        window.setTimeout(cb, 1000 / 60);\n    });\nvar imgSprite = new Image();\nvar isPlaying = false;\nvar player1 = new player_1.Player(ctxEntities, imgSprite, 0, height, 35, 54);\nfunction loadResources() {\n    imgSprite.src = 'images/sprite.png';\n    imgSprite.addEventListener('load', initGame);\n}\nfunction initGame() {\n    document.addEventListener('keydown', function (e) { checkKey(e, true); }, false);\n    document.addEventListener('keyup', function (e) { checkKey(e, false); }, false);\n    begin();\n}\nfunction begin() {\n    ctxBg.drawImage(imgSprite, 0, 0, width, height, 0, 0, width, height);\n    isPlaying = true;\n    reqAFrame(loop);\n}\nfunction loop() {\n    if (isPlaying) {\n        update();\n        draw();\n        reqAFrame(loop);\n    }\n}\nfunction clearCtx(ctx) {\n    ctx.clearRect(0, 0, width, height);\n}\nfunction update() {\n    clearCtx(ctxEntities);\n    player1.update();\n}\nfunction draw() {\n    player1.draw();\n}\nfunction randomRange(min, max) {\n    return Math.floor(Math.random() * (max + 1 - min)) + min;\n}\nfunction checkKey(e, flag) {\n    var keyID = e.keyCode || e.which;\n    e.preventDefault();\n    if (keyID === 38) {\n        player1.isUpKey = flag;\n    }\n    if (keyID === 39) {\n        player1.isRightKey = flag;\n    }\n    if (keyID === 40) {\n        player1.isDownKey = flag;\n    }\n    if (keyID === 37) {\n        player1.isLeftKey = flag;\n    }\n    if (keyID === 32) {\n        player1.isSpacebar = flag;\n    }\n}\nfunction outOfBounds(entity, x, y) {\n    var newBottomY = y + entity.height;\n    var newTopY = y;\n    var newRightX = x + entity.width;\n    var newLeftX = x;\n    var treeLineTop = 5;\n    var treeLineBottom = 570;\n    var treeLineRight = 750;\n    var treeLineLeft = 65;\n}\nloadResources();\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/player.ts":
/*!***********************!*\
  !*** ./src/player.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar Player = /** @class */ (function () {\n    function Player(ctx, imgSprite, x, y, w, h) {\n        this.ctx = ctx;\n        this.imgSprite = imgSprite;\n        this.srcX = x;\n        this.srcY = y;\n        this.width = w;\n        this.height = h;\n        this.drawX = 400;\n        this.drawY = 300;\n        this.centerX = this.drawX + (this.width / 2);\n        this.centerY = this.drawY + (this.height / 2);\n        this.speed = 2;\n        this.isUpKey = false;\n        this.isDownKey = false;\n        this.isRightKey = false;\n        this.isLeftKey = false;\n        this.isSpacebar = false;\n    }\n    Player.prototype.update = function () {\n        if (this.isUpKey) {\n            this.drawY -= this.speed;\n        }\n        if (this.isDownKey) {\n            this.drawY += this.speed;\n        }\n        if (this.isRightKey) {\n            this.drawX += this.speed;\n        }\n        if (this.isLeftKey) {\n            this.drawX -= this.speed;\n        }\n        this.centerX = this.drawX + (this.width / 2);\n        this.centerY = this.drawY + (this.height / 2);\n    };\n    Player.prototype.draw = function () {\n        this.ctx.drawImage(this.imgSprite, this.srcX, this.srcY, this.width, this.height, this.drawX, this.drawY, this.width, this.height);\n    };\n    return Player;\n}());\nexports.Player = Player;\n\n\n//# sourceURL=webpack:///./src/player.ts?");

/***/ })

/******/ });