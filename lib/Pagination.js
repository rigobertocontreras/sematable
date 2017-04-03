'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _reactPager = require('react-pager');

var _reactPager2 = _interopRequireDefault(_reactPager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  page: _react.PropTypes.number.isRequired,
  pageCount: _react.PropTypes.number.isRequired,
  pageSize: _react.PropTypes.number.isRequired,
  onPageChange: _react.PropTypes.func.isRequired,
  autoHidePagination: _react.PropTypes.bool,
  visiblePages: _react.PropTypes.number
};

var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          page = _props.page,
          pageSize = _props.pageSize,
          onPageChange = _props.onPageChange,
          autoHidePagination = _props.autoHidePagination,
          _props$visiblePages = _props.visiblePages,
          visiblePages = _props$visiblePages === undefined ? 3 : _props$visiblePages;
      var pageCount = this.props.pageCount;

      var hasPrevious = page > 0;
      var hasNext = page < pageCount - 1;
      if (pageSize < 1) {
        pageCount = 1;
        hasPrevious = false;
        hasNext = false;
      }
      if (pageCount > 1 || !autoHidePagination) {
        return _react2.default.createElement(_reactPager2.default, {
          total: pageCount,
          current: page,
          visiblePages: visiblePages,
          className: 'pagination-sm pull-right',
          onPageChanged: function onPageChanged(newPage) {
            return onPageChange(newPage);
          }
        });
      }
      return null;
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = propTypes;
exports.default = Pagination;