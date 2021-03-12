/*
 * File: app/controller/MyController.js
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

Ext.define('M_CHARGE_OUT_DISTR_SAMHYUN.controller.MyController', {
    extend: 'Ext.app.Controller',

    stores: [
        'MyStore',
        'BPStore',
        'taxStore',
        'BLStore'
    ],

    onLaunch: function(application) {

        Ext.define('M_CHARGE_OUT_DISTR.override.form.field.Number', {
            override: 'Ext.form.field.Number',

            useThousandSeparator: true,

            /**
             * @inheritdoc
             */
            toRawNumber: function (value) {
                return String(value).replace(this.decimalSeparator, '.').replace(new RegExp(Ext.util.Format.thousandSeparator, "g"), '');
            },

            /**
             * @inheritdoc
             */
            getErrors: function (value) {
                if (!this.useThousandSeparator)
                    return this.callParent(arguments);
                var me = this,
                    errors = Ext.form.field.Text.prototype.getErrors.apply(me, arguments),
                    format = Ext.String.format,
                    num;

                value = Ext.isDefined(value) ? value : this.processRawValue(this.getRawValue());

                if (value.length < 1) { // if it's blank and textfield didn't flag it then it's valid
                    return errors;
                }

                value = me.toRawNumber(value);

                if (isNaN(value.replace(Ext.util.Format.thousandSeparator, ''))) {
                    errors.push(format(me.nanText, value));
                }

                num = me.parseValue(value);

                if (me.minValue === 0 && num < 0) {
                    errors.push(this.negativeText);
                }
                else if (num < me.minValue) {
                    errors.push(format(me.minText, me.minValue));
                }

                if (num > me.maxValue) {
                    errors.push(format(me.maxText, me.maxValue));
                }

                return errors;
            },

            /**
             * @inheritdoc
             */
             valueToRaw: function (value) {
                if (!this.useThousandSeparator)
                    return this.callParent(arguments);
                var me = this;


                var format = "0,000";
                 /* 소수점 나타내는 부분인듯.
                for (var i = 0; i < me.decimalPrecision; i++) {
                    if (i == 0)
                        format += ".";
                    format += "0";
                }
                */
                value = me.parseValue(Ext.util.Format.number(value, format));
                value = me.fixPrecision(value);
                value = Ext.isNumber(value) ? value : parseFloat(me.toRawNumber(value));
                value = isNaN(value) ? '' : String(Ext.util.Format.number(value, format)).replace('.', me.decimalSeparator);
                return value;
            },

            /**
             * @inheritdoc
             */
            getSubmitValue: function () {
                if (!this.useThousandSeparator)
                    return this.callParent(arguments);
                var me = this,
                    value = me.callParent();

                if (!me.submitLocaleSeparator) {
                    value = me.toRawNumber(value);
                }
                return value;
            },

            /**
             * @inheritdoc
             */
            setMinValue: function (value) {
                if (!this.useThousandSeparator)
                    return this.callParent(arguments);
                var me = this,
                    allowed;

                me.minValue = Ext.Number.from(value, Number.NEGATIVE_INFINITY);
                me.toggleSpinners();

                // Build regexes for masking and stripping based on the configured options
                if (me.disableKeyFilter !== true) {
                    allowed = me.baseChars + '';

                    if (me.allowExponential) {
                        allowed += me.decimalSeparator + 'e+-';
                    }
                    else {
                        allowed += Ext.util.Format.thousandSeparator;
                        if (me.allowDecimals) {
                            allowed += me.decimalSeparator;
                        }
                        if (me.minValue < 0) {
                            allowed += '-';
                        }
                    }

                    allowed = Ext.String.escapeRegex(allowed);
                    me.maskRe = new RegExp('[' + allowed + ']');
                    if (me.autoStripChars) {
                        me.stripCharsRe = new RegExp('[^' + allowed + ']', 'gi');
                    }
                }
            },

            /**
             * @private
             */
            parseValue: function (value) {
                if (!this.useThousandSeparator)
                    return this.callParent(arguments);
                value = parseFloat(this.toRawNumber(value));
                return isNaN(value) ? null : value;
            }


        });



        var store = Ext.getCmp('myGrid').getStore();
        store.load({
            params : {
                V_TYPE : 'GRID',
                V_COMP_ID : parent.Ext.getCmp('GCOMP_ID').getValue(),
                V_USR_ID : parent.Ext.getCmp('GUSER_ID').getValue(),
            }
        });

        var BPstore = this.getBPStoreStore();
        BPstore.load();

        var taxStore = this.getTaxStoreStore();
        taxStore.load();

        var BLStore = this.getBLStoreStore();
        BLStore.load();

    },

    loadRKAMT: function() {
        var store = Ext.getCmp('myGrid').getStore();
        var allRecord = store.getRange();
        var RK_AMT = 0;
        for ( var i = 0 ; i < allRecord.length ; i ++){
            if(allRecord[i].data['VAT_CD'] == 'V01' || allRecord[i].data['VAT_CD'] == 'V04'){ // 일반세금계산서. 종이세금계산서.
                RK_AMT += Number(allRecord[i].data['CHARGE_AMT']) + Number(allRecord[i].data['VAT_AMT']);
            }
            else if(allRecord[i].data['VAT_CD'] == 'V05'){ // 경비.
                RK_AMT += Number(allRecord[i].data['CHARGE_AMT']);
            }
            else if(allRecord[i].data['VAT_CD'] == 'V02' || allRecord[i].data['VAT_CD'] == 'V03'){ // 영세율, 수입세금계산서
                RK_AMT += Number(allRecord[i].data['CHARGE_AMT']);
            }
            else{
                RK_AMT += Number(allRecord[i].data['CHARGE_AMT']) + Number(allRecord[i].data['VAT_AMT']);
            }
        }

        Ext.getCmp('V_RK_AMT').setValue(RK_AMT);
    },

    getServerTime: function() {
        if (window.XMLHttpRequest) {//분기하지 않으면 IE에서만 작동된다.
            xmlHttp = new XMLHttpRequest(); // IE 7.0 이상, 크롬, 파이어폭스 등
            xmlHttp.open('HEAD',window.location.href.toString(),false);
            xmlHttp.setRequestHeader("Content-Type", "text/html");
            xmlHttp.send('');
            return xmlHttp.getResponseHeader("Date");
        }else if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject('Msxml2.XMLHTTP');
            xmlHttp.open('HEAD',window.location.href.toString(),false);
            xmlHttp.setRequestHeader("Content-Type", "text/html");
            xmlHttp.send('');
            return xmlHttp.getResponseHeader("Date");
        }
    }

});
