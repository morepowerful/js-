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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(element) {
  _classCallCheck(this, Node);

  this.element = element;
  this.next = null;
};

var LinkedList = function () {
  function LinkedList() {
    _classCallCheck(this, LinkedList);

    this.head = null;
    this.length = 0;
  }

  //向链表末端添加元素


  _createClass(LinkedList, [{
    key: 'append',
    value: function append(element) {
      var node = new Node(element);
      var current = void 0;
      if (this.length === 0) {
        this.head = node;
      } else {
        current = this.head;

        while (current.next !== null) {
          current = current.next;
        }

        current.next = node;
      }
      this.length++;
    }

    //插入元素，成功true，失败false

  }, {
    key: 'insert',
    value: function insert(element, position) {

      if (!this.head) return false;

      var current = this.head;
      var node = new Node(element);

      if (position >= 0 && position < this.length) {
        var preElement = null;
        var index = 0;

        if (position == 0) {
          node.next = current;
          this.head = node;
        } else {
          while (index++ < position) {
            preElement = current;
            current = current.next;
          }

          preElement.next = node;
          node.next = current;
        }
        this.length++;
        return true;
      } else {
        return false;
      }
    }

    //根据位置删除指定元素，成功 返回元素， 失败 返回null

  }, {
    key: 'removeAt',
    value: function removeAt(position) {
      if (!this.head) return null;

      if (position >= 0 && position < this.length) {
        var current = this.head;
        var preElement = null;
        var index = 0;

        if (position == 0) {
          this.head = current.next;
        } else {
          while (index++ < position) {
            preElement = current;
            current = current.next;
          }

          preElement.next = current.next;
        }
        this.length--;
        return current.element;
      } else {
        return null;
      }
    }

    //删除指定元素，成功 返回元素， 失败 返回null

  }, {
    key: 'removeElement',
    value: function removeElement(element) {
      if (!this.head) return null;

      var index = this.indexOf(element);
      return this.removeAt(index);
    }

    //返回给定元素的索引，如果没有则返回-1

  }, {
    key: 'indexOf',
    value: function indexOf(element) {
      if (!this.head) return -1;

      var current = this.head;
      var index = 0;

      while (index++ < this.length) {
        if (current.element == element) return index - 1;
        current = current.next;
      }

      return -1;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      return this.length == 0;
    }
  }, {
    key: 'toString',
    value: function toString() {
      if (!this.head) return '';
      var str = '';
      var current = this.head;
      var index = 0;
      while (index++ < this.length) {
        str += index - 1 + ':' + current.element + ',';
        current = current.next;
      }
      return '{' + str + '}';
    }
  }, {
    key: 'size',
    value: function size() {
      return this.length;
    }
  }, {
    key: 'getHead',
    value: function getHead() {
      return this.head;
    }
  }]);

  return LinkedList;
}();

exports.default = LinkedList;

// const linkedList = new LinkedList();

// linkedList.append(1)
// linkedList.append({age: 23})
// linkedList.append({sex: '男'})
// linkedList.insert(2,1)
// console.log(linkedList.removeElement(1))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(0);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsLinkedList = __webpack_require__(0);

var _jsLinkedList2 = _interopRequireDefault(_jsLinkedList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Node = function Node(element) {
    _classCallCheck(this, Node);

    this.element = element;
    this.next = null;
    this.prev = null;
};

var DoublyLinkedList = function (_LinkedList) {
    _inherits(DoublyLinkedList, _LinkedList);

    function DoublyLinkedList() {
        _classCallCheck(this, DoublyLinkedList);

        var _this = _possibleConstructorReturn(this, (DoublyLinkedList.__proto__ || Object.getPrototypeOf(DoublyLinkedList)).call(this));

        _this.tail = null;
        return _this;
    }

    _createClass(DoublyLinkedList, [{
        key: 'append',
        value: function append(element) {
            var node = new Node(element);
            var tailElement = this.tail;

            if (this.length == 0) {
                this.head = node;
                this.tail = node;
            } else {
                tailElement.next = node;
                this.tail = node;
                this.tail.prev = tailElement;
            }
            this.length++;
        }
    }, {
        key: 'insert',
        value: function insert(element, position) {
            var node = new Node(element);
            var current = this.head;
            var preElement = null;
            var index = 0;

            if (!(position >= 0 && position < this.length)) {
                return false;
            }

            if (position == 0) {
                node.next = current;
                current.prev = node;
                this.head = node;
                this.length++;
                return true;
            }

            while (index++ < position) {
                preElement = current;
                current = current.next;
            }

            this.length++;
            current.prev = node;
            preElement.next = node;
            node.prev = preElement;
            node.next = current;
            return true;
        }
    }, {
        key: 'removeAt',
        value: function removeAt(position) {
            var current = this.head;
            var lastElement = this.tail;
            var preElement = null;
            var index = 0;

            if (position == 0) {
                this.head = current.next;
                this.head.prev = null;
            } else {
                if (position == this.length - 1) {
                    current = lastElement;
                    this.tail = current.prev;
                    this.tail.next = null;
                } else {
                    while (index++ < position) {
                        preElement = current;
                        current = current.next;
                    }

                    preElement.next = current.next;
                    current.next.prev = preElement;
                }
            }

            this.length--;
            return current;
        }
    }]);

    return DoublyLinkedList;
}(_jsLinkedList2.default);

exports.default = DoublyLinkedList;

// const linkedList = new DoublyLinkedList();

// linkedList.append(1)
// linkedList.append({age: 23})
// linkedList.append({sex: '男'})
// linkedList.insert(2,1)
// console.log(linkedList.toString())

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Queue = function () {
    //队列
    function Queue() {
        _classCallCheck(this, Queue);

        this.items = [];
    }

    _createClass(Queue, [{
        key: 'enqueue',
        value: function enqueue(item) {
            //入列
            this.items.push(item);
        }
    }, {
        key: 'dequeue',
        value: function dequeue() {
            //出列
            return this.items.shift();
        }
    }, {
        key: 'front',
        value: function front() {
            return this.items[0];
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.items.length === 0;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.items = [];
        }
    }, {
        key: 'size',
        value: function size() {
            return this.items.length;
        }
    }, {
        key: 'print',
        value: function print() {
            console.log(this.items.reverse().toString());
        }
    }]);

    return Queue;
}();

var PriorityQueue = function (_Queue) {
    _inherits(PriorityQueue, _Queue);

    //优先队列
    function PriorityQueue() {
        _classCallCheck(this, PriorityQueue);

        return _possibleConstructorReturn(this, (PriorityQueue.__proto__ || Object.getPrototypeOf(PriorityQueue)).call(this));
    }

    _createClass(PriorityQueue, [{
        key: 'enqueue',
        value: function enqueue(item, priority) {
            var queueElement = { item: item, priority: priority };
            var _this = this;

            function addPiorityQueue() {
                var isAdd = false;
                for (var i = 0; i < _this.items.length; i++) {
                    if (queueElement.priority > _this.items[i].priority) {
                        _this.items.splice(i, 0, queueElement);
                        isAdd = true;
                        break;
                    }
                }

                if (!isAdd) {
                    _this.items.push(queueElement);
                }
            }
            this.isEmpty() ? this.items.push(queueElement) : addPiorityQueue();
        }
    }, {
        key: 'print',
        value: function print() {
            console.log(JSON.stringify(this.items.reverse()));
        }
    }]);

    return PriorityQueue;
}(Queue);

exports.Queue = Queue;
exports.PriorityQueue = PriorityQueue;


var priorityQueue = new PriorityQueue();
priorityQueue.enqueue('liudong', 3);
priorityQueue.enqueue('liudong1', 4);
priorityQueue.enqueue('liudong2', 1);
// priorityQueue.dequeue()
priorityQueue.print();

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stack = function () {
    function Stack() {
        _classCallCheck(this, Stack);

        this.items = [];
    }

    _createClass(Stack, [{
        key: 'push',
        value: function push(item) {
            //进栈
            this.items.push(item);
        }
    }, {
        key: 'pop',
        value: function pop() {
            //出栈
            return this.items.pop();
        }
    }, {
        key: 'peek',
        value: function peek() {
            return this.items[this.items.length - 1];
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty() {
            return this.items.length === 0;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this.items = [];
        }
    }, {
        key: 'size',
        value: function size() {
            return this.items.length;
        }
    }, {
        key: 'print',
        value: function print() {
            console.log(this.items.toString());
        }
    }]);

    return Stack;
}();

//通过栈实现正整数转化为二进制


function divideBy2(decNumber) {
    var stack = new Stack();
    var rem = void 0;
    var decString = '';
    while (decNumber > 0) {
        rem = decNumber % 2;
        stack.push(rem);
        decNumber = Math.floor(decNumber / 2);
    }

    while (!stack.isEmpty()) {
        decString += stack.pop().toString();
    }
    return decString;
}
console.log(divideBy2(10)); //1010

exports.default = Stack;

/***/ })
/******/ ]);