import { NextSortDirection } from '../../utils/utils';

export class HeaderCellController {

    /*@ngInject*/
    constructor($scope) {
        Object.assign(this, {
            $scope: $scope
        });
        $scope.$watch('hcell.selected', (newValue) => {
            if (newValue != null) {
                this.onCheckboxChange();
            }
        });
    }

    /**
     * Calculates the styles for the header cell directive
     * @return {styles}
     */
    styles() {
        return {
            width: this.column.width + 'px',
            minWidth: this.column.minWidth + 'px',
            maxWidth: this.column.maxWidth + 'px',
            height: this.column.height + 'px'
        };
    }

    /**
     * Calculates the css classes for the header cell directive
     */
    cellClass() {
        var cls = {
            'sortable': this.column.sortable,
            'resizable': this.column.resizable
        };

        if (this.column.heaerClassName) {
            cls[this.column.headerClassName] = true;
        }

        return cls;
    }

    /**
     * Toggles the sorting on the column
     */
    onSorted() {
        if (this.column.sortable) {
            this.column.sort = NextSortDirection(this.sortType, this.column.sort);

            this.onSort({
                column: this.column
            });
        }
    }

    /**
     * Toggles the css class for the sort button
     */
    sortClass() {
        return {
            'sort-btn': true,
            'sort-asc icon-down': this.column.sort === 'asc',
            'sort-desc icon-up': this.column.sort === 'desc'
        };
    }

    /**
     * Updates the column width on resize
     * @param  {width}
     * @param  {column}
     */
    onResized(width, column) {
        this.onResize({
            column: column,
            width: width
        });
    }

    /**
     * Invoked when the header cell directive checkbox was changed
     */
    onCheckboxChange() {
        this.onCheckboxChanged();
    }

}
