"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _rDropdownButton = _interopRequireDefault(require("r-dropdown-button"));

var _react2 = require("@mdi/react");

var _jquery = _interopRequireDefault(require("jquery"));

var _js = require("@mdi/js");

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

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var AioTableContext = /*#__PURE__*/(0, _react.createContext)();

var RTable = /*#__PURE__*/function (_Component) {
  _inherits(RTable, _Component);

  var _super = _createSuper(RTable);

  function RTable(props) {
    var _this;

    _classCallCheck(this, RTable);

    _this = _super.call(this, props);
    _this.touch = false;
    _this.dom = /*#__PURE__*/(0, _react.createRef)();
    var _this$props = _this.props,
        id = _this$props.id,
        freezeSize = _this$props.freezeSize,
        sorts = _this$props.sorts,
        selectives = _this$props.selectives,
        paging = _this$props.paging,
        columns = _this$props.columns;
    var openDictionary = {};

    if (id !== undefined) {
      openDictionary = localStorage.getItem('r table ' + id);

      if (openDictionary === null || openDictionary === undefined) {
        localStorage.setItem('r table ' + id, '{}');
        openDictionary = {};
      } else {
        openDictionary = JSON.parse(openDictionary);
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
    _this.activeTableIndex = 0;
    _this.state = {
      openDictionary: openDictionary,
      filterDictionary: {},
      groupsOpen: {},
      freezeSize: freezeSize,
      groupDictionary: {},
      sorts: sorts,
      selectives: selectives,
      selectivesDictionary: [],
      paging: paging,
      columns: columns,
      focused: false
    };
    return _this;
  }

  _createClass(RTable, [{
    key: "onScroll",
    value: function onScroll(e, index) {
      if (!this.freezeMode) {
        return;
      }

      if (index !== this.activeTableIndex) {
        return;
      }

      var units = (0, _jquery.default)(this.dom.current).find('.aio-table-unit');
      var scrollTop = units.eq(this.activeTableIndex).scrollTop();
      units.eq(this.deactiveTableIndex).scrollTop(scrollTop);
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(index) {
      this.activeTableIndex = index;
      this.deactiveTableIndex = index === 0 ? 1 : 0;
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
      return this.context.touch ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [e.clientX, e.clientY];
    }
  }, {
    key: "resizeDown",
    value: function resizeDown(e) {
      var touch = this.context.touch;
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
      var touch = this.context.touch;
      (0, _jquery.default)(window).unbind(touch ? 'touchmove' : 'mousemove', this.resizeMove);
      (0, _jquery.default)(window).unbind(touch ? 'touchend' : 'mouseup', this.resizeUp);
      this.setState({
        freezeSize: this.resizeDetails.newWidth
      });
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var _this2 = this;

      var rows = this.getRows();

      if (!this.freezeMode) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'aio-table-body'
        }, /*#__PURE__*/_react.default.createElement(RTableUnit, {
          rows: rows,
          columns: this.visibleColumns
        }));
      } else {
        var freezeSize = this.state.freezeSize;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'aio-table-body'
        }, /*#__PURE__*/_react.default.createElement(RTableUnit, {
          key: 0,
          id: "aio-table-first-split",
          rows: rows,
          columns: this.freezeColumns,
          index: 0,
          type: "freeze",
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
          type: "unFreeze"
        }));
      }
    }
  }, {
    key: "convertFlat",
    value: function convertFlat(model) {
      var _this$props2 = this.props,
          getRowId = _this$props2.getRowId,
          getRowParentId = _this$props2.getRowParentId;

      var convertModelRecursive = function convertModelRecursive(array, parentId, parentObject) {
        for (var i = 0; i < array.length; i++) {
          var row = array[i];
          row._parentId = getRowParentId(row);

          if (row._parentId !== parentId) {
            continue;
          }

          var rowId = getRowId(row);
          row._childs = [];
          parentObject.push(row);

          var newArray = _toConsumableArray(array);

          newArray.splice(i, 1);
          array.splice(i, 1);
          i--;
          convertModelRecursive(newArray, rowId, row._childs);
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
      });
      return newModel;
    }
  }, {
    key: "getRowBySelectives",
    value: function getRowBySelectives(row, index) {
      var _this4 = this;

      var selectives = this.state.selectives;

      if (row.show === false || row.row._level !== 0 || selectives.length === 0) {
        return;
      }

      var _loop = function _loop(j) {
        var selective = selectives[j];
        var value = selective.getValue(row.row);

        if (index === 0) {
          selective.items = [];
          selective.repeat = {};
          selective.dictionary = selective.dictionary || {};
        }

        if (selective.dictionary[value] === false) {
          row.show = false;
        }

        if (selective.repeat[value]) {
          return "continue";
        }

        selective.dictionary[value] = selective.dictionary[value] === undefined ? true : selective.dictionary[value];
        selective.repeat[value] = true;
        var text = selective.getText(row.row);
        selective.items.push({
          text: text,
          value: value,
          checked: selective.dictionary[value],
          onClick: function onClick() {
            selective.dictionary[value] = !selective.dictionary[value];

            _this4.setState({
              selectives: selectives
            });
          }
        });
      };

      for (var j = 0; j < selectives.length; j++) {
        var _ret = _loop(j);

        if (_ret === "continue") continue;
      }
    }
  }, {
    key: "getRows",
    value: function getRows() {
      var _this$props3 = this.props,
          model = _this$props3.model,
          flat = _this$props3.flat,
          onChangeSort = _this$props3.onChangeSort;
      var paging = this.state.paging;

      if (!model) {
        return false;
      }

      var rows = [];
      this.rowRenderIndex = 0;
      this.rowRealIndex = 0;
      this.perf = 0;
      var convertedModel = flat ? this.convertFlat(_toConsumableArray(model)) : _toConsumableArray(model);

      if (this.sorts.length && !onChangeSort) {
        convertedModel = this.sort(convertedModel);
      }

      this.getRowsReq(convertedModel, rows, 0, []);
      var roots = [];

      for (var _i = 0; _i < rows.length; _i++) {
        var row = rows[_i];
        this.getRowBySelectives(row, _i);

        if (row.show === false) {
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

      if (!paging.sizes) {
        paging.sizes = [5, 10, 20, 30, 40, 50, 60, 70, 80];
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

      function msf(obj, _level) {
        var _parentField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        if (Array.isArray(obj)) {
          groupedRows = groupedRows.concat(obj);
        } else {
          for (var prop in obj) {
            groupsOpen[_parentField + prop] = groupsOpen[_parentField + prop] === undefined ? true : groupsOpen[_parentField + prop];
            groupedRows.push({
              _groupField: prop,
              _groupText: prop,
              _level: _level,
              _opened: groupsOpen[_parentField + prop],
              _parentField: _parentField
            });

            if (groupsOpen[_parentField + prop]) {
              msf(obj[prop], _level + 1, _parentField + prop);
            }
          }
        }
      }

      var newModel = {};

      var _loop2 = function _loop2(i) {
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

        _loop2(i);
      }

      var groupedRows = [];
      var _level = 0;
      msf(newModel, _level);
      return groupedRows;
    }
  }, {
    key: "getRowsReq",
    value: function getRowsReq(model, rows, _level, parents) {
      var openDictionary = this.state.openDictionary;
      var _this$props4 = this.props,
          getRowId = _this$props4.getRowId,
          getRowChilds = _this$props4.getRowChilds,
          flat = _this$props4.flat;

      if (flat) {
        getRowChilds = function getRowChilds(row) {
          return row._childs;
        };
      }

      for (var i = 0; i < model.length; i++) {
        var row = model[i];

        if (row._groupField) {
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
            console.error('RTable => id of row is not defined, please check getRowId props of RTable');
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

        if (row._opened) {
          if (row._childsLength) {
            this.getRowsReq(childs, rows, _level + 1, parents.concat(row));
          }
        } else {
          this.rowRealIndex += row._childsLength;
        }
      }
    }
  }, {
    key: "getFilterResult_and",
    value: function getFilterResult_and(filters, value) {
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
          row: row,
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

      if (show) {
        var parents = row._getParents();

        for (var _i2 = 0; _i2 < parents.length; _i2++) {
          if (parents[_i2].show === false) {
            parents[_i2].show = 'relativeFilter';
          }
        }
      }

      if (!isThereAutoColumn && lastColumn) {
        lastColumn.width = 'auto';
      }

      return {
        cells: cells,
        freezeCells: freezeCells,
        unFreezeCells: unFreezeCells,
        show: show
      };
    }
  }, {
    key: "setColumnWidth",
    value: function setColumnWidth(column) {
      if (typeof column.width !== 'string') {
        column.width = 'auto';
      }

      if (column.width !== 'auto' && column.width.indexOf('px') === -1) {
        column.width = 'auto';
      }
    }
  }, {
    key: "updateColumns",
    value: function updateColumns() {
      var _this5 = this;

      var _this$props5 = this.props,
          _this$props5$freezeMo = _this$props5.freezeMode,
          freezeMode = _this$props5$freezeMo === void 0 ? true : _this$props5$freezeMo,
          translate = _this$props5.translate,
          groups = _this$props5.groups,
          cardTemplate = _this$props5.cardTemplate,
          onChangeSort = _this$props5.onChangeSort;
      var _this$state = this.state,
          groupDictionary = _this$state.groupDictionary,
          sorts = _this$state.sorts,
          selectives = _this$state.selectives,
          columns = _this$state.columns;
      this.groups = [];
      this.sorts = [];
      this.selectives = [];
      this.freezeMode = false;
      this.visibleColumns = [];
      this.freezeColumns = [];
      this.unFreezeColumns = [];
      this.toolbar = {
        show: selectives.length !== 0,
        toggle: [{
          text: translate('Show')
        }],
        freeze: [{
          text: translate('Freeze')
        }],
        groupBy: [{
          text: translate('Group By')
        }],
        sort: [{
          text: translate('Sort')
        }],
        selectives: selectives,
        searchColumnIndex: false
      };

      var _loop3 = function _loop3(i) {
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
          _this5.sorts.push({
            getValue: getValue,
            type: type
          });
        }

        if (toggle) {
          _this5.toolbar.show = true;

          _this5.toolbar.sort.push({
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
              onClick: function onClick() {
                sort.type = sort.type === 'dec' ? 'inc' : 'dec';

                _this5.setState({
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

              _this5.setState({
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
        var _ret2 = _loop3(i);

        if (_ret2 === "continue") continue;
      }

      var _loop4 = function _loop4(_i3) {
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
          _this5.groups.push(group);
        }

        if (toggle) {
          _this5.toolbar.show = true;

          _this5.toolbar.groupBy.push({
            text: title,
            checked: groupDictionary[title],
            onClick: function onClick() {
              groupDictionary[title] = !groupDictionary[title];

              _this5.setState({
                groupDictionary: groupDictionary
              });
            }
          });
        }
      };

      for (var _i3 = 0; _i3 < groups.length; _i3++) {
        var _ret3 = _loop4(_i3);

        if (_ret3 === "continue") continue;
      }

      if (cardTemplate) {
        return;
      }

      var _loop5 = function _loop5(_i4) {
        var column = columns[_i4];

        _this5.setColumnWidth(column);

        column._index = _i4;

        if (column.show !== false) {
          _this5.visibleColumns.push(column);

          if (freezeMode) {
            if (column.freeze) {
              _this5.freezeMode = true;

              _this5.freezeColumns.push(column);
            } else {
              _this5.unFreezeColumns.push(column);
            }

            if (column.toggleFreeze) {
              _this5.toolbar.show = true;

              _this5.toolbar.freeze.push({
                text: column.title,
                checked: column.freeze === true,
                onClick: function onClick() {
                  column.freeze = column.freeze === true ? true : false;
                  column.freeze = !column.freeze;

                  _this5.setState({
                    columns: columns
                  });
                }
              });
            }
          }
        }

        if (column.toggleShow) {
          _this5.toolbar.show = true;

          _this5.toolbar.toggle.push({
            text: column.title,
            checked: column.show !== false,
            onClick: function onClick() {
              column.show = column.show === false ? false : true;
              column.show = !column.show;

              _this5.setState({
                columns: columns
              });
            }
          });
        }

        if (column.search) {
          _this5.toolbar.show = true;
          _this5.toolbar.searchColumnIndex = column._index;
        }
      };

      for (var _i4 = 0; _i4 < columns.length; _i4++) {
        _loop5(_i4);
      }

      if (this.freezeColumns.length === 0 || this.unFreezeColumns.length === 0) {
        this.freezeMode = false;
      }
    }
  }, {
    key: "getPaging",
    value: function getPaging() {
      var _this6 = this;

      var paging = this.props.paging;

      if (!paging) {
        return null;
      }

      var _this$props6 = this.props,
          rtl = _this$props6.rtl,
          translate = _this$props6.translate;
      var number = paging.number,
          sizes = paging.sizes,
          size = paging.size,
          pages = paging.pages;

      var changePage = function changePage(type) {
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

        _this6.setState({
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

          _this6.setState({
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
          background: '#fff'
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
    key: "render",
    value: function render() {
      var _this7 = this;

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
          onChangeFilter = _this$props7.onChangeFilter;
      var columns = this.state.columns;
      this.rh = rowHeight;
      this.hh = headerHeight;
      this.th = toolbarHeight;
      this.rg = rowGap;
      this.cg = columnGap;
      this.updateColumns();
      var table = columns ? this.getTable() : '';
      var context = { ...this.props,
        ...this.state,
        touch: this.touch,
        onChangeFilter: onChangeFilter ? this.onChangeFilter.bind(this) : undefined,
        SetState: function SetState(obj) {
          return _this7.setState(obj);
        },
        cubes2: this.cubes2.bind(this),
        getGap: this.getGap.bind(this),
        onScroll: this.onScroll.bind(this),
        onMouseEnter: this.onMouseEnter.bind(this),
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
        style: style
      }, attrs), /*#__PURE__*/_react.default.createElement(RTableToolbar, this.toolbar), !cardTemplate && this.visibleColumns.length === 0 && this.getLoading(), table, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          height: rowGap
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          flex: 1,
          background: '#fff'
        }
      }), this.getPaging()));
    }
  }]);

  return RTable;
}(_react.Component);

exports.default = RTable;
RTable.defaultProps = {
  columns: [],
  headerHeight: 36,
  rowHeight: 36,
  toolbarHeight: 36,
  rowGap: 6,
  indent: 20,
  translate: function translate(text) {
    return text;
  },
  freezeSize: 300,
  sorts: [],
  groups: [],
  selectives: []
};

var RTableToolbar = /*#__PURE__*/function (_Component2) {
  _inherits(RTableToolbar, _Component2);

  var _super2 = _createSuper(RTableToolbar);

  function RTableToolbar() {
    var _this8;

    _classCallCheck(this, RTableToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this8 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this8), "state", {
      searchText: ''
    });

    return _this8;
  }

  _createClass(RTableToolbar, [{
    key: "changeSearch",
    value: function changeSearch(value) {
      var _this9 = this;

      clearTimeout(this.searchTimeout);
      this.setState({
        searchText: value
      });
      this.searchTimeout = setTimeout(function () {
        var _this9$context = _this9.context,
            filterDictionary = _this9$context.filterDictionary,
            SetState = _this9$context.SetState;
        var searchColumnIndex = _this9.props.searchColumnIndex;
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
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this10 = this;

      var _this$context = this.context,
          translate = _this$context.translate,
          rtl = _this$context.rtl;
      var searchText = this.state.searchText;
      var _this$props8 = this.props,
          show = _this$props8.show,
          toggle = _this$props8.toggle,
          freeze = _this$props8.freeze,
          groupBy = _this$props8.groupBy,
          sort = _this$props8.sort,
          searchColumnIndex = _this$props8.searchColumnIndex,
          selectives = _this$props8.selectives;

      if (!show) {
        return null;
      }

      var buttonProps = {
        rtl: rtl,
        className: 'aio-table-toolbar-dropdown',
        animate: true
      };
      var Selectives = selectives.map(function (selective, i) {
        return /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({
          key: 'selectives' + i
        }, buttonProps, {
          items: selective.items,
          style: {
            width: 'auto'
          },
          text: selective.title,
          icon: selective.icon
        }));
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-toolbar"
      }, Selectives, searchColumnIndex !== false && /*#__PURE__*/_react.default.createElement("div", {
        key: 3,
        className: "aio-table-search"
      }, /*#__PURE__*/_react.default.createElement("input", {
        className: "aio-table-search-input",
        type: "text",
        value: searchText,
        onChange: function onChange(e) {
          return _this10.changeSearch(e.target.value);
        }
      }), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        className: "aio-table-search-icon",
        path: _js.mdiMagnify,
        size: 0.8
      })), searchColumnIndex === false && /*#__PURE__*/_react.default.createElement("div", {
        style: {
          flex: 1
        }
      }), groupBy.length > 1 && /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({
        key: 0
      }, buttonProps, {
        items: groupBy,
        title: translate('Group By'),
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiFileTree,
          size: 0.7,
          horizontal: rtl === true
        })
      })), sort.length > 1 && /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({
        key: 1
      }, buttonProps, {
        items: sort,
        title: translate('Sort'),
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiSort,
          size: 0.7
        })
      })), toggle.length > 1 && /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({
        key: 2
      }, buttonProps, {
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiEye,
          size: 0.7
        }),
        items: toggle,
        title: translate('Show Columns')
      })), freeze.length > 1 && /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({
        key: 3
      }, buttonProps, {
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiAlignHorizontalLeft,
          size: 0.7,
          horizontal: rtl === true
        }),
        items: freeze,
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
    var _this11;

    _classCallCheck(this, RTableUnit);

    _this11 = _super3.call(this, props);
    _this11.dom = /*#__PURE__*/(0, _react.createRef)();
    return _this11;
  }

  _createClass(RTableUnit, [{
    key: "getNoData",
    value: function getNoData() {
      var rowHeight = this.context.rowHeight;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-nodata",
        style: { ...this.getFullCellStyle(),
          height: rowHeight
        }
      }, "\u062F\u06CC\u062A\u0627\u06CC\u06CC \u0645\u0648\u062C\u0648\u062F \u0646\u06CC\u0633\u062A");
    }
  }, {
    key: "getGroupToggleIcon",
    value: function getGroupToggleIcon(row) {
      var _this$context2 = this.context,
          rtl = _this$context2.rtl,
          SetState = _this$context2.SetState,
          groupsOpen = _this$context2.groupsOpen,
          getGap = _this$context2.getGap;
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

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-toggle",
        onClick: function onClick() {
          var _groupField = row._groupField,
              _parentField = row._parentField;
          groupsOpen[_parentField + _groupField] = !groupsOpen[_parentField + _groupField];
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
      var _this$context3 = this.context,
          rowGap = _this$context3.rowGap,
          columnGap = _this$context3.columnGap;
      var _this$props9 = this.props,
          columns = _this$props9.columns,
          style = _this$props9.style;
      var gridTemplateColumns = '';
      this.gridTemplateColumns = [];

      for (var i = 0; i < columns.length; i++) {
        var _columns$i$width = columns[i].width,
            width = _columns$i$width === void 0 ? 'auto' : _columns$i$width;
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
      var _this12 = this;

      var columns = this.props.columns;
      return columns.map(function (column) {
        return _this12.getTitle(column);
      });
    }
  }, {
    key: "getGanttTitle",
    value: function getGanttTitle(column) {
      var _this$context4 = this.context,
          headerHeight = _this$context4.headerHeight,
          columnGap = _this$context4.columnGap;
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
        label: {
          step: 1,
          edit: function edit(value) {
            return keys[value];
          },
          style: {
            top: 0
          }
        },
        pointStyle: {
          display: 'none'
        },
        lineStyle: {
          display: 'none'
        }
      }));
    }
  }, {
    key: "getTitle",
    value: function getTitle(column) {
      var _this13 = this;

      if (column.template === 'gantt') {
        return this.getGanttTitle(column);
      }

      var _this$context5 = this.context,
          SetState = _this$context5.SetState,
          columns = _this$context5.columns,
          headerHeight = _this$context5.headerHeight,
          columnGap = _this$context5.columnGap,
          touch = _this$context5.touch;
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
        return column.resizable ? _this13.resizeDown(e, column) : undefined;
      });

      var titleProps = {
        className: 'aio-table-title-text',
        style: {
          justifyContent: column.titleJustify ? 'center' : undefined,
          cursor: column.movable === false ? undefined : 'move'
        },
        draggable: column.movable !== false,
        onDragStart: function onDragStart(e) {
          _this13.startColumnSwap = column._index;
        },
        onDragOver: function onDragOver(e) {
          e.preventDefault();
          _this13.endColumnSwap = column._index;
        },
        onDrop: function onDrop(e) {
          if (column.movable === false) {
            return;
          }

          if (_this13.startColumnSwap === _this13.endColumnSwap) {
            return;
          }

          var temp = columns[_this13.startColumnSwap];
          columns[_this13.startColumnSwap] = columns[_this13.endColumnSwap];
          columns[_this13.endColumnSwap] = temp;
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
      var _this$context6 = this.context,
          touch = _this$context6.touch,
          getClient = _this$context6.getClient;
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
      var _this$context7 = this.context,
          rtl = _this$context7.rtl,
          getClient = _this$context7.getClient;
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
      var _this$context8 = this.context,
          columns = _this$context8.columns,
          SetState = _this$context8.SetState;
      var _this$resizeDetails3 = this.resizeDetails,
          index = _this$resizeDetails3.index,
          newWidth = _this$resizeDetails3.newWidth;
      columns[index].width = newWidth;
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
      var _this$context9 = this.context,
          rtl = _this$context9.rtl,
          focused = _this$context9.focused,
          SetState = _this$context9.SetState;
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
      var _this14 = this;

      var _this$context10 = this.context,
          indent = _this$context10.indent,
          _onMouseEnter = _this$context10.onMouseEnter,
          _onScroll = _this$context10.onScroll,
          rowHeight = _this$context10.rowHeight,
          _this$context10$cardG = _this$context10.cardGap,
          cardGap = _this$context10$cardG === void 0 ? 0 : _this$context10$cardG,
          getLoading = _this$context10.getLoading,
          cardTemplate = _this$context10.cardTemplate,
          _this$context10$cardR = _this$context10.cardRowCount,
          cardRowCount = _this$context10$cardR === void 0 ? 1 : _this$context10$cardR,
          rowGap = _this$context10.rowGap,
          _this$context10$cardT = _this$context10.cardType,
          cardType = _this$context10$cardT === void 0 ? 'html' : _this$context10$cardT,
          columnGap = _this$context10.columnGap;
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
        onMouseEnter: function onMouseEnter() {
          return _onMouseEnter(index);
        },
        onMouseDown: function onMouseDown() {
          return _onMouseEnter(index);
        },
        onScroll: function onScroll(e) {
          return _onScroll(e, index);
        }
      }, rows && rows.length !== 0 && rows.map(function (row, i) {
        if (row._groupField) {
          var width = indent * row._level;
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "aio-table-group",
            key: 'group' + i + '-' + index,
            style: groupStyle
          }, index !== 1 && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
            style: {
              width: width
            }
          }), _this14.getGroupToggleIcon(row), row._groupText));
        }

        if (cardType === 'layout') {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "aio-table-card"
          }, /*#__PURE__*/_react.default.createElement(RLayout, {
            gap: cardGap,
            layout: cardTemplate(row.row)
          }));
        }

        return /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-card"
        }, cardTemplate(row.row));
      }), rows && rows.length === 0 && this.getNoData(), !rows && getLoading());
    }
  }, {
    key: "render",
    value: function render() {
      var _this15 = this;

      if (this.context.cardTemplate) {
        return this.card();
      }

      var _this$context11 = this.context,
          indent = _this$context11.indent,
          _onMouseEnter2 = _this$context11.onMouseEnter,
          _onScroll2 = _this$context11.onScroll,
          rowHeight = _this$context11.rowHeight,
          groups = _this$context11.groups,
          getLoading = _this$context11.getLoading,
          cardTemplate = _this$context11.cardTemplate;
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
        onMouseEnter: function onMouseEnter() {
          return _onMouseEnter2(index);
        },
        onMouseDown: function onMouseDown() {
          return _onMouseEnter2(index);
        },
        onScroll: function onScroll(e) {
          return _onScroll2(e, index);
        }
      }, this.getTitles(), rows && rows.length !== 0 && rows.map(function (row, i) {
        if (row._groupField) {
          var width = indent * row._level;
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "aio-table-group",
            key: 'group' + i + '-' + index,
            style: { ..._this15.getFullCellStyle(),
              height: rowHeight
            }
          }, index !== 1 && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
            style: {
              width: width
            }
          }), _this15.getGroupToggleIcon(row), row._groupText));
        }

        if (type === 'freeze') {
          return row.freezeCells.map(function (r, j) {
            return /*#__PURE__*/_react.default.createElement(RTableCell, _extends({
              key: i + '-' + j + '-' + index,
              cellId: i + '-' + j + '-' + index
            }, r, {
              relativeFilter: row.show === 'relativeFilter'
            }));
          });
        }

        if (type === 'unFreeze') {
          return row.unFreezeCells.map(function (r, j) {
            return /*#__PURE__*/_react.default.createElement(RTableCell, _extends({
              key: i + '-' + j + '-' + index,
              cellId: i + '-' + j + '-' + index
            }, r, {
              relativeFilter: row.show === 'relativeFilter'
            }));
          });
        }

        return row.cells.map(function (r, j) {
          return /*#__PURE__*/_react.default.createElement(RTableCell, _extends({
            key: i + '-' + j + '-' + index,
            cellId: i + '-' + j + '-' + index
          }, r, {
            relativeFilter: row.show === 'relativeFilter'
          }));
        });
      }), rows && rows.length === 0 && this.getNoData(), !rows && getLoading());
    }
  }]);

  return RTableUnit;
}(_react.Component);

_defineProperty(RTableUnit, "contextType", AioTableContext);

var RTableCell = /*#__PURE__*/function (_Component4) {
  _inherits(RTableCell, _Component4);

  var _super4 = _createSuper(RTableCell);

  function RTableCell(props) {
    var _this16;

    _classCallCheck(this, RTableCell);

    _this16 = _super4.call(this, props);
    _this16.dom = /*#__PURE__*/(0, _react.createRef)();
    var value = _this16.props.value;
    _this16.state = {
      value: value,
      error: false,
      prevValue: value
    };
    return _this16;
  }

  _createClass(RTableCell, [{
    key: "getBefore",
    value: function getBefore(row, column) {
      if (!column.before) {
        return '';
      }

      var before = typeof column.before === 'function' ? column.before(row, column) : column.before;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
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
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
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
          minWidth = _column$minWidth === void 0 ? '30px' : _column$minWidth,
          justify = column.justify;
      var rowHeight = this.context.rowHeight;
      var style = {
        height: rowHeight,
        overflow: template ? undefined : 'hidden',
        minWidth: minWidth,
        justifyContent: justify ? 'center' : undefined
      };

      if (column.template === 'gantt') {
        style.padding = "0 ".concat(padding);
      }

      return style;
    }
  }, {
    key: "getClassName",
    value: function getClassName(row, column) {
      var relativeFilter = this.props.relativeFilter;
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

      if (relativeFilter) {
        className += ' aio-table-relative-filter';
      }

      return className;
    }
  }, {
    key: "getToggleIcon",
    value: function getToggleIcon(row) {
      var _this$context12 = this.context,
          rtl = _this$context12.rtl,
          id = _this$context12.id,
          openDictionary = _this$context12.openDictionary,
          SetState = _this$context12.SetState;
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

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-toggle",
        onClick: function onClick() {
          if (row._id !== undefined) {
            openDictionary[row._id] = !openDictionary[row._id];

            if (id !== undefined) {
              localStorage.setItem('r table ' + id, JSON.stringify(openDictionary));
            }

            SetState({
              openDictionary: openDictionary
            });
          } else {
            row._opened = !row._opened;
            SetState({});
          }
        }
      }, icon), this.context.getGap());
    }
  }, {
    key: "getContent",
    value: function getContent(row, column, value) {
      var focused = this.context.focused;
      var content = '';

      if (column.template === 'slider') {
        content = /*#__PURE__*/_react.default.createElement(AIOSlider, {
          row: row,
          column: column
        });
      } else if (column.template === 'gantt') {
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
          editValue: function editValue(_ref) {
            var value = _ref.value;
            return keys[value];
          },
          end: keys.length - 1,
          points: [{
            value: startIndex
          }, {
            value: endIndex,
            fillStyle: {
              background: backgroundColor,
              backgroundImage: background
            },
            text: text === false ? undefined : /*#__PURE__*/_react.default.createElement("div", {
              style: {
                color: color
              }
            }, text)
          }],
          pin: {
            step: 1,
            style: {
              height: '100%',
              top: 0,
              opacity: .4
            },
            items: flags.map(function (_ref2) {
              var index = _ref2.index,
                  value = _ref2.value,
                  _ref2$color = _ref2.color,
                  color = _ref2$color === void 0 ? 'red' : _ref2$color;
              var flag = index !== undefined ? index : keys.indexOf(value);
              return {
                value: flag,
                style: {
                  background: color,
                  height: '100%',
                  top: 0
                }
              };
            })
          },
          lineStyle: {
            opacity: .4
          }
        });
      } else if (column.template && column.inlineEdit) {
        if (!focused) {
          content = column.template(row, column);
        } else {
          content = this.getInput(row, column);
        }
      } else if (column.template) {
        content = column.template(row, column);
      } else if (column.inlineEdit) {
        content = this.getInput(row, column);
      } else if (column.getValue) {
        content = value;
      }

      if (column.subText) {
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
        }, column.subText(row)));
      }

      return content;
    }
  }, {
    key: "getInput",
    value: function getInput(row, column) {
      var _this17 = this;

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
        value: value,
        disabled: disabled(row)
      };

      if (type === 'text' || type === 'number') {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'aio-table-input-container'
        }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
          onChange: function onChange(e) {
            return _this17.setState({
              value: e.target.value
            });
          },
          onBlur: async function onBlur(e) {
            _this17.setState({
              loading: true
            });

            var error = await column.inlineEdit.onChange(row, value);

            _this17.setState({
              loading: false
            });

            if (typeof error === 'string') {
              _this17.setState({
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
            return _this17.focus = true;
          },
          onBlur: function onBlur() {
            return _this17.focus = false;
          },
          onChange: async function onChange(e) {
            var value = e.target.value;

            _this17.setState({
              loading: true,
              value: value
            });

            var error = await column.inlineEdit.onChange(row, e.target.value);

            _this17.setState({
              loading: false
            });

            if (typeof error === 'string') {
              _this17.setState({
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
      var _this18 = this;

      var _this$context13 = this.context,
          indent = _this$context13.indent,
          cubes2 = _this$context13.cubes2,
          focused = _this$context13.focused,
          SetState = _this$context13.SetState;
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

      var _this$state2 = this.state,
          error = _this$state2.error,
          loading = _this$state2.loading;
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
            _this18.setState({
              value: _this18.props.value,
              error: false
            });
          }
        }, error);
      } else {
        cell = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, column.treeMode && /*#__PURE__*/_react.default.createElement("div", {
          className: "aio-table-indent",
          style: {
            width: row._level * indent
          }
        }), showToggleIcon && this.getToggleIcon(row), before, content, after);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: row._index + '-' + column._index,
        tabIndex: 0,
        ref: this.dom,
        cellid: cellId,
        rowindex: row._renderIndex,
        colindex: column._renderIndex,
        childindex: row._childIndex,
        level: row._level,
        isfirstchild: row._isFirstChild ? 1 : 0,
        islastchild: row._isLastChild ? 1 : 0,
        childslength: row._childsLength,
        style: this.getStyle(column),
        className: this.getClassName(row, column),
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

  return RTableCell;
}(_react.Component);

_defineProperty(RTableCell, "contextType", AioTableContext);

var AIOSlider = /*#__PURE__*/function (_Component5) {
  _inherits(AIOSlider, _Component5);

  var _super5 = _createSuper(AIOSlider);

  function AIOSlider(props) {
    var _this19;

    _classCallCheck(this, AIOSlider);

    _this19 = _super5.call(this, props);
    var _this19$props = _this19.props,
        column = _this19$props.column,
        row = _this19$props.row;
    var getValue = column.getValue;
    var value = getValue(row);

    if (!Array.isArray(value)) {
      value = [value];
    }

    _this19.state = {
      value: value
    };
    _this19.updateMode = 'outside';
    return _this19;
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
      var _this20 = this;

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

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, value.length > 1 && /*#__PURE__*/_react.default.createElement("div", {
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
              background: _this20.getBackground(value.length, i, color)
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
        onchange: function onchange(_ref3) {
          var points = _ref3.points;

          if (!onChange) {
            return;
          }

          _this20.updateMode = 'onChange';
          onChange(row, points.length > 1 ? points.map(function (p) {
            return p.value;
          }) : points[0].value);
        },
        pin: pinItems.length === 0 ? undefined : {
          items: pinItems
        },
        ondrag: function ondrag(_ref4) {
          var points = _ref4.points;
          _this20.updateMode = 'onDrag';

          _this20.setState({
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
      var _this$context14 = this.context,
          filterDictionary = _this$context14.filterDictionary,
          rtl = _this$context14.rtl;
      var column = this.props.column;

      if (!column.filter || column.search) {
        return null;
      }

      var filters = filterDictionary[column._index].items;
      var icon = filters.length ? /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiFilterMenu,
        size: 0.7
      }) : /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiFilter,
        size: 0.7
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-filter-icon"
      }, /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, {
        rtl: rtl,
        openRelatedTo: ".aio-table",
        text: icon,
        items: function items() {
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
      var _this$context15 = this.context,
          filterDictionary = _this$context15.filterDictionary,
          SetState = _this$context15.SetState,
          onChangeFilter = _this$context15.onChangeFilter;
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
      var _this21 = this;

      var column = this.props.column;
      var _this$context16 = this.context,
          filterDictionary = _this$context16.filterDictionary,
          SetState = _this$context16.SetState,
          translate = _this$context16.translate;
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
          return _this21.add();
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
    var _this22;

    _classCallCheck(this, RTableFilterItem);

    _this22 = _super8.call(this, props);
    var filter = _this22.props.filter;
    _this22.state = {
      value: filter.value,
      prevValue: filter.value
    };
    return _this22;
  }

  _createClass(RTableFilterItem, [{
    key: "remove",
    value: function remove(index) {
      var _this$context17 = this.context,
          filterDictionary = _this$context17.filterDictionary,
          SetState = _this$context17.SetState,
          onChangeFilter = _this$context17.onChangeFilter;
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
      var _this23 = this;

      var onChangeFilter = this.context.onChangeFilter;
      clearTimeout(this.timeout);
      this.setState({
        value: value
      });
      this.timeout = setTimeout(function () {
        var _this23$context = _this23.context,
            SetState = _this23$context.SetState,
            filterDictionary = _this23$context.filterDictionary;
        var _this23$props = _this23.props,
            column = _this23$props.column,
            index = _this23$props.index;
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
      var _this24 = this;

      var _this$context18 = this.context,
          filterDictionary = _this$context18.filterDictionary,
          SetState = _this$context18.SetState,
          translate = _this$context18.translate,
          onChangeFilter = _this$context18.onChangeFilter;
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
          return _this24.changeValue(e.target.value);
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '6px'
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "aio-table-filter-remove",
        onClick: function onClick() {
          return _this24.remove(index);
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

var RLayout = /*#__PURE__*/function (_Component9) {
  _inherits(RLayout, _Component9);

  var _super9 = _createSuper(RLayout);

  function RLayout() {
    var _this25;

    _classCallCheck(this, RLayout);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this25 = _super9.call.apply(_super9, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this25), "touch", 'ontouchstart' in document.documentElement);

    return _this25;
  }

  _createClass(RLayout, [{
    key: "eventHandler",
    value: function eventHandler(event, action) {
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'bind';
      event = this.touch ? {
        mousemove: "touchmove",
        mouseup: "touchend"
      }[event] : event;
      (0, _jquery.default)(window).unbind(event, action);

      if (type === 'bind') {
        (0, _jquery.default)(window).bind(event, action);
      }
    }
  }, {
    key: "getClient",
    value: function getClient(e) {
      return this.touch ? {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      } : {
        x: e.clientX,
        y: e.clientY
      };
    }
  }, {
    key: "getHtml",
    value: function getHtml(obj, index, parentObj) {
      var _this26 = this,
          _ref6;

      var parent = parentObj || {};
      var show = typeof obj.show === 'function' ? obj.show() : obj.show;

      if (show === false) {
        return null;
      }

      var childsAttrs = (typeof parent.childsAttrs === 'function' ? parent.childsAttrs(obj, index) : parent.childsAttrs) || {};
      var childsProps = (typeof parent.childsProps === 'function' ? parent.childsProps(obj, index) : parent.childsProps) || {};
      var parentDir = parent.row ? 'row' : 'column';
      var dir = obj.row ? 'row' : 'column';
      var gap = parent.gap === undefined ? this.gap : parent.gap;
      var Size = obj.size === undefined ? childsProps.size : obj.size;
      var size = typeof Size === 'function' ? Size() : Size;
      var flex = obj.flex === undefined ? childsProps.flex : obj.flex;

      if (parentObj) {
        flex = flex || 1;
      }

      var hideInSmall = obj.hideInSmall === undefined ? childsProps.hideInSmall : obj.hideInSmall;
      var hideInLarge = obj.hideInLarge === undefined ? childsProps.hideInLarge : obj.hideInLarge;
      var align = obj.align === undefined ? childsProps.align : obj.align;
      var onResize = obj.onResize;
      var Childs = obj[dir] || [];
      var childs = typeof Childs === 'function' ? Childs() : Childs;
      var html = typeof obj.html === 'function' ? obj.html() : obj.html;
      var attrs = (typeof obj.attrs === 'function' ? obj.attrs() : obj.attrs) || {};
      var className = childs.length ? 'r-layout-parent' : 'r-layout-item';
      var gapClassName = 'r-layout-gap';

      if (childsAttrs.className) {
        className += ' ' + childsAttrs.className;
      }

      if (attrs.className) {
        className += ' ' + attrs.className;
      }

      if (hideInLarge) {
        className += ' r-layout-hide-in-large';
        gapClassName += ' r-layout-hide-in-large';
      }

      if (hideInSmall) {
        className += ' r-layout-hide-in-small';
        gapClassName += ' r-layout-hide-in-small';
      }

      var style = { ...childsAttrs.style,
        ...attrs.style
      };

      if (align === 'v') {
        style.alignItems = 'center';
      } else if (align === 'h') {
        style.justifyContent = 'center';
      } else if (align === 'vh' || align === 'hv') {
        style.alignItems = 'center';
        style.justifyContent = 'center';
      }

      var result;
      var dataId = 'a' + Math.random();

      if (!childs.length) {
        var _ref5;

        result = /*#__PURE__*/_react.default.createElement("div", _extends({}, childsAttrs, attrs, {
          "data-id": dataId,
          className: className,
          style: (_ref5 = { ...style
          }, _defineProperty(_ref5, parentDir === 'row' ? 'width' : 'height', size), _defineProperty(_ref5, "flex", !size ? flex : undefined), _ref5)
        }), html);
      } else {
        var _Style;

        var Style = (_Style = { ...style,
          flexDirection: dir
        }, _defineProperty(_Style, parentDir === 'row' ? 'width' : 'height', size), _defineProperty(_Style, "flex", !size ? flex || 1 : undefined), _Style);
        result = /*#__PURE__*/_react.default.createElement("div", _extends({}, childsAttrs, attrs, {
          "data-id": dataId,
          className: className,
          style: Style
        }), childs.map(function (o, i) {
          return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
            key: i
          }, _this26.getHtml(o, i, obj));
        }));
      }

      var event = {},
          axis,
          cursor = '';

      if (size && onResize) {
        if (parentDir === 'row') {
          axis = 'x';
          cursor = 'col-resize';
        } else {
          axis = 'y';
          cursor = 'row-resize';
        }

        event[this.touch ? 'onTouchStart' : 'onMouseDown'] = function (e) {
          var pos = _this26.getClient(e);

          _this26.so = {
            pos: pos,
            onResize: onResize,
            axis: axis,
            size: size,
            dataId: dataId
          };

          _this26.eventHandler('mousemove', _jquery.default.proxy(_this26.mouseMove, _this26));

          _this26.eventHandler('mouseup', _jquery.default.proxy(_this26.mouseUp, _this26));
        };
      }

      return /*#__PURE__*/_react.default.createElement(_react.Fragment, {
        key: index
      }, result, /*#__PURE__*/_react.default.createElement("div", _extends({
        className: gapClassName,
        draggable: false,
        onDragStart: function onDragStart(e) {
          return e.preventDefault();
        },
        style: (_ref6 = {}, _defineProperty(_ref6, {
          'row': 'width',
          'column': 'height'
        }[parentDir], gap), _defineProperty(_ref6, "cursor", cursor), _ref6)
      }, event)));
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(e) {
      var rtl = this.props.rtl;
      var _this$so = this.so,
          pos = _this$so.pos,
          axis = _this$so.axis,
          size = _this$so.size,
          dataId = _this$so.dataId;
      var client = this.getClient(e);
      var offset = (client[axis] - pos[axis]) * (rtl ? -1 : 1);
      this.so.newSize = offset + size;
      var panel = (0, _jquery.default)('[data-id="' + dataId + '"]');
      panel.css(_defineProperty({}, {
        'x': 'width',
        'y': 'height'
      }[axis], this.so.newSize));
    }
  }, {
    key: "mouseUp",
    value: function mouseUp() {
      this.eventHandler('mousemove', this.mouseMove, 'unbind');
      this.eventHandler('mouseup', this.mouseUp, 'unbind');
      var _this$so2 = this.so,
          onResize = _this$so2.onResize,
          newSize = _this$so2.newSize;
      onResize(newSize);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props15 = this.props,
          gap = _this$props15.gap,
          layout = _this$props15.layout;
      this.gap = gap;
      return this.getHtml(layout, 0);
    }
  }]);

  return RLayout;
}(_react.Component);

RLayout.defaultProps = {
  gap: 12,
  layout: {}
};