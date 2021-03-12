/*
 * File: app/controller/TbButtonController.js
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

Ext.define('R_SIS_CHEM_D.controller.TbButtonController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore',
        'D01_Grid_Store',
        'D03_Grid_Store',
        'D04_Grid_Store',
        'D07_Grid_Store',
        'D08_Grid_Store',
        'D09_Grid_Store',
        'D11_Grid_Store',
        'D13_Grid_Store',
        'D15_Grid_Store',
        'D16_Grid_Store',
        'D17_Grid_Store'
    ],

    control: {
        "#selBtn": {
            click: 'selBtnClick'
        },
        "#saveBtn": {
            click: 'saveBtnClick'
        },
        "#delBtn": {
            click: 'delBtnClick'
        },
        "#clsBtn": {
            click: 'clsBtnClick'
        },
        "mysearchform textfield[name=search_field]": {
            specialkey: 'tfEnter'
        }
    },

    selBtnClick: function(button, e, eOpts) {
        var store_arr = ['D01','D03','D04','D07','D08','D09','D11','D13','D15','D16','D17'];
        var class_arr = ['NUM','NUM','NUM','NUM','NUM','NUM','CHAR','CHAR','CHAR','CHAR','CHAR'];
        //var chart_arr = ['C01'];

        for(var i = 0 ; i < store_arr.length ; i ++){
            var store = this.getStore(store_arr[i] + '_Grid_Store');
            store.load({
                params: {
                    V_TYPE: store_arr[i],
                    V_CLASS : class_arr[i],
                    V_FROM_DT: Ext.getCmp('V_FROM_DT').getValue(),
                    V_TO_DT: Ext.getCmp('V_TO_DT').getValue(),
                    V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                    V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                },
            });
        }

        /*
        for(var i = 0 ; i < chart_arr.length ; i ++){
            var store = this.getStore(chart_arr[i] + '_Chart_Store');
            store.load({
                params: {
                    V_TYPE: chart_arr[i],
                    V_CLASS : 'CHART',
                    V_FROM_DT: Ext.getCmp('V_FROM_DT').getValue(),
                    V_TO_DT: Ext.getCmp('V_TO_DT').getValue(),
                    V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                    V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
                },
            });
        }
        */

    },

    saveBtnClick: function(button, e, eOpts) {
        alert('save');
    },

    delBtnClick: function(button, e, eOpts) {
        alert('delete');
    },

    clsBtnClick: function(button, e, eOpts) {
        var tab=parent.Ext.getCmp('myTab');
        var activeTab=tab.getActiveTab();
        var tabIndex=tab.items.indexOf(activeTab);
        tab.remove(tabIndex,true);
    },

    tfEnter: function(field, e, eOpts) {
        	if (e.getKey() == e.ENTER) {
        		this.selBtnClick();
        	}
    }

});
