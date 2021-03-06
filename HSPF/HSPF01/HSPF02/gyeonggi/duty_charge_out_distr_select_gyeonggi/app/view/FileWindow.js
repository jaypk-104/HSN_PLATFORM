/*
 * File: app/view/FileWindow.js
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

Ext.define('M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.view.FileWindow', {
    extend: 'Ext.window.Window',
    alias: 'widget.filewindow',

    requires: [
        'M_DUTY_CHARGE_OUT_DISTR_GYEONGGI.view.FileWindowViewModel',
        'Ext.form.Panel',
        'Ext.form.field.File'
    ],

    viewModel: {
        type: 'filewindow'
    },
    modal: true,
    height: 250,
    width: 400,
    layout: 'fit',
    title: '첨부파일 추가',
    defaultListenerScope: true,

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
                    fieldLabel: 'Label',
                    hideLabel: true,
                    listeners: {
                        afterrender: 'onFilefieldAfterRender',
                        change: 'onFilefieldChange'
                    }
                }
            ]
        }
    ],

    onFilefieldAfterRender: function(component, eOpts) {
        component.fileInputEl.set({multiple:'multiple'});
    },

    onFilefieldChange: function(filefield, value, eOpts) {
        var form = filefield.up('form').getForm();
        if(form.isValid()){
            var params = 'V_TYPE=I';

            form.submit({
                url: '/HSPF01/bill/charge_out_distr/sql/charge_out_file.jsp?' + params,
                waitMsg: 'Uploading your file...',

                success : function(fp, res) {

                    filefield.fileInputEl.set({ multiple:'multiple' });

                    var jResult = Ext.JSON.decode(res.response.responseText);
                    var fileStore = Ext.getCmp('fileGrid').getStore();


                    for(var i = 0 ; i < jResult.resultList.length ; i ++){
                        var rec = Ext.create('M_DUTY_CHARGE_OUT_DISTR.model.MyModel', {
                            V_TYPE : 'I',
                            FILE_NM: jResult.resultList[i].FILE_NM,
                            FILE_IN_SYSTEM_NM: jResult.resultList[i].FILE_IN_SYSTEM_NM,
                        });
                        fileStore.insert(0, rec);
                    }



                    var win = Ext.WindowManager.getActive();
                    if(win){
                        win.close();
                    }
                },
                failure: function(fp, o) {

                    filefield.fileInputEl.set({ multiple:'multiple' });

                    var jResult = Ext.JSON.decode(o.response.responseText);
                    var fileStore = Ext.getCmp('fileGrid').getStore();


                    for(var i = 0 ; i < jResult.resultList.length ; i ++){
                        var rec = Ext.create('M_DUTY_CHARGE_OUT_DISTR.model.MyModel', {
                            V_TYPE : 'I',
                            FILE_NM: jResult.resultList[i].FILE_NM,
                            FILE_IN_SYSTEM_NM: jResult.resultList[i].FILE_IN_SYSTEM_NM,
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
    }

});