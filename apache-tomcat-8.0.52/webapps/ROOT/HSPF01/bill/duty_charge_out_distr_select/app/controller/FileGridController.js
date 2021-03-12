/*
 * File: app/controller/FileGridController.js
 *
 * This file was generated by Sencha Architect version 4.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.5.x Classic library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.5.x Classic. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('DUTY_CHARGE_OUT_DISTR_SELECT.controller.FileGridController', {
    extend: 'Ext.app.Controller',

    control: {
        "#fileGrid": {
            cellclick: 'fileGridCellClick'
        }
    },

    fileGridCellClick: function(tableview, td, cellIndex, record, tr, rowIndex, e, eOpts) {
        var V_FILE_NM = record.data['FILE_NM'];
        var V_FILE_IN_SYSTEM_NM = record.data['FILE_IN_SYSTEM_NM'];
        V_FILE_NM = encodeURI(V_FILE_NM);
        V_FILE_IN_SYSTEM_NM = encodeURI(V_FILE_IN_SYSTEM_NM);

        if(V_FILE_NM != null && V_FILE_IN_SYSTEM_NM != '') {
            var myWin=new Ext.Window(
                {
                    title : '파일다운로드',
                    //html : '<iframe name="xxx" border =0 src="/mro/admin/mroadinquirrec/sql/fileDown.do?V_FILE_NM='+file_nm+'&V_FILE_NM_PC='+file_nm_pc+'" width="1%" height="1%"></iframe>',
                    html : '<iframe name="xxx" border =0 src="/HSPF01/bill/charge_out_distr/sql/charge_out_file.jsp?V_TYPE=D&V_FILE_NM='+V_FILE_NM+'&V_FILE_IN_SYSTEM_NM='+V_FILE_IN_SYSTEM_NM+'" width="1%" height="1%"></iframe>',
                    width :500,
                    height:500
                });
            myWin.show();
            myWin.hide();

        }
    }

});
