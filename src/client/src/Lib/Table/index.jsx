/* eslint-disable max-len */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
/**
 * The Table component.
 * @author Anthony P. Pancerella
 */
import React from 'react';
import proptypes from 'prop-types';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider from 'react-bootstrap-table2-toolkit';
import filterFactory from 'react-bootstrap-table2-filter';
import cellEditFactory from 'react-bootstrap-table2-editor';
import SearchBar from './SearchBar';
import LoadingBar from './LoadingBar';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';
import './style.css';

/**
 * The Table component definition
 * @returns {React.Element}
 */
const Table = ({ keyValue, columns = [], list = [], loading = false, isSearchable = true, expandContent = {}, csvFileName = '', cellEditOptions = {}, headerClass = '', isPageable = true }) => {
    /**
     * Render pagination function
     * @returns {React.Element}
     */
    const pagination = ({ options, currSizePerPage, onSizePerPageChange }) => (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {currSizePerPage}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                {
                    options.map((option) => (<button key={option.text} className="dropdown-item" type="button" onClick={() => onSizePerPageChange(option.page)}>{option.text}</button>))
                }
            </div>
        </div>
    );
    return (
        <div style={{ marginBottom: -15 }}>
            <ToolkitProvider
                bootstrap4
                keyField={keyValue}
                data={list}
                columns={columns}
                exportCSV={{ fileName: csvFileName }}
                search={{ searchFormatted: true }}
            >
                {
                    (props) => (
                        <div>
                            <div>
                                <div className="col-sm-8" style={{ float: 'left', marginRight: '-15px', marginLeft: '-15px' }} />
                                <div className="col-sm-4" style={{ float: 'right', marginRight: '-15px', marginLeft: '-15px' }}>
                                    { isSearchable ? <SearchBar {...props.searchProps} /> : null }
                                </div>
                            </div>
                            <BootstrapTable
                                {...props.baseProps}
                                striped
                                hover
                                condensed
                                filter={filterFactory()}
                                pagination={isPageable ? paginationFactory({ pagination }) : null}
                                noDataIndication={() => <LoadingBar isLoading={loading} />}
                                cellEdit={cellEditFactory(cellEditOptions)}
                                headerClasses={headerClass}
                                expandRow={expandContent}
                            />
                        </div>
                    )
                }
            </ToolkitProvider>
        </div>
    );
};

Table.propTypes = {
    keyValue: proptypes.string.isRequired,
    loading: proptypes.bool,
    isSearchable: proptypes.bool,
    isPageable: proptypes.bool,
    csvFileName: proptypes.string,
    csvExportFunc: proptypes.func,
    btnRightFunc: proptypes.func,
    btnRightColor: proptypes.string,
    btnRightLabel: proptypes.string,
    headerClass: proptypes.string,
    cellEditOptions: proptypes.object,
    expandContent: proptypes.object
};

export default Table;
