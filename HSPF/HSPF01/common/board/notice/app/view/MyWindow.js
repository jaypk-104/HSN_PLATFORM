/*
 * File: app/view/MyWindow.js
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

Ext.define('HSPF_BOARD.view.MyWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.mywindow',

    requires: [
        'HSPF_BOARD.view.MyWindowViewModel',
        'Ext.form.Panel',
        'Ext.form.field.File'
    ],

    viewModel: {
        type: 'mywindow'
    },
    modal: true,
    height: 119,
    padding: 3,
    width: 428,
    title: '첨부파일',
    defaultListenerScope: true,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'form',
            bodyPadding: 10,
            header: false,
            title: 'My Form',
            items: [
                {
                    xtype: 'filefield',
                    anchor: '100%',
                    fieldLabel: '파일',
                    listeners: {
                        change: 'onFilefieldChange',
                        afterrender: 'onFilefieldAfterRender'
                    }
                }
            ]
        }
    ],

    onFilefieldChange: function(filefield, value, eOpts) {
        var form = filefield.up('form').getForm();
        var fileStore = Ext.getCmp('fileGrid').getStore();
        if(form.isValid()){
            var params = 'V_TYPE=I';
            form.submit({
                url: 'sql/board_file.jsp?' + params,
                waitMsg: 'Uploading your file...',

                success : function(fp, res) {
                    var jResult = Ext.JSON.decode(res.response.responseText);

                    for(var i = 0 ; i < jResult.resultList.length ; i ++){
                        console.log(jResult.resultList[i].FILE_NM);
                        var rec = Ext.create('HSPF_BOARD.model.MyModel', {
                            V_TYPE : 'I',
                            FILE_NM: jResult.resultList[i].FILE_NM,
                            FILE_NM_PC: jResult.resultList[i].FILE_NM_PC,
                        });
                        fileStore.insert(0, rec);
                    }

                    var win = Ext.WindowManager.getActive();
                    if(win){
                        win.close();
                    }
                },
                failure: function(fp, o) {
                    var jResult = Ext.JSON.decode(o.response.responseText);

                    for(var i = 0 ; i < jResult.resultList.length ; i ++){
                        var rec = Ext.create('HSPF_BOARD.model.MyModel', {
                            V_TYPE : 'I',
                            FILE_NM: jResult.resultList[i].FILE_NM,
                            FILE_NM_PC: jResult.resultList[i].FILE_NM_PC,
                        });
                        fileStore.insert(0, rec);
                    }

                    var win = Ext.WindowManager.getActive();
                    if(win){
                        win.close();
                    }
                }

            });
        }
    },

    onFilefieldAfterRender: function(component, eOpts) {
        component.fileInputEl.set({multiple:'multiple'});
    }

});