import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

const propTypes = {
  pageSize: PropTypes.number.isRequired,
  pageSizes: PropTypes.array.isRequired,
  totalSize: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export const PAGE_SIZE_ALL_VALUE = -1;

class PageSize extends Component {
  render() {
    const {
      pageSize,
      pageSizes,
      totalSize,
      onChange,
      className,
    } = this.props;
    return (
      <div
        className={className}
        style={{
          margin: '1rem 0 1rem 0',
        }}
      >
        Show <select
          onChange={(e) => onChange(parseInt(e.target.value, 10))}
          value={pageSize}
          className="form-control sema-field"
          style={{
            display: 'inline-block',
            width: '80px',
            margin: '0 0 0 5px',
          }}
        >
          {
            _.map(pageSizes, (size, i) => (
              <option
                value={size}
                key={i}
              >
                {size === PAGE_SIZE_ALL_VALUE ? 'All' : size}
              </option>
            ))
          }
        </select>
      </div>
    );
  }
}

PageSize.propTypes = propTypes;
export default PageSize;
