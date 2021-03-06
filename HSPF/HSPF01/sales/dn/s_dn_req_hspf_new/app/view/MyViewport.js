/*
 * File: app/view/MyViewport.js
 *
 * This file was generated by Sencha Architect version 4.2.2.
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

Ext.define('S_DN_REQ_HSPF_NEW.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.myviewport',

    requires: [
        'S_DN_REQ_HSPF_NEW.view.MyViewportViewModel',
        'S_DN_REQ_HSPF_NEW.view.TbButton',
        'S_DN_REQ_HSPF_NEW.view.MySearchForm',
        'S_DN_REQ_HSPF_NEW.view.MySearchForm1',
        'S_DN_REQ_HSPF_NEW.view.MyGrid',
        'S_DN_REQ_HSPF_NEW.view.MyGrid1',
        'Ext.toolbar.Toolbar',
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.grid.Panel'
    ],

    viewModel: {
        type: 'myviewport'
    },
    height: 250,
    style: 'background-color: white',
    width: 400,

    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    items: [
        {
            xtype: 'toolbarBtn',
            margin: '5 0 0 0'
        },
        {

            xtype: 'container',
            flex: 1,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 0.3,
                    items: [
						      {
						          xtype: 'mysearchform',
						      },
						      {
						    	    flex: 1,
		                            xtype: 'fieldset',
		                            style: 'background-color: white;',
		                            title: '[소재발주정보]',
		                            layout: 'fit',
		                            margin: '-9 10 10 10',
		                            items: [
		                                {
		                                	xtype: 'myGrid',
		                                }
		                            ]
						      },
						  ]
                },
                {
                	xtype: 'splitter',
                	collapseTarget: 'prev'
                },
                {
                    xtype: 'container',
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    flex: 0.7,
                    items: [
						      {
						          xtype: 'mysearchform1',
						      },
						      {
						    	    flex: 1,
		                            xtype: 'fieldset',
		                            style: 'background-color: white;',
		                            title: '[ 출고지시정보 ]',
		                            layout: 'fit',
		                            margin: '0 10 10 0',
		                            items: [
                                          {
			                                    xtype: 'mygrid1',
			                                }
                                      ]
	                        }
						  ]
                }
            ]
        
        }
        
        
//        {
//            xtype: 'container',
//            layout: {
//                type: 'hbox',
//                align: 'stretch'
//            },
//            items: [
//                {
//                    xtype: 'container',
//                    flex: 0.4,
//                    items: [
//                        {
//                            xtype: 'mysearchform'
//                        }
//                    ]
//                },
//                {
//                    xtype: 'container',
//                    flex: 0.6,
//                    items: [
//                        {
//                            xtype: 'mysearchform1'
//                        }
//                    ]
//                }
//            ]
//        },
//        {
//            xtype: 'container',
//            flex: 1,
//            layout: {
//                type: 'hbox',
//                align: 'stretch'
//            },
//            items: [
//                {
//                    xtype: 'container',
//                    flex: 0.4,
//                    padding: '0 10 0 10',
//                    layout: 'fit',
//                    items: [
//                        {
//                            xtype: 'fieldset',
//                            flex: 0.4,
//                            style: 'background-color: white;',
//                            layout: 'fit',
//                            title: '[ 출고요청정보 ]',
//                            items: [
//                                {
//                                    xtype: 'myGrid'
//                                }
//                            ]
//                        }
//                    ]
//                },
//                {
//                	xtype: 'splitter',
//                	collapseTarget: 'prev'
//                },
//                {
//                    xtype: 'container',
//                    flex: 0.6,
//                    layout: 'fit',
//                    items: [
//                        {
//                            xtype: 'fieldset',
//                            flex: 0.6,
//                            style: 'background-color: white;',
//                            layout: 'fit',
//                            title: '[ 출고지시정보 ]',
//                            items: [
//                                {
//                                    xtype: 'mygrid1'
//                                }
//                            ]
//                        }
//                    ]
//                }
//            ]
//        }
    ]

});