"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AIOTableFilterPopup = void 0;

var _react = _interopRequireWildcard(require("react"));

var _aioButton = _interopRequireDefault(require("aio-button"));

var _react2 = require("@mdi/react");

var _js = require("@mdi/js");

var _jquery = _interopRequireDefault(require("jquery"));

var _rRangeSlider = _interopRequireDefault(require("r-range-slider"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AioTableContext = /*#__PURE__*/(0, _react.createContext)();

var AIOTable = /*#__PURE__*/function (_Component) {
  _inherits(AIOTable, _Component);

  var _super = _createSuper(AIOTable);

  function AIOTable(props) {
    var _this;

    _classCallCheck(this, AIOTable);

    _this = _super.call(this, props);
    _this.fn = new ATFN({
      getProps: function getProps() {
        return _this.props;
      },
      getState: function getState() {
        return _this.state;
      },
      setState: function setState(obj) {
        return _this.setState(obj);
      }
    });
    var touch = ('ontouchstart' in document.documentElement);
    _this.dom = /*#__PURE__*/(0, _react.createRef)();
    var _this$props = _this.props,
        freezeSize = _this$props.freezeSize,
        sorts = _this$props.sorts,
        paging = _this$props.paging,
        columns = _this$props.columns,
        groups = _this$props.groups;

    var cardRowCount = _this.fn.getCardRowCount();

    var openDictionary = _this.fn.getOpenDictionary(),
        groupDictionary = _this.fn.getGroupDictionaty();

    _this.fn.handleOutsideClick();

    var copiedColumns = _toConsumableArray(columns);

    _this.state = {
      touch: touch,
      openDictionary: openDictionary,
      cardRowCount: cardRowCount,
      groups: groups,
      filterDictionary: {},
      groupsOpen: {},
      searchText: '',
      freezeSize: freezeSize,
      groupDictionary: groupDictionary,
      sorts: sorts,
      //make imutable to prevent change of props.paging because that will compaire with next input props.paging
      paging: paging ? { ...paging
      } : false,
      prevPaging: JSON.stringify(paging),
      columns: copiedColumns,
      prevColumns: JSON.stringify(copiedColumns),
      focused: false,
      toggleAllState: true
    };
    return _this;
  }

  _createClass(AIOTable, [{
    key: "copyJson",
    value: function copyJson(j) {
      var a = function a(o) {
        if (Array.isArray(o)) {
          return o.map(function (o) {
            return a(o);
          });
        }

        if (_typeof(o) === 'object') {
          var r = {};

          for (var prop in o) {
            r[prop] = a(o[prop]);
          }

          return r;
        }

        return o;
      };

      return a(j);
    }
  }, {
    key: "getGap",
    value: function getGap() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-gap",
        style: {
          width: this.props.cellGap
        }
      });
    }
  }, {
    key: "resizeDown",
    value: function resizeDown(e) {
      var touch = this.state.touch;
      (0, _jquery.default)(window).bind(touch ? 'touchmove' : 'mousemove', _jquery.default.proxy(this.resizeMove, this));
      (0, _jquery.default)(window).bind(touch ? 'touchend' : 'mouseup', _jquery.default.proxy(this.resizeUp, this));
      this.resizeDetails = {
        client: this.fn.getClient(e),
        width: this.state.freezeSize
      };
    }
  }, {
    key: "resizeMove",
    value: function resizeMove(e) {
      var rtl = this.props.rtl;
      var Client = this.fn.getClient(e);
      var _this$resizeDetails = this.resizeDetails,
          client = _this$resizeDetails.client,
          width = _this$resizeDetails.width;
      var offset = Client[0] - client[0];
      var newWidth = width + offset * (rtl ? -1 : 1);

      if (newWidth < 10) {
        newWidth = 10;
      }

      this.resizeDetails.newWidth = newWidth;
      (0, _jquery.default)('#aio-table-first-split').css({
        width: newWidth
      });
    }
  }, {
    key: "resizeUp",
    value: function resizeUp() {
      var touch = this.state.touch;
      (0, _jquery.default)(window).unbind(touch ? 'touchmove' : 'mousemove', this.resizeMove);
      (0, _jquery.default)(window).unbind(touch ? 'touchend' : 'mouseup', this.resizeUp);
      this.setState({
        freezeSize: this.resizeDetails.newWidth
      });
    }
  }, {
    key: "getTable",
    value: function getTable(Toolbar) {
      var _this2 = this;

      var freezeSize = this.state.freezeSize;
      var rows = this.getRows();
      this.rows = rows;
      var freezeMode = this.columnDetails.freeze.active;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'aio-table-body',
        style: this.fn.getBodyStyle(Toolbar)
      }, !freezeMode && /*#__PURE__*/_react.default.createElement(AIOTableUnit, {
        rows: rows,
        columns: this.columnDetails.visibleColumns,
        type: "cells"
      }), freezeMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(AIOTableUnit, {
        key: 0,
        id: "aio-table-first-split",
        rows: rows,
        columns: this.columnDetails.freeze.freezeColumns,
        tableIndex: 0,
        type: "freezeCells",
        style: {
          width: freezeSize
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-splitter",
        onMouseDown: function onMouseDown(e) {
          return _this2.resizeDown(e);
        },
        onTouchStart: function onTouchStart(e) {
          return _this2.resizeDown(e);
        }
      }), /*#__PURE__*/_react.default.createElement(AIOTableUnit, {
        key: 1,
        id: "aio-table-second-split",
        rows: rows,
        columns: this.columnDetails.freeze.unFreezeColumns,
        tableIndex: 1,
        type: "unFreezeCells"
      })));
    }
  }, {
    key: "getRows",
    value: function getRows() {
      var model = this.props.model;

      if (!model) {
        return false;
      }

      this.index = {
        render: 0,
        real: 0
      };
      var rows;
      rows = this.fn.getRowsNested(_toConsumableArray(model), '_childs');
      rows = this.fn.getRowsBySort(rows, this.sorts);
      rows = this.fn.getRows(rows, this.columnDetails);
      rows = this.fn.getRootsByPaging(rows, this.index);
      rows = this.fn.getRootsByGroup(rows, this.groups);
      return this.fn.getRowsByRoots(rows);
    }
  }, {
    key: "updateColumns",
    value: function updateColumns() {
      var _this3 = this;

      var _this$props2 = this.props,
          search = _this$props2.search,
          translate = _this$props2.translate,
          cardTemplate = _this$props2.cardTemplate,
          _this$props2$toggleAl = _this$props2.toggleAll,
          toggleAll = _this$props2$toggleAl === void 0 ? false : _this$props2$toggleAl,
          _this$props2$toolbarI = _this$props2.toolbarItems,
          toolbarItems = _this$props2$toolbarI === void 0 ? [] : _this$props2$toolbarI;
      var columns = this.state.columns;
      this.columnDetails = {
        freeze: {
          active: false,
          freezeColumns: [],
          unFreezeColumns: []
        },
        visibleColumns: []
      };
      this.toolbar = {
        show: toggleAll === true || toolbarItems.length > 0,
        toggle: [{
          text: translate('Show Columns')
        }],
        toggleAll: toggleAll ? function () {
          return _this3.setState(_this3.fn.getStateByToggleAll(_this3.rows));
        } : false,
        freeze: [{
          text: translate('Freeze')
        }],
        groupBy: [{
          text: translate('Group By')
        }],
        sort: [{
          text: translate('Sort')
        }],
        excelColumns: [],
        searchColumnIndex: false,
        search: search
      };
      this.sorts = this.fn.getSorts(this.toolbar);
      this.groups = this.fn.getGroups(this.toolbar);

      if (search) {
        this.toolbar.show = true;
      }

      if (cardTemplate) {
        return;
      }

      for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        column._index = i;
        this.fn.setColumnByStorage(column);

        if (column.show && this.fn.showColumnRelativeGroups(column)) {
          this.columnDetails.visibleColumns.push(column);

          if (column.excel) {
            this.toolbar.excelColumns.push(column);
            this.toolbar.show = true;
          }

          this.fn.getFreezes(i, this.columnDetails, this.toolbar);
        }

        if (column.toggleShow) {
          this.fn.getToggleShows(i, this.toolbar);
        }

        if (column.search) {
          this.toolbar.show = true;
          this.toolbar.searchColumnIndex = column._index;
        }
      }

      if (this.columnDetails.freeze.freezeColumns.length === 0 || this.columnDetails.freeze.unFreezeColumns.length === 0) {
        this.columnDetails.freeze.active = false;
      }
    }
  }, {
    key: "onChangeFilter",
    value: function onChangeFilter(obj) {
      var onChangeFilter = this.props.onChangeFilter;
      var columns = this.state.columns;
      var filters = [];

      for (var prop in obj) {
        if (obj[prop].items.length) {
          filters.push({
            column: columns[prop],
            ...obj[prop]
          });
        }
      }

      onChangeFilter(filters);
    }
  }, {
    key: "handleIncomingProps",
    value: function handleIncomingProps() {
      var _this4 = this;

      var _this$props3 = this.props,
          columns = _this$props3.columns,
          paging = _this$props3.paging;
      var _this$state = this.state,
          prevColumns = _this$state.prevColumns,
          prevPaging = _this$state.prevPaging;
      var c = JSON.stringify(columns);

      if (c !== prevColumns) {
        setTimeout(function () {
          return _this4.setState({
            columns: columns.map(function (o) {
              return { ...o
              };
            }),
            prevColumns: JSON.stringify(columns)
          });
        }, 0);
      }

      var p = JSON.stringify(paging);

      if (p !== prevPaging) {
        setTimeout(function () {
          return _this4.setState({
            paging: { ...paging
            },
            prevPaging: JSON.stringify(paging)
          });
        }, 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      this.handleIncomingProps();
      var _this$props4 = this.props,
          rowHeight = _this$props4.rowHeight,
          headerHeight = _this$props4.headerHeight,
          toolbarHeight = _this$props4.toolbarHeight,
          rowGap = _this$props4.rowGap,
          className = _this$props4.className,
          columnGap = _this$props4.columnGap,
          rtl = _this$props4.rtl,
          style = _this$props4.style,
          _this$props4$attrs = _this$props4.attrs,
          attrs = _this$props4$attrs === void 0 ? {} : _this$props4$attrs,
          cardTemplate = _this$props4.cardTemplate,
          onChangeFilter = _this$props4.onChangeFilter,
          onSwap = _this$props4.onSwap,
          padding = _this$props4.padding,
          translate = _this$props4.translate;
      var _this$state2 = this.state,
          columns = _this$state2.columns,
          paging = _this$state2.paging;
      this.rh = rowHeight;
      this.hh = headerHeight;
      this.th = toolbarHeight;
      this.rg = rowGap;
      this.cg = columnGap;
      this.updateColumns();
      var Toolbar = this.toolbar.show ? /*#__PURE__*/_react.default.createElement(RTableToolbar, this.toolbar) : null;
      var table = columns ? this.getTable(Toolbar) : '';
      var context = { ...this.props,
        ...this.state,
        onDrag: function onDrag(obj) {
          return _this5.dragStart = obj;
        },
        onDrop: function onDrop(obj) {
          if (!_this5.dragStart) {
            return;
          }

          if (_this5.dragStart._level !== obj._level) {
            return;
          }

          if (_this5.dragStart._level === 0) {
            onSwap(_this5.dragStart, obj);
          } else {
            var startParents = _this5.dragStart._getParents().map(function (o) {
              return o._index;
            }).toString();

            var endParents = obj._getParents().map(function (o) {
              return o._index;
            }).toString();

            if (startParents !== endParents) {
              return;
            }

            onSwap(_this5.dragStart, obj);
          }
        },
        onChangeFilter: onChangeFilter ? this.onChangeFilter.bind(this) : undefined,
        SetState: function SetState(obj) {
          return _this5.setState(obj);
        },
        getGap: this.getGap.bind(this),
        onScroll: function onScroll(index) {
          return _this5.fn.onScroll(_this5.dom, index);
        },
        groups: this.groups,
        fn: this.fn,
        rows: this.rows
      };
      return /*#__PURE__*/_react.default.createElement(AioTableContext.Provider, {
        value: context
      }, /*#__PURE__*/_react.default.createElement("div", _extends({
        className: 'aio-table' + (className ? ' ' + className : '') + (rtl ? ' rtl' : ''),
        tabIndex: 0,
        ref: this.dom,
        style: { ...style,
          padding: padding
        }
      }, attrs), Toolbar, !cardTemplate && this.columnDetails.visibleColumns.length === 0 && this.fn.getLoading(), table, paging && /*#__PURE__*/_react.default.createElement(AIOTablePaging, {
        rtl: rtl,
        translate: translate,
        paging: paging,
        onChange: function onChange(obj) {
          _this5.setState({
            paging: obj
          });

          if (paging.onChange) {
            paging.onChange(obj);
          }
        }
      })));
    }
  }]);

  return AIOTable;
}(_react.Component);

exports.default = AIOTable;
AIOTable.defaultProps = {
  columns: [],
  headerHeight: 36,
  rowHeight: 36,
  toolbarHeight: 36,
  rowGap: 6,
  padding: 12,
  indent: 20,
  translate: function translate(text) {
    return text;
  },
  freezeSize: 300,
  sorts: [],
  groups: []
};

var RTableToolbar = /*#__PURE__*/function (_Component2) {
  _inherits(RTableToolbar, _Component2);

  var _super2 = _createSuper(RTableToolbar);

  function RTableToolbar() {
    var _this6;

    _classCallCheck(this, RTableToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this6 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this6), "state", {
      searchText: ''
    });

    return _this6;
  }

  _createClass(RTableToolbar, [{
    key: "changeSearch",
    value: function changeSearch(value) {
      var _this7 = this;

      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      clearTimeout(this.searchTimeout);
      this.setState({
        searchText: value
      });
      this.searchTimeout = setTimeout(function () {
        var SetState = _this7.context.SetState;
        var search = _this7.props.search;

        if (search) {
          SetState({
            searchText: value
          });
        } else {
          var filterDictionary = _this7.context.filterDictionary;
          var searchColumnIndex = _this7.props.searchColumnIndex;
          filterDictionary[searchColumnIndex] = {
            items: value ? [{
              operator: 'contain',
              value: value
            }] : [],
            booleanType: 'or'
          };
          SetState({
            filterDictionary: filterDictionary
          });
        }
      }, time);
    }
  }, {
    key: "getSearch",
    value: function getSearch() {
      var _this8 = this;

      var translate = this.context.translate;
      var searchText = this.state.searchText;
      var _this$props5 = this.props,
          searchColumnIndex = _this$props5.searchColumnIndex,
          search = _this$props5.search;

      if (typeof searchColumnIndex !== 'number' && !search) {
        return /*#__PURE__*/_react.default.createElement("div", {
          style: {
            flex: 1
          },
          key: "search"
        });
      }

      return /*#__PURE__*/_react.default.createElement("div", _defineProperty({
        key: "aio-toolbar-search",
        className: "aio-table-search"
      }, "key", "search"), /*#__PURE__*/_react.default.createElement("input", {
        className: "aio-table-search-input",
        type: "text",
        value: searchText,
        placeholder: translate('Search'),
        onChange: function onChange(e) {
          return _this8.changeSearch(e.target.value);
        }
      }), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        className: "aio-table-search-icon",
        path: searchText ? _js.mdiClose : _js.mdiMagnify,
        size: 0.8,
        onClick: function onClick() {
          if (!searchText) {
            return;
          }

          _this8.changeSearch('', 0);
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this9 = this;

      var _this$context = this.context,
          fn = _this$context.fn,
          rows = _this$context.rows,
          translate = _this$context.translate,
          rtl = _this$context.rtl,
          toggleAllState = _this$context.toggleAllState,
          padding = _this$context.padding,
          _this$context$toolbar = _this$context.toolbarItems,
          toolbarItems = _this$context$toolbar === void 0 ? [] : _this$context$toolbar,
          SetState = _this$context.SetState,
          _this$context$toolbar2 = _this$context.toolbarStyle,
          toolbarStyle = _this$context$toolbar2 === void 0 ? {} : _this$context$toolbar2;
      var _this$props6 = this.props,
          toggle = _this$props6.toggle,
          freeze = _this$props6.freeze,
          groupBy = _this$props6.groupBy,
          sort = _this$props6.sort,
          toggleAll = _this$props6.toggleAll,
          excelColumns = _this$props6.excelColumns;
      var buttonProps = {
        type: 'select',
        caret: false,
        rtl: rtl,
        className: 'aio-table-toolbar-button',
        animate: true
      };
      var iconSize = 0.7;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-toolbar",
        style: {
          marginBottom: padding,
          ...toolbarStyle
        }
      }, toggleAll !== false && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: "toggleAll"
      }, buttonProps, {
        type: "button",
        title: translate('Toggle All'),
        onClick: function onClick() {
          return toggleAll();
        },
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: !toggleAllState ? _js.mdiCollapseAll : _js.mdiExpandAll,
          size: iconSize
        })
      })), excelColumns.length > 0 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: "excel"
      }, buttonProps, {
        type: "button",
        title: translate('Export To Excel'),
        onClick: function onClick() {
          fn.exportToExcel(excelColumns, rows);
        },
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiMicrosoftExcel,
          size: iconSize
        })
      })), toolbarItems.map(function (o, i) {
        return /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
          type: "button",
          rtl: rtl,
          className: "aio-table-toolbar-button",
          animate: true
        }, o, {
          key: 'ti' + i
        }));
      }), this.getSearch(), groupBy.length > 1 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: "groupby"
      }, buttonProps, {
        options: groupBy,
        title: translate('Group By'),
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiFileTree,
          size: iconSize,
          horizontal: rtl === true
        }),
        onSwap: function onSwap(start, end, swap) {
          var groups = _this9.context.groups;
          SetState({
            groups: swap(groups, start - 1, end - 1)
          });
        }
      })), sort.length > 1 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: "sort"
      }, buttonProps, {
        options: sort,
        title: translate('Sort'),
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiSort,
          size: iconSize
        }),
        onSwap: function onSwap(start, end, swap) {
          var sorts = _this9.context.sorts;
          SetState({
            sorts: swap(sorts, start - 1, end - 1)
          }); //-1 because title of items added to options[0]
        }
      })), toggle.length > 1 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: "toggle"
      }, buttonProps, {
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiEye,
          size: iconSize
        }),
        options: toggle,
        title: translate('Show Columns'),
        popupStyle: {
          maxHeight: 400
        }
      })), freeze.length > 1 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: "freeze"
      }, buttonProps, {
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiAlignHorizontalLeft,
          size: iconSize,
          horizontal: rtl === true
        }),
        options: freeze,
        title: translate('Freeze Columns')
      })));
    }
  }]);

  return RTableToolbar;
}(_react.Component);

_defineProperty(RTableToolbar, "contextType", AioTableContext);

var AIOTablePaging = /*#__PURE__*/function (_Component3) {
  _inherits(AIOTablePaging, _Component3);

  var _super3 = _createSuper(AIOTablePaging);

  function AIOTablePaging() {
    _classCallCheck(this, AIOTablePaging);

    return _super3.apply(this, arguments);
  }

  _createClass(AIOTablePaging, [{
    key: "getPageNumber",
    value: function getPageNumber(type) {
      var paging = this.props.paging;
      var _paging$pages = paging.pages,
          pages = _paging$pages === void 0 ? 1 : _paging$pages,
          number = paging.number;
      var newNumber;

      if (type === 'prev') {
        newNumber = number - 1;
      } else if (type === 'next') {
        newNumber = number + 1;
      } else if (type === 'first') {
        newNumber = 1;
      } else if (type === 'last') {
        newNumber = pages;
      }

      if (newNumber < 1) {
        newNumber = 1;
      }

      if (newNumber > pages) {
        newNumber = pages;
      }

      return newNumber;
    }
  }, {
    key: "changePage",
    value: function changePage(type) {
      var _this$props7 = this.props,
          paging = _this$props7.paging,
          onChange = _this$props7.onChange;
      var number = paging.number;
      var newNumber = this.getPageNumber(type);

      if (newNumber === number) {
        return;
      }

      onChange({ ...paging,
        number: newNumber
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var _this$props8 = this.props,
          paging = _this$props8.paging,
          _onChange = _this$props8.onChange,
          rtl = _this$props8.rtl,
          _this$props8$translat = _this$props8.translate,
          translate = _this$props8$translat === void 0 ? function (str) {
        return str;
      } : _this$props8$translat;
      var number = paging.number,
          _paging$sizes = paging.sizes,
          sizes = _paging$sizes === void 0 ? [1, 5, 10, 20, 30, 40, 50, 60, 70, 80] : _paging$sizes,
          size = paging.size,
          _paging$pages2 = paging.pages,
          pages = _paging$pages2 === void 0 ? 1 : _paging$pages2;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging",
        style: {
          direction: 'ltr'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-button",
        onClick: function onClick() {
          return _this10.changePage(rtl ? 'last' : 'first');
        },
        title: translate(rtl ? 'Last Page' : 'First Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronDoubleLeft,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-button",
        onClick: function onClick() {
          return _this10.changePage(rtl ? 'next' : 'prev');
        },
        title: translate(rtl ? 'Next Page' : 'Previous Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronLeft,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-number"
      }, rtl ? pages + ' / ' + number : number + ' / ' + pages), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-button",
        onClick: function onClick() {
          return _this10.changePage(rtl ? 'prev' : 'next');
        },
        title: translate(rtl ? 'Previous Page' : 'Next Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronRight,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-button",
        onClick: function onClick() {
          return _this10.changePage(rtl ? 'first' : 'last');
        },
        title: translate(rtl ? 'First Page' : 'Last Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronDoubleRight,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("select", {
        className: "aio-table-paging-button",
        value: size,
        onChange: function onChange(e) {
          return _onChange({ ...paging,
            size: parseInt(e.target.value)
          });
        },
        title: translate('Rows Count Per Page')
      }, sizes.map(function (s, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: s
        }, s);
      })));
    }
  }]);

  return AIOTablePaging;
}(_react.Component);

var AIOTableUnit = /*#__PURE__*/function (_Component4) {
  _inherits(AIOTableUnit, _Component4);

  var _super4 = _createSuper(AIOTableUnit);

  function AIOTableUnit(props) {
    var _this11;

    _classCallCheck(this, AIOTableUnit);

    _this11 = _super4.call(this, props);
    _this11.dom = /*#__PURE__*/(0, _react.createRef)();
    return _this11;
  }

  _createClass(AIOTableUnit, [{
    key: "getStyle",
    value: function getStyle() {
      var _this$context2 = this.context,
          rowGap = _this$context2.rowGap,
          columnGap = _this$context2.columnGap;
      var _this$props9 = this.props,
          columns = _this$props9.columns,
          style = _this$props9.style;
      var gridTemplateColumns = '';
      this.gridTemplateColumns = [];

      for (var i = 0; i < columns.length; i++) {
        var _columns$i$width = columns[i].width,
            width = _columns$i$width === void 0 ? 'auto' : _columns$i$width;
        width = width.toString();

        if (width !== 'auto' && width.indexOf('px') === -1) {
          width += 'px';
        }

        this.gridTemplateColumns.push(width);
        gridTemplateColumns += width + (i < columns.length - 1 ? ' ' : '');
      }

      return {
        gridTemplateColumns: gridTemplateColumns,
        gridRowGap: rowGap,
        gridColumnGap: columnGap,
        ...style
      };
    }
  }, {
    key: "setStyle",
    value: function setStyle(gridTemplateColumns) {
      (0, _jquery.default)(this.dom.current).css({
        gridTemplateColumns: gridTemplateColumns.join(' ')
      });
    }
  }, {
    key: "getTitles",
    value: function getTitles() {
      var _this12 = this;

      var columns = this.props.columns;
      return columns.map(function (column, i) {
        return /*#__PURE__*/_react.default.createElement(AIOTableTitle, {
          key: 'title' + i,
          column: column,
          gridTemplateColumns: _this12.gridTemplateColumns,
          setStyle: _this12.setStyle.bind(_this12),
          onDragStart: function onDragStart(index) {
            return _this12.startColumnSwap = index;
          },
          onDragOver: function onDragOver(e, index) {
            e.preventDefault();
            _this12.endColumnSwap = index;
          },
          onDrop: function onDrop(column) {
            var _this12$context = _this12.context,
                SetState = _this12$context.SetState,
                columns = _this12$context.columns;

            if (column.movable === false) {
              return;
            }

            if (_this12.startColumnSwap === undefined || _this12.startColumnSwap === _this12.endColumnSwap) {
              return;
            }

            var startColumn = columns[_this12.startColumnSwap];
            var endColumn = columns[_this12.endColumnSwap];
            var newColumns = columns.map(function (c, j) {
              if (j === _this12.startColumnSwap) {
                return endColumn;
              }

              if (j === _this12.endColumnSwap) {
                return startColumn;
              }

              return c;
            });
            SetState({
              columns: newColumns
            });
          }
        });
      });
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      var SetState = this.context.SetState;

      if (e.keyCode === 27) {
        (0, _jquery.default)('.aio-table-input').blur();
        SetState({
          focused: false
        });
      } else if ([37, 38, 39, 40].indexOf(e.keyCode) !== -1) {
        this.arrow(e);
      }
    }
  }, {
    key: "arrow",
    value: function arrow(e) {
      var container = (0, _jquery.default)(this.dom.current);
      var _this$context3 = this.context,
          rtl = _this$context3.rtl,
          focused = _this$context3.focused,
          SetState = _this$context3.SetState;
      var columns = this.props.columns;
      var inputs = container.find('.aio-table-input');

      if (inputs.length === 0) {
        return;
      }

      var focusedInput = inputs.filter(':focus');

      if (focused === false) {
        var inputCells = (0, _jquery.default)('.aio-table-cell-input');

        if (inputCells.length) {
          var cell = inputCells.eq(0);
          var cellId = cell.attr('cellid');
          SetState({
            focused: cellId
          });
          setTimeout(function () {
            (0, _jquery.default)('.aio-table-cell-input[cellid=' + cellId + '] .aio-table-input').focus().select();
          }, 10);
        }

        return;
      }

      var _this$getCellIndex = this.getCellIndex(focusedInput.parents('.aio-table-cell')),
          _this$getCellIndex2 = _slicedToArray(_this$getCellIndex, 2),
          rowIndex = _this$getCellIndex2[0],
          colIndex = _this$getCellIndex2[1];

      if (e.keyCode === 40 || e.keyCode === 38) {
        var sign = e.keyCode === 40 ? 1 : -1;
        e.preventDefault();
        rowIndex += sign;
        var next = inputs.filter("[rowindex=".concat(rowIndex, "][colindex=").concat(colIndex, "]"));

        while (rowIndex < this.renderIndex && rowIndex > 0 && next.length === 0) {
          rowIndex += sign;
          next = inputs.filter("[rowindex=".concat(rowIndex, "][colindex=").concat(colIndex, "]"));
        }

        if (next.length) {
          next.focus();
          setTimeout(function () {
            return next.select();
          }, 5);
        }
      } else if (e.keyCode === 39 || e.keyCode === 37) {
        e.preventDefault();

        var _sign = (e.keyCode === 37 ? -1 : 1) * (rtl ? -1 : 1);

        colIndex += _sign;

        var _next = inputs.filter("[rowindex=".concat(rowIndex, "][colindex=").concat(colIndex, "]"));

        while (colIndex > 0 && colIndex < columns.length && _next.length === 0) {
          colIndex += _sign;
          _next = inputs.filter("[rowindex=".concat(rowIndex, "][colindex=").concat(colIndex, "]"));
        }

        if (_next.length) {
          _next.focus();

          setTimeout(function () {
            return _next.select();
          }, 5);
        }
      }
    }
  }, {
    key: "getCellIndex",
    value: function getCellIndex(cell) {
      return [parseInt(cell.attr('rowindex')), parseInt(cell.attr('colindex'))];
    }
  }, {
    key: "card",
    value: function card(props) {
      var _this$context4 = this.context,
          rowHeight = _this$context4.rowHeight,
          fn = _this$context4.fn,
          cardTemplate = _this$context4.cardTemplate,
          cardRowCount = _this$context4.cardRowCount,
          search = _this$context4.search,
          searchText = _this$context4.searchText;
      var _this$props10 = this.props,
          tableIndex = _this$props10.tableIndex,
          columns = _this$props10.columns;
      var groupStyle = {
        gridColumnStart: 1,
        gridColumnEnd: cardRowCount + 1,
        height: rowHeight
      };

      if (cardRowCount === 'auto') {
        groupStyle.gridColumnStart = undefined;
        groupStyle.gridColumnEnd = undefined;
      }

      var rows;

      if (search) {
        rows = this.props.rows.filter(function (o) {
          return search(o.row, searchText);
        });
      } else {
        rows = this.props.rows;
      }

      return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
        style: { ...props.style,
          gridTemplateColumns: cardRowCount === 'auto' ? undefined : "repeat(".concat(cardRowCount, ",auto)")
        }
      }), rows && rows.length !== 0 && rows.map(function (row, rowIndex) {
        if (row._groupId) {
          return /*#__PURE__*/_react.default.createElement(AIOTableGroup, {
            row: row,
            rowIndex: rowIndex,
            tableIndex: tableIndex
          });
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          key: rowIndex + '-' + tableIndex,
          className: "aio-table-card"
        }, cardTemplate(row.row, function () {
          return fn.toggleRow(row.row);
        }));
      }), rows && rows.length === 0 && fn.getNoData(columns), !rows && fn.getLoading());
    }
  }, {
    key: "render",
    value: function render() {
      var _this13 = this;

      var _this$context5 = this.context,
          _onScroll = _this$context5.onScroll,
          fn = _this$context5.fn;
      var _this$props11 = this.props,
          rows = _this$props11.rows,
          id = _this$props11.id,
          tableIndex = _this$props11.tableIndex,
          type = _this$props11.type,
          columns = _this$props11.columns;
      var props = {
        id: id,
        tabIndex: 0,
        className: 'aio-table-unit',
        style: this.getStyle(),
        ref: this.dom,
        onKeyDown: this.keyDown.bind(this),
        onScroll: function onScroll(e) {
          return _onScroll(tableIndex);
        }
      };

      if (this.context.cardTemplate) {
        return this.card(props);
      }

      this.renderIndex = -1;
      return /*#__PURE__*/_react.default.createElement("div", props, this.getTitles(), rows && rows.length !== 0 && rows.map(function (row, i) {
        if (row._groupId) {
          return /*#__PURE__*/_react.default.createElement(AIOTableGroup, {
            tableIndex: tableIndex,
            row: row,
            columns: columns,
            key: 'group' + i + '-' + tableIndex
          });
        }

        _this13.renderIndex++;
        return row[type].map(function (r, j) {
          return /*#__PURE__*/_react.default.createElement(AIOTableCell, _extends({
            cellId: i + '-' + j + '-' + tableIndex,
            renderIndex: _this13.renderIndex
          }, r, {
            row: row.row
          }));
        });
      }), rows && rows.length === 0 && fn.getNoData(columns), !rows && fn.getLoading());
    }
  }]);

  return AIOTableUnit;
}(_react.Component);

_defineProperty(AIOTableUnit, "contextType", AioTableContext);

var AIOTableTitle = /*#__PURE__*/function (_Component5) {
  _inherits(AIOTableTitle, _Component5);

  var _super5 = _createSuper(AIOTableTitle);

  function AIOTableTitle() {
    _classCallCheck(this, AIOTableTitle);

    return _super5.apply(this, arguments);
  }

  _createClass(AIOTableTitle, [{
    key: "getStyle",
    value: function getStyle() {
      var _this$context6 = this.context,
          headerHeight = _this$context6.headerHeight,
          columnGap = _this$context6.columnGap;
      return {
        height: headerHeight,
        top: 0,
        borderLeft: columnGap ? 'none' : undefined,
        borderRight: columnGap ? 'none' : undefined
      };
    }
  }, {
    key: "mouseDown",
    value: function mouseDown(e, column) {
      if (!column.resizable) {
        return;
      }

      this.resizeDown(e, column);
    }
  }, {
    key: "resizeDown",
    value: function resizeDown(e, column) {
      var _this$context7 = this.context,
          touch = _this$context7.touch,
          fn = _this$context7.fn;
      var gridTemplateColumns = this.props.gridTemplateColumns;
      this.resized = false;
      (0, _jquery.default)(window).bind(touch ? 'touchmove' : 'mousemove', _jquery.default.proxy(this.resizeMove, this));
      (0, _jquery.default)(window).bind(touch ? 'touchend' : 'mouseup', _jquery.default.proxy(this.resizeUp, this));
      this.resizeDetails = {
        client: fn.getClient(e),
        width: parseInt(gridTemplateColumns[column._renderIndex]),
        renderIndex: column._renderIndex,
        index: column._index,
        minWidth: column.minWidth
      };
    }
  }, {
    key: "resizeMove",
    value: function resizeMove(e) {
      this.resized = true;
      var _this$context8 = this.context,
          rtl = _this$context8.rtl,
          fn = _this$context8.fn;
      var _this$props12 = this.props,
          setStyle = _this$props12.setStyle,
          gridTemplateColumns = _this$props12.gridTemplateColumns;
      var Client = fn.getClient(e);
      var _this$resizeDetails2 = this.resizeDetails,
          client = _this$resizeDetails2.client,
          renderIndex = _this$resizeDetails2.renderIndex,
          width = _this$resizeDetails2.width,
          _this$resizeDetails2$ = _this$resizeDetails2.minWidth,
          minWidth = _this$resizeDetails2$ === void 0 ? '30px' : _this$resizeDetails2$;
      var offset = Client[0] - client[0];
      var newWidth = width + offset * (rtl ? -1 : 1);

      if (newWidth < parseInt(minWidth)) {
        newWidth = parseInt(minWidth);
      }

      this.resizeDetails.newWidth = newWidth + 'px';
      gridTemplateColumns[renderIndex] = this.resizeDetails.newWidth;
      setStyle(gridTemplateColumns);
    }
  }, {
    key: "resizeUp",
    value: function resizeUp() {
      (0, _jquery.default)(window).unbind(touch ? 'touchmove' : 'mousemove', this.resizeMove);
      (0, _jquery.default)(window).unbind(touch ? 'touchend' : 'mouseup', this.resizeUp);

      if (!this.resized) {
        return;
      }

      var _this$context9 = this.context,
          touch = _this$context9.touch,
          columns = _this$context9.columns,
          SetState = _this$context9.SetState;
      var _this$resizeDetails3 = this.resizeDetails,
          index = _this$resizeDetails3.index,
          newWidth = _this$resizeDetails3.newWidth;
      var column = { ...columns[index],
        width: newWidth
      };

      if (column.storageKey) {
        column = { ...column,
          _storageObj: { ...column._storageObj,
            width: newWidth
          }
        };
        localStorage.setItem('aio-table-column-storage-' + column.storageKey, JSON.stringify(column._storageObj));
      }

      SetState({
        columns: columns.map(function (c, i) {
          if (i === index) {
            return column;
          }

          return c;
        })
      });
    }
  }, {
    key: "getGanttTitle",
    value: function getGanttTitle(column) {
      var _this$context10 = this.context,
          headerHeight = _this$context10.headerHeight,
          columnGap = _this$context10.columnGap;
      var getKeys = column.getKeys,
          _column$padding = column.padding,
          padding = _column$padding === void 0 ? '36px' : _column$padding;
      var keys = getKeys();
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-title aio-table-title-gantt",
        style: {
          padding: "0 ".concat(padding),
          height: headerHeight,
          top: 0,
          borderLeft: columnGap ? 'none' : undefined,
          borderRight: columnGap ? 'none' : undefined
        },
        key: column._index + 'title'
      }, /*#__PURE__*/_react.default.createElement(_rRangeSlider.default, {
        start: 0,
        end: keys.length - 1,
        labelStep: 1,
        editLabel: function editLabel(value) {
          return keys[value];
        },
        labelStyle: function labelStyle() {
          return {
            top: 0
          };
        },
        pointStyle: function pointStyle() {
          return {
            display: 'none'
          };
        },
        lineStyle: function lineStyle() {
          return {
            display: 'none'
          };
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this14 = this;

      var _this$props13 = this.props,
          column = _this$props13.column,
          _onDragStart = _this$props13.onDragStart,
          _onDragOver = _this$props13.onDragOver,
          _onDrop = _this$props13.onDrop;

      if (column.template === 'gantt') {
        return this.getGanttTitle(column);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        style: this.getStyle(),
        draggable: false,
        className: "aio-table-title"
      }, /*#__PURE__*/_react.default.createElement(AIOTableFilter, {
        column: column
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-title-text",
        style: {
          justifyContent: column.titleJustify !== false ? 'center' : undefined,
          cursor: column.movable === false ? undefined : 'move'
        },
        draggable: column.movable !== false,
        onDragStart: function onDragStart() {
          return _onDragStart(column._index);
        },
        onDragOver: function onDragOver(e) {
          return _onDragOver(e, column._index);
        },
        onDrop: function onDrop() {
          return _onDrop(column);
        }
      }, column.title), column.width !== 'auto' && /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-resize",
        style: {
          cursor: column.resizable ? 'col-resize' : 'default'
        },
        draggable: false,
        onTouchStart: function onTouchStart(e) {
          return _this14.mouseDown(e, column);
        },
        onMouseDown: function onMouseDown(e) {
          return _this14.mouseDown(e, column);
        }
      }));
    }
  }]);

  return AIOTableTitle;
}(_react.Component);

_defineProperty(AIOTableTitle, "contextType", AioTableContext);

var AIOTableGroup = /*#__PURE__*/function (_Component6) {
  _inherits(AIOTableGroup, _Component6);

  var _super6 = _createSuper(AIOTableGroup);

  function AIOTableGroup() {
    _classCallCheck(this, AIOTableGroup);

    return _super6.apply(this, arguments);
  }

  _createClass(AIOTableGroup, [{
    key: "getStyle",
    value: function getStyle(columns) {
      var _this$context11 = this.context,
          rowHeight = _this$context11.rowHeight,
          fn = _this$context11.fn;
      return { ...fn.getFullCellStyle(columns),
        height: rowHeight
      };
    }
  }, {
    key: "getIcon",
    value: function getIcon(row) {
      var rtl = this.context.rtl;

      if (row._opened) {
        return /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiChevronDown,
          size: 1
        });
      }

      return /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronRight,
        size: 1,
        horizontal: rtl === true
      });
    }
  }, {
    key: "click",
    value: function click(row) {
      var _this$context12 = this.context,
          SetState = _this$context12.SetState,
          groupsOpen = _this$context12.groupsOpen;
      var _groupId = row._groupId;
      groupsOpen[_groupId] = !groupsOpen[_groupId];
      SetState({
        groupsOpen: groupsOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      var _this$context13 = this.context,
          indent = _this$context13.indent,
          getGap = _this$context13.getGap;
      var _this$props14 = this.props,
          row = _this$props14.row,
          tableIndex = _this$props14.tableIndex,
          columns = _this$props14.columns;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-group",
        style: this.getStyle(columns)
      }, tableIndex !== 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: indent * row._level,
          flexShrink: 0
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-toggle",
        onClick: function onClick() {
          return _this15.click(row);
        }
      }, this.getIcon(row)), getGap(), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-group-text"
      }, row._groupValue)));
    }
  }]);

  return AIOTableGroup;
}(_react.Component);

_defineProperty(AIOTableGroup, "contextType", AioTableContext);

var AIOTableCell = /*#__PURE__*/function (_Component7) {
  _inherits(AIOTableCell, _Component7);

  var _super7 = _createSuper(AIOTableCell);

  function AIOTableCell(props) {
    var _this16;

    _classCallCheck(this, AIOTableCell);

    _this16 = _super7.call(this, props);
    _this16.dom = /*#__PURE__*/(0, _react.createRef)();
    var value = _this16.props.value;
    _this16.state = {
      value: value,
      error: false,
      prevValue: value
    };
    return _this16;
  }

  _createClass(AIOTableCell, [{
    key: "getBefore",
    value: function getBefore(row, column) {
      if (!column.before) {
        return '';
      }

      var before = typeof column.before === 'function' ? column.before(row, column) : column.before;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-icon"
      }, before), this.context.getGap());
    }
  }, {
    key: "getAfter",
    value: function getAfter(row, column) {
      if (!column.after) {
        return '';
      }

      var after = typeof column.after === 'function' ? column.after(row, column) : column.after;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          flex: 1
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-icon"
      }, after));
    }
  }, {
    key: "getStyle",
    value: function getStyle(column, row) {
      var _column$padding2 = column.padding,
          padding = _column$padding2 === void 0 ? '36px' : _column$padding2,
          template = column.template,
          _column$minWidth = column.minWidth,
          minWidth = _column$minWidth === void 0 ? '30px' : _column$minWidth;
      var _this$context14 = this.context,
          rowHeight = _this$context14.rowHeight,
          striped = _this$context14.striped;
      var style = {
        height: rowHeight,
        overflow: template ? undefined : 'hidden',
        minWidth: minWidth
      };

      if (typeof striped === 'string' && row._index % 2 === 0) {
        style.background = striped;
      }

      if (column.template === 'gantt') {
        style.padding = "0 ".concat(padding);
      }

      return style;
    }
  }, {
    key: "getClassName",
    value: function getClassName(row, column) {
      var className = 'aio-table-cell';
      var striped = this.context.striped;
      var renderIndex = this.props.renderIndex;

      if (renderIndex % 2 === 0 && striped === true) {
        className += ' striped';
      }

      if (column.selectable !== false) {
        className += ' aio-table-cell-selectable';
      }

      if (column.template) {
        className += ' aio-table-cell-template';
      }

      if (column.template === 'gantt') {
        className += ' aio-table-cell-gantt';
      }

      if (column.className) {
        className += ' ' + column.className;
      }

      if (column.inlineEdit) {
        className += ' aio-table-cell-input';
      }

      if (row._show === 'relativeFilter') {
        className += ' aio-table-relative-filter';
      }

      if (row._show === false) {
        className += ' aio-table-cell-hidden';
      }

      return className;
    }
  }, {
    key: "getToggleIcon",
    value: function getToggleIcon(row) {
      var _this$context15 = this.context,
          rtl = _this$context15.rtl,
          fn = _this$context15.fn;
      var icon;

      if (!row._childsLength) {
        icon = /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: '',
          size: 1
        });
      } else if (row._opened) {
        icon = /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiChevronDown,
          size: 1
        });
      } else {
        icon = /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiChevronRight,
          size: 1,
          horizontal: rtl === true
        });
      }

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-toggle",
        onClick: function onClick() {
          return fn.toggleRow(row);
        }
      }, icon), this.context.getGap());
    }
  }, {
    key: "getContent",
    value: function getContent(row, column, value) {
      var _this$context16 = this.context,
          focused = _this$context16.focused,
          fn = _this$context16.fn;
      var content = '';
      var template = typeof column.template === 'function' ? column.template(row, column) : column.template;

      if (template && template.type === 'slider') {
        content = fn.getSliderCell(template);
      } else if (template && template.type === 'options') {
        content = fn.getOptionsCell(template);
      } else if (template === 'gantt') {
        content = fn.getGanttCell(row, column);
      } else if (template && column.inlineEdit) {
        if (!focused) {
          content = template;
        } else {
          content = this.getInput(row, column);
        }
      } else if (template) {
        content = template;
      } else if (column.inlineEdit) {
        content = this.getInput(row, column);
      } else if (column.getValue) {
        content = value;
      }

      if (column.subText) {
        var subText;

        try {
          subText = column.subText(row);
        } catch {
          subText = '';
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-cell-has-subtext"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-cell-uptext"
        }, content), /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-cell-subtext"
        }, subText));
      }

      return content;
    }
  }, {
    key: "getInput",
    value: function getInput(row, column) {
      var _this17 = this;

      var _column$inlineEdit = column.inlineEdit,
          type = _column$inlineEdit.type,
          getValue = _column$inlineEdit.getValue;
      var renderIndex = this.props.renderIndex;
      var value = this.state.value;
      var _column$inlineEdit$di = column.inlineEdit.disabled,
          disabled = _column$inlineEdit$di === void 0 ? function () {
        return false;
      } : _column$inlineEdit$di;

      if (getValue) {
        value = getValue(row);
      }

      var props = { ...column.inlineEdit,
        className: 'aio-table-input',
        rowindex: renderIndex,
        colindex: column._renderIndex,
        value: value === null || value === undefined ? '' : value,
        disabled: disabled(row)
      };

      if (type === 'text' || type === 'number') {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'aio-table-input-container'
        }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
          style: {
            textAlign: column.justify ? 'center' : undefined
          },
          onChange: function onChange(e) {
            return _this17.setState({
              value: e.target.value
            });
          },
          onBlur: async function onBlur(e) {
            if (value === _this17.props.value) {
              return;
            }

            _this17.setState({
              loading: true
            });

            var res = await column.inlineEdit.onChange(row, type === 'number' ? parseFloat(value) : value);

            _this17.setState({
              loading: false
            });

            if (typeof res === 'string') {
              _this17.setState({
                error: res
              });
            } else if (res === false) {
              _this17.setState({
                value: _this17.props.value
              });
            }
          }
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-input-border"
        }));
      }

      if (type === 'select') {
        if (!column.inlineEdit.options) {
          console.error('aio table => missing options property of column inlineEdit with type="select"');
          return '';
        }

        if (!Array.isArray(column.inlineEdit.options)) {
          console.error('aio table => options property of column inlineEdit with type="select" must be an array of objects . each object must have text and value property!!!');
          return '';
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-input-container"
        }, /*#__PURE__*/_react.default.createElement("select", _extends({}, props, {
          onFocus: function onFocus() {
            return _this17.focus = true;
          },
          onBlur: function onBlur() {
            return _this17.focus = false;
          },
          onChange: async function onChange(e) {
            var value = e.target.value;

            if (value === 'true') {
              value = true;
            }

            if (value === 'false') {
              value = false;
            }

            _this17.setState({
              loading: true,
              value: value
            });

            var res = await column.inlineEdit.onChange(row, value);

            _this17.setState({
              loading: false
            });

            if (typeof res === 'string') {
              _this17.setState({
                error: res
              });
            } else if (res === false) {
              _this17.setState({
                value: _this17.props.value
              });
            }
          }
        }), column.inlineEdit.options.map(function (o, i) {
          return /*#__PURE__*/_react.default.createElement("option", {
            key: i,
            value: o.value
          }, o.text);
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-input-border"
        }));
      }

      console.error('aio table => missing type property of column input');
      return '';
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var column = this.props.column;

      if (column.inlineEdit && column.inlineEdit.type === 'select' && this.focus) {
        (0, _jquery.default)(this.dom.current).find('.aio-table-input').focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this18 = this;

      var _this$context17 = this.context,
          indent = _this$context17.indent,
          fn = _this$context17.fn,
          focused = _this$context17.focused,
          SetState = _this$context17.SetState,
          onDrag = _this$context17.onDrag,
          _onDrop2 = _this$context17.onDrop,
          onSwap = _this$context17.onSwap;
      var _this$props15 = this.props,
          row = _this$props15.row,
          column = _this$props15.column,
          value = _this$props15.value,
          cellId = _this$props15.cellId,
          renderIndex = _this$props15.renderIndex;

      if (this.state.prevValue !== value) {
        setTimeout(function () {
          return _this18.setState({
            value: value,
            prevValue: value
          });
        }, 0);
      }

      var _this$state3 = this.state,
          error = _this$state3.error,
          loading = _this$state3.loading;
      var content = this.getContent(row, column, value);
      var before = this.getBefore(row, column);
      var after = this.getAfter(row, column);
      var showToggleIcon = column.treeMode;
      var cell;

      if (loading) {
        return fn.cubes2();
      }

      if (error) {
        cell = /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-error",
          onClick: function onClick() {
            _this18.setState({
              value: _this18.props.value,
              error: false
            });
          }
        }, error);
      } else {
        var style = {
          justifyContent: column.justify !== false && !column.treeMode ? 'center' : undefined
        };
        cell = /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, column.treeMode && /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-indent",
          style: {
            width: row._level * indent
          }
        }), showToggleIcon && this.getToggleIcon(row), before, /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-content",
          style: style
        }, content), after);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: cellId,
        tabIndex: 0,
        ref: this.dom,
        cellid: cellId,
        title: typeof content === 'string' ? content : '',
        "data-evenodd": row._index % 2 === 0 ? 'even' : 'odd',
        rowindex: renderIndex,
        colindex: column._renderIndex,
        childindex: row._childIndex,
        level: row._level,
        isfirstchild: row._isFirstChild ? 1 : 0,
        islastchild: row._isLastChild ? 1 : 0,
        childslength: row._childsLength,
        style: this.getStyle(column, row),
        className: this.getClassName(row, column),
        draggable: typeof onSwap === 'function' && column.swap,
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDragStart: function onDragStart() {
          return onDrag(row);
        },
        onDrop: function onDrop() {
          return _onDrop2(row);
        },
        onClick: function onClick(e) {
          if (column.inlineEdit) {
            if (focused !== cellId) {
              SetState({
                focused: cellId
              });
              setTimeout(function () {
                return (0, _jquery.default)('.aio-table-input:focus').select();
              }, 10);
            }
          }
        }
      }, cell);
    }
  }]);

  return AIOTableCell;
}(_react.Component);

_defineProperty(AIOTableCell, "contextType", AioTableContext);

var AIOTableFilter = /*#__PURE__*/function (_Component8) {
  _inherits(AIOTableFilter, _Component8);

  var _super8 = _createSuper(AIOTableFilter);

  function AIOTableFilter() {
    _classCallCheck(this, AIOTableFilter);

    return _super8.apply(this, arguments);
  }

  _createClass(AIOTableFilter, [{
    key: "change",
    value: function change(obj) {
      var _this$context18 = this.context,
          onChangeFilter = _this$context18.onChangeFilter,
          filterDictionary = _this$context18.filterDictionary,
          SetState = _this$context18.SetState;
      var column = this.props.column;
      filterDictionary[column._index] = { ...filterDictionary[column._index],
        ...obj
      };

      if (onChangeFilter) {
        onChangeFilter(filterDictionary);
      }

      SetState({
        filterDictionary: filterDictionary
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this19 = this;

      var _this$context19 = this.context,
          filterDictionary = _this$context19.filterDictionary,
          rtl = _this$context19.rtl,
          translate = _this$context19.translate;
      var column = this.props.column;

      if (!column.filter || column.search) {
        return null;
      }

      if (!filterDictionary[column._index]) {
        return null;
      }

      var _filterDictionary$col = filterDictionary[column._index],
          items = _filterDictionary$col.items,
          booleanType = _filterDictionary$col.booleanType;
      var type = column.filter.type;
      var icon = items.length ? /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        className: "has-filter",
        path: _js.mdiFilterMenu,
        size: 0.7
      }) : /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiFilter,
        size: 0.7
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-filter-icon"
      }, /*#__PURE__*/_react.default.createElement(_aioButton.default, {
        type: "button",
        rtl: rtl,
        caret: false,
        openRelatedTo: ".aio-table",
        text: icon,
        popOver: function popOver() {
          return /*#__PURE__*/_react.default.createElement(AIOTableFilterPopup, {
            translate: translate,
            type: type,
            items: items,
            booleanType: booleanType,
            onChange: function onChange(obj) {
              return _this19.change(obj);
            }
          });
        }
      }));
    }
  }]);

  return AIOTableFilter;
}(_react.Component);

_defineProperty(AIOTableFilter, "contextType", AioTableContext);

var AIOTableFilterPopup = /*#__PURE__*/function (_Component9) {
  _inherits(AIOTableFilterPopup, _Component9);

  var _super9 = _createSuper(AIOTableFilterPopup);

  function AIOTableFilterPopup() {
    _classCallCheck(this, AIOTableFilterPopup);

    return _super9.apply(this, arguments);
  }

  _createClass(AIOTableFilterPopup, [{
    key: "render",
    value: function render() {
      var _this$props16 = this.props,
          type = _this$props16.type,
          items = _this$props16.items,
          booleanType = _this$props16.booleanType,
          _onChange2 = _this$props16.onChange,
          _this$props16$transla = _this$props16.translate,
          translate = _this$props16$transla === void 0 ? function (str) {
        return str;
      } : _this$props16$transla;
      var filterItems = items.map(function (item, i) {
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
          key: i
        }, /*#__PURE__*/_react.default.createElement(AIOTableFilterItem, {
          item: item,
          type: type,
          onChange: function onChange(key, value) {
            return _onChange2({
              items: items.map(function (o, index) {
                if (i === index) {
                  return _defineProperty({ ...o
                  }, key, value);
                }

                return o;
              })
            });
          },
          onRemove: function onRemove() {
            return _onChange2({
              items: items.filter(function (o, index) {
                return index !== i;
              })
            });
          },
          translate: translate
        }), i < items.length - 1 && /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-boolean",
          onClick: function onClick() {
            return _onChange2({
              booleanType: booleanType === 'or' ? 'and' : 'or'
            });
          }
        }, translate(booleanType)));
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-filter-popup",
        style: {
          minWidth: 250
        }
      }, filterItems, /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-filter-footer"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "aio-table-filter-add",
        onClick: function onClick() {
          return _onChange2({
            items: items.concat({
              operator: 'contain',
              value: '',
              type: type
            })
          });
        }
      }, translate('Add'))));
    }
  }]);

  return AIOTableFilterPopup;
}(_react.Component);

exports.AIOTableFilterPopup = AIOTableFilterPopup;

var AIOTableFilterItem = /*#__PURE__*/function (_Component10) {
  _inherits(AIOTableFilterItem, _Component10);

  var _super10 = _createSuper(AIOTableFilterItem);

  function AIOTableFilterItem(props) {
    var _this20;

    _classCallCheck(this, AIOTableFilterItem);

    _this20 = _super10.call(this, props);
    var item = _this20.props.item;
    _this20.state = {
      value: item.value,
      prevValue: item.value
    };
    return _this20;
  }

  _createClass(AIOTableFilterItem, [{
    key: "changeValue",
    value: function changeValue(value) {
      var _this21 = this;

      clearTimeout(this.timeout);
      this.setState({
        value: value
      });
      this.timeout = setTimeout(function () {
        var onChange = _this21.props.onChange;
        onChange('value', value);
      }, 1000);
    }
  }, {
    key: "getOptions",
    value: function getOptions(type, translate) {
      var options = [];

      if (type !== 'number') {
        options.push( /*#__PURE__*/_react.default.createElement("option", {
          key: "contain",
          value: "contain"
        }, translate('Contain')));
        options.push( /*#__PURE__*/_react.default.createElement("option", {
          key: "notContain",
          value: "notContain"
        }, translate('Not Contain')));
      }

      options.push( /*#__PURE__*/_react.default.createElement("option", {
        key: "equal",
        value: "equal"
      }, translate('Equal')));
      options.push( /*#__PURE__*/_react.default.createElement("option", {
        key: "notEqual",
        value: "notEqual"
      }, translate('Not Equal')));

      if (type !== 'text') {
        options.push( /*#__PURE__*/_react.default.createElement("option", {
          key: "greater",
          value: "greater"
        }, translate('Greater')));
        options.push( /*#__PURE__*/_react.default.createElement("option", {
          key: "less",
          value: "less"
        }, translate('Less')));
      }

      return options;
    }
  }, {
    key: "render",
    value: function render() {
      var _this22 = this;

      var _this$props17 = this.props,
          item = _this$props17.item,
          type = _this$props17.type,
          _onChange3 = _this$props17.onChange,
          onRemove = _this$props17.onRemove,
          translate = _this$props17.translate;

      if (this.state.prevValue !== item.value) {
        setTimeout(function () {
          return _this22.setState({
            value: item.value,
            prevValue: item.value
          });
        }, 0);
      }

      var value = this.state.value;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-filter-item"
      }, /*#__PURE__*/_react.default.createElement("select", {
        value: item.operator,
        onChange: function onChange(e) {
          return _onChange3('operator', e.target.value);
        }
      }, this.getOptions(type, translate)), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '6px'
        }
      }), /*#__PURE__*/_react.default.createElement("input", {
        type: type === 'date' ? 'text' : type,
        value: value,
        onChange: function onChange(e) {
          return _this22.changeValue(e.target.value);
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '6px'
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-filter-remove",
        onClick: function onClick() {
          return onRemove();
        }
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiClose,
        size: 0.7
      })));
    }
  }]);

  return AIOTableFilterItem;
}(_react.Component);

function ATFN(_ref2) {
  var getProps = _ref2.getProps,
      getState = _ref2.getState,
      setState = _ref2.setState;
  var $$ = {
    fixPersianAndArabicNumbers: function fixPersianAndArabicNumbers(str) {
      var persianNumbers = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g],
          arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g];

      if (typeof str === 'string') {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }

      return str;
    },
    getJSON: function getJSON(columns, rows) {
      var result = [];

      for (var i = 0; i < rows.length; i++) {
        if (!rows[i].row) {
          continue;
        }

        var row = rows[i].row;
        var obj = {};

        for (var j = 0; j < columns.length; j++) {
          var _columns$j = columns[j],
              title = _columns$j.title,
              _index = _columns$j._index;
          var res = row._values[_index];
          obj[title] = res !== undefined ? $$.fixPersianAndArabicNumbers(res) : "";
        }

        result.push(obj);
      }

      return result;
    },
    exportToExcel: function exportToExcel(columns, rows) {
      var _getProps = getProps(),
          translate = _getProps.translate;

      var name = window.prompt(translate('Inter Excel File Name')); // if (name === false || name === undefined || name === null) { return; }

      if (!name.length) return;
      var data = $$.getJSON(columns, rows);
      var arrData = _typeof(data) != "object" ? JSON.parse(data) : data;
      var CSV = ""; // CSV += 'title';

      CSV += '\r\n\n';

      if (true) {
        var row = "";

        for (var index in arrData[0]) {
          row += index + ",";
        }

        row = row.slice(0, -1);
        CSV += row + "\r\n";
      }

      for (var i = 0; i < arrData.length; i++) {
        var _row = "";

        for (var _index2 in arrData[i]) {
          _row += '"' + arrData[i][_index2] + '",';
        }

        _row.slice(0, _row.length - 1);

        CSV += _row + "\r\n";
      }

      if (CSV === "") {
        alert("Invalid data");
        return;
      }

      var fileName = name.replace(/ /g, "_");
      var universalBOM = "\uFEFF";
      var uri = "data:text/csv;charset=utf-8," + encodeURIComponent(universalBOM + CSV);
      var link = document.createElement("a");
      link.href = uri;
      link.style = "visibility:hidden";
      link.download = fileName + ".csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    getSliderCell: function getSliderCell(_ref3) {
      var _ref3$colors = _ref3.colors,
          colors = _ref3$colors === void 0 ? ['#eee', 'dodgerblue'] : _ref3$colors,
          _ref3$start = _ref3.start,
          start = _ref3$start === void 0 ? 0 : _ref3$start,
          _ref3$end = _ref3.end,
          end = _ref3$end === void 0 ? 100 : _ref3$end,
          value = _ref3.value,
          _ref3$editValue = _ref3.editValue,
          editValue = _ref3$editValue === void 0 ? function (value) {
        return value;
      } : _ref3$editValue;

      var _getProps2 = getProps(),
          rowHeight = _getProps2.rowHeight;

      var _colors = _slicedToArray(colors, 2),
          _colors$ = _colors[0],
          clr1 = _colors$ === void 0 ? '#eee' : _colors$,
          _colors$2 = _colors[1],
          clr2 = _colors$2 === void 0 ? 'dodgerblue' : _colors$2;

      var points = Array.isArray(value) ? value : [value];

      if (points.length > 2) {
        points = [points[0], points[1]];
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-slider"
      }, points.length === 2 && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          padding: '0 3px'
        }
      }, editValue(points[0])), /*#__PURE__*/_react.default.createElement(_rRangeSlider.default, {
        style: {
          height: rowHeight
        },
        start: start,
        end: end,
        step: 0.1,
        pointStyle: function pointStyle() {
          return {
            display: 'none'
          };
        },
        lineStyle: function lineStyle() {
          return {
            height: 5,
            borderRadius: 6,
            background: clr1
          };
        },
        fillStyle: function fillStyle(index, obj) {
          if (index === (points.length === 2 ? 1 : 0)) {
            return {
              height: 5,
              background: clr2,
              borderRadius: 6
            };
          }
        },
        points: points
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          padding: '0 3px'
        }
      }, editValue(points[points.length - 1])));
    },
    getOptionsCell: function getOptionsCell(_ref4) {
      var _ref4$options = _ref4.options,
          options = _ref4$options === void 0 ? [] : _ref4$options;
      return /*#__PURE__*/_react.default.createElement(_aioButton.default, {
        type: "select",
        caret: false,
        className: "aio-table-options",
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiDotsHorizontal,
          size: 0.7
        }),
        options: options.map(function (_ref5) {
          var text = _ref5.text,
              icon = _ref5.icon,
              onClick = _ref5.onClick;
          return {
            text: text,
            before: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, icon, /*#__PURE__*/_react.default.createElement("div", {
              style: {
                width: 6
              }
            })),
            onClick: onClick
          };
        })
      });
    },
    getGanttCell: function getGanttCell(row, column) {
      var _getProps3 = getProps(),
          rtl = _getProps3.rtl;

      var getKeys = column.getKeys,
          _column$getColor = column.getColor,
          getColor = _column$getColor === void 0 ? function () {
        return '#fff';
      } : _column$getColor,
          _column$getBackground = column.getBackgroundColor,
          getBackgroundColor = _column$getBackground === void 0 ? function () {
        return '#69bedb';
      } : _column$getBackground,
          _column$getFlags = column.getFlags,
          getFlags = _column$getFlags === void 0 ? function () {
        return [];
      } : _column$getFlags,
          _column$getProgress = column.getProgress,
          getProgress = _column$getProgress === void 0 ? function () {
        return false;
      } : _column$getProgress,
          _column$getText = column.getText,
          getText = _column$getText === void 0 ? function () {
        return false;
      } : _column$getText,
          getStart = column.getStart,
          getEnd = column.getEnd;

      if (typeof getStart !== 'function') {
        console.error('aio table => gantt column => column getStart property is not a function');
        return '';
      }

      if (typeof getEnd !== 'function') {
        console.error('aio table => gantt column => column getEnd property is not a function');
        return '';
      }

      if (typeof getKeys !== 'function') {
        console.error('aio table => gantt column => column getKeys property is not a function');
        return '';
      }

      var keys = getKeys();

      if (!Array.isArray(keys)) {
        console.error('aio table => gantt column => column getKeys property must return an array of strings');
        return '';
      }

      var color = getColor(row);
      var backgroundColor = getBackgroundColor(row);
      var progress = getProgress(row);
      var text = getText(row);
      var startIndex = keys.indexOf(getStart(row));
      var endIndex = keys.indexOf(getEnd(row));
      var background = progress === false ? color : "linear-gradient(to ".concat(rtl ? 'left' : 'right', ",rgba(0,0,0,.1) 0%,rgba(0,0,0,.1) ").concat(progress, "% ,transparent ").concat(progress, "%,transparent 100%)");
      var flags = getFlags();
      return /*#__PURE__*/_react.default.createElement(_rRangeSlider.default, {
        start: 0,
        editValue: function editValue(value) {
          return keys[value];
        },
        end: keys.length - 1,
        points: [startIndex, endIndex],
        fillStyle: function fillStyle(index) {
          if (index === 1) {
            return {
              background: backgroundColor,
              backgroundImage: background
            };
          }
        },
        getText: function getText(index) {
          if (index === 1 && text) {
            return text;
          }
        },
        textStyle: function textStyle() {
          return {
            color: color
          };
        },
        scaleStep: 1,
        scaleStyle: function scaleStyle(value) {
          var flag = flags.filter(function (o) {
            return keys.indexOf(o.value) === value;
          })[0];

          if (flag) {
            return {
              background: flag.color,
              height: '100%',
              top: 0,
              zIndex: 100
            };
          }

          return {
            height: '100%',
            top: 0,
            opacity: .4
          };
        },
        lineStyle: function lineStyle() {
          return {
            opacity: .4
          };
        }
      });
    },
    handleOutsideClick: function handleOutsideClick() {
      (0, _jquery.default)(window).bind('click', function (e) {
        var _getState = getState(),
            focused = _getState.focused;

        if (focused === false) {
          return;
        }

        var target = (0, _jquery.default)(e.target);

        if (target.parents('.aio-table-cell').length !== 0 || target.hasClass('aio-table-cell')) {
          return;
        }

        setState({
          focused: false
        });
      });
    },
    getCardRowCount: function getCardRowCount() {
      var _getProps4 = getProps(),
          _getProps4$cardRowCou = _getProps4.cardRowCount,
          cardRowCount = _getProps4$cardRowCou === void 0 ? 1 : _getProps4$cardRowCou;

      if (_typeof(cardRowCount) !== 'object') {
        return cardRowCount;
      }

      var result,
          matched = false;

      var _loop = function _loop(prop) {
        var count = cardRowCount[prop];
        var a = window.matchMedia("(max-width: ".concat(prop, "px)"));

        if (a.matches && !matched) {
          matched = true;
          result = count;
        }

        a.addListener(function () {
          return setState({
            cardRowCount: count
          });
        });
      };

      for (var prop in cardRowCount) {
        _loop(prop);
      }

      return result;
    },
    onScroll: function onScroll(dom, index) {
      if (index === undefined) {
        return;
      }

      if (!$$['scroll' + index]) {
        var otherIndex = Number(!index);
        $$['scroll' + otherIndex] = true;
        var c = (0, _jquery.default)(dom.current);
        var units = [c.find('#aio-table-first-split'), c.find('#aio-table-second-split')];
        var scrollTop = units[index].scrollTop();
        units[otherIndex].scrollTop(scrollTop);
      }

      $$['scroll' + index] = false;
    },
    getGroupDictionaty: function getGroupDictionaty() {
      var _getProps5 = getProps(),
          id = _getProps5.id;

      if (id === undefined) {
        return {};
      }

      var groupDictionary = localStorage.getItem('aio table group' + id);

      if (groupDictionary === null || groupDictionary === undefined) {
        localStorage.setItem('aio table group' + id, '{}');
        return {};
      } else {
        return JSON.parse(groupDictionary);
      }
    },
    getOpenDictionary: function getOpenDictionary() {
      var _getProps6 = getProps(),
          id = _getProps6.id;

      if (id === undefined) {
        return {};
      }

      var openDictionary = localStorage.getItem('aio table ' + id);

      if (openDictionary === null || openDictionary === undefined) {
        localStorage.setItem('aio table ' + id, '{}');
        return {};
      } else {
        return JSON.parse(openDictionary);
      }
    },
    getDateNumber: function getDateNumber(value) {
      var splitter;

      for (var i = 0; i < value.length; i++) {
        if (isNaN(parseInt(value[i]))) {
          splitter = value[i];
          break;
        }
      }

      var _value$split = value.split(splitter),
          _value$split2 = _slicedToArray(_value$split, 3),
          year = _value$split2[0],
          _value$split2$ = _value$split2[1],
          month = _value$split2$ === void 0 ? '01' : _value$split2$,
          _value$split2$2 = _value$split2[2],
          day = _value$split2$2 === void 0 ? '01' : _value$split2$2;

      var list = [year, month, day];
      return parseInt(list.map(function (o) {
        return o.length === 1 ? '0' + o : o;
      }).join(''));
    },
    getSorts: function getSorts(toolbar) {
      var _getProps7 = getProps(),
          onChangeSort = _getProps7.onChangeSort;

      var _getState2 = getState(),
          sorts = _getState2.sorts;

      var result = [];

      var _loop2 = function _loop2(i) {
        var sort = sorts[i];
        var getValue = sort.getValue,
            _sort$type = sort.type,
            type = _sort$type === void 0 ? 'inc' : _sort$type,
            title = sort.title,
            _sort$active = sort.active,
            active = _sort$active === void 0 ? true : _sort$active,
            _sort$toggle = sort.toggle,
            toggle = _sort$toggle === void 0 ? true : _sort$toggle,
            isDate = sort.isDate;

        if (!title) {
          console.error('aio table => missing sort title property');
          return "continue";
        }

        if (typeof getValue !== 'function') {
          console.error('aio table => sort getValue property is not a function');
          return "continue";
        }

        if (active === true) {
          if (isDate) {
            var newGetValue = function newGetValue(row) {
              var value = getValue(row);

              if (typeof value !== 'string') {
                return 0;
              }

              return $$.getDateNumber(value);
            };

            result.push({
              getValue: function getValue(row) {
                return newGetValue(row);
              },
              type: type
            });
          } else {
            result.push({
              getValue: getValue,
              type: type
            });
          }
        }

        if (toggle) {
          toolbar.show = true;
          toolbar.sort.push({
            text: title,
            checked: active === true,
            after: /*#__PURE__*/_react.default.createElement("div", {
              style: {
                width: '30px',
                display: 'flex',
                justifyContent: 'flex-end'
              }
            }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
              path: type === 'dec' ? _js.mdiArrowDown : _js.mdiArrowUp,
              size: 0.8,
              onClick: function onClick(e) {
                e.stopPropagation();
                sort.type = sort.type === 'dec' ? 'inc' : 'dec';
                setState({
                  sorts: sorts
                });

                if (onChangeSort) {
                  onChangeSort(sorts.filter(function (o) {
                    return o.active !== false;
                  }));
                }
              }
            })),
            onClick: function onClick() {
              sort.active = !active;
              setState({
                sorts: sorts
              });

              if (onChangeSort) {
                onChangeSort(sorts.filter(function (o) {
                  return o.active !== false;
                }));
              }
            }
          });
        }
      };

      for (var i = 0; i < sorts.length; i++) {
        var _ret = _loop2(i);

        if (_ret === "continue") continue;
      }

      return result;
    },
    getGroups: function getGroups(toolbar) {
      var _getProps8 = getProps(),
          id = _getProps8.id;

      var _getState3 = getState(),
          groups = _getState3.groups,
          groupDictionary = _getState3.groupDictionary;

      var result = [];

      var _loop3 = function _loop3(i) {
        var group = groups[i];
        var title = group.title,
            _group$active = group.active,
            active = _group$active === void 0 ? true : _group$active,
            _group$toggle = group.toggle,
            toggle = _group$toggle === void 0 ? true : _group$toggle,
            getValue = group.getValue;

        if (!title) {
          console.error('aio table => missing group title property');
          return "continue";
        }

        if (typeof getValue !== 'function') {
          console.error('aio table => group getValue property is not a function');
          return "continue";
        }

        groupDictionary[title] = groupDictionary[title] === undefined ? active : groupDictionary[title];

        if (groupDictionary[title]) {
          result.push(group);
        }

        if (toggle) {
          toolbar.show = true;
          toolbar.groupBy.push({
            text: title,
            checked: groupDictionary[title],
            onClick: function onClick() {
              groupDictionary[title] = !groupDictionary[title];

              if (id) {
                localStorage.setItem('aio table group' + id, JSON.stringify(groupDictionary));
              }

              setState({
                groupDictionary: groupDictionary
              });
            }
          });
        }
      };

      for (var i = 0; i < groups.length; i++) {
        var _ret2 = _loop3(i);

        if (_ret2 === "continue") continue;
      }

      return result;
    },
    setColumnByStorage: function setColumnByStorage(column) {
      if (column.storageKey && !column._readStorage) {
        column._readStorage = true;
        var storageStr = localStorage.getItem('aio-table-column-storage-' + column.storageKey);

        if (!storageStr || storageStr === null) {
          column._storageObj = {};
          localStorage.setItem('aio-table-column-storage-' + column.storageKey, JSON.stringify(column._storageObj));
        } else {
          column._storageObj = JSON.parse(storageStr);
        }

        if (column._storageObj.show !== undefined) {
          column.show = column._storageObj.show;
        } else {
          column.show = column.show === undefined ? true : column.show;
        }

        if (column._storageObj.width !== undefined) {
          column.width = column._storageObj.width;
        } else {
          column.width = column.width || 'auto';
        }
      } else {
        column.show = column.show === undefined ? true : column.show;
        column.width = column.width || 'auto';
      }
    },
    getFreezes: function getFreezes(index, columnDetails, toolbar) {
      var _getState4 = getState(),
          columns = _getState4.columns;

      var column = columns[index];

      if (column.freeze) {
        columnDetails.freeze.active = true;
        columnDetails.freeze.freezeColumns.push(column);
      } else {
        columnDetails.freeze.unFreezeColumns.push(column);
      }

      if (column.toggleFreeze) {
        toolbar.show = true;
        toolbar.freeze.push({
          text: column.title,
          checked: column.freeze === true,
          onClick: function onClick() {
            var state = columns[index].freeze === true ? true : false;
            var column = { ...columns[index],
              freeze: !state
            };
            setState({
              columns: columns.map(function (c, i) {
                if (i === index) {
                  return column;
                }

                return c;
              })
            });
          }
        });
      }
    },
    getToggleShows: function getToggleShows(index, toolbar) {
      var _getState5 = getState(),
          columns = _getState5.columns;

      var column = columns[index];
      var title = column.title,
          show = column.show,
          storageKey = column.storageKey;
      toolbar.show = true;
      toolbar.toggle.push({
        text: title,
        checked: show !== false,
        onClick: function onClick() {
          //change columns imutable(prevent change columns directly)
          var _getState6 = getState(),
              columns = _getState6.columns;

          var column = columns[index];
          var newColumn;

          if (storageKey) {
            var newShow = !column._storageObj.show;
            var newStorageObj = { ...column._storageObj,
              show: newShow
            };
            newColumn = { ...column,
              _storageObj: newStorageObj,
              show: newShow
            };
            localStorage.setItem('aio-table-column-storage-' + newColumn.storageKey, JSON.stringify(newColumn._storageObj));
          } else {
            newColumn = { ...column,
              show: !column.show
            };
          }

          setState({
            columns: columns.map(function (c, i) {
              if (i === index) {
                return newColumn;
              }

              return c;
            })
          });
        }
      });
    },
    isContain: function isContain(text, subtext) {
      return text.toString().toLowerCase().indexOf(subtext.toString().toLowerCase()) !== -1;
    },
    isEqual: function isEqual(a, b) {
      return a.toString().toLowerCase() === b.toString().toLowerCase();
    },
    isGreater: function isGreater(a, b, type) {
      if (type === 'date') {
        return $$.getDateNumber(a) > $$.getDateNumber(b);
      }

      return parseFloat(a) > parseFloat(b);
    },
    isLess: function isLess(a, b, type) {
      if (type === 'date') {
        return $$.getDateNumber(a) < $$.getDateNumber(b);
      }

      return parseFloat(a) < parseFloat(b);
    },
    getFilterResult_and: function getFilterResult_and(filters, val) {
      if (val === undefined) {
        return false;
      }

      for (var i = 0; i < filters.length; i++) {
        var _filters$i = filters[i],
            o = _filters$i.operator,
            v = _filters$i.value,
            type = _filters$i.type;

        if (v === '' || v === undefined) {
          continue;
        }

        if (o === 'contain') {
          if (!$$.isContain(val, v)) {
            return false;
          }

          continue;
        }

        if (o === 'notContain') {
          if ($$.isContain(val, v)) {
            return false;
          }

          continue;
        }

        if (o === 'equal') {
          if (!$$.isEqual(val, v)) {
            return false;
          }

          continue;
        }

        if (o === 'notEqual') {
          if ($$.isEqual(val, v)) {
            return false;
          }

          continue;
        }

        if (o === 'greater') {
          if (!$$.isGreater(val, v, type)) {
            return false;
          }

          continue;
        }

        if (o === 'less') {
          if (!$$.isLess(val, v, type)) {
            return false;
          }

          continue;
        }
      }

      return true;
    },
    getFilterResult_or: function getFilterResult_or(filters, val) {
      if (val === undefined) {
        return false;
      }

      for (var i = 0; i < filters.length; i++) {
        var _filters$i2 = filters[i],
            o = _filters$i2.operator,
            v = _filters$i2.value,
            type = _filters$i2.type;

        if (v === '' || v === undefined) {
          return true;
        }

        if (o === 'contain') {
          if ($$.isContain(val, v)) {
            return true;
          }

          continue;
        }

        if (o === 'notContain') {
          if (!$$.isContain(val, v)) {
            return true;
          }

          continue;
        }

        if (o === 'equal') {
          if ($$.isEqual(val, v)) {
            return true;
          }

          continue;
        }

        if (o === 'notEqual') {
          if (!$$.isEqual(val, v)) {
            return true;
          }

          continue;
        }

        if (o === 'greater') {
          if ($$.isGreater(val, v, type)) {
            return true;
          }

          continue;
        }

        if (o === 'less') {
          if ($$.isLess(val, v, type)) {
            return true;
          }

          continue;
        }
      }

      return false;
    },
    getFilterResult: function getFilterResult(column, value) {
      var _getState7 = getState(),
          filterDictionary = _getState7.filterDictionary;

      var filters = filterDictionary[column._index].items;

      if (filters.length) {
        var booleanType = filterDictionary[column._index].booleanType;
        return $$['getFilterResult_' + booleanType](filters, value);
      }

      return true;
    },
    cubes2: function cubes2() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var _obj$count = obj.count,
          count = _obj$count === void 0 ? 5 : _obj$count,
          _obj$thickness = obj.thickness,
          thickness = _obj$thickness === void 0 ? [5, 16] : _obj$thickness,
          _obj$delay = obj.delay,
          delay = _obj$delay === void 0 ? 0.1 : _obj$delay,
          _obj$borderRadius = obj.borderRadius,
          borderRadius = _obj$borderRadius === void 0 ? 0 : _obj$borderRadius,
          _obj$colors = obj.colors,
          colors = _obj$colors === void 0 ? ['dodgerblue'] : _obj$colors,
          _obj$duration = obj.duration,
          duration = _obj$duration === void 0 ? 1 : _obj$duration,
          _obj$gap = obj.gap,
          gap = _obj$gap === void 0 ? 3 : _obj$gap;
      var Thickness = Array.isArray(thickness) ? thickness : [thickness, thickness];

      var getStyle1 = function getStyle1(i) {
        return {
          width: Thickness[0],
          height: Thickness[1],
          background: colors[i % colors.length],
          margin: "0 ".concat(gap / 2, "px"),
          animation: "".concat(duration, "s loadingScaleY infinite ease-in-out ").concat(i * delay, "s"),
          borderRadius: borderRadius + 'px'
        };
      };

      var items = [];

      for (var i = 0; i < count; i++) {
        items.push( /*#__PURE__*/_react.default.createElement("div", {
          key: i,
          style: getStyle1(i)
        }));
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "rect",
        style: {
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent'
        }
      }, items);
    },
    getLoading: function getLoading() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-loading"
      }, $$.cubes2({
        thickness: [6, 40]
      }));
    },
    getBodyStyle: function getBodyStyle(Toolbar) {
      var _getState8 = getState(),
          paging = _getState8.paging;

      var _getProps9 = getProps(),
          padding = _getProps9.padding;

      var def = padding,
          top = 0;

      if (paging) {
        def += 36;
      }

      if (Toolbar !== null) {
        def += 36;
        top += 36;
      }

      return {
        height: "calc(100% - ".concat(def, "px)"),
        top: top
      };
    },
    toggleRow: function toggleRow(row) {
      var _getState9 = getState(),
          openDictionary = _getState9.openDictionary;

      var _getProps10 = getProps(),
          id = _getProps10.id;

      if (row._show === 'relativeFilter') {
        return;
      }

      openDictionary[row._id] = !openDictionary[row._id];

      if (id !== undefined) {
        localStorage.setItem('aio table ' + id, JSON.stringify(openDictionary));
      }

      setState({
        openDictionary: openDictionary
      });
    },
    getRow: function getRow(row, columnDetails) {
      var columns = columnDetails.visibleColumns,
          freeze = columnDetails.freeze;

      var _getProps11 = getProps(),
          onChangeFilter = _getProps11.onChangeFilter,
          search = _getProps11.search;

      var _getState10 = getState(),
          filterDictionary = _getState10.filterDictionary,
          searchText = _getState10.searchText;

      row._values = {};
      var show = true,
          lastColumn,
          isThereAutoColumn = false,
          cells = [],
          freezeCells = [],
          unFreezeCells = [];

      for (var i = 0; i < columns.length; i++) {
        var column = columns[i],
            value = void 0;

        try {
          value = typeof column.getValue === 'function' ? column.getValue(row) : undefined;
        } catch {
          value = undefined;
        }

        row._values[column._index] = value;
        filterDictionary[column._index] = filterDictionary[column._index] || {
          items: [],
          booleanType: 'or'
        };

        if (show && search) {
          show = search(row, searchText);
        }

        if (show && !onChangeFilter) {
          show = show && $$.getFilterResult(column, value);
        }

        var obj = {
          key: row._index + ',' + column._index,
          column: column,
          value: value,
          freeze: column.freeze
        };

        if (freeze.active) {
          if (column.freeze) {
            column._renderIndex = freezeCells.length;
            freezeCells.push(obj);
          } else {
            column._renderIndex = unFreezeCells.length;
            lastColumn = column;
            unFreezeCells.push(obj);

            if (column.width === 'auto') {
              isThereAutoColumn = true;
            }
          }
        } else {
          column._renderIndex = i;
          cells.push(obj);
          lastColumn = column;

          if (column.width === 'auto') {
            isThereAutoColumn = true;
          }
        }
      }

      row._show = show;

      if (show) {
        var parents = row._getParents();

        for (var _i2 = 0; _i2 < parents.length; _i2++) {
          if (parents[_i2]._show === false) {
            parents[_i2]._show = 'relativeFilter';
          }
        }
      }

      if (!isThereAutoColumn && lastColumn) {
        lastColumn.width = 'auto';
      }

      return {
        cells: cells,
        freezeCells: freezeCells,
        unFreezeCells: unFreezeCells
      };
    },
    getRowById: function getRowById(id, rows) {
      for (var i = 0; i < rows.length; i++) {
        var row = rows[i];

        if (!row.row) {
          continue;
        }

        if (row.row._id === id) {
          return row;
        }
      }
    },
    getStateByToggleAll: function getStateByToggleAll(rows) {
      var _getState11 = getState(),
          openDictionary = _getState11.openDictionary,
          groupsOpen = _getState11.groupsOpen,
          toggleAllState = _getState11.toggleAllState;

      var _getProps12 = getProps(),
          id = _getProps12.id;

      for (var prop in openDictionary) {
        var row = $$.getRowById(prop, rows);

        if (row && row.row && row.row._show === 'relativeFilter') {
          continue;
        }

        openDictionary[prop] = toggleAllState;
      }

      for (var _prop in groupsOpen) {
        groupsOpen[_prop] = toggleAllState;
      }

      if (id !== undefined) {
        localStorage.setItem('aio table ' + id, JSON.stringify(openDictionary));
      }

      return {
        openDictionary: openDictionary,
        groupsOpen: groupsOpen,
        toggleAllState: !toggleAllState
      };
    },
    showColumnRelativeGroups: function showColumnRelativeGroups(column) {
      var _getState12 = getState(),
          groups = _getState12.groups;

      if (!groups) {
        return true;
      }

      if (!groups.length) {
        return true;
      }

      if (!column.groupName) {
        return true;
      }

      var _getState13 = getState(),
          groupDictionary = _getState13.groupDictionary;

      return groupDictionary[column.groupName] !== true;
    },
    getClient: function getClient(e) {
      return getState().touch ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [e.clientX, e.clientY];
    },
    getRowsReq: function getRowsReq(model, rows, _level, parents, nestedIndex) {
      var _getState14 = getState(),
          openDictionary = _getState14.openDictionary;

      var _getProps13 = getProps(),
          getRowId = _getProps13.getRowId,
          getRowChilds = _getProps13.getRowChilds,
          getRowVisible = _getProps13.getRowVisible,
          getRowParentId = _getProps13.getRowParentId;

      if (getRowParentId) {
        getRowChilds = function getRowChilds(row) {
          return row._childs;
        };
      }

      for (var i = 0; i < model.length; i++) {
        var row = model[i];

        if (getRowVisible && getRowVisible(row) === false) {
          continue;
        }

        if (row._groupId) {
          rows.push(row);
          continue;
        }

        row._index = $$.realIndex;
        $$.realIndex++;
        row._childIndex = i;
        var NI = nestedIndex.concat(i);
        row._nestedIndex = NI;
        row._level = _level;
        row._isFirstChild = i === 0;
        row._isLastChild = i === model.length - 1;

        row._getParents = function () {
          return parents;
        };

        if (row._id === undefined) {
          var id = getRowId ? getRowId(row) : 'row' + Math.random();

          if (id === undefined) {
            console.error('AIOTable => id of row is not defined, please check getRowId props of AIOTable');
          }

          row._id = id;
        }

        openDictionary[row._id] = openDictionary[row._id] === false ? false : true;
        row._opened = openDictionary[row._id];
        row._childsLength = 0;
        var childs = [];

        if (getRowChilds) {
          childs = getRowChilds(row) || [];
          row._childsLength = childs.length;
        }

        var Row = $$.getRow(row, $$.columnDetails);

        if (row._level === 0) {
          rows.push([]);
        }

        rows[rows.length - 1].push({ ...Row,
          row: row
        });

        if (row._opened && row._childsLength) {
          $$.getRowsReq(childs, rows, _level + 1, parents.concat(row), NI);
        } else {
          $$.realIndex += row._childsLength;
        }
      }
    },
    getRowsNested: function getRowsNested(model, childsField) {
      var _getProps14 = getProps(),
          getRowId = _getProps14.getRowId,
          getRowParentId = _getProps14.getRowParentId;

      if (!getRowParentId) {
        return model;
      }

      var convertModelRecursive = function convertModelRecursive(array, parentId, parentObject) {
        for (var i = 0; i < array.length; i++) {
          var row = array[i];
          var rowParentId = getRowParentId(row);

          if (rowParentId !== parentId) {
            continue;
          }

          var rowId = getRowId(row);
          row[childsField] = [];
          parentObject.push(row);
          array.splice(i, 1);
          i--;
          convertModelRecursive(_toConsumableArray(array), rowId, row[childsField]);
        }
      };

      var result = [];
      convertModelRecursive(_toConsumableArray(model), undefined, result);
      return result;
    },
    getRowsBySort: function getRowsBySort(rows, sorts) {
      if (!sorts.length) {
        return rows;
      }

      if (getProps().onChangeSort) {
        return rows;
      }

      return rows.sort(function (a, b) {
        for (var i = 0; i < sorts.length; i++) {
          var _sorts$i = sorts[i],
              getValue = _sorts$i.getValue,
              type = _sorts$i.type;
          var aValue = getValue(a),
              bValue = getValue(b);

          if (aValue < bValue) {
            return -1 * (type === 'dec' ? -1 : 1);
          }

          if (aValue > bValue) {
            return 1 * (type === 'dec' ? -1 : 1);
          }

          if (i !== sorts.length - 1) {
            continue;
          }

          return 0;
        }

        return 0;
      });
    },
    getRows: function getRows(model, columnDetails) {
      var rows = [];
      $$.realIndex = 0;
      $$.columnDetails = columnDetails;
      $$.getRowsReq(model, rows, 0, [], []);
      var result = [];

      for (var i = 0; i < rows.length; i++) {
        var list = rows[i];

        if (list[0].row._show === false) {
          continue;
        }

        var arr = list.filter(function (o) {
          return o.row._show !== false;
        });

        if (arr.length) {
          result.push(arr);
        }
      }

      return result;
    },
    getRootsByPaging: function getRootsByPaging(roots, index) {
      var _getState15 = getState(),
          paging = _getState15.paging;

      if (!paging) {
        return roots;
      }

      var length = paging.onChange ? paging.count : roots.length;
      paging.pages = Math.ceil(length / paging.size);

      if (paging.number > paging.pages) {
        paging.number = paging.pages;
      }

      if (paging.number < 1) {
        paging.number = 1;
      }

      if (paging.onChange) {
        return roots;
      } //اگر پیجینگ آنچنج داشت تغییری در ردیف ها نده و اجازه بده تغییرات در آنچنج روی مدل ورودی انجام شود


      var start = (paging.number - 1) * paging.size;
      var end = start + paging.size;

      if (end > length) {
        end = length;
      }

      index.real = start;
      return roots.slice(start, end);
    },
    getRootsByGroup: function getRootsByGroup(roots, groups) {
      if (!groups.length) {
        return roots;
      }

      var _getState16 = getState(),
          groupsOpen = _getState16.groupsOpen;

      function msf(obj, _level, parents) {
        if (Array.isArray(obj)) {
          groupedRows = groupedRows.concat(obj);
        } else {
          for (var prop in obj) {
            var newParents = parents.concat(prop);

            var _groupId = newParents.toString();

            groupsOpen[_groupId] = groupsOpen[_groupId] === undefined ? true : groupsOpen[_groupId];
            groupedRows.push({
              _groupValue: prop,
              _groupId: _groupId,
              _level: _level,
              _opened: groupsOpen[_groupId]
            });

            if (groupsOpen[_groupId]) {
              msf(obj[prop], _level + 1, newParents);
            }
          }
        }
      }

      var newModel = {};

      var _loop4 = function _loop4(i) {
        var root = roots[i];
        obj = newModel;
        var values = groups.map(function (group) {
          return group.getValue(root[0].row);
        });

        for (var j = 0; j < values.length; j++) {
          var value = values[j];

          if (j === values.length - 1) {
            obj[value] = obj[value] || [];
            obj[value].push(root);
          } else {
            obj[value] = obj[value] || {};
            obj = obj[value];
          }
        }
      };

      for (var i = 0; i < roots.length; i++) {
        var obj;

        _loop4(i);
      }

      var groupedRows = [];
      var _level = 0;
      msf(newModel, _level, []);
      return groupedRows;
    },
    getRowsByRoots: function getRowsByRoots(rows) {
      var result = [];

      for (var i = 0; i < rows.length; i++) {
        result = result.concat(rows[i]);
      }

      return result;
    },
    getFullCellStyle: function getFullCellStyle(columns) {
      if (!columns) {
        return {
          gridColumnStart: 1,
          gridColumnEnd: 2
        };
      }

      return {
        gridColumnStart: 1,
        gridColumnEnd: columns.length + 1
      };
    },
    getNoData: function getNoData(columns) {
      var _getProps15 = getProps(),
          rowHeight = _getProps15.rowHeight,
          translate = _getProps15.translate;

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-nodata",
        style: { ...$$.getFullCellStyle(columns),
          height: rowHeight
        }
      }, translate('No Data'));
    }
  };
  return {
    exportToExcel: $$.exportToExcel,
    getSliderCell: $$.getSliderCell,
    getOptionsCell: $$.getOptionsCell,
    getGanttCell: $$.getGanttCell,
    handleOutsideClick: $$.handleOutsideClick,
    onScroll: $$.onScroll,
    getCardRowCount: $$.getCardRowCount,
    getOpenDictionary: $$.getOpenDictionary,
    getGroupDictionaty: $$.getGroupDictionaty,
    getSorts: $$.getSorts,
    getRowsBySort: $$.getRowsBySort,
    getGroups: $$.getGroups,
    getRootsByGroup: $$.getRootsByGroup,
    setColumnByStorage: $$.setColumnByStorage,
    getFreezes: $$.getFreezes,
    getToggleShows: $$.getToggleShows,
    getFilterResult: $$.getFilterResult,
    getLoading: $$.getLoading,
    cubes2: $$.cubes2,
    getBodyStyle: $$.getBodyStyle,
    getRow: $$.getRow,
    getRowById: $$.getRowById,
    getClient: $$.getClient,
    getStateByToggleAll: $$.getStateByToggleAll,
    showColumnRelativeGroups: $$.showColumnRelativeGroups,
    getRootsByPaging: $$.getRootsByPaging,
    getRowsReq: $$.getRowsReq,
    getRowsNested: $$.getRowsNested,
    getRows: $$.getRows,
    getRootsByRows: $$.getRootsByRows,
    getRowsByRoots: $$.getRowsByRoots,
    toggleRow: $$.toggleRow,
    getFullCellStyle: $$.getFullCellStyle,
    getNoData: $$.getNoData
  };
}