export default function (theme) {
    return {
        '.public_Scrollbar_main.public_Scrollbar_mainActive, .public_Scrollbar_main:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            fallbacks: [
                {
                    backgroundColor: 'rgba(255, 255, 255, 0.8)'
                }
            ]
        },
        '.public_Scrollbar_mainOpaque, .public_Scrollbar_mainOpaque.public_Scrollbar_mainActive, .public_Scrollbar_mainOpaque:hover': {
            backgroundColor: '#FFF',
            fallbacks: [
                {
                    backgroundColor: '#FFF'
                }
            ]
        },
        '.public_Scrollbar_face:after': {
            backgroundColor: '#c2c2c2',
            fallbacks: [
                {
                    backgroundColor: '#c2c2c2'
                }
            ]
        },
        '.public_Scrollbar_main:hover .public_Scrollbar_face:after, .public_Scrollbar_mainActive .public_Scrollbar_face:after, .public_Scrollbar_faceActive:after': {
            backgroundColor: '#7d7d7d',
            fallbacks: [
                {
                    backgroundColor: '#7d7d7d'
                }
            ]
        },
        '.public_fixedDataTable_main': {
            borderColor: '#d3d3d3',
            fallbacks: [
                {
                    borderColor: '#d3d3d3'
                }
            ]
        },
        '.public_fixedDataTable_header, .public_fixedDataTable_hasBottomBorder': {
            borderColor: '#d3d3d3',
            fallbacks: [
                {
                    borderColor: '#d3d3d3'
                }
            ]
        },
        '.public_fixedDataTable_header .public_fixedDataTableCell_main': {
            fontWeight: '700',
            fallbacks: [
                {
                    fontWeight: '700'
                }
            ]
        },
        '.public_fixedDataTable_header, .public_fixedDataTable_header .public_fixedDataTableCell_main': {
            backgroundColor: '#f6f7f8',
            backgroundImage: 'linear-gradient(#FFF, #efefef)',
            fallbacks: [
                {
                    backgroundImage: '-webkit-linear-gradient(#FFF, #efefef)'
                },
                {
                    backgroundImage: 'linear-gradient(#FFF, #efefef)'
                },
                {
                    backgroundColor: '#f6f7f8'
                },
                {
                    backgroundImage: '-webkit-linear-gradient(#FFF, #efefef)'
                }
            ]
        },
        '.public_fixedDataTable_footer .public_fixedDataTableCell_main': {
            backgroundColor: '#f6f7f8',
            borderColor: '#d3d3d3',
            fallbacks: [
                {
                    borderColor: '#d3d3d3'
                },
                {
                    backgroundColor: '#f6f7f8'
                }
            ]
        },
        '.public_fixedDataTable_topShadow': {
            background: '0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAF0lEQVR4AWPUkNeSBhHCjJoK2twgFisAFagCCp3pJlAAAAAASUVORK5CYII=) repeat-x',
            fallbacks: [
                {
                    background: '0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAF0lEQVR4AWPUkNeSBhHCjJoK2twgFisAFagCCp3pJlAAAAAASUVORK5CYII=) repeat-x'
                }
            ]
        },
        '.public_fixedDataTable_bottomShadow': {
            background: '0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAHElEQVQI12MwNjZmZdAT1+Nm0JDWEGZQk1GTBgAWkwIeAEp52AAAAABJRU5ErkJggg==) repeat-x',
            fallbacks: [
                {
                    background: '0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAECAYAAABP2FU6AAAAHElEQVQI12MwNjZmZdAT1+Nm0JDWEGZQk1GTBgAWkwIeAEp52AAAAABJRU5ErkJggg==) repeat-x'
                }
            ]
        },
        '.public_fixedDataTable_horizontalScrollbar .public_Scrollbar_mainHorizontal': {
            backgroundColor: '#FFF',
            fallbacks: [
                {
                    backgroundColor: '#FFF'
                }
            ]
        },
        '.public_fixedDataTableCell_main': {
            backgroundColor: '#FFF',
            borderColor: '#d3d3d3',
            fallbacks: [
                {
                    borderColor: '#d3d3d3'
                },
                {
                    backgroundColor: '#FFF'
                }
            ]
        },
        '.public_fixedDataTableCell_highlighted': {
            backgroundColor: '#f4f4f4',
            fallbacks: [
                {
                    backgroundColor: '#f4f4f4'
                }
            ]
        },
        '.public_fixedDataTableCell_cellContent': {
            padding: 8,
            fallbacks: [
                {
                    padding: 8
                }
            ]
        },
        '.public_fixedDataTableCell_columnResizerKnob': {
            backgroundColor: '#0284ff',
            fallbacks: [
                {
                    backgroundColor: '#0284ff'
                }
            ]
        },
        '.public_fixedDataTableColumnResizerLine_main': {
            borderColor: '#0284ff',
            fallbacks: [
                {
                    borderColor: '#0284ff'
                }
            ]
        },
        '.public_fixedDataTableRow_main': {
            backgroundColor: '#FFF',
            fallbacks: [
                {
                    backgroundColor: '#FFF'
                }
            ]
        },
        '.public_fixedDataTableRow_highlighted, .public_fixedDataTableRow_highlighted .public_fixedDataTableCell_main': {
            backgroundColor: '#f6f7f8',
            fallbacks: [
                {
                    backgroundColor: '#f6f7f8'
                }
            ]
        },
        '.public_fixedDataTableRow_fixedColumnsDivider': {
            borderColor: '#d3d3d3',
            fallbacks: [
                {
                    borderColor: '#d3d3d3'
                }
            ]
        },
        '.public_fixedDataTableRow_columnsShadow': {
            background: '0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==) repeat-y',
            fallbacks: [
                {
                    background: '0 0 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==) repeat-y'
                }
            ]
        },
        '.ScrollbarLayout_main': {
            boxSizing: 'border-box',
            outline: 'none',
            overflow: 'hidden',
            position: 'absolute',
            W: 'none',
            transitionDuration: '250ms',
            fallbacks: [
                {
                    userSelect: 'none'
                },
                {
                    M: 'none'
                },
                {
                    M: 'none'
                },
                {
                    W: 'ease'
                },
                {
                    transitionTimingFunction: 'ease'
                },
                {
                    W: '250ms'
                },
                {
                    transitionDuration: '250ms'
                },
                {
                    W: 'none'
                },
                {
                    position: 'absolute'
                },
                {
                    overflow: 'hidden'
                },
                {
                    outline: 'none'
                },
                {
                    boxSizing: 'border-box'
                },
                {
                    M: 'none'
                },
                {
                    W: 'ease'
                },
                {
                    W: '250ms'
                }
            ],
            transitionTimingFunction: 'ease',
            M: 'none',
            userSelect: 'none'
        },
        '.ScrollbarLayout_mainVertical': {
            bottom: '0',
            right: '0',
            top: '0',
            W: 'background-color width',
            transitionProperty: 'background-color width',
            width: 15,
            marginTop: 15,
            fallbacks: [
                {
                    width: 15
                },
                {
                    transitionProperty: 'background-color width'
                },
                {
                    W: 'background-color width'
                },
                {
                    top: '0'
                },
                {
                    right: '0'
                },
                {
                    bottom: '0'
                }
            ]
        },
        '.ScrollbarLayout_mainVertical.public_Scrollbar_mainActive, .ScrollbarLayout_mainVertical:hover': {
            width: 17,
            fallbacks: [
                {
                    width: 17
                }
            ]
        },
        '.ScrollbarLayout_mainHorizontal': {
            bottom: '0',
            height: 15,
            left: '0',
            W: 'background-color height',
            transitionProperty: 'background-color height',
            fallbacks: [
                {
                    transitionProperty: 'background-color height'
                },
                {
                    W: 'background-color height'
                },
                {
                    left: '0'
                },
                {
                    height: 15
                },
                {
                    bottom: '0'
                }
            ]
        },
        '.ScrollbarLayout_mainHorizontal.public_Scrollbar_mainActive, .ScrollbarLayout_mainHorizontal:hover': {
            height: 17,
            fallbacks: [
                {
                    height: 17
                }
            ]
        },
        '.ScrollbarLayout_face': {
            left: '0',
            overflow: 'hidden',
            position: 'absolute',
            zIndex: '1',
            fallbacks: [
                {
                    zIndex: '1'
                },
                {
                    position: 'absolute'
                },
                {
                    overflow: 'hidden'
                },
                {
                    left: '0'
                }
            ]
        },
        '.ScrollbarLayout_face:after': {
            borderRadius: 6,
            content: '\'\'',
            display: 'block',
            position: 'absolute',
            W: 'background-color 250ms ease',
            transition: 'background-color 250ms ease',
            fallbacks: [
                {
                    transition: 'background-color 250ms ease'
                },
                {
                    W: 'background-color 250ms ease'
                },
                {
                    position: 'absolute'
                },
                {
                    display: 'block'
                },
                {
                    content: '\'\''
                },
                {
                    borderRadius: 6
                }
            ]
        },
        '.ScrollbarLayout_faceHorizontal': {
            bottom: '0',
            left: '0',
            top: '0',
            fallbacks: [
                {
                    top: '0'
                },
                {
                    left: '0'
                },
                {
                    bottom: '0'
                }
            ]
        },
        '.ScrollbarLayout_faceHorizontal:after': {
            bottom: 4,
            left: '0',
            top: 4,
            width: '100%',
            fallbacks: [
                {
                    width: '100%'
                },
                {
                    top: 4
                },
                {
                    left: '0'
                },
                {
                    bottom: 4
                }
            ]
        },
        '.ScrollbarLayout_faceVertical': {
            left: '0',
            right: '0',
            top: '0',
            fallbacks: [
                {
                    top: '0'
                },
                {
                    right: '0'
                },
                {
                    left: '0'
                }
            ]
        },
        '.ScrollbarLayout_faceVertical:after': {
            height: '100%',
            left: 4,
            right: 4,
            top: '0',
            fallbacks: [
                {
                    top: '0'
                },
                {
                    right: 4
                },
                {
                    left: 4
                },
                {
                    height: '100%'
                }
            ]
        },
        '.fixedDataTableCellGroupLayout_cellGroup': {
            W: 'hidden',
            backfaceVisibility: 'hidden',
            left: '0',
            overflow: 'hidden',
            position: 'absolute',
            top: '0',
            whiteSpace: 'nowrap',
            fallbacks: [
                {
                    whiteSpace: 'nowrap'
                },
                {
                    top: '0'
                },
                {
                    position: 'absolute'
                },
                {
                    overflow: 'hidden'
                },
                {
                    left: '0'
                },
                {
                    backfaceVisibility: 'hidden'
                },
                {
                    W: 'hidden'
                }
            ]
        },
        '.fixedDataTableCellGroupLayout_cellGroup > .public_fixedDataTableCell_main': {
            display: 'inline-block',
            verticalAlign: 'top',
            whiteSpace: 'normal',
            fallbacks: [
                {
                    whiteSpace: 'normal'
                },
                {
                    verticalAlign: 'top'
                },
                {
                    display: 'inline-block'
                }
            ]
        },
        '.fixedDataTableCellGroupLayout_cellGroupWrapper': {
            position: 'absolute',
            top: '0',
            fallbacks: [
                {
                    top: '0'
                },
                {
                    position: 'absolute'
                }
            ]
        },
        '.fixedDataTableCellLayout_main': {
            borderRightStyle: 'solid',
            borderRightWidth: 1,
            borderWidth: '0 1px 0 0',
            boxSizing: 'border-box',
            display: 'block',
            overflow: 'hidden',
            position: 'absolute',
            whiteSpace: 'normal',
            fallbacks: [
                {
                    whiteSpace: 'normal'
                },
                {
                    position: 'absolute'
                },
                {
                    overflow: 'hidden'
                },
                {
                    display: 'block'
                },
                {
                    boxSizing: 'border-box'
                },
                {
                    borderWidth: '0 1px 0 0'
                },
                {
                    borderRightWidth: 1
                },
                {
                    borderRightStyle: 'solid'
                }
            ]
        },
        '.fixedDataTableCellLayout_lastChild': {
            borderWidth: '0 1px 1px 0',
            fallbacks: [
                {
                    borderWidth: '0 1px 1px 0'
                }
            ]
        },
        '.fixedDataTableCellLayout_alignRight': {
            textAlign: 'right',
            fallbacks: [
                {
                    textAlign: 'right'
                }
            ]
        },
        '.fixedDataTableCellLayout_alignCenter': {
            textAlign: 'center',
            fallbacks: [
                {
                    textAlign: 'center'
                }
            ]
        },
        '.fixedDataTableCellLayout_wrap1': {
            display: 'table',
            fallbacks: [
                {
                    display: 'table'
                }
            ]
        },
        '.fixedDataTableCellLayout_wrap2': {
            display: 'table-row',
            fallbacks: [
                {
                    display: 'table-row'
                }
            ]
        },
        '.fixedDataTableCellLayout_wrap3': {
            display: 'table-cell',
            verticalAlign: 'middle',
            fallbacks: [
                {
                    verticalAlign: 'middle'
                },
                {
                    display: 'table-cell'
                }
            ]
        },
        '.fixedDataTableCellLayout_columnResizerContainer': {
            position: 'absolute',
            right: 0,
            width: 6,
            zIndex: '1',
            fallbacks: [
                {
                    zIndex: '1'
                },
                {
                    width: 6
                },
                {
                    right: 0
                },
                {
                    position: 'absolute'
                }
            ]
        },
        '.fixedDataTableCellLayout_columnResizerContainer:hover': {
            cursor: 'ew-resize',
            fallbacks: [
                {
                    cursor: 'ew-resize'
                }
            ]
        },
        '.fixedDataTableCellLayout_columnResizerContainer:hover .fixedDataTableCellLayout_columnResizerKnob': {
            visibility: 'visible',
            fallbacks: [
                {
                    visibility: 'visible'
                }
            ]
        },
        '.fixedDataTableCellLayout_columnResizerKnob': {
            position: 'absolute',
            right: 0,
            visibility: 'hidden',
            width: 4,
            fallbacks: [
                {
                    width: 4
                },
                {
                    visibility: 'hidden'
                },
                {
                    right: 0
                },
                {
                    position: 'absolute'
                }
            ]
        },
        '.fixedDataTableColumnResizerLineLayout_mouseArea': {
            cursor: 'ew-resize',
            position: 'absolute',
            right: -5,
            width: 12,
            fallbacks: [
                {
                    width: 12
                },
                {
                    right: -5
                },
                {
                    position: 'absolute'
                },
                {
                    cursor: 'ew-resize'
                }
            ]
        },
        '.fixedDataTableColumnResizerLineLayout_main': {
            borderRightStyle: 'solid',
            borderRightWidth: 1,
            boxSizing: 'border-box',
            position: 'absolute',
            zIndex: '10',
            fallbacks: [
                {
                    zIndex: '10'
                },
                {
                    position: 'absolute'
                },
                {
                    boxSizing: 'border-box'
                },
                {
                    borderRightWidth: 1
                },
                {
                    borderRightStyle: 'solid'
                }
            ]
        },
        'body[dir="rtl"] .fixedDataTableColumnResizerLineLayout_main': {
            display: 'none !important',
            fallbacks: [
                {
                    display: 'none !important'
                }
            ]
        },
        '.fixedDataTableColumnResizerLineLayout_hiddenElem': {
            display: 'none !important',
            fallbacks: [
                {
                    display: 'none !important'
                }
            ]
        },
        '.fixedDataTableLayout_main': {
            borderStyle: 'solid',
            borderWidth: 1,
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
            fallbacks: [
                {
                    position: 'relative'
                },
                {
                    overflow: 'hidden'
                },
                {
                    boxSizing: 'border-box'
                },
                {
                    borderWidth: 1
                },
                {
                    borderStyle: 'solid'
                }
            ]
        },
        '.fixedDataTableLayout_header, .fixedDataTableLayout_hasBottomBorder': {
            borderBottomStyle: 'solid',
            borderBottomWidth: 1,
            fallbacks: [
                {
                    borderBottomWidth: 1
                },
                {
                    borderBottomStyle: 'solid'
                }
            ]
        },
        '.fixedDataTableLayout_footer .public_fixedDataTableCell_main': {
            borderTopStyle: 'solid',
            borderTopWidth: 1,
            fallbacks: [
                {
                    borderTopWidth: 1
                },
                {
                    borderTopStyle: 'solid'
                }
            ]
        },
        '.fixedDataTableLayout_topShadow, .fixedDataTableLayout_bottomShadow': {
            height: 4,
            left: '0',
            position: 'absolute',
            right: '0',
            zIndex: '1',
            fallbacks: [
                {
                    zIndex: '1'
                },
                {
                    right: '0'
                },
                {
                    position: 'absolute'
                },
                {
                    left: '0'
                },
                {
                    height: 4
                }
            ]
        },
        '.fixedDataTableLayout_bottomShadow': {
            marginTop: -4,
            fallbacks: [
                {
                    marginTop: -4
                }
            ]
        },
        '.fixedDataTableLayout_rowsContainer': {
            overflow: 'hidden',
            position: 'relative',
            fallbacks: [
                {
                    position: 'relative'
                },
                {
                    overflow: 'hidden'
                }
            ]
        },
        '.fixedDataTableLayout_horizontalScrollbar': {
            bottom: '0',
            position: 'relative',
            float: 'right',
            borderLeft: '1px solid #DEE8EF',
            borderTop: '1px solid  #DEE8EF',
            fallbacks: [
                {
                    borderLeft: '1px solid #DEE8EF'
                },
                {
                    float: 'right'
                },
                {
                    position: 'relative'
                },
                {
                    bottom: '0'
                }
            ]
        },
        '.fixedDataTableRowLayout_main': {
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'absolute',
            top: '0',
            fallbacks: [
                {
                    top: '0'
                },
                {
                    position: 'absolute'
                },
                {
                    overflow: 'hidden'
                },
                {
                    boxSizing: 'border-box'
                }
            ]
        },
        '.fixedDataTableRowLayout_body': {
            left: '0',
            position: 'absolute',
            top: '0',
            fallbacks: [
                {
                    top: '0'
                },
                {
                    position: 'absolute'
                },
                {
                    left: '0'
                }
            ]
        },
        '.fixedDataTableRowLayout_fixedColumnsDivider': {
            W: 'hidden',
            backfaceVisibility: 'hidden',
            borderLeftStyle: 'solid',
            borderLeftWidth: 1,
            left: '0',
            position: 'absolute',
            top: '0',
            width: '0',
            fallbacks: [
                {
                    width: '0'
                },
                {
                    top: '0'
                },
                {
                    position: 'absolute'
                },
                {
                    left: '0'
                },
                {
                    borderLeftWidth: 1
                },
                {
                    borderLeftStyle: 'solid'
                },
                {
                    backfaceVisibility: 'hidden'
                },
                {
                    W: 'hidden'
                }
            ]
        },
        '.fixedDataTableRowLayout_columnsShadow': {
            width: 4,
            fallbacks: [
                {
                    width: 4
                }
            ]
        },
        '.fixedDataTableRowLayout_rowWrapper': {
            position: 'absolute',
            top: '0',
            borderLeft: '1px solid #DEE8EF',
            fallbacks: [
                {
                    top: '0'
                },
                {
                    position: 'absolute'
                }
            ]
        },
        '.column-selector-table .public_fixedDataTable_main': {
            border: 'none'
        },
        '.column-selector-table .fixedDataTable_rowsContainer': {
            background: '#FFF'
        },
        '.column-selector-table .public_fixedDataTable_header, .column-selector-table .public_fixedDataTable_header .public_fixedDataTableCell_main': {
            background: 'none'
        },
        '.column-selector-table .public_fixedDataTable_header .public_fixedDataTableCell_main': {
            fontWeight: 'normal',
            background: '#f2f4f8'
        },
        '.column-selector-table .public_fixedDataTable_header .public_fixedDataTableCell_main.mapped': {
            background: '#f2f4f8'
        },
        '.column-selector-table .public_fixedDataTable_header, .column-selector-table .fixedDataTable_hasBottomBorder': {
            borderBottom: 'none'
        },
        '.column-selector-table .public_fixedDataTableRow_highlighted, .column-selector-table .public_fixedDataTableRow_highlighted .public_fixedDataTableCell_main': {
            background: 'none'
        },
        '.column-selector-table .public_fixedDataTableCell_cellContent': {
            margin: '0',
            whiteSpace: 'nowrap'
        },
        '.column-selector-table .public_fixedDataTableCell_main': {
            border: '1px solid #DEE8EF',
            borderTop: 'none',
            borderLeft: 'none'
        },
        '.column-selector-table .public_fixedDataTableCell_main.skipped:after': {
            content: '""',
            background: 'rgba(255, 255, 255, 0.7)'
        },
        '.column-selector-table .public_fixedDataTableCell_main.mapped': {
            background: '#dbeacb'
        },
        '.column-selector-table .public_fixedDataTableCell_main .heading-dropdown-wrap.select-dropdown > a': {
            borderLeft: 'none'
        },
        '.column-selector-table .public_fixedDataTable_header .public_fixedDataTableCell_main.skipped:after': {
            content: 'none'
        },
        '.column-selector-table .public_fixedDataTableCell_wrap1, .column-selector-table .public_fixedDataTableCell_main, .column-selector-table .public_fixedDataTableRow_main, .column-selector-table .fixedDataTableCellGroup_cellGroup, .column-selector-table .fixedDataTable_rowsContainer, .column-selector-table .public_fixedDataTable_main': {
            overflow: 'visible'
        },
        '.column-selector-table .fixedDataTableRow_rowWrapper:first-child': {
            zIndex: '200 !important'
        },
        '.users-content-table .public_fixedDataTable_main': {
            border: '1px solid #DEE8EF',
            borderTop: '1px solid transparent',
            borderLeft: '1px solid transparent'
        },
        '.users-content-table .fixedDataTable_rowsContainer': {
            background: '#FFF'
        },
        '.users-content-table .public_fixedDataTable_header, .users-content-table .public_fixedDataTable_header .public_fixedDataTableCell_main': {
            background: 'none'
        },
        '.users-content-table .public_fixedDataTable_header .public_fixedDataTableCell_main': {
            fontWeight: 'normal',
            background: '#637987',
            color: '#FFF'
        },
        '.users-content-table .public_fixedDataTable_header, .users-content-table .fixedDataTable_hasBottomBorder': {
            borderBottom: '1px solid #DEE8EF'
        },
        '.users-content-table .public_fixedDataTableRow_highlighted, .users-content-table .public_fixedDataTableRow_highlighted .public_fixedDataTableCell_main': {
            background: 'none'
        },
        '.users-content-table .public_fixedDataTableCell_cellContent': {
            margin: '0',
            whiteSpace: 'nowrap'
        },
        '.users-content-table .public_fixedDataTableCell_main': {
            border: 'none',
            fallbacks: [
                {
                    border: '1px solid #DEE8EF'
                }
            ],
            borderRight: '1px solid #DEE8EF'
        },
        '.users-content-table .fixedDataTableRow_rowWrapper:first-child': {
            zIndex: '200 !important'
        },
        '.users-content-table': {
            marginTop: 20
        },
        '.users-content-table .fixedDataTableRowLayout_rowWrapper:nth-child(even) .public_fixedDataTable_bodyRow': {
            background: '#f9fafc'
        },
        '.users-content-table.all-empty .public_fixedDataTable_bodyRow': {
            background: '#FFF !important'
        },
        '.users-content-table.all-empty .public_fixedDataTable_bodyRow .public_fixedDataTableCell_main': {
            borderRight: 'none'
        },
        '.users-content-table .users-sample-content': {
            left: '-20px !important',
            paddingLeft: '20px !important',
            bottom: 20
        },
        '.users-content-table table > tbody > tr > td p': {
            color: '#31414a',
            fontWeight: '600'
        },
        '.users-table-cell-head': {
            boxSizing: 'border-box',
            position: 'relative',
            padding: '7px 10px',
            height: '100%',
            display: 'flex',
            alignItems: 'center'
        },
        '.users-table-cell-head > span': {
            color: '#fbfbfb',
            fontSize: 14,
            fontWeight: '600'
        },
        '.users-table-cell-head > .create-link': {
            width: 24,
            height: 24,
            background: '#00aced',
            color: '#ffffff',
            fontSize: 20,
            lineHeight: 24,
            textAlign: 'center',
            display: 'block',
            position: 'absolute',
            top: 5,
            right: 5,
            borderRadius: 15,
            fontWeight: '700'
        },
        '.users-table-cell-head > .edit-link': {
            color: '#222',
            display: 'inline-block',
            padding: '2px 15px',
            background: '#FFF',
            borderRadius: 15,
            border: '1px solid #ced6dc',
            marginLeft: 5,
            fontSize: 12,
            textTransform: 'uppercase',
            fontWeight: '600'
        },
        '.users-table-cell-head .sortby-items': {
            backgroundColor: '#FFF',
            color: '#31414a',
            padding: '2px 17px',
            borderRadius: 10.5,
            lineHeight: 18
        },
        '.automate-table': {
            position: 'relative'
        },
        '.automate-table .fixedDataTableRowLayout_rowWrapper:nth-child(even) .users-table-other-data-cell': {
            background: '#f9fafc !important'
        },
        '.automate-table .fixedDataTableRowLayout_rowWrapper:nth-child(even) .users-table-other-data-cell .full-span-cell': {
            background: '#f9fafc !important'
        },
        '.automate-table .fixedDataTableRowLayout_rowWrapper:nth-child(even) .users-table-other-data-cell.white-bg': {
            background: '#FFF !important'
        },
        '.automate-table .fixedDataTableRowLayout_rowWrapper:nth-child(odd) .users-table-other-data-cell .full-span-cell': {
            background: '#FFF !important'
        },
        '.automate-table .fixedDataTableRowLayout_main, .automate-table .public_fixedDataTableCell_main, .automate-table .fixedDataTableCellGroupLayout_cellGroup': {
            overflow: 'visible'
        },
        '.automate-table .no-data': {
            position: 'absolute',
            top: '45%',
            left: '0',
            marginTop: -10,
            width: '100%',
            textAlign: 'center'
        },
        '.automate-table .no-data p': {
            textAlign: 'center',
            fontSize: 14
        },
        '.automate-table .active-status': {
            fontFamily: '"Open Sans",Arial,sans-serif',
            fontSize: 12,
            fontWeight: '400',
            color: '#64727b',
            letterSpacing: 0.5
        },
        '.automate-table .active-status.big': {
            fontSize: 14
        },
        '.users-table-other-data-cell': {
            height: '100%'
        },
        '.users-table-other-data-cell p': {
            color: '#31414a',
            fontWeight: '600'
        },
        '.users-table-other-data-cell p.small, .users-table-other-data-cell p.small': {
            fontSize: 12,
            fontWeight: '400'
        },
        '.users-table-other-data-cell p.grey, .users-table-other-data-cell p .grey': {
            color: '#567181',
            fontWeight: '400'
        },
        '.users-table-other-data-cell p.context': {
            fontSize: 14,
            margin: '5px 0 0',
            fontWeight: '300',
            color: '#567181'
        },
        '.users-table-other-data-cell p.context.small': {
            fontSize: 12
        },
        '.users-table-other-data-cell p.context .relative-span': {
            marginRight: 3,
            display: 'inline-block',
            width: 10,
            height: 10
        },
        '.users-table-other-data-cell p.text-error': {
            color: '#e62226',
            fontWeight: '600',
            fontFamily: 'inherit'
        },
        '.users-table-other-data-cell p.text-success': {
            color: '#9dd07c',
            fontWeight: '600',
            fontFamily: 'inherit'
        },
        '.users-table-other-data-cell span.context': {
            fontSize: 12,
            marginLeft: 5,
            fontWeight: '300',
            color: '#567181'
        },
        '.users-table-other-data-cell span.context .relative-span': {
            marginRight: 3,
            display: 'inline-block',
            width: 10,
            height: 10
        },
        '.users-table-other-data-cell.less-padding': {
            padding: '15px 10px'
        },
        '.users-table-other-data-cell.medium-padding': {
            padding: '20px 10px'
        },
        '.pad20-10': {
            padding: '20px 10px'
        },
        '.space-between': {
            justifyContent: 'space-between'
        },
        '.custom-dropdown-menu': {
            width: '100%',
            padding: '0',
            margin: '0',
            border: '1px solid #ced6dc',
            borderRadius: '0'
        },
        '.custom-dropdown-menu > li': {
            position: 'relative'
        },
        '.custom-dropdown-menu > li > a': {
            fontFamily: '"Open Sans", "Arial", "sans-serif"',
            display: 'block',
            borderBottom: '1px solid #DEE8EF',
            background: '#f9fafc',
            color: '#567181',
            padding: '10px 28px 10px 15px',
            position: 'relative'
        },
        '.custom-dropdown-menu > li > a.with-submenu': {
            paddingRight: 30
        },
        '.custom-dropdown-menu > li > a.with-submenu:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 12,
            right: 10
        },
        '.custom-dropdown-menu > li > .item:hover, .custom-dropdown-menu > li > .item.selected': {
            background: '#FFF',
            color: '#31414a'
        },
        '.custom-dropdown-menu > li > .delete-link': {
            position: 'absolute',
            top: '50%',
            right: 10,
            padding: '0',
            border: 'none'
        },
        '.custom-dropdown-menu > li > .edit-link': {
            position: 'absolute',
            top: '50%',
            right: 18,
            padding: '0',
            border: 'none'
        },
        '.custom-dropdown-menu > li.loading > p': {
            padding: '10px 18px',
            margin: '0',
            color: '#222'
        },
        '.custom-dropdown-menu > li:last-child > a': {
            borderBottom: 'none'
        },
        '#sort-by-popover': {
            boxShadow: 'none',
            padding: '0',
            border: '0',
            marginTop: 9
        },
        '#sort-by-popover .arrow': {
            display: 'none'
        },
        '#sort-by-popover .custom-dropdown-menu': {
            boxShadow: '0 6px 12px rgba(0, 0, 0, 0.175)',
            border: '1px solid #ced6dc',
            width: 230,
            maxHeight: 200,
            position: 'relative'
        },
        '#sort-by-popover .custom-dropdown-menu > li a': {
            position: 'relative',
            padding: '10px 15px',
            textDecoration: 'none'
        },
        '#sort-by-popover .custom-dropdown-menu > li a:focus, #sort-by-popover .custom-dropdown-menu > li a:active': {
            outline: '0'
        },
        '#sort-by-popover .custom-dropdown-menu > li a:hover': {
            background: '#FFF',
            outline: '0'
        },
        '#sort-by-popover .custom-dropdown-menu > li a .title': {
            color: '#567181'
        },
        '#sort-by-popover .custom-dropdown-menu > li a p': {
            margin: '0',
            textAlign: 'left'
        },
        '#sort-by-popover .custom-dropdown-menu > li a .other-data': {
            color: '#567181',
            fontSize: 10
        },
        '#sort-by-popover .popover-content': {
            padding: '0',
            width: '100%'
        },
        '.sortby-items': {
            marginRight: 20,
            cursor: 'pointer',
            fontSize: 10,
            fontWeight: '300',
            backgroundColor: '#FFF',
            color: '#31414a',
            padding: '2px 17px',
            borderRadius: 10.5,
            lineHeight: 18
        },
        'ul, ol': {
            listStyleType: 'none',
            margin: '0',
            padding: '0'
        },
        '.popover': {
            fontFamily: '"Open Sans",Arial,sans-serif',
            maxWidth: 'none',
            position: 'absolute'
        },
        '*': {
            boxSizing: 'border-box'
        }
    }
};