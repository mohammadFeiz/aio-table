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

var _js = require("@mdi/js");

require("./index.css");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var RTableContext = /*#__PURE__*/(0, _react.createContext)();

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
        dataset = _this$props.dataset,
        freezeSize = _this$props.freezeSize;
    _this.dataset = dataset;
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

    _this.activeTableIndex = 0;
    _this.state = {
      openDictionary: openDictionary,
      filterDictionary: {},
      groupsOpen: {},
      freezeSize: freezeSize
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

      var units = (0, _jquery.default)(this.dom.current).find('.r-table-unit');
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
    key: "getValueByField",
    value: function getValueByField(obj, field) {
      var fieldString = typeof field === 'function' ? field(obj) : field;

      if (!fieldString || typeof fieldString !== 'string') {
        console.error('Grid.getValueByField() receive invalid field');
        return undefined;
      }

      var fields = fieldString.split('.');
      var value = obj[fields[0]];

      if (value === undefined) {
        return;
      }

      for (var i = 1; i < fields.length; i++) {
        value = value[fields[i]];

        if (value === undefined || value === null) {
          return;
        }
      }

      return value;
    }
  }, {
    key: "getGap",
    value: function getGap() {
      var cellGap = this.props.cellGap;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-gap",
        style: {
          width: cellGap
        }
      });
    }
  }, {
    key: "getClient",
    value: function getClient(e) {
      var touch = this.context.touch;
      return touch ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [e.clientX, e.clientY];
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
      (0, _jquery.default)('#r-table-first-split').css({
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
          className: 'r-table-body'
        }, /*#__PURE__*/_react.default.createElement(RTableUnit, {
          rows: rows,
          columns: this.visibleColumns
        }));
      } else {
        var freezeSize = this.state.freezeSize;
        return /*#__PURE__*/_react.default.createElement("div", {
          className: 'r-table-body'
        }, /*#__PURE__*/_react.default.createElement(RTableUnit, {
          key: 0,
          id: "r-table-first-split",
          rows: rows,
          columns: this.freezeColumns,
          index: 0,
          type: "freeze",
          style: {
            width: freezeSize
          }
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "r-table-splitter",
          onMouseDown: function onMouseDown(e) {
            return _this2.resizeDown(e);
          },
          onTouchStart: function onTouchStart(e) {
            return _this2.resizeDown(e);
          }
        }), true && /*#__PURE__*/_react.default.createElement(RTableUnit, {
          key: 1,
          id: "r-table-second-split",
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
      var _this3 = this;

      var convertModelRecursive = function convertModelRecursive(array, parentId, parentObject) {
        for (var i = 0; i < array.length; i++) {
          var row = array[i];

          if (row._parentId === undefined) {
            row._parentId = _this3.getValueByField(row, _this3.dataset.parentId);
            _this3.perf++;
          }

          if (row._parentId !== parentId) {
            continue;
          }

          var rowId = _this3.getValueByField(row, _this3.dataset.id);

          row._childs = [];
          parentObject.push(row);

          var newArray = _toConsumableArray(array);

          newArray.splice(i, 1);
          array.splice(i, 1);
          i--;
          convertModelRecursive(newArray, rowId, row._childs);
        }
      };

      this.dataset.childs = '_childs';
      var result = [];
      convertModelRecursive(_toConsumableArray(model), undefined, result);
      return result;
    }
  }, {
    key: "getRows",
    value: function getRows() {
      var _this$props2 = this.props,
          model = _this$props2.model,
          flat = _this$props2.flat;

      if (!model) {
        return false;
      }

      var rows = [];
      this.rowRenderIndex = 0;
      this.rowRealIndex = 0;
      this.perf = 0;
      var convertedModel = flat ? this.convertFlat(_toConsumableArray(model)) : _toConsumableArray(model);
      var pagedModel = this.getModelByPaging(convertedModel);
      var groupedModel = this.getModelByGroup(pagedModel);
      this.getRowsReq(groupedModel, rows, 0, []);
      return rows;
    }
  }, {
    key: "getModelByPaging",
    value: function getModelByPaging(model) {
      var paging = this.props.paging;

      if (!paging || paging.outSide) {
        return model;
      }

      var length = paging.length === undefined ? model.length : paging.length;
      paging.pages = Math.ceil(length / paging.size);
      var start = 0;
      var end = model.length;

      if (paging.number > Math.ceil(model.length / paging.size)) {
        paging.number = Math.ceil(model.length / paging.size);
      }

      start = (paging.number - 1) * paging.size;
      end = start + paging.size;
      this.rowRealIndex = start;
      return model.slice(start, end);
    }
  }, {
    key: "getModelByGroup",
    value: function getModelByGroup(model) {
      var _this4 = this;

      if (!this.groupByMode) {
        return model;
      }

      var groupsOpen = this.state.groupsOpen;
      var groups = this.groups;

      function msf(obj, _level) {
        var _parentField = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

        if (Array.isArray(obj)) {
          groupedRows = groupedRows.concat(obj);
        } else {
          var group = groups[_level];

          for (var prop in obj) {
            groupsOpen[_parentField + prop] = groupsOpen[_parentField + prop] === undefined ? true : groupsOpen[_parentField + prop];
            groupedRows.push({
              _groupField: prop,
              _groupText: prop === 'undefined' ? 'Without ' + group.text : group.text + ':' + prop,
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

      var _loop = function _loop(i) {
        var row = model[i];
        obj = newModel;
        var values = groups.map(function (group) {
          return _this4.getValueByField(row, group.field);
        });

        for (var j = 0; j < values.length; j++) {
          var value = values[j];

          if (j === values.length - 1) {
            obj[value] = obj[value] || [];
            obj[value].push(row);
          } else {
            obj[value] = obj[value] || {};
            obj = obj[value];
          }
        }
      };

      for (var i = 0; i < model.length; i++) {
        var obj;

        _loop(i);
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

        if (this.dataset && this.dataset.id) {
          var id = this.getValueByField(row, this.dataset.id);

          if (id === undefined) {
            console.error('RTable => id of row is not defined, please check getId props of RTable');
          }

          openDictionary[id] = openDictionary[id] === false ? false : true;
          row._opened = openDictionary[id];
          row._id = id;
        } else {
          row._opened = row._opened === false ? false : true;
        }

        row._childsLength = 0;
        var childs = [];

        if (this.dataset && this.dataset.childs) {
          childs = this.getValueByField(row, this.dataset.childs) || [];
          row._childsLength = childs.length;
        }

        var Row = this.getRow(row);
        rows.push(Row);

        if (row._opened) {
          if (row._childsLength) {
            this.getRowsReq(childs, rows, _level + 1, parents.concat(Row));
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

        if (filterItem.operator === 'contain' && value.indexOf(filterItem.value) === -1) {
          return false;
        }

        if (filterItem.operator === 'notContain' && value.indexOf(filterItem.value) !== -1) {
          return false;
        }

        if (filterItem.operator === 'equal' && value !== filterItem.value) {
          return false;
        }

        if (filterItem.operator === 'notEqual' && value === filterItem.value) {
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

        if (filterItem.operator === 'contain' && value.indexOf(filterItem.value) !== -1) {
          return true;
        }

        if (filterItem.operator === 'notContain' && value.indexOf(filterItem.value) === -1) {
          return true;
        }

        if (filterItem.operator === 'equal' && value === filterItem.value) {
          return true;
        }

        if (filterItem.operator === 'notEqual' && value !== filterItem.value) {
          return true;
        }

        if (filterItem.operator === 'greater' && value > filterItem.value) {
          return true;
        }

        if (filterItem.operator === 'less' && value < filterItem.value) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "getFilterResult",
    value: function getFilterResult(column, value) {
      var filterDictionary = this.state.filterDictionary;
      filterDictionary[column._index] = filterDictionary[column._index] || {
        items: [],
        booleanType: 'or'
      };
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
      row._values = {};
      var show = true;
      var lastFreezedColumn;
      var lastColumn;
      var isThereAutoColumn = false;
      var cells = [];
      var freezeCells = [];
      var unFreezeCells = [];

      for (var i = 0; i < this.visibleColumns.length; i++) {
        var column = this.visibleColumns[i];
        var value = column.field ? this.getValueByField(row, column.field) : undefined;
        row._values[column._index] = value;

        if (show) {
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
            lastFreezedColumn = column;
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

        for (var _i = 0; _i < parents.length; _i++) {
          if (parents[_i].show === false) {
            parents[_i].show = 'relativeFilter';
          }
        }
      }

      if (lastFreezedColumn) {
        lastFreezedColumn.width = 'auto';
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
      if (column.template === 'checkbox' && !column.width) {
        column.width = '48px';
      }

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

      var _this$props3 = this.props,
          columns = _this$props3.columns,
          onChange = _this$props3.onChange,
          _this$props3$freezeMo = _this$props3.freezeMode,
          freezeMode = _this$props3$freezeMo === void 0 ? true : _this$props3$freezeMo,
          _this$props3$groupByM = _this$props3.groupByMode,
          groupByMode = _this$props3$groupByM === void 0 ? true : _this$props3$groupByM;
      this.groups = [];
      this.freezeMode = false;
      this.groupByMode = false;
      this.visibleColumns = [];
      this.freezeColumns = [];
      this.unFreezeColumns = [];
      this.toolbar = {
        show: false,
        toggle: [],
        freeze: [],
        groupBy: [],
        searchColumnIndex: false
      };

      var _loop2 = function _loop2(i) {
        var column = columns[i];

        _this5.setColumnWidth(column);

        column._index = i;

        if (groupByMode) {
          if (column.groupBy) {
            _this5.groups.push({
              field: column.field,
              text: column.title
            });

            _this5.groupByMode = true;
          }

          if (column.toggleGroupBy) {
            _this5.toolbar.show = true;

            _this5.toolbar.groupBy.push({
              field: column.field,
              text: column.title,
              checked: column.groupBy,
              onClick: function onClick() {
                column.groupBy = !column.groupBy;
                onChange({
                  columns: columns
                });
              }
            });
          }
        }

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
                  onChange({
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
              onChange({
                columns: columns
              });
            }
          });
        }

        if (column.search) {
          _this5.toolbar.searchColumnIndex = column._index;
        }
      };

      for (var i = 0; i < columns.length; i++) {
        _loop2(i);
      }

      if (this.freezeColumns.length === 0 || this.unFreezeColumns.length === 0) {
        this.freezeMode = false;
      }
    }
  }, {
    key: "getPaging",
    value: function getPaging() {
      var _this$props4 = this.props,
          paging = _this$props4.paging,
          rtl = _this$props4.rtl,
          translate = _this$props4.translate;

      if (!paging) {
        return null;
      }

      var number = paging.number,
          _paging$sizes = paging.sizes,
          sizes = _paging$sizes === void 0 ? [1, 5, 10, 20, 30] : _paging$sizes,
          size = paging.size,
          _paging$onChange = paging.onChange,
          _onChange = _paging$onChange === void 0 ? function () {} : _paging$onChange,
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

        _onChange({
          number: newNumber
        });
      };

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-paging",
        style: {
          direction: 'ltr'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-paging-button",
        onClick: function onClick() {
          return changePage(rtl ? 'last' : 'first');
        },
        title: translate(rtl ? 'Last Page' : 'First Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronDoubleLeft,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-paging-button",
        onClick: function onClick() {
          return changePage(rtl ? 'next' : 'prev');
        },
        title: translate(rtl ? 'Next Page' : 'Previous Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronLeft,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-paging-number"
      }, number + ' / ' + pages), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-paging-button",
        onClick: function onClick() {
          return changePage(rtl ? 'prev' : 'next');
        },
        title: translate(rtl ? 'Previous Page' : 'Next Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronRight,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-paging-button",
        onClick: function onClick() {
          return changePage(rtl ? 'first' : 'last');
        },
        title: translate(rtl ? 'First Page' : 'Last Page')
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiChevronDoubleRight,
        size: .8
      })), /*#__PURE__*/_react.default.createElement("select", {
        className: "r-table-paging-button",
        value: size,
        onChange: function onChange(e) {
          return _onChange({
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
        className: "r-table-loading"
      }, this.cubes2({
        thickness: [6, 40]
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$props5 = this.props,
          columns = _this$props5.columns,
          rowHeight = _this$props5.rowHeight,
          headerHeight = _this$props5.headerHeight,
          toolbarHeight = _this$props5.toolbarHeight,
          rowGap = _this$props5.rowGap,
          className = _this$props5.className,
          columnGap = _this$props5.columnGap,
          rtl = _this$props5.rtl;
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
        SetState: function SetState(obj) {
          return _this6.setState(obj);
        },
        cubes2: this.cubes2.bind(this),
        getGap: this.getGap.bind(this),
        getValueByField: this.getValueByField.bind(this),
        onScroll: this.onScroll.bind(this),
        onMouseEnter: this.onMouseEnter.bind(this),
        getClient: this.getClient.bind(this),
        getLoading: this.getLoading.bind(this),
        groups: this.groups
      };
      return /*#__PURE__*/_react.default.createElement(RTableContext.Provider, {
        value: context
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: 'r-table' + (className ? ' ' + className : '') + (rtl ? ' rtl' : ''),
        tabIndex: 0,
        ref: this.dom
      }, /*#__PURE__*/_react.default.createElement(RTableToolbar, this.toolbar), this.visibleColumns.length === 0 && this.getLoading(), table, /*#__PURE__*/_react.default.createElement("div", {
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
  freezeSize: 300
};

var RTableToolbar = /*#__PURE__*/function (_Component2) {
  _inherits(RTableToolbar, _Component2);

  var _super2 = _createSuper(RTableToolbar);

  function RTableToolbar() {
    var _this7;

    _classCallCheck(this, RTableToolbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this7 = _super2.call.apply(_super2, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this7), "state", {
      searchText: ''
    });

    return _this7;
  }

  _createClass(RTableToolbar, [{
    key: "changeSearch",
    value: function changeSearch(value) {
      var _this8 = this;

      clearTimeout(this.searchTimeout);
      this.setState({
        searchText: value
      });
      this.searchTimeout = setTimeout(function () {
        var _this8$context = _this8.context,
            filterDictionary = _this8$context.filterDictionary,
            SetState = _this8$context.SetState;
        var searchColumnIndex = _this8.props.searchColumnIndex;
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
      var _this9 = this;

      var _this$context = this.context,
          translate = _this$context.translate,
          rtl = _this$context.rtl;
      var searchText = this.state.searchText;
      var _this$props6 = this.props,
          show = _this$props6.show,
          toggle = _this$props6.toggle,
          freeze = _this$props6.freeze,
          groupBy = _this$props6.groupBy,
          searchColumnIndex = _this$props6.searchColumnIndex;

      if (!show) {
        return null;
      }

      var buttonProps = {
        rtl: rtl,
        className: 'r-table-toolbar-dropdown',
        animate: true
      };
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-toolbar"
      }, groupBy.length !== 0 && /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({
        key: 0
      }, buttonProps, {
        items: groupBy,
        title: translate('Group By'),
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiFileTree,
          size: 0.7,
          horizontal: rtl === true
        })
      })), toggle.length !== 0 && /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({
        key: 1
      }, buttonProps, {
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiEye,
          size: 0.7
        }),
        items: toggle,
        title: translate('Show Columns')
      })), freeze.length !== 0 && /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, _extends({
        key: 2
      }, buttonProps, {
        icon: /*#__PURE__*/_react.default.createElement(_react2.Icon, {
          path: _js.mdiAlignHorizontalLeft,
          size: 0.7,
          horizontal: rtl === true
        }),
        items: freeze,
        title: translate('Freeze Columns')
      })), searchColumnIndex !== false && /*#__PURE__*/_react.default.createElement("div", {
        key: 3,
        className: "r-table-search"
      }, /*#__PURE__*/_react.default.createElement("input", {
        className: "r-table-search-input",
        type: "text",
        value: searchText,
        onChange: function onChange(e) {
          return _this9.changeSearch(e.target.value);
        }
      }), /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        className: "r-table-search-icon",
        path: _js.mdiMagnify,
        size: 0.8
      })));
    }
  }]);

  return RTableToolbar;
}(_react.Component);

_defineProperty(RTableToolbar, "contextType", RTableContext);

var RTableUnit = /*#__PURE__*/function (_Component3) {
  _inherits(RTableUnit, _Component3);

  var _super3 = _createSuper(RTableUnit);

  function RTableUnit(props) {
    var _this10;

    _classCallCheck(this, RTableUnit);

    _this10 = _super3.call(this, props);
    _this10.dom = /*#__PURE__*/(0, _react.createRef)();
    return _this10;
  }

  _createClass(RTableUnit, [{
    key: "getNoData",
    value: function getNoData() {
      var rowHeight = this.context.rowHeight;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-nodata",
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
        className: "r-table-toggle",
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
      var _this$props7 = this.props,
          columns = _this$props7.columns,
          index = _this$props7.index,
          style = _this$props7.style;
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
      var _this11 = this;

      var columns = this.props.columns;
      return columns.map(function (column) {
        return _this11.getTitle(column);
      });
    }
  }, {
    key: "getTitle",
    value: function getTitle(column) {
      var _this12 = this;

      var _this$context4 = this.context,
          onChange = _this$context4.onChange,
          columns = _this$context4.columns,
          headerHeight = _this$context4.headerHeight,
          columnGap = _this$context4.columnGap,
          touch = _this$context4.touch;

      if (column.template === 'checkbox') {
        if (column.checkAll) {
          column.title = /*#__PURE__*/_react.default.createElement(_react2.Icon, {
            path: _js.mdiCheckboxMarkedOutline,
            size: 1
          });
        }

        column.center = true;
      }

      var props = {
        style: {
          height: headerHeight,
          top: 0,
          borderLeft: columnGap ? 'none' : undefined,
          borderRight: columnGap ? 'none' : undefined
        },
        key: column._index + 'title',
        draggable: false,
        className: 'r-table-title'
      };

      var resizeProps = _defineProperty({
        className: 'r-table-resize',
        draggable: false
      }, touch ? 'onTouchStart' : 'onMouseDown', function (e) {
        return _this12.resizeDown(e, column);
      });

      var titleProps = {
        className: 'r-table-title-text',
        style: {
          justifyContent: column.center ? 'center' : undefined,
          cursor: column.movable === false ? undefined : 'move'
        },
        draggable: column.movable !== false,
        onDragStart: function onDragStart(e) {
          _this12.startColumnSwap = column._index;
        },
        onDragOver: function onDragOver(e) {
          e.preventDefault();
          _this12.endColumnSwap = column._index;
        },
        onDrop: function onDrop(e) {
          if (column.movable === false) {
            return;
          }

          if (_this12.startColumnSwap === _this12.endColumnSwap) {
            return;
          }

          var temp = columns[_this12.startColumnSwap];
          columns[_this12.startColumnSwap] = columns[_this12.endColumnSwap];
          columns[_this12.endColumnSwap] = temp;

          if (onChange) {
            onChange({
              columns: columns
            });
          }
        }
      };
      return /*#__PURE__*/_react.default.createElement("div", props, /*#__PURE__*/_react.default.createElement(RTableFilter, {
        column: column
      }), /*#__PURE__*/_react.default.createElement("div", titleProps, column.title), column.width !== 'auto' && /*#__PURE__*/_react.default.createElement("div", resizeProps));
    }
  }, {
    key: "resizeDown",
    value: function resizeDown(e, column) {
      var _this$context5 = this.context,
          touch = _this$context5.touch,
          getClient = _this$context5.getClient;
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
      var _this$context6 = this.context,
          rtl = _this$context6.rtl,
          getClient = _this$context6.getClient;
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
      var _this$context7 = this.context,
          columns = _this$context7.columns,
          _this$context7$onChan = _this$context7.onChange,
          onChange = _this$context7$onChan === void 0 ? function () {} : _this$context7$onChan;
      var _this$resizeDetails3 = this.resizeDetails,
          index = _this$resizeDetails3.index,
          newWidth = _this$resizeDetails3.newWidth;
      columns[index].width = newWidth;
      onChange({
        columns: columns
      });
    }
  }, {
    key: "keyDown",
    value: function keyDown(e) {
      if ([37, 38, 39, 40].indexOf(e.keyCode) === -1) {
        return;
      }

      var container = (0, _jquery.default)(this.dom.current);
      var rtl = this.context.rtl;
      var columns = this.props.columns;
      var inputs = container.find('.r-table-input');

      if (inputs.length === 0) {
        return;
      }

      var focusedInput = inputs.filter(':focus');

      if (focusedInput.length === 0) {
        inputs.eq(0).focus().select();
        return;
      }

      var _this$getCellIndex = this.getCellIndex(focusedInput.parents('.r-table-cell')),
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
    key: "render",
    value: function render() {
      var _this13 = this;

      var _this$context8 = this.context,
          indent = _this$context8.indent,
          _onMouseEnter = _this$context8.onMouseEnter,
          _onScroll = _this$context8.onScroll,
          rowGap = _this$context8.rowGap,
          groups = _this$context8.groups,
          getLoading = _this$context8.getLoading;
      var _this$props8 = this.props,
          rows = _this$props8.rows,
          id = _this$props8.id,
          index = _this$props8.index,
          type = _this$props8.type;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: id,
        tabIndex: 0,
        className: "r-table-unit",
        onKeyDown: this.keyDown.bind(this),
        style: this.getStyle(),
        ref: this.dom,
        onMouseEnter: function onMouseEnter() {
          return _onMouseEnter(index);
        },
        onMouseDown: function onMouseDown() {
          return _onMouseEnter(index);
        },
        onScroll: function onScroll(e) {
          return _onScroll(e, index);
        }
      }, this.getTitles(), rows && rows.length !== 0 && rows.filter(function (row) {
        return row.show !== false;
      }).map(function (row, i) {
        if (row._groupField) {
          var width = indent * row._level;
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "r-table-group",
            key: 'group' + i,
            style: _this13.getFullCellStyle()
          }, index !== 1 && /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
            style: {
              width: width
            }
          }), _this13.getGroupToggleIcon(row), row._groupText), row._level < groups.length - 1 && /*#__PURE__*/_react.default.createElement("div", {
            className: "r-table-group-bottom",
            style: {
              height: rowGap
            }
          }));
        }

        if (type === 'freeze') {
          return row.freezeCells.map(function (r, j) {
            return /*#__PURE__*/_react.default.createElement(RTableCell, _extends({
              key: i + '-' + j
            }, r, {
              relativeFilter: row.show === 'relativeFilter'
            }));
          });
        }

        if (type === 'unFreeze') {
          return row.unFreezeCells.map(function (r, j) {
            return /*#__PURE__*/_react.default.createElement(RTableCell, _extends({
              key: i + '-' + j
            }, r, {
              relativeFilter: row.show === 'relativeFilter'
            }));
          });
        }

        return row.cells.map(function (r, j) {
          return /*#__PURE__*/_react.default.createElement(RTableCell, _extends({
            key: i + '-' + j
          }, r, {
            relativeFilter: row.show === 'relativeFilter'
          }));
        });
      }), rows && rows.length === 0 && this.getNoData(), !rows && getLoading());
    }
  }]);

  return RTableUnit;
}(_react.Component);

_defineProperty(RTableUnit, "contextType", RTableContext);

var RTableCell = /*#__PURE__*/function (_Component4) {
  _inherits(RTableCell, _Component4);

  var _super4 = _createSuper(RTableCell);

  function RTableCell(props) {
    var _this14;

    _classCallCheck(this, RTableCell);

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

  _createClass(RTableCell, [{
    key: "getPrev",
    value: function getPrev(row, column) {
      if (!column.prev) {
        return '';
      }

      var prev = typeof column.prev === 'function' ? column.prev(row, column) : column.prev;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-icon"
      }, prev), this.context.getGap());
    }
  }, {
    key: "getNext",
    value: function getNext(row, column) {
      if (!column.next) {
        return '';
      }

      var next = typeof column.next === 'function' ? column.next(row, column) : column.next;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, this.context.getGap(), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-icon"
      }, next));
    }
  }, {
    key: "getStyle",
    value: function getStyle(column) {
      var rowHeight = this.context.rowHeight;
      var _column$minWidth = column.minWidth,
          minWidth = _column$minWidth === void 0 ? '30px' : _column$minWidth,
          justify = column.justify;
      return {
        height: rowHeight,
        overflow: column.template ? undefined : 'hidden',
        minWidth: minWidth,
        justifyContent: justify ? 'center' : undefined
      };
    }
  }, {
    key: "getClassName",
    value: function getClassName(row, column) {
      var relativeFilter = this.props.relativeFilter;
      var className = 'r-table-cell';

      if (column.className) {
        className += ' ' + column.className;
      }

      if (column.input) {
        className += ' r-table-cell-input';
      }

      if (relativeFilter) {
        className += ' r-table-relative-filter';
      }

      return className;
    }
  }, {
    key: "getToggleIcon",
    value: function getToggleIcon(row) {
      var _this$context9 = this.context,
          rtl = _this$context9.rtl,
          onChange = _this$context9.onChange,
          model = _this$context9.model,
          id = _this$context9.id,
          openDictionary = _this$context9.openDictionary,
          SetState = _this$context9.SetState;
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
        className: "r-table-toggle",
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
            onChange({
              model: model
            });
          }
        }
      }, icon), this.context.getGap());
    }
  }, {
    key: "getCheckbox",
    value: function getCheckbox(row, column) {
      var _index = column._index,
          _column$onChange = column.onChange,
          onChange = _column$onChange === void 0 ? function () {} : _column$onChange,
          _column$disabled = column.disabled,
          disabled = _column$disabled === void 0 ? function () {
        return false;
      } : _column$disabled;
      row._values[_index] = row._values[_index] === true ? true : false;
      var value = row._values[_index];
      var isDisabled = disabled(row);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'r-table-checkbox' + (isDisabled ? ' disabled' : ''),
        onClick: function onClick() {
          if (!isDisabled) {
            onChange(row, !value);
          }
        }
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: value ? _js.mdiCheckboxMarkedOutline : _js.mdiCheckboxBlankOutline,
        size: 1
      }));
    }
  }, {
    key: "getContent",
    value: function getContent(row, column, value) {
      var content = '';

      if (column.template === 'checkbox') {
        content = this.getCheckbox(row, column);
      } else if (column.template) {
        content = column.template(row, column);
      } else if (column.input) {
        content = this.getInput(row, column);
      } else if (column.field) {
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
      var _this15 = this;

      var type = column.input.type;
      var value = this.state.value;
      var props = { ...column.input,
        className: 'r-table-input',
        rowindex: row._renderIndex,
        colindex: column._renderIndex,
        value: value
      };

      if (type === 'text' || type === 'number') {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "r-table-input-container"
        }, /*#__PURE__*/_react.default.createElement("input", _extends({}, props, {
          onChange: function onChange(e) {
            return _this15.setState({
              value: e.target.value
            });
          },
          onBlur: async function onBlur(e) {
            _this15.setState({
              loading: true
            });

            var error = await column.input.onChange(value, row);

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
          className: "r-table-input-border"
        }));
      }

      if (type === 'select') {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "r-table-input-container"
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

            var error = await column.input.onChange(e.target.value, row);

            _this15.setState({
              loading: false
            });

            if (typeof error === 'string') {
              _this15.setState({
                error: error
              });
            }
          }
        }), column.input.options.map(function (o) {
          return /*#__PURE__*/_react.default.createElement("option", {
            value: o.value
          }, o.text);
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "r-table-input-border"
        }));
      }

      return '';
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var column = this.props.column;

      if (column.input && column.input.type === 'select' && this.focus) {
        (0, _jquery.default)(this.dom.current).find('.r-table-input').focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this16 = this;

      var _this$context10 = this.context,
          indent = _this$context10.indent,
          onChange = _this$context10.onChange,
          cubes2 = _this$context10.cubes2;
      var _this$props9 = this.props,
          row = _this$props9.row,
          column = _this$props9.column,
          value = _this$props9.value;

      if (this.state.prevValue !== value) {
        this.setState({
          value: value,
          prevValue: value
        });
      }

      var _this$state = this.state,
          error = _this$state.error,
          loading = _this$state.loading;
      var content = this.getContent(row, column, value);
      var prev = this.getPrev(row, column);
      var next = this.getNext(row, column);
      var showToggleIcon = column.treeMode && (row._id !== undefined || onChange);
      var cell;

      if (loading) {
        return cubes2();
      }

      if (error) {
        cell = /*#__PURE__*/_react.default.createElement("div", {
          className: "r-table-error",
          onClick: function onClick() {
            _this16.setState({
              value: _this16.props.value,
              error: false
            });
          }
        }, error);
      } else {
        cell = /*#__PURE__*/_react.default.createElement(_react.Fragment, null, column.treeMode && /*#__PURE__*/_react.default.createElement("div", {
          className: "r-table-indent",
          style: {
            width: row._level * indent
          }
        }), showToggleIcon && this.getToggleIcon(row), prev, content, next);
      }

      return /*#__PURE__*/_react.default.createElement("div", {
        key: row._index + '-' + column._index,
        tabIndex: 0,
        ref: this.dom,
        rowindex: row._renderIndex,
        colindex: column._renderIndex,
        childindex: row._childIndex,
        level: row._level,
        isfirstchild: row._isFirstChild ? 1 : 0,
        islastchild: row._isLastChild ? 1 : 0,
        childslength: row._childsLength,
        style: this.getStyle(column),
        className: this.getClassName(row, column),
        onClick: function onClick(e) {}
      }, cell);
    }
  }]);

  return RTableCell;
}(_react.Component);

_defineProperty(RTableCell, "contextType", RTableContext);

var RTableFilter = /*#__PURE__*/function (_Component5) {
  _inherits(RTableFilter, _Component5);

  var _super5 = _createSuper(RTableFilter);

  function RTableFilter() {
    _classCallCheck(this, RTableFilter);

    return _super5.apply(this, arguments);
  }

  _createClass(RTableFilter, [{
    key: "render",
    value: function render() {
      var _this$context11 = this.context,
          filterDictionary = _this$context11.filterDictionary,
          rtl = _this$context11.rtl;
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
        className: "r-table-filter-icon"
      }, /*#__PURE__*/_react.default.createElement(_rDropdownButton.default, {
        rtl: rtl,
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

_defineProperty(RTableFilter, "contextType", RTableContext);

var RTableFilterPopup = /*#__PURE__*/function (_Component6) {
  _inherits(RTableFilterPopup, _Component6);

  var _super6 = _createSuper(RTableFilterPopup);

  function RTableFilterPopup() {
    _classCallCheck(this, RTableFilterPopup);

    return _super6.apply(this, arguments);
  }

  _createClass(RTableFilterPopup, [{
    key: "add",
    value: function add() {
      var _this$context12 = this.context,
          filterDictionary = _this$context12.filterDictionary,
          SetState = _this$context12.SetState;
      var column = this.props.column;

      filterDictionary[column._index].items.push({
        operator: 'contain',
        value: ''
      });

      SetState({
        filterDictionary: filterDictionary
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this17 = this;

      var column = this.props.column;
      var _this$context13 = this.context,
          filterDictionary = _this$context13.filterDictionary,
          SetState = _this$context13.SetState,
          translate = _this$context13.translate;
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
          className: "r-table-boolean",
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
        className: "r-table-filter-popup"
      }, filterItems, /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-filter-footer"
      }, /*#__PURE__*/_react.default.createElement("button", {
        className: "r-table-filter-add",
        onClick: function onClick() {
          return _this17.add();
        }
      }, translate('Add'))));
    }
  }]);

  return RTableFilterPopup;
}(_react.Component);

_defineProperty(RTableFilterPopup, "contextType", RTableContext);

var RTableFilterItem = /*#__PURE__*/function (_Component7) {
  _inherits(RTableFilterItem, _Component7);

  var _super7 = _createSuper(RTableFilterItem);

  function RTableFilterItem(props) {
    var _this18;

    _classCallCheck(this, RTableFilterItem);

    _this18 = _super7.call(this, props);
    var filter = _this18.props.filter;
    _this18.state = {
      value: filter.value,
      prevValue: filter.value
    };
    return _this18;
  }

  _createClass(RTableFilterItem, [{
    key: "remove",
    value: function remove(index) {
      var _this$context14 = this.context,
          filterDictionary = _this$context14.filterDictionary,
          SetState = _this$context14.SetState;
      var column = this.props.column;

      filterDictionary[column._index].items.splice(index, 1);

      SetState({
        filterDictionary: filterDictionary
      });
    }
  }, {
    key: "changeValue",
    value: function changeValue(value) {
      var _this19 = this;

      clearTimeout(this.timeout);
      this.setState({
        value: value
      });
      this.timeout = setTimeout(function () {
        var _this19$context = _this19.context,
            SetState = _this19$context.SetState,
            filterDictionary = _this19$context.filterDictionary;
        var _this19$props = _this19.props,
            column = _this19$props.column,
            index = _this19$props.index;
        filterDictionary[column._index].items[index].value = value;
        SetState({
          filterDictionary: filterDictionary
        });
      }, 1000);
    }
  }, {
    key: "render",
    value: function render() {
      var _this20 = this;

      var _this$context15 = this.context,
          filterDictionary = _this$context15.filterDictionary,
          SetState = _this$context15.SetState,
          translate = _this$context15.translate;
      var _this$props10 = this.props,
          filter = _this$props10.filter,
          column = _this$props10.column,
          index = _this$props10.index;

      if (this.state.prevValue !== filter.value) {
        this.setState({
          value: filter.value,
          prevValue: filter.value
        });
        return null;
      }

      var value = this.state.value;
      var type = column.filter;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-filter-item"
      }, /*#__PURE__*/_react.default.createElement("select", {
        value: filter.operator,
        onChange: function onChange(e) {
          filterDictionary[column._index].items[index].operator = e.target.value;
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
          return _this20.changeValue(e.target.value);
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          width: '6px'
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "r-table-filter-remove",
        onClick: function onClick() {
          return _this20.remove(index);
        }
      }, /*#__PURE__*/_react.default.createElement(_react2.Icon, {
        path: _js.mdiClose,
        size: 0.7
      })));
    }
  }]);

  return RTableFilterItem;
}(_react.Component);

_defineProperty(RTableFilterItem, "contextType", RTableContext);