// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"JS/utils/events/event-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function on(element, eventType, callback) {
  element.addEventListener(eventType, function (event) {
    return callback(event);
  });
}

var _default = {
  on: on
};
exports.default = _default;
},{}],"JS/utils/api/api-actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getRequest(location, callback) {
  fetch(location).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function postRequest(location, requestBody, callback) {
  fetch(location, {
    method: "POST",
    body: JSON.stringify(requestBody)
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

function deleteRequest(location, callback) {
  fetch(location, {
    method: "DELETE"
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return callback(data);
  }).catch(function (err) {
    return console.log(err);
  });
}

var _default = {
  getRequest: getRequest,
  postRequest: postRequest,
  deleteRequest: deleteRequest
};
exports.default = _default;
},{}],"JS/components/add.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function addParents() {
  return "\n    <section class=\"add__parent\">\n        <h3>Add Parent</h3>\n        \n            <input type=\"select\" class=\"add__firstName\" placeholder=\"first name\">\n            <input type=\"text\" class=\"add__lastName\" placeholder=\"last name\">\n            <input type=\"select\" class=\"add__phoneNumber\" placeholder=\"phone number\">\n            <input type=\"text\" class=\"add__email\" placeholder=\"email\">\n            <button class=\"add__parent__button\">Add Parent</button>\n        </section> \n        ";
}

function addChildrens() {
  return "\n    <section class=\"add__child\">\n        <h3>Add Child</h3>\n        \n            <input type=\"text\" class=\"add__firstName\" placeholder=\"first name\">\n            <input type=\"text\" class=\"add__lastName\" placeholder=\"last name\">\n            <input type=\"text\" class=\"add__age\" placeholder=\"age\">\n            <input type=\"text\" class=\"add__teacher\" placeholder=\"teacher\">\n            <button class=\"add__child__button\">Add Child</button>\n        </section> \n        ";
}

function addTeachers() {
  return "\n    <section class=\"add__teacher\">\n        <h3>Add Teacher</h3>\n        \n            <input type=\"text\" class=\"add__firstName\" placeholder=\"first name\">\n            <input type=\"text\" class=\"add__lastName\" placeholder=\"last name\">\n            <input type=\"text\" class=\"add__subjectName\" placeholder=\"subject name\">\n            <input type=\"text\" class=\"add__studentsCount\" placeholder=\"number of students\">\n            <button class=\"add__teacher__button\">Add Teacher</button>\n        </section> \n        ";
}

var _default = {
  addParents: addParents,
  addChildrens: addChildrens,
  addTeachers: addTeachers
};
exports.default = _default;
},{}],"JS/components/Parents.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Parents;

var _add = _interopRequireDefault(require("./add"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Parents(parents) {
  return "\n    <div class = \"parent__list\"> \n        <ul class=\"parents\">\n        <h1>Parents</h1>\n            ".concat(parents.map(function (parent) {
    return "\n                    <li class=\"parent\">\n                        <h4 class=\"parent__parentName\" id=\"".concat(parent.id, "\">").concat(parent.firstName, " ").concat(parent.lastName, "</h4>                      \n                    </li>\n                ");
  }).join(''), "\n        </ul>\n        <section class=\"add__parent\">\n        <h3>Add Parent</h3>\n        \n            <input type=\"text\" class=\"add__firstName\" placeholder=\"first name\">\n            <input type=\"text\" class=\"add__lastName\" placeholder=\"last name\">\n            <input type=\"select\" class=\"add__phoneNumber\" placeholder=\"phone number\">\n            <input type=\"text\" class=\"add__email\" placeholder=\"email\">\n            <button class=\"add__parent__button\">Add Parent</button>\n        </section> \n        </div>\n    ");
}
},{"./add":"JS/components/add.js"}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"CSS/index.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"JS/components/Teachers.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Teachers;

require("../../CSS/index.css");

function Teachers(teachers) {
  return "\n      \n       <div class = \"teacher__list\"> \n       <h1>Teachers</h1>\n        <ul class=\"teachers\">\n            ".concat(teachers.map(function (teacher) {
    return "\n                    <li class=\"teacher\">\n                        <h3 class=\"teacher__teacherName\" id=\"".concat(teacher.id, "\">").concat(teacher.firstName, " ").concat(teacher.lastName, "</h3>                     \n                    </li>\n                    ");
  }).join(''), "\n            </ul>\n            <section class=\"add__teacher\">\n            <h3>Add Teacher</h3>\n            <input type=\"text\" class=\"add__firstName\" placeholder=\"first name\">\n            <input type=\"text\" class=\"add__lastName\" placeholder=\"last name\">\n            <input type=\"text\" class=\"add__subjectName\" placeholder=\"subject name\">\n            <input type=\"text\" class=\"add__studentsCount\" placeholder=\"number of students\">\n            <button class=\"add__teacher__button\">Add Teacher</button>\n        </section>\n        </div> \n            ");
}
},{"../../CSS/index.css":"CSS/index.css"}],"JS/components/Childs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Childrens;

function Childrens(childrens) {
  return "\n   \n    <div class = \"children__list\"> \n    <h1>Children</h1>\n        <ul class=\"childrens\">\n            ".concat(childrens.map(function (children) {
    return "\n                    <li class=\"children\">\n                        <h4 class=\"children__childrenName\" id=\"".concat(children.id, "\">").concat(children.firstName, " ").concat(children.lastName, "</h4>                      \n                    </li>\n                ");
  }).join(''), "\n        </ul>\n        <section class=\"add__child\">\n        <h3>Add Child</h3>\n        \n            <input type=\"text\" class=\"add__firstName\" placeholder=\"first name\">\n            <input type=\"text\" class=\"add__lastName\" placeholder=\"last name\">\n            <input type=\"text\" class=\"add__age\" placeholder=\"age\">\n            <input type=\"text\" class=\"add___teacher\" placeholder=\"teacher\">\n            <button class=\"add__child__button\">Add Child</button>\n        </section> \n    ");
}
},{}],"JS/components/Comments.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Comments;

function Comments(comments) {
  return "\n      <div class = \"comments__list\"> \n        <h1>Comments</h1>\n          <ul class=\"comments\">\n              ".concat(comments.map(function (comment) {
    return "\n                      <li class=\"comment\">\n                          <h4 class=\"comment__content\" id=\"".concat(comment.id, "\">").concat(comment.content, "</h4>                      \n                      </li>\n                  ");
  }).join(''), "\n          </ul>\n          <section class=\"add__comment\">\n          <h3>Add Comment</h3>\n          \n              <input type=\"text\" class=\"add__content\" placeholder=\"comment\">\n\n              <button class=\"add__comment__button\">Add Comment</button>\n          </section> \n      ");
}
},{}],"JS/components/Parent.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Parent;

var _Childs = _interopRequireDefault(require("./Childs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Parent(parent) {
  return "\n    <div class=\"parent__container\">\n        <h3 class=\"parent__parentName name\">Parent: ".concat(parent.firstName, " ").concat(parent.lastName, "</h3>\n        <h4 class=\"parent__parentPhoneNumber phone\">Phone: ").concat(parent.phoneNumber, "</h4>\n        <h4 class=\"parent__parentEmail email\">e-mail: ").concat(parent.email, "</h4>\n    \n        <ul class=\"children\">\n         \n            <li class=\"children\">").concat((0, _Childs.default)(parent.child), "</li>\n        </ul>\n\n        \n\n        \n    </div>\n            ");
}
},{"./Childs":"JS/components/Childs.js"}],"JS/components/Child.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Child;

function Child(child) {
  return "\n    <div class=\"child__container\">\n        <h3 class=\"children__childrenName name\">Child: ".concat(child.firstName, " ").concat(child.lastName, "</h3>\n        <h4 class=\"child__childAge age\">Age: ").concat(child.age, "</h4>\n\n        \n    </div>\n            ");
}
},{}],"JS/components/Comment.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Comment;

function Comment(comment) {
  return "\n\n    <div class=\"comment__container\">\n        <h3 class=\"comment__content content\">Comment: ".concat(comment.content, "</h3>\n        <section class=\"add__comment\">\n        <input type=\"text\" class=\"add__content\" placeholder=\"comment\">\n       \n            <button class=\"add__comment__button\" id=\"").concat(comment.id, "\">Add Comment</button>\n        </section>\n    \n\n\n    <p class=\"comment__content\">").concat(comment.content, "</p>\n    <section class=\"update__comment\">\n        <h3>Update Comment</h3>\n        <input type=\"text\" class=\"update__comment\" placeholder=\"").concat(comment.newContent, "\">\n        <button class=\"update__comment__button\" id=\"").concat(comment.id, "\">Update Comment</button>\n    </section> \n    <section class=\"delete__comment\">\n        <button class=\"delete__comment__button\" id=\"").concat(comment.id, "\">Delete Comment</button>\n    </section>\n    </div>\n\n    \n            ");
}
},{}],"JS/components/Teacher.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Teacher;

var _Childs = _interopRequireDefault(require("./Childs"));

var _Comments = _interopRequireDefault(require("./Comments"));

var _Comment = _interopRequireDefault(require("./Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Teacher(teacher) {
  return "\n    <div class=\"teacher__container\">\n        <h3 class=\"teacher__teacherName name\">Teacher: ".concat(teacher.firstName, " ").concat(teacher.lastName, "</h3>\n        <h4 class=\"teacher__teacherSubjectName Subject\">Subject: ").concat(teacher.subjectName, "</h4>\n        <h4 class=\"teacher__teacherStudentsCount email\">Number of Students: ").concat(teacher.studentsCount, "</h4>\n        \n       \n        <ul class=\"children\">\n         \n        <li class=\"children\">").concat((0, _Childs.default)(teacher.child), "</li>\n    </ul>\n     </div>\n            ");
}
},{"./Childs":"JS/components/Childs.js","./Comments":"JS/components/Comments.js","./Comment":"JS/components/Comment.js"}],"JS/app.js":[function(require,module,exports) {
"use strict";

var _eventActions = _interopRequireDefault(require("./utils/events/event-actions"));

var _apiActions = _interopRequireDefault(require("./utils/api/api-actions"));

var _Parents = _interopRequireDefault(require("./components/Parents"));

var _Teachers = _interopRequireDefault(require("./components/Teachers"));

var _Childs = _interopRequireDefault(require("./components/Childs"));

var _Comments = _interopRequireDefault(require("./components/Comments"));

var _Parent = _interopRequireDefault(require("./components/Parent"));

var _Child = _interopRequireDefault(require("./components/Child"));

var _Teacher = _interopRequireDefault(require("./components/Teacher"));

var _Comment = _interopRequireDefault(require("./components/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

main();

function main() {
  _apiActions.default.getRequest('http://localhost:8080/parents', function (parents) {
    getAppContext().innerHTML;
  });

  navParent();
  navTeacher();
  navChild();
  navComment();
  addParents();
  addTeachers();
  addChildrens();
  viewSingleParent();
  viewSingleChild();
  viewSingleTeacher();
  addComments();
  viewSingleComment();
  updateComment();
  deleteSingleComment();
}

function navParent() {
  var parentButton = document.querySelector('.nav__parents');

  _eventActions.default.on(parentButton, 'click', function () {
    _apiActions.default.getRequest('http://localhost:8080/parents', function (parents) {
      getAppContext().innerHTML = (0, _Parents.default)(parents);
    });
  });
}

function navTeacher() {
  var teacherButton = document.querySelector('.nav__teachers');

  _eventActions.default.on(teacherButton, 'click', function () {
    _apiActions.default.getRequest('http://localhost:8080/teachers', function (teachers) {
      getAppContext().innerHTML = (0, _Teachers.default)(teachers);
    });
  });
}

function navChild() {
  var childButton = document.querySelector('.nav__childrens');

  _eventActions.default.on(childButton, 'click', function () {
    _apiActions.default.getRequest('http://localhost:8080/childrens', function (childrens) {
      getAppContext().innerHTML = (0, _Childs.default)(childrens);
    });
  });
}

function navComment() {
  var commentButton = document.querySelector('.nav__comments');

  _eventActions.default.on(commentButton, 'click', function () {
    _apiActions.default.getRequest('http://localhost:8080/comments', function (comments) {
      getAppContext().innerHTML = (0, _Comments.default)(comments);
    });
  });
}

function addParents() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__parent__button')) {
      var firstName = document.querySelector('.add__firstName').value;
      var lastName = document.querySelector('.add__lastName').value;
      var phoneNumber = document.querySelector('.add__phoneNumber').value;
      var email = document.querySelector('.add__email').value;

      _apiActions.default.postRequest('http://localhost:8080/parents/add', {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
      }, function (parents) {
        return getAppContext().innerHTML = (0, _Parents.default)(parents);
      });
    }
  });
}

function addTeachers() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__teacher__button')) {
      var firstName = document.querySelector('.add__firstName').value;
      var lastName = document.querySelector('.add__lastName').value;
      var subjectName = document.querySelector('.add__subjectName').value;
      var studentsCount = document.querySelector('.add__studentsCount').value;

      _apiActions.default.postRequest('http://localhost:8080/teachers/add', {
        firstName: firstName,
        lastName: lastName,
        subjectName: subjectName,
        studentsCount: studentsCount
      }, function (teachers) {
        return getAppContext().innerHTML = (0, _Teachers.default)(teachers);
      });
    }
  });
}

function addComments() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__comment__button')) {
      var content = document.querySelector('.add__content').value;

      _apiActions.default.postRequest('http://localhost:8080/teachers/comments/add', {
        content: content
      }, function (comments) {
        return getAppContext().innerHTML = (0, _Comments.default)(comments);
      });
    }
  });
}

function addChildrens() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('add__child__button')) {
      var firstName = document.querySelector('.add__firstName').value;
      var lastName = document.querySelector('.add__lastName').value;
      var age = document.querySelector('.add__age').value;

      _apiActions.default.postRequest('http://localhost:8080/childrens/add', {
        firstName: firstName,
        lastName: lastName,
        age: age
      }, function (childrens) {
        return getAppContext().innerHTML = (0, _Childs.default)(childrens);
      });
    }
  });
}

function viewSingleParent() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('parent__parentName')) {
      _apiActions.default.getRequest("http://localhost:8080/parents/ ".concat(event.target.id), function (parent) {
        getAppContext().innerHTML = (0, _Parent.default)(parent);
      });
    }
  });
}

function viewSingleChild() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('children__childrenName')) {
      _apiActions.default.getRequest("http://localhost:8080/childrens/ ".concat(event.target.id), function (child) {
        getAppContext().innerHTML = (0, _Child.default)(child);
      });
    }
  });
}

function viewSingleTeacher() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('teacher__teacherName')) {
      _apiActions.default.getRequest("http://localhost:8080/teachers/ ".concat(event.target.id), function (teacher) {
        getAppContext().innerHTML = (0, _Teacher.default)(teacher);
      });
    }
  });
}

function viewSingleComment() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('comment__content')) {
      _apiActions.default.getRequest("http://localhost:8080/comments/".concat(event.target.id), function (comment) {
        getAppContext().innerHTML = (0, _Comment.default)(comment);
      });
    }
  });
}

function updateComment() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('update__comment__button')) {
      var newContent = event.target.parentElement.querySelector('.update__comment').value;

      _apiActions.default.postRequest("http://localhost:8080/comments/update/".concat(event.target.id), {
        newContent: newContent
      }, function (comment) {
        return getAppContext().innerHTML = (0, _Comment.default)(comment);
      });
    }
  });
}

function deleteSingleComment() {
  _eventActions.default.on(getAppContext(), 'click', function () {
    if (event.target.classList.contains('delete__comment__button')) {
      _apiActions.default.deleteRequest("http://localhost:8080/comments/delete/".concat(event.target.id), function (teacher) {
        getAppContext().innerHTML = (0, _Teacher.default)(teacher);
      });
    }
  });
}

function getAppContext() {
  return document.querySelector('#app');
}
},{"./utils/events/event-actions":"JS/utils/events/event-actions.js","./utils/api/api-actions":"JS/utils/api/api-actions.js","./components/Parents":"JS/components/Parents.js","./components/Teachers":"JS/components/Teachers.js","./components/Childs":"JS/components/Childs.js","./components/Comments":"JS/components/Comments.js","./components/Parent":"JS/components/Parent.js","./components/Child":"JS/components/Child.js","./components/Teacher":"JS/components/Teacher.js","./components/Comment":"JS/components/Comment.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56315" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","JS/app.js"], null)
//# sourceMappingURL=/app.c4e5fddc.js.map