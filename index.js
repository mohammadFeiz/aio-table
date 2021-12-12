"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

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
    var touch = ('ontouchstart' in document.documentElement);
    _this.dom = /*#__PURE__*/(0, _react.createRef)();
    var _this$props = _this.props,
        id = _this$props.id,
        freezeSize = _this$props.freezeSize,
        sorts = _this$props.sorts,
        paging = _this$props.paging,
        columns = _this$props.columns;
    var openDictionary = {},
        groupDictionary = {};

    if (id !== undefined) {
      openDictionary = localStorage.getItem('aio table ' + id);

      if (openDictionary === null || openDictionary === undefined) {
        localStorage.setItem('aio table ' + id, '{}');
        openDictionary = {};
      } else {
        openDictionary = JSON.parse(openDictionary);
      }

      groupDictionary = localStorage.getItem('aio table group' + id);

      if (groupDictionary === null || groupDictionary === undefined) {
        localStorage.setItem('aio table group' + id, '{}');
        groupDictionary = {};
      } else {
        groupDictionary = JSON.parse(groupDictionary);
      }
    }

    (0, _jquery.default)(window).bind('click', function (e) {
      var focused = _this.state.focused;

      if (focused === false) {
        return;
      }

      var target = (0, _jquery.default)(e.target);

      if (target.parents('.aio-table-cell').length !== 0 || target.hasClass('aio-table-cell')) {
        return;
      }

      _this.setState({
        focused: false
      });
    });
    _this.state = {
      touch: touch,
      openDictionary: openDictionary,
      filterDictionary: {},
      groupsOpen: {},
      freezeSize: freezeSize,
      groupDictionary: groupDictionary,
      sorts: sorts,
      paging: paging,
      columns: columns,
      focused: false,
      toggleAllState: true,
      searchText: ''
    };
    return _this;
  }

  _createClass(AIOTable, [{
    key: "onScroll1",
    value: function onScroll1() {
      if (!this.firstscroll) {
        this.secondscroll = true;
        var unit1 = (0, _jquery.default)(this.dom.current).find('#aio-table-first-split');
        var unit2 = (0, _jquery.default)(this.dom.current).find('#aio-table-second-split');
        var scrollTop = unit1.scrollTop();
        unit2.scrollTop(scrollTop);
      }

      this.firstscroll = false;
    }
  }, {
    key: "onScroll2",
    value: function onScroll2() {
      if (!this.secondscroll) {
        this.firstscroll = true;
        var unit1 = (0, _jquery.default)(this.dom.current).find('#aio-table-first-split');
        var unit2 = (0, _jquery.default)(this.dom.current).find('#aio-table-second-split');
        var scrollTop = unit2.scrollTop();
        unit1.scrollTop(scrollTop);
      }

      this.secondscroll = false;
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
    key: "getClient",
    value: function getClient(e) {
      return this.state.touch ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [e.clientX, e.clientY];
    }
  }, {
    key: "resizeDown",
    value: function resizeDown(e) {
      var touch = this.state.touch;
      (0, _jquery.default)(window).bind(touch ? 'touchmove' : 'mousemove', _jquery.default.proxy(this.resizeMove, this));
      (0, _jquery.default)(window).bind(touch ? 'touchend' : 'mouseup', _jquery.default.proxy(this.resizeUp, this));
      this.resizeDetails = {
        client: this.getClient(e),
        width: this.state.freezeSize
      };
    }
  }, {
    key: "resizeMove",
    value: function resizeMove(e) {
      var rtl = this.props.rtl;
      var Client = this.getClient(e);
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
    key: "getBodyStyle",
    value: function getBodyStyle(Toolbar) {
      var paging = this.state.paging;
      var padding = this.props.padding;
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
    }
  }, {
    key: "getTable",
    value: function getTable(Toolbar) {
      var _this2 = this;

      var rows = this.getRows();
      this.rows = rows;

      if (!this.freezeMode) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'aio-table-body',
          style: this.getBodyStyle(Toolbar)
        }, /*#__PURE__*/_react.default.createElement(RTableUnit, {
          rows: rows,
          columns: this.visibleColumns,
          type: "cells"
        }));
      } else {
        var freezeSize = this.state.freezeSize;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'aio-table-body',
          style: this.getBodyStyle(Toolbar)
        }, /*#__PURE__*/_react.default.createElement(RTableUnit, {
          key: 0,
          id: "aio-table-first-split",
          rows: rows,
          columns: this.freezeColumns,
          index: 0,
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
        }), true && /*#__PURE__*/_react.default.createElement(RTableUnit, {
          key: 1,
          id: "aio-table-second-split",
          rows: rows,
          columns: this.unFreezeColumns,
          index: 1,
          type: "unFreezeCells"
        }));
      }
    }
  }, {
    key: "convertFlat",
    value: function convertFlat(model, getId, getParentId, childsField) {
      var convertModelRecursive = function convertModelRecursive(array, parentId, parentObject) {
        for (var i = 0; i < array.length; i++) {
          var row = array[i];
          var rowParentId = getParentId(row);

          if (rowParentId !== parentId) {
            continue;
          }

          var rowId = getId(row);
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
    }
  }, {
    key: "sort",
    value: function sort(model) {
      var _this3 = this;

      var newModel = model.sort(function (a, b) {
        for (var i = 0; i < _this3.sorts.length; i++) {
          var _this3$sorts$i = _this3.sorts[i],
              getValue = _this3$sorts$i.getValue,
              type = _this3$sorts$i.type;
          var aValue = getValue(a),
              bValue = getValue(b);

          if (aValue < bValue) {
            return -1 * (type === 'dec' ? -1 : 1);
          }

          if (aValue > bValue) {
            return 1 * (type === 'dec' ? -1 : 1);
          }

          if (i !== _this3.sorts.length - 1) {
            continue;
          }

          return 0;
        }

        return 0;
      });
      return newModel;
    }
  }, {
    key: "getRows",
    value: function getRows() {
      var _this$props2 = this.props,
          model = _this$props2.model,
          getRowId = _this$props2.getRowId,
          getRowParentId = _this$props2.getRowParentId,
          onChangeSort = _this$props2.onChangeSort;
      var paging = this.state.paging;

      if (!model) {
        return false;
      }

      var rows = [];
      this.rowRenderIndex = 0;
      this.rowRealIndex = 0;
      this.perf = 0;
      var convertedModel = getRowParentId ? this.convertFlat(_toConsumableArray(model), getRowId, getRowParentId, '_childs') : _toConsumableArray(model);

      if (this.sorts.length && !onChangeSort) {
        convertedModel = this.sort(convertedModel);
      }

      this.getRowsReq(convertedModel, rows, 0, []);
      var roots = [];

      for (var _i = 0; _i < rows.length; _i++) {
        var row = rows[_i];

        if (row.row._show === false) {
          continue;
        }

        if (row.row._level === 0) {
          roots.push([]);
        }

        roots[roots.length - 1].push(row);
      }

      if (paging) {
        roots = this.getRowsByPaging(roots);
      }

      if (this.groups.length) {
        roots = this.getModelByGroup(roots);
      }

      var Rows = [];

      for (var i = 0; i < roots.length; i++) {
        Rows = Rows.concat(roots[i]);
      }

      return Rows;
    }
  }, {
    key: "getRowsByPaging",
    value: function getRowsByPaging(roots) {
      var paging = this.state.paging;
      var length = paging.onChange ? paging.count : roots.length;
      paging.pages = Math.ceil(length / paging.size);

      if (paging.number > Math.ceil(length / paging.size)) {
        paging.number = Math.ceil(length / paging.size);

        if (paging.number < 1) {
          paging.number = 1;
        }
      }

      if (paging.onChange) {
        return roots;
      } //اگر پیجینگ آنچنج داشت تغییری در ردیف ها نده و اجازه بده تغییرات در آنچنج روی مدل ورودی انجام شود


      var start = (paging.number - 1) * paging.size;
      var end = start + paging.size;

      if (end > length) {
        end = length;
      }

      this.rowRealIndex = start;
      return roots.slice(start, end);
    }
  }, {
    key: "getModelByGroup",
    value: function getModelByGroup(roots) {
      var groupsOpen = this.state.groupsOpen;
      var groups = this.groups;

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

      var _loop = function _loop(i) {
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

        _loop(i);
      }

      var groupedRows = [];
      var _level = 0;
      msf(newModel, _level, []);
      return groupedRows;
    }
  }, {
    key: "getRowsReq",
    value: function getRowsReq(model, rows, _level, parents) {
      var openDictionary = this.state.openDictionary;
      var _this$props3 = this.props,
          getRowId = _this$props3.getRowId,
          getRowChilds = _this$props3.getRowChilds,
          getRowVisible = _this$props3.getRowVisible,
          getRowParentId = _this$props3.getRowParentId;

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

        row._renderIndex = this.rowRenderIndex;
        this.rowRenderIndex++;
        row._index = this.rowRealIndex;
        this.rowRealIndex++;
        row._childIndex = i;
        row._level = _level;
        row._isFirstChild = i === 0;
        row._isLastChild = i === model.length - 1;

        row._getParents = function () {
          return parents;
        };

        if (getRowId) {
          var id = getRowId(row);

          if (id === undefined) {
            console.error('AIOTable => id of row is not defined, please check getRowId props of AIOTable');
          }

          openDictionary[id] = openDictionary[id] === false ? false : true;
          row._opened = openDictionary[id];
          row._id = id;
        } else {
          row._opened = row._opened === false ? false : true;
        }

        row._childsLength = 0;
        var childs = [];

        if (getRowChilds) {
          childs = getRowChilds(row) || [];
          row._childsLength = childs.length;
        }

        var Row = this.getRow(row);
        rows.push({ ...Row,
          row: row
        });

        if (row._opened && row._childsLength) {
          this.getRowsReq(childs, rows, _level + 1, parents.concat(row));
        } else {
          this.rowRealIndex += row._childsLength;
        }
      }
    }
  }, {
    key: "getFilterResult_and",
    value: function getFilterResult_and(filters, value) {
      if (value === undefined) {
        return false;
      }

      for (var i = 0; i < filters.length; i++) {
        var filterItem = filters[i];

        if (filterItem.value === '' || filterItem.value === undefined) {
          continue;
        }

        if (filterItem.operator === 'contain' && value.toString().toLowerCase().indexOf(filterItem.value.toString().toLowerCase()) === -1) {
          return false;
        }

        if (filterItem.operator === 'notContain' && value.toString().toLowerCase().indexOf(filterItem.value.toString().toLowerCase()) !== -1) {
          return false;
        }

        if (filterItem.operator === 'equal' && value.toString().toLowerCase() !== filterItem.value.toString().toLowerCase()) {
          return false;
        }

        if (filterItem.operator === 'notEqual' && value.toString().toLowerCase() === filterItem.value.toString().toLowerCase()) {
          return false;
        }

        if (filterItem.operator === 'greater' && value <= filterItem.value) {
          return false;
        }

        if (filterItem.operator === 'less' && value >= filterItem.value) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "getFilterResult_or",
    value: function getFilterResult_or(filters, value) {
      if (value === undefined) {
        return false;
      }

      for (var i = 0; i < filters.length; i++) {
        var filterItem = filters[i];

        if (filterItem.value === '' || filterItem.value === undefined) {
          return true;
        }

        if (filterItem.operator === 'contain' && value.toString().toLowerCase().indexOf(filterItem.value.toString().toLowerCase()) !== -1) {
          return true;
        }

        if (filterItem.operator === 'notContain' && value.toString().toLowerCase().indexOf(filterItem.value.toString().toLowerCase()) === -1) {
          return true;
        }

        if (filterItem.operator === 'equal' && value.toString().toLowerCase() === filterItem.value.toString().toLowerCase()) {
          return true;
        }

        if (filterItem.operator === 'notEqual' && value.toString().toLowerCase() !== filterItem.value.toString().toLowerCase()) {
          return true;
        }

        if (filterItem.operator === 'greater' && parseFloat(value) > parseFloat(filterItem.value)) {
          return true;
        }

        if (filterItem.operator === 'less' && parseFloat(value) < parseFloat(filterItem.value)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "getFilterResult",
    value: function getFilterResult(column, value) {
      var filterDictionary = this.state.filterDictionary;
      var filters = filterDictionary[column._index].items;

      if (filters.length) {
        var booleanType = filterDictionary[column._index].booleanType;
        return this['getFilterResult_' + booleanType](filters, value);
      }

      return true;
    }
  }, {
    key: "getRow",
    value: function getRow(row) {
      var onChangeFilter = this.props.onChangeFilter;
      var filterDictionary = this.state.filterDictionary;
      row._values = {};
      var show = true,
          lastColumn,
          isThereAutoColumn = false,
          cells = [],
          freezeCells = [],
          unFreezeCells = [];

      for (var i = 0; i < this.visibleColumns.length; i++) {
        var column = this.visibleColumns[i],
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

        if (show && !onChangeFilter) {
          show = show && this.getFilterResult(column, value);
        }

        var obj = {
          key: row._index + ',' + column._index,
          column: column,
          value: value,
          freeze: column.freeze
        };

        if (this.freezeMode) {
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
    }
  }, {
    key: "getRowById",
    value: function getRowById(id) {
      for (var i = 0; i < this.rows.length; i++) {
        var row = this.rows[i];

        if (!row.row) {
          continue;
        }

        if (row.row._id === id) {
          return row;
        }
      }
    }
  }, {
    key: "toggleAll",
    value: function toggleAll() {
      var _this$state = this.state,
          openDictionary = _this$state.openDictionary,
          groupsOpen = _this$state.groupsOpen,
          toggleAllState = _this$state.toggleAllState;
      var _this$props4 = this.props,
          id = _this$props4.id,
          getRowId = _this$props4.getRowId;

      if (getRowId) {
        for (var prop in openDictionary) {
          var row = this.getRowById(prop);

          if (row && row.row && row.row._show === 'relativeFilter') {
            continue;
          }

          openDictionary[prop] = toggleAllState;
        }
      } else {
        for (var i = 0; i < this.rows.length; i++) {
          var _row = this.rows[i];

          if (!_row.row) {
            continue;
          }

          if (_row.row._show === 'relativeFilter') {
            continue;
          }

          _row.row._opened = toggleAllState;
        }
      }

      for (var _prop in groupsOpen) {
        groupsOpen[_prop] = toggleAllState;
      }

      localStorage.setItem('aio table ' + id, JSON.stringify(openDictionary));
      var obj = {
        openDictionary: openDictionary,
        groupsOpen: groupsOpen,
        toggleAllState: !toggleAllState
      };
      this.setState(obj);
    }
  }, {
    key: "showColumnRelativeGroups",
    value: function showColumnRelativeGroups(column) {
      var groups = this.props.groups;
      var groupDictionary = this.state.groupDictionary;

      if (!groups) {
        return true;
      }

      if (!groups.length) {
        return true;
      }

      if (!column.groupName) {
        return true;
      }

      return groupDictionary[column.groupName] !== true;
    }
  }, {
    key: "updateColumns",
    value: function updateColumns() {
      var _this4 = this;

      var _this$props5 = this.props,
          _this$props5$freezeMo = _this$props5.freezeMode,
          freezeMode = _this$props5$freezeMo === void 0 ? true : _this$props5$freezeMo,
          translate = _this$props5.translate,
          groups = _this$props5.groups,
          cardTemplate = _this$props5.cardTemplate,
          onChangeSort = _this$props5.onChangeSort,
          _this$props5$toggleAl = _this$props5.toggleAll,
          toggleAll = _this$props5$toggleAl === void 0 ? false : _this$props5$toggleAl,
          id = _this$props5.id,
          _this$props5$toolbarI = _this$props5.toolbarItems,
          toolbarItems = _this$props5$toolbarI === void 0 ? [] : _this$props5$toolbarI;
      var _this$state2 = this.state,
          groupDictionary = _this$state2.groupDictionary,
          sorts = _this$state2.sorts,
          columns = _this$state2.columns;
      this.groups = [];
      this.sorts = [];
      this.freezeMode = false;
      this.visibleColumns = [];
      this.freezeColumns = [];
      this.unFreezeColumns = [];
      this.toolbar = {
        show: toggleAll === true || toolbarItems.length > 0,
        toggle: [{
          text: translate('Show Columns')
        }],
        toggleAll: toggleAll ? this.toggleAll.bind(this) : false,
        freeze: [{
          text: translate('Freeze')
        }],
        groupBy: [{
          text: translate('Group By')
        }],
        sort: [{
          text: translate('Sort')
        }],
        searchColumnIndex: false
      };

      var _loop2 = function _loop2(i) {
        var sort = sorts[i];
        var getValue = sort.getValue,
            _sort$type = sort.type,
            type = _sort$type === void 0 ? 'inc' : _sort$type,
            title = sort.title,
            _sort$active = sort.active,
            active = _sort$active === void 0 ? true : _sort$active,
            _sort$toggle = sort.toggle,
            toggle = _sort$toggle === void 0 ? true : _sort$toggle;

        if (!title) {
          console.error('aio table => missing sort title property');
          return "continue";
        }

        if (typeof getValue !== 'function') {
          console.error('aio table => sort getValue property is not a function');
          return "continue";
        }

        if (active === true) {
          _this4.sorts.push({
            getValue: getValue,
            type: type
          });
        }

        if (toggle) {
          _this4.toolbar.show = true;

          _this4.toolbar.sort.push({
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

                _this4.setState({
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

              _this4.setState({
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

      var _loop3 = function _loop3(_i3) {
        var group = groups[_i3];
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
          _this4.groups.push(group);
        }

        if (toggle) {
          _this4.toolbar.show = true;

          _this4.toolbar.groupBy.push({
            text: title,
            checked: groupDictionary[title],
            onClick: function onClick() {
              groupDictionary[title] = !groupDictionary[title];

              if (id) {
                localStorage.setItem('aio table group' + id, JSON.stringify(groupDictionary));
              }

              _this4.setState({
                groupDictionary: groupDictionary
              });
            }
          });
        }
      };

      for (var _i3 = 0; _i3 < groups.length; _i3++) {
        var _ret2 = _loop3(_i3);

        if (_ret2 === "continue") continue;
      }

      if (cardTemplate) {
        return;
      }

      var _loop4 = function _loop4(_i4) {
        var column = columns[_i4];
        var show = void 0;

        if (column.storageKey && column.toggleShow) {
          var storageStr = localStorage.getItem('aio-table-column-storage-' + column.storageKey);

          if (!storageStr || storageStr === null) {
            column._storageObj = {};
            localStorage.setItem('aio-table-column-storage-' + column.storageKey, JSON.stringify(column._storageObj));
          } else {
            column._storageObj = JSON.parse(storageStr);
          }

          if (column._storageObj.show !== undefined) {
            show = column._storageObj.show;
          } else {
            show = column.show;
          }

          if (column._storageObj.width !== undefined) {
            column.width = column._storageObj.width;
          } else {
            column.width = column.width || 'auto';
          }
        } else {
          show = column.show;
          column.width = column.width || 'auto';
        }

        column._index = _i4;

        if (show !== false && _this4.showColumnRelativeGroups(column)) {
          _this4.visibleColumns.push(column);

          if (freezeMode) {
            if (column.freeze) {
              _this4.freezeMode = true;

              _this4.freezeColumns.push(column);
            } else {
              _this4.unFreezeColumns.push(column);
            }

            if (column.toggleFreeze) {
              _this4.toolbar.show = true;

              _this4.toolbar.freeze.push({
                text: column.title,
                checked: column.freeze === true,
                onClick: function onClick() {
                  column.freeze = column.freeze === true ? true : false;
                  column.freeze = !column.freeze;

                  _this4.setState({
                    columns: columns
                  });
                }
              });
            }
          }
        }

        if (column.toggleShow) {
          _this4.toolbar.show = true;

          _this4.toolbar.toggle.push({
            text: column.title,
            checked: show !== false,
            onClick: function onClick() {
              column.show = column.show === false ? false : true;

              if (column.storageKey) {
                column._storageObj.show = column._storageObj.show === false ? false : column._storageObj.show;
                column._storageObj.show = !column._storageObj.show;
                column.show = column._storageObj.show;
                localStorage.setItem('aio-table-column-storage-' + column.storageKey, JSON.stringify(column._storageObj));
              } else {
                column.show = !column.show;
              }

              _this4.setState({
                columns: columns
              });
            }
          });
        }

        if (column.search) {
          _this4.toolbar.show = true;
          _this4.toolbar.searchColumnIndex = column._index;
        }
      };

      for (var _i4 = 0; _i4 < columns.length; _i4++) {
        _loop4(_i4);
      }

      if (this.freezeColumns.length === 0 || this.unFreezeColumns.length === 0) {
        this.freezeMode = false;
      }
    }
  }, {
    key: "getPaging",
    value: function getPaging() {
      var _this5 = this;

      var paging = this.state.paging;

      if (!paging) {
        return null;
      }

      var _this$props6 = this.props,
          rtl = _this$props6.rtl,
          translate = _this$props6.translate;
      var number = paging.number,
          _paging$sizes = paging.sizes,
          sizes = _paging$sizes === void 0 ? [1, 5, 10, 20, 30, 40, 50, 60, 70, 80] : _paging$sizes,
          size = paging.size,
          _paging$pages = paging.pages,
          pages = _paging$pages === void 0 ? 1 : _paging$pages;

      var changePage = function changePage(type) {
        var _paging$pages2 = paging.pages,
            pages = _paging$pages2 === void 0 ? 1 : _paging$pages2;
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

        if (newNumber === number) {
          return;
        }

        paging.number = newNumber;

        _this5.setState({
          paging: paging
        });

        if (paging.onChange) {
          paging.onChange(paging);
        }
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging",
        style: {
          direction: 'ltr'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-button",
        onClick: function onClick() {
          return changePage(rtl ? 'last' : 'first');
        },
        title: translate(rtl ? 'Last Page' : 'First Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronDoubleLeft,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-button",
        onClick: function onClick() {
          return changePage(rtl ? 'next' : 'prev');
        },
        title: translate(rtl ? 'Next Page' : 'Previous Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronLeft,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-number"
      }, number + ' / ' + pages), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-button",
        onClick: function onClick() {
          return changePage(rtl ? 'prev' : 'next');
        },
        title: translate(rtl ? 'Previous Page' : 'Next Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronRight,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-paging-button",
        onClick: function onClick() {
          return changePage(rtl ? 'first' : 'last');
        },
        title: translate(rtl ? 'First Page' : 'Last Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronDoubleRight,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("select", {
        className: "aio-table-paging-button",
        value: size,
        onChange: function onChange(e) {
          paging.size = parseInt(e.target.value);

          _this5.setState({
            paging: paging
          });

          if (paging.onChange) {
            paging.onChange(paging);
          }
        },
        title: translate('Rows Count Per Page')
      }, sizes.map(function (s, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: s
        }, s);
      })));
    }
  }, {
    key: "cubes2",
    value: function cubes2() {
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
    }
  }, {
    key: "getLoading",
    value: function getLoading() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-loading"
      }, this.cubes2({
        thickness: [6, 40]
      }));
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
    key: "toggleRow",
    value: function toggleRow(row) {
      var openDictionary = this.state.openDictionary;
      var id = this.props.id;

      if (row._show === 'relativeFilter') {
        return;
      }

      if (row._id !== undefined) {
        openDictionary[row._id] = !openDictionary[row._id];

        if (id !== undefined) {
          localStorage.setItem('aio table ' + id, JSON.stringify(openDictionary));
        }

        this.setState({
          openDictionary: openDictionary
        });
      } else {
        row._opened = !row._opened;
        this.setState({});
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      if (JSON.stringify(this.props.columns) !== JSON.stringify(this.state.columns)) {
        this.setState({
          columns: this.props.columns
        }); //return null;
      }

      if (JSON.stringify(this.props.paging) !== JSON.stringify(this.state.paging)) {
        this.setState({
          paging: this.props.paging
        }); //return null;
      }

      var _this$props7 = this.props,
          rowHeight = _this$props7.rowHeight,
          headerHeight = _this$props7.headerHeight,
          toolbarHeight = _this$props7.toolbarHeight,
          rowGap = _this$props7.rowGap,
          className = _this$props7.className,
          columnGap = _this$props7.columnGap,
          rtl = _this$props7.rtl,
          style = _this$props7.style,
          _this$props7$attrs = _this$props7.attrs,
          attrs = _this$props7$attrs === void 0 ? {} : _this$props7$attrs,
          cardTemplate = _this$props7.cardTemplate,
          onChangeFilter = _this$props7.onChangeFilter,
          onSwap = _this$props7.onSwap,
          padding = _this$props7.padding;
      var columns = this.state.columns;
      this.rh = rowHeight;
      this.hh = headerHeight;
      this.th = toolbarHeight;
      this.rg = rowGap;
      this.cg = columnGap;
      this.updateColumns();
      var Toolbar = this.toolbar.show ? /*#__PURE__*/_react.default.createElement(RTableToolbar, this.toolbar) : null;
      var table = columns ? this.getTable(Toolbar) : '';
      var Paging = this.getPaging();
      var context = { ...this.props,
        ...this.state,
        onDrag: function onDrag(obj) {
          return _this6.dragStart = obj;
        },
        onDrop: function onDrop(obj) {
          if (!_this6.dragStart) {
            return;
          }

          if (_this6.dragStart._level !== obj._level) {
            return;
          }

          if (_this6.dragStart._level === 0) {
            onSwap(_this6.dragStart, obj);
          } else {
            var startParents = _this6.dragStart._getParents().map(function (o) {
              return o._index;
            }).toString();

            var endParents = obj._getParents().map(function (o) {
              return o._index;
            }).toString();

            if (startParents !== endParents) {
              return;
            }

            onSwap(_this6.dragStart, obj);
          }
        },
        onChangeFilter: onChangeFilter ? this.onChangeFilter.bind(this) : undefined,
        SetState: function SetState(obj) {
          return _this6.setState(obj);
        },
        cubes2: this.cubes2.bind(this),
        toggleRow: this.toggleRow.bind(this),
        getGap: this.getGap.bind(this),
        onScroll1: this.onScroll1.bind(this),
        onScroll2: this.onScroll2.bind(this),
        getClient: this.getClient.bind(this),
        getLoading: this.getLoading.bind(this),
        groups: this.groups
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
      }, attrs), Toolbar, !cardTemplate && this.visibleColumns.length === 0 && this.getLoading(), table, Paging));
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
    _classCallCheck(this, RTableToolbar);

    return _super2.apply(this, arguments);
  }

  _createClass(RTableToolbar, [{
    key: "changeSearch",
    value: function changeSearch(value) {
      var _this7 = this;

      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
      var SetState = this.context.SetState;
      clearTimeout(this.searchTimeout);
      SetState({
        searchText: value
      });
      this.searchTimeout = setTimeout(function () {
        var _this7$context = _this7.context,
            filterDictionary = _this7$context.filterDictionary,
            SetState = _this7$context.SetState;
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
      }, time);
    }
  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var _this$context = this.context,
          searchText = _this$context.searchText,
          translate = _this$context.translate,
          rtl = _this$context.rtl,
          toggleAllState = _this$context.toggleAllState,
          padding = _this$context.padding,
          _this$context$toolbar = _this$context.toolbarItems,
          toolbarItems = _this$context$toolbar === void 0 ? [] : _this$context$toolbar;
      var _this$props8 = this.props,
          toggle = _this$props8.toggle,
          freeze = _this$props8.freeze,
          groupBy = _this$props8.groupBy,
          sort = _this$props8.sort,
          searchColumnIndex = _this$props8.searchColumnIndex,
          toggleAll = _this$props8.toggleAll;
      var buttonProps = {
        type: 'select',
        caret: false,
        rtl: rtl,
        className: 'aio-table-toolbar-button',
        animate: true
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-toolbar",
        style: {
          marginBottom: padding
        }
      }, toggleAll !== false && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: 0
      }, buttonProps, {
        type: "button",
        title: translate('Toggle All'),
        onClick: function onClick() {
          return toggleAll();
        },
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: !toggleAllState ? _js.mdiCollapseAll : _js.mdiExpandAll,
          size: 0.7
        })
      })), toolbarItems.map(function (o, i) {
        return /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
          type: "button"
        }, o, {
          rtl: rtl,
          className: "aio-table-toolbar-button",
          animate: true,
          key: 'ti' + i
        }));
      }), searchColumnIndex !== false && /*#__PURE__*/_react.default.createElement("div", {
        key: 1,
        className: "aio-table-search"
      }, /*#__PURE__*/_react.default.createElement("input", {
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
      })), searchColumnIndex === false && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          flex: 1
        }
      }), groupBy.length > 1 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: 2
      }, buttonProps, {
        options: groupBy,
        title: translate('Group By'),
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiFileTree,
          size: 0.7,
          horizontal: rtl === true
        })
      })), sort.length > 1 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: 3
      }, buttonProps, {
        options: sort,
        title: translate('Sort'),
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiSort,
          size: 0.7
        })
      })), toggle.length > 1 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: 4
      }, buttonProps, {
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiEye,
          size: 0.7
        }),
        options: toggle,
        title: translate('Show Columns')
      })), freeze.length > 1 && /*#__PURE__*/_react.default.createElement(_aioButton.default, _extends({
        key: 5
      }, buttonProps, {
        text: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiAlignHorizontalLeft,
          size: 0.7,
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

var RTableUnit = /*#__PURE__*/function (_Component3) {
  _inherits(RTableUnit, _Component3);

  var _super3 = _createSuper(RTableUnit);

  function RTableUnit(props) {
    var _this9;

    _classCallCheck(this, RTableUnit);

    _this9 = _super3.call(this, props);
    _this9.dom = /*#__PURE__*/(0, _react.createRef)();
    return _this9;
  }

  _createClass(RTableUnit, [{
    key: "getNoData",
    value: function getNoData() {
      var _this$context2 = this.context,
          rowHeight = _this$context2.rowHeight,
          translate = _this$context2.translate;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-nodata",
        style: { ...this.getFullCellStyle(),
          height: rowHeight
        }
      }, translate('No Data'));
    }
  }, {
    key: "getGroupToggleIcon",
    value: function getGroupToggleIcon(row) {
      var _this$context3 = this.context,
          rtl = _this$context3.rtl,
          SetState = _this$context3.SetState,
          groupsOpen = _this$context3.groupsOpen,
          getGap = _this$context3.getGap;
      var icon;

      if (row._opened) {
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
          var _groupId = row._groupId;
          groupsOpen[_groupId] = !groupsOpen[_groupId];
          SetState({
            groupsOpen: groupsOpen
          });
        }
      }, icon), getGap());
    }
  }, {
    key: "getFullCellStyle",
    value: function getFullCellStyle() {
      var columns = this.props.columns;
      return {
        gridColumnStart: 1,
        gridColumnEnd: columns.length + 1
      };
    }
  }, {
    key: "getStyle",
    value: function getStyle() {
      var _this$context4 = this.context,
          rowGap = _this$context4.rowGap,
          columnGap = _this$context4.columnGap;
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
    key: "getTitles",
    value: function getTitles() {
      var _this10 = this;

      var columns = this.props.columns;
      return columns.map(function (column) {
        return _this10.getTitle(column);
      });
    }
  }, {
    key: "getGanttTitle",
    value: function getGanttTitle(column) {
      var _this$context5 = this.context,
          headerHeight = _this$context5.headerHeight,
          columnGap = _this$context5.columnGap;
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
    key: "getTitle",
    value: function getTitle(column) {
      var _this11 = this;

      if (column.template === 'gantt') {
        return this.getGanttTitle(column);
      }

      var _this$context6 = this.context,
          SetState = _this$context6.SetState,
          columns = _this$context6.columns,
          headerHeight = _this$context6.headerHeight,
          columnGap = _this$context6.columnGap,
          touch = _this$context6.touch;
      var props = {
        style: {
          height: headerHeight,
          top: 0,
          borderLeft: columnGap ? 'none' : undefined,
          borderRight: columnGap ? 'none' : undefined
        },
        key: column._index + 'title',
        draggable: false,
        className: 'aio-table-title'
      };

      var resizeProps = _defineProperty({
        className: 'aio-table-resize',
        style: {
          cursor: column.resizable ? 'col-resize' : 'default'
        },
        draggable: false
      }, touch ? 'onTouchStart' : 'onMouseDown', function (e) {
        return column.resizable ? _this11.resizeDown(e, column) : undefined;
      });

      var titleProps = {
        className: 'aio-table-title-text',
        style: {
          justifyContent: column.titleJustify !== false ? 'center' : undefined,
          cursor: column.movable === false ? undefined : 'move'
        },
        draggable: column.movable !== false,
        onDragStart: function onDragStart(e) {
          _this11.startColumnSwap = column._index;
        },
        onDragOver: function onDragOver(e) {
          e.preventDefault();
          _this11.endColumnSwap = column._index;
        },
        onDrop: function onDrop(e) {
          if (column.movable === false) {
            return;
          }

          if (_this11.startColumnSwap === undefined || _this11.startColumnSwap === _this11.endColumnSwap) {
            return;
          }

          var temp = columns[_this11.startColumnSwap];
          columns[_this11.startColumnSwap] = columns[_this11.endColumnSwap];
          columns[_this11.endColumnSwap] = temp;
          SetState({
            columns: columns
          });
        }
      };
      return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement(RTableFilter, {
        column: column
      }), /*#__PURE__*/_react.default.createElement("div", titleProps, column.title), column.width !== 'auto' && /*#__PURE__*/_react.default.createElement("div", resizeProps));
    }
  }, {
    key: "resizeDown",
    value: function resizeDown(e, column) {
      var _this$context7 = this.context,
          touch = _this$context7.touch,
          getClient = _this$context7.getClient;
      (0, _jquery.default)(window).bind(touch ? 'touchmove' : 'mousemove', _jquery.default.proxy(this.resizeMove, this));
      (0, _jquery.default)(window).bind(touch ? 'touchend' : 'mouseup', _jquery.default.proxy(this.resizeUp, this));
      this.resizeDetails = {
        client: getClient(e),
        width: parseInt(this.gridTemplateColumns[column._renderIndex]),
        renderIndex: column._renderIndex,
        index: column._index,
        minWidth: column.minWidth
      };
    }
  }, {
    key: "resizeMove",
    value: function resizeMove(e) {
      var _this$context8 = this.context,
          rtl = _this$context8.rtl,
          getClient = _this$context8.getClient;
      var Client = getClient(e);
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
      this.gridTemplateColumns[renderIndex] = this.resizeDetails.newWidth;
      (0, _jquery.default)(this.dom.current).css({
        gridTemplateColumns: this.gridTemplateColumns.join(' ')
      });
    }
  }, {
    key: "resizeUp",
    value: function resizeUp() {
      var touch = this.context.touch;
      (0, _jquery.default)(window).unbind(touch ? 'touchmove' : 'mousemove', this.resizeMove);
      (0, _jquery.default)(window).unbind(touch ? 'touchend' : 'mouseup', this.resizeUp);
      var _this$context9 = this.context,
          columns = _this$context9.columns,
          SetState = _this$context9.SetState;
      var _this$resizeDetails3 = this.resizeDetails,
          index = _this$resizeDetails3.index,
          newWidth = _this$resizeDetails3.newWidth;
      var column = columns[index];
      column.width = newWidth;

      if (column.storageKey) {
        column._storageObj.width = newWidth;
        localStorage.setItem('aio-table-column-storage-' + column.storageKey, JSON.stringify(column._storageObj));
      }

      SetState({
        columns: columns
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
      var _this$context10 = this.context,
          rtl = _this$context10.rtl,
          focused = _this$context10.focused,
          SetState = _this$context10.SetState;
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
          rowIndex = _this$getCellIndex.rowIndex,
          colIndex = _this$getCellIndex.colIndex;

      if (e.keyCode === 40 || e.keyCode === 38) {
        var sign = e.keyCode === 40 ? 1 : -1;
        e.preventDefault();
        rowIndex += sign;
        var next = inputs.filter("[rowindex=".concat(rowIndex, "][colindex=").concat(colIndex, "]"));

        while (rowIndex < this.rowRenderIndex && rowIndex > 0 && next.length === 0) {
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
      var rowIndex = parseInt(cell.attr('rowindex'));
      var colIndex = parseInt(cell.attr('colindex'));
      return {
        rowIndex: rowIndex,
        colIndex: colIndex
      };
    }
  }, {
    key: "card",
    value: function card() {
      var _this12 = this;

      var _this$context11 = this.context,
          indent = _this$context11.indent,
          onScroll1 = _this$context11.onScroll1,
          onScroll2 = _this$context11.onScroll2,
          rowHeight = _this$context11.rowHeight,
          _this$context11$cardG = _this$context11.cardGap,
          cardGap = _this$context11$cardG === void 0 ? 0 : _this$context11$cardG,
          getLoading = _this$context11.getLoading,
          cardTemplate = _this$context11.cardTemplate,
          _this$context11$cardR = _this$context11.cardRowCount,
          cardRowCount = _this$context11$cardR === void 0 ? 1 : _this$context11$cardR,
          rowGap = _this$context11.rowGap,
          columnGap = _this$context11.columnGap,
          toggleRow = _this$context11.toggleRow;
      var _this$props10 = this.props,
          rows = _this$props10.rows,
          id = _this$props10.id,
          index = _this$props10.index;
      var groupStyle = {
        gridColumnStart: 1,
        gridColumnEnd: cardRowCount + 1,
        height: rowHeight
      };

      if (cardRowCount === 'auto') {
        groupStyle.gridColumnStart = undefined;
        groupStyle.gridColumnEnd = undefined;
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        tabIndex: 0,
        className: "aio-table-unit",
        onKeyDown: this.keyDown.bind(this),
        ref: this.dom,
        style: {
          gridRowGap: rowGap,
          gridColumnGap: columnGap,
          gridTemplateColumns: cardRowCount === 'auto' ? undefined : "repeat(".concat(cardRowCount, ",auto)")
        },
        onScroll: function onScroll(e) {
          return index === 0 ? onScroll1() : onScroll2();
        }
      }, rows && rows.length !== 0 && rows.map(function (row, i) {
        if (row._groupId) {
          var width = indent * row._level;
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "aio-table-group",
            key: 'group' + i + '-' + index,
            style: groupStyle
          }, index !== 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
            style: {
              width: width,
              flexShrink: 0
            }
          }), _this12.getGroupToggleIcon(row), /*#__PURE__*/_react.default.createElement("div", {
            className: "aio-table-group-text"
          }, row._groupValue)));
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          key: i + '-' + index,
          className: "aio-table-card"
        }, cardTemplate(row.row, function () {
          return toggleRow(row.row);
        }));
      }), rows && rows.length === 0 && this.getNoData(), !rows && getLoading());
    }
  }, {
    key: "render",
    value: function render() {
      var _this13 = this;

      if (this.context.cardTemplate) {
        return this.card();
      }

      var _this$context12 = this.context,
          indent = _this$context12.indent,
          onScroll1 = _this$context12.onScroll1,
          onScroll2 = _this$context12.onScroll2,
          rowHeight = _this$context12.rowHeight,
          groups = _this$context12.groups,
          getLoading = _this$context12.getLoading,
          cardTemplate = _this$context12.cardTemplate;
      var _this$props11 = this.props,
          rows = _this$props11.rows,
          id = _this$props11.id,
          index = _this$props11.index,
          type = _this$props11.type;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        tabIndex: 0,
        className: "aio-table-unit",
        onKeyDown: this.keyDown.bind(this),
        style: this.getStyle(),
        ref: this.dom,
        onScroll: function onScroll(e) {
          return index === 0 ? onScroll1() : onScroll2();
        }
      }, this.getTitles(), rows && rows.length !== 0 && rows.map(function (row, i) {
        if (row._groupId) {
          var width = indent * row._level;
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "aio-table-group",
            key: 'group' + i + '-' + index,
            style: { ..._this13.getFullCellStyle(),
              height: rowHeight
            }
          }, index !== 1 && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
            style: {
              width: width,
              flexShrink: 0
            }
          }), _this13.getGroupToggleIcon(row), /*#__PURE__*/_react.default.createElement("div", {
            className: "aio-table-group-text"
          }, row._groupValue)));
        }

        return row[type].map(function (r, j) {
          var id = i + '-' + j + '-' + index;
          return /*#__PURE__*/_react.default.createElement(AIOTableCell, _extends({
            key: id,
            cellId: id
          }, r, {
            row: row.row
          }));
        });
      }), rows && rows.length === 0 && this.getNoData(), !rows && getLoading());
    }
  }]);

  return RTableUnit;
}(_react.Component);

_defineProperty(RTableUnit, "contextType", AioTableContext);

var AIOTableCell = /*#__PURE__*/function (_Component4) {
  _inherits(AIOTableCell, _Component4);

  var _super4 = _createSuper(AIOTableCell);

  function AIOTableCell(props) {
    var _this14;

    _classCallCheck(this, AIOTableCell);

    _this14 = _super4.call(this, props);
    _this14.dom = /*#__PURE__*/(0, _react.createRef)();
    var value = _this14.props.value;
    _this14.state = {
      value: value,
      error: false,
      prevValue: value
    };
    return _this14;
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
    value: function getStyle(column) {
      var _column$padding2 = column.padding,
          padding = _column$padding2 === void 0 ? '36px' : _column$padding2,
          template = column.template,
          _column$minWidth = column.minWidth,
          minWidth = _column$minWidth === void 0 ? '30px' : _column$minWidth;
      var rowHeight = this.context.rowHeight;
      var style = {
        height: rowHeight,
        overflow: template ? undefined : 'hidden',
        minWidth: minWidth
      };

      if (column.template === 'gantt') {
        style.padding = "0 ".concat(padding);
      }

      return style;
    }
  }, {
    key: "getClassName",
    value: function getClassName(row, column) {
      var className = 'aio-table-cell';

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

      return className;
    }
  }, {
    key: "getToggleIcon",
    value: function getToggleIcon(row) {
      var _this$context13 = this.context,
          rtl = _this$context13.rtl,
          toggleRow = _this$context13.toggleRow;
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
          return toggleRow(row);
        }
      }, icon), this.context.getGap());
    }
  }, {
    key: "getContent",
    value: function getContent(row, column, value) {
      var focused = this.context.focused;
      var content = '';
      var template = typeof column.template === 'function' ? column.template(row, column) : column.template;

      if (template === 'slider') {
        content = /*#__PURE__*/_react.default.createElement(AIOSlider, {
          row: row,
          column: column
        });
      } else if (template === 'gantt') {
        var rtl = this.context.rtl;
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
        content = /*#__PURE__*/_react.default.createElement(_rRangeSlider.default, {
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
          style: {
            flex: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column'
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "aa",
          style: {
            display: 'flex',
            alignItems: 'center',
            flex: 1,
            position: 'relative',
            whiteSpace: 'nowrap'
          }
        }, content), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '80%',
            opacity: 0.7,
            flex: 1,
            position: 'relative'
          }
        }, subText));
      }

      return content;
    }
  }, {
    key: "getInput",
    value: function getInput(row, column) {
      var _this15 = this;

      var type = column.inlineEdit.type;
      var value = this.state.value;
      var _column$inlineEdit$di = column.inlineEdit.disabled,
          disabled = _column$inlineEdit$di === void 0 ? function () {
        return false;
      } : _column$inlineEdit$di;
      var props = { ...column.inlineEdit,
        className: 'aio-table-input',
        rowindex: row._renderIndex,
        colindex: column._renderIndex,
        value: value === null ? '' : value,
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
            return _this15.setState({
              value: e.target.value
            });
          },
          onBlur: async function onBlur(e) {
            _this15.setState({
              loading: true
            });

            var error = await column.inlineEdit.onChange(row, type === 'number' ? parseFloat(value) : value);

            _this15.setState({
              loading: false
            });

            if (typeof error === 'string') {
              _this15.setState({
                error: error
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
            return _this15.focus = true;
          },
          onBlur: function onBlur() {
            return _this15.focus = false;
          },
          onChange: async function onChange(e) {
            var value = e.target.value;

            _this15.setState({
              loading: true,
              value: value
            });

            var error = await column.inlineEdit.onChange(row, e.target.value);

            _this15.setState({
              loading: false
            });

            if (typeof error === 'string') {
              _this15.setState({
                error: error
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
      var _this16 = this;

      var _this$context14 = this.context,
          indent = _this$context14.indent,
          cubes2 = _this$context14.cubes2,
          focused = _this$context14.focused,
          SetState = _this$context14.SetState,
          onDrag = _this$context14.onDrag,
          _onDrop = _this$context14.onDrop,
          onSwap = _this$context14.onSwap;
      var _this$props12 = this.props,
          row = _this$props12.row,
          column = _this$props12.column,
          value = _this$props12.value,
          cellId = _this$props12.cellId;

      if (this.state.prevValue !== value) {
        this.setState({
          value: value,
          prevValue: value
        });
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
        return cubes2();
      }

      if (error) {
        cell = /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-error",
          onClick: function onClick() {
            _this16.setState({
              value: _this16.props.value,
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
        key: row._index + '-' + column._index,
        tabIndex: 0,
        ref: this.dom,
        cellid: cellId,
        title: typeof content === 'string' ? content : '',
        rowindex: row._renderIndex,
        colindex: column._renderIndex,
        childindex: row._childIndex,
        level: row._level,
        isfirstchild: row._isFirstChild ? 1 : 0,
        islastchild: row._isLastChild ? 1 : 0,
        childslength: row._childsLength,
        style: this.getStyle(column),
        className: this.getClassName(row, column),
        draggable: typeof onSwap === 'function' && column.swap,
        onDragOver: function onDragOver(e) {
          return e.preventDefault();
        },
        onDragStart: function onDragStart() {
          return onDrag(row);
        },
        onDrop: function onDrop() {
          return _onDrop(row);
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

var AIOSlider = /*#__PURE__*/function (_Component5) {
  _inherits(AIOSlider, _Component5);

  var _super5 = _createSuper(AIOSlider);

  function AIOSlider(props) {
    var _this17;

    _classCallCheck(this, AIOSlider);

    _this17 = _super5.call(this, props);
    var _this17$props = _this17.props,
        column = _this17$props.column,
        row = _this17$props.row;
    var getValue = column.getValue;
    var value = getValue(row);

    if (!Array.isArray(value)) {
      value = [value];
    }

    _this17.state = {
      value: value
    };
    _this17.updateMode = 'outside';
    return _this17;
  }

  _createClass(AIOSlider, [{
    key: "getBackground",
    value: function getBackground(length, i, color) {
      if (length === 1 && i === 0) {
        return color;
      }

      if (length > 1 && i > 0 && i < length) {
        return color;
      }

      return 'transparent';
    }
  }, {
    key: "render",
    value: function render() {
      var _this18 = this;

      var _this$props13 = this.props,
          column = _this$props13.column,
          row = _this$props13.row;
      var getValue = column.getValue,
          _column$getStart = column.getStart,
          getStart = _column$getStart === void 0 ? function () {
        return 0;
      } : _column$getStart,
          _column$getEnd = column.getEnd,
          getEnd = _column$getEnd === void 0 ? function () {
        return 100;
      } : _column$getEnd,
          _column$getColor2 = column.getColor,
          getColor = _column$getColor2 === void 0 ? function () {
        return 'dodgerblue';
      } : _column$getColor2,
          onChange = column.onChange,
          _column$getMin = column.getMin,
          getMin = _column$getMin === void 0 ? function () {} : _column$getMin,
          _column$getMax = column.getMax,
          getMax = _column$getMax === void 0 ? function () {} : _column$getMax,
          _column$editValue = column.editValue,
          editValue = _column$editValue === void 0 ? function (value) {
        return value;
      } : _column$editValue,
          _column$getStep = column.getStep,
          getStep = _column$getStep === void 0 ? function () {} : _column$getStep;
      var value = this.state.value;
      var Value = getValue(row);

      if (Value === false) {
        return null;
      }

      if (!Array.isArray(Value)) {
        Value = [Value];
      }

      if (this.updateMode === 'onChange') {
        this.updateMode = 'outside';
        this.setState({
          value: Value
        });
        return null;
      } else if (this.updateMode === 'outside' && JSON.stringify(Value) !== JSON.stringify(value)) {
        this.setState({
          value: Value
        });
        return null;
      }

      var start = getStart(row);
      var end = getEnd(row);
      var color = getColor(row);
      var min = getMin(row);
      var max = getMax(row);
      var step = getStep(row);
      var pinItems = [];

      if (min !== undefined) {
        pinItems.push({
          value: min,
          style: {
            height: 10
          }
        });
      }

      if (max !== undefined) {
        pinItems.push({
          value: max,
          style: {
            height: 10
          }
        });
      }

      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, value.length > 1 && /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-slider-value"
      }, editValue(value[0])), /*#__PURE__*/_react.default.createElement(_rRangeSlider.default, {
        start: start,
        end: end,
        min: min,
        max: max,
        step: step,
        showValue: false,
        points: value.map(function (o, i) {
          return {
            value: o,
            fillStyle: {
              height: '6px',
              borderRadius: '24px',
              background: _this18.getBackground(value.length, i, color)
            }
          };
        }),
        pointStyle: {
          opacity: 0,
          height: 24,
          width: 24
        },
        lineStyle: {
          height: 6,
          borderRadius: '24px',
          boxShadow: 'inset 0px 1px 3px 0px rgba(0,0,0,.1)',
          background: '#d5d5d5'
        },
        editable: typeof onChange === 'function',
        onchange: function onchange(_ref) {
          var points = _ref.points;

          if (!onChange) {
            return;
          }

          _this18.updateMode = 'onChange';
          onChange(row, points.length > 1 ? points.map(function (p) {
            return p.value;
          }) : points[0].value);
        },
        pin: pinItems.length === 0 ? undefined : {
          items: pinItems
        },
        ondrag: function ondrag(_ref2) {
          var points = _ref2.points;
          _this18.updateMode = 'onDrag';

          _this18.setState({
            value: points.map(function (p) {
              return p.value;
            })
          });
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-slider-value"
      }, editValue(value.length > 1 ? value[1] : value[0])));
    }
  }]);

  return AIOSlider;
}(_react.Component);

var RTableFilter = /*#__PURE__*/function (_Component6) {
  _inherits(RTableFilter, _Component6);

  var _super6 = _createSuper(RTableFilter);

  function RTableFilter() {
    _classCallCheck(this, RTableFilter);

    return _super6.apply(this, arguments);
  }

  _createClass(RTableFilter, [{
    key: "render",
    value: function render() {
      var _this$context15 = this.context,
          filterDictionary = _this$context15.filterDictionary,
          rtl = _this$context15.rtl;
      var column = this.props.column;

      if (!column.filter || column.search) {
        return null;
      }

      if (!filterDictionary[column._index]) {
        return null;
      }

      var filters = filterDictionary[column._index].items;
      var icon = filters.length ? /*#__PURE__*/_react.default.createElement(_react2.Icon, {
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
          return /*#__PURE__*/_react.default.createElement(RTableFilterPopup, {
            column: column
          });
        }
      }));
    }
  }]);

  return RTableFilter;
}(_react.Component);

_defineProperty(RTableFilter, "contextType", AioTableContext);

var RTableFilterPopup = /*#__PURE__*/function (_Component7) {
  _inherits(RTableFilterPopup, _Component7);

  var _super7 = _createSuper(RTableFilterPopup);

  function RTableFilterPopup() {
    _classCallCheck(this, RTableFilterPopup);

    return _super7.apply(this, arguments);
  }

  _createClass(RTableFilterPopup, [{
    key: "add",
    value: function add() {
      var _this$context16 = this.context,
          filterDictionary = _this$context16.filterDictionary,
          SetState = _this$context16.SetState,
          onChangeFilter = _this$context16.onChangeFilter;
      var column = this.props.column;

      filterDictionary[column._index].items.push({
        operator: 'contain',
        value: ''
      });

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

      var column = this.props.column;
      var _this$context17 = this.context,
          filterDictionary = _this$context17.filterDictionary,
          SetState = _this$context17.SetState,
          translate = _this$context17.translate;
      var filters = filterDictionary[column._index].items;
      var booleanType = filterDictionary[column._index].booleanType;
      var filterItems = filters.map(function (filter, i) {
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
          key: i
        }, /*#__PURE__*/_react.default.createElement(RTableFilterItem, {
          filter: filter,
          column: column,
          index: i
        }), i < filters.length - 1 && /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-boolean",
          onClick: function onClick() {
            var newBooleanType = booleanType === 'or' ? 'and' : 'or';
            filterDictionary[column._index].booleanType = newBooleanType;
            SetState({
              filterDictionary: filterDictionary
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
          return _this19.add();
        }
      }, translate('Add'))));
    }
  }]);

  return RTableFilterPopup;
}(_react.Component);

_defineProperty(RTableFilterPopup, "contextType", AioTableContext);

var RTableFilterItem = /*#__PURE__*/function (_Component8) {
  _inherits(RTableFilterItem, _Component8);

  var _super8 = _createSuper(RTableFilterItem);

  function RTableFilterItem(props) {
    var _this20;

    _classCallCheck(this, RTableFilterItem);

    _this20 = _super8.call(this, props);
    var filter = _this20.props.filter;
    _this20.state = {
      value: filter.value,
      prevValue: filter.value
    };
    return _this20;
  }

  _createClass(RTableFilterItem, [{
    key: "remove",
    value: function remove(index) {
      var _this$context18 = this.context,
          filterDictionary = _this$context18.filterDictionary,
          SetState = _this$context18.SetState,
          onChangeFilter = _this$context18.onChangeFilter;
      var column = this.props.column;

      filterDictionary[column._index].items.splice(index, 1);

      if (onChangeFilter) {
        onChangeFilter(filterDictionary);
      }

      SetState({
        filterDictionary: filterDictionary
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      var _this21 = this;

      var onChangeFilter = this.context.onChangeFilter;
      clearTimeout(this.timeout);
      this.setState({
        value: value
      });
      this.timeout = setTimeout(function () {
        var _this21$context = _this21.context,
            SetState = _this21$context.SetState,
            filterDictionary = _this21$context.filterDictionary;
        var _this21$props = _this21.props,
            column = _this21$props.column,
            index = _this21$props.index;
        filterDictionary[column._index].items[index].value = value;

        if (onChangeFilter) {
          onChangeFilter(filterDictionary);
        }

        SetState({
          filterDictionary: filterDictionary
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this22 = this;

      var _this$context19 = this.context,
          filterDictionary = _this$context19.filterDictionary,
          SetState = _this$context19.SetState,
          translate = _this$context19.translate,
          onChangeFilter = _this$context19.onChangeFilter;
      var _this$props14 = this.props,
          filter = _this$props14.filter,
          column = _this$props14.column,
          index = _this$props14.index;

      if (this.state.prevValue !== filter.value) {
        this.setState({
          value: filter.value,
          prevValue: filter.value
        });
        return null;
      }

      var value = this.state.value;
      var _column$filter$type = column.filter.type,
          type = _column$filter$type === void 0 ? 'text' : _column$filter$type;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-filter-item"
      }, /*#__PURE__*/_react.default.createElement("select", {
        value: filter.operator,
        onChange: function onChange(e) {
          filterDictionary[column._index].items[index].operator = e.target.value;

          if (onChangeFilter) {
            onChangeFilter(filterDictionary);
          }

          SetState({
            filterDictionary: filterDictionary
          });
        }
      }, type === 'text' && /*#__PURE__*/_react.default.createElement("option", {
        value: "contain"
      }, translate('Contain')), type === 'text' && /*#__PURE__*/_react.default.createElement("option", {
        value: "notContain"
      }, translate('Not Contain')), true && /*#__PURE__*/_react.default.createElement("option", {
        value: "equal"
      }, translate('Equal')), true && /*#__PURE__*/_react.default.createElement("option", {
        value: "notEqual"
      }, translate('Not Equal')), type === 'number' && /*#__PURE__*/_react.default.createElement("option", {
        value: "greater"
      }, translate('Greater')), type === 'number' && /*#__PURE__*/_react.default.createElement("option", {
        value: "less"
      }, translate('Less'))), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '6px'
        }
      }), /*#__PURE__*/_react.default.createElement("input", {
        type: type,
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
          return _this22.remove(index);
        }
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiClose,
        size: 0.7
      })));
    }
  }]);

  return RTableFilterItem;
}(_react.Component);

_defineProperty(RTableFilterItem, "contextType", AioTableContext);