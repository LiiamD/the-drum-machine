"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var DrumMachine = /*#__PURE__*/function (_React$Component) {
  function DrumMachine(props) {
    var _this;
    _classCallCheck(this, DrumMachine);
    _this = _callSuper(this, DrumMachine, [props]);
    _defineProperty(_this, "handleKeyDown", function (e) {
      var idEl = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
      if (idEl.includes(e.key.toUpperCase())) {
        _this.player(e.key.toUpperCase());
      }
    });
    _this.state = {
      message: "Drum machine"
    };
    _this.audio = {
      Q: "Heater 1",
      W: "Heater 2",
      E: "Heater 3",
      A: "Heater 4",
      S: "Clap",
      D: "Open HH",
      Z: "Kick n' Hat",
      X: "Kick",
      C: "Closed HH"
    };
    _this.player = _this.player.bind(_this);
    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
    _this.nameAudio = _this.nameAudio.bind(_this);
    return _this;
  }
  _inherits(DrumMachine, _React$Component);
  return _createClass(DrumMachine, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleKeyDown);
    }
  }, {
    key: "player",
    value: function player(id) {
      document.getElementById(id).play();
      this.nameAudio(id);
    }
  }, {
    key: "nameAudio",
    value: function nameAudio(id) {
      this.setState({
        message: this.audio[id]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/React.createElement("div", {
        id: "drum-machine"
      }, /*#__PURE__*/React.createElement("div", {
        id: "display"
      }, " ", /*#__PURE__*/React.createElement("div", {
        id: "result"
      }, this.state.message), /*#__PURE__*/React.createElement("div", {
        id: "btn-display"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("Q");
        },
        className: "drum-pad",
        id: "heater-1"
      }, "Q", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3",
        className: "clip",
        id: "Q"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("W");
        },
        className: "drum-pad",
        id: "heater-2"
      }, "W", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3",
        className: "clip",
        id: "W"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("E");
        },
        className: "drum-pad",
        id: "heater-3"
      }, "E", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3",
        className: "clip",
        id: "E"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("A");
        },
        className: "drum-pad",
        id: "heater-4"
      }, "A", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3",
        className: "clip",
        id: "A"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("S");
        },
        className: "drum-pad",
        id: "clap"
      }, "S", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
        className: "clip",
        id: "S"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("D");
        },
        className: "drum-pad",
        id: "open-hh"
      }, "D", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
        className: "clip",
        id: "D"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("Z");
        },
        className: "drum-pad",
        id: "kick-n-hat"
      }, "Z", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3",
        className: "clip",
        id: "Z"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("X");
        },
        className: "drum-pad",
        id: "kike"
      }, "X", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3",
        className: "clip",
        id: "X"
      })), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this2.player("C");
        },
        className: "drum-pad",
        id: "closed-hh"
      }, "C", /*#__PURE__*/React.createElement("audio", {
        src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3",
        className: "clip",
        id: "C"
      })))));
    }
  }]);
}(React.Component);
ReactDOM.render(/*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById("app"));